import { jwtDecode } from "jwt-decode";
import { NextRequest, NextResponse } from "next/server";

import { IJwtPayload } from "./constants/jwt-payload";
import {
  AdminRouteRegex,
  AuthRoutes,
  GuestRoutes,
  SuperAdminRouteRegex,
} from "./constants/route";

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;
  const cookie = request.cookies.get(
    process.env.REFRESH_TOKEN_COOKIE_NAME as string
  );

  const home_url = new URL("/", request.url);
  const login_url = new URL(`/auth/login?redirect=${pathname}`, request.url);

  if (cookie) {
    try {
      const { exp, roles } = jwtDecode<IJwtPayload>(cookie.value);
      /**
       * if the token is expired
       * NB: remove the 31s expiration time in production
       */
      if (Math.round(Date.now() / 1000) + 31 >= exp) {
        /**
         * if the current route is an authenticated route
         * and the user is not authenticated
         * redirect to the login page
         */
        if (AuthRoutes.includes(pathname)) {
          return NextResponse.redirect(login_url);
        }
      }
      /**
       * if the current route is a guest route
       * and the user is authenticated
       * redirect to the home page
       */
      if (GuestRoutes.includes(pathname)) {
        return NextResponse.redirect(home_url);
      }

      /**
       * if the user is not an administrator
       * and the current route is an admin route
       * rewrite to the not found page (404)
       */
      if (!roles.includes("ADMINISTRATOR") && AdminRouteRegex.test(pathname)) {
        url.pathname = "/not-found";
        return NextResponse.rewrite(url);
      }

      /**
       * if the user is not a super administrator
       * and the current route is a super admin route
       * rewrite to the not found page (404)
       */
      if (
        !roles.includes("SUPER_ADMINISTRATOR") &&
        SuperAdminRouteRegex.test(pathname)
      ) {
        url.pathname = "/not-found";
        return NextResponse.rewrite(url);
      }
    } catch (err) {
      /**
       * if the token is invalid or expired
       * and the current route is an authenticated route
       * redirect to the login page
       */
      if (AuthRoutes.includes(pathname)) {
        return NextResponse.redirect(login_url);
      }
    }
  }

  /**
   * if the current route is an authenticated route
   * and the user is not authenticated
   * redirect to the login page
   */
  if (AuthRoutes.includes(pathname) && !cookie) {
    return NextResponse.redirect(login_url);
  }

  /**
   * if the current route is an admin route or a super admin route
   * and the user is not authenticated
   * rewrite to the not found page (404)
   */
  if (
    (AdminRouteRegex.test(pathname) || SuperAdminRouteRegex.test(pathname)) &&
    !cookie
  ) {
    url.pathname = "/not-found";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|graphql|_next/static|_next/image|.*\\.png$).*)"],
};
