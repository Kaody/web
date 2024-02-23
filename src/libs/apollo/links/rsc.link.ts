import { HttpLink } from "@apollo/client";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

import { getAccessToken, setAccessToken } from "@/constants/access-token";
import { IJwtPayload } from "@/constants/jwt-payload";

const BASE_URL = process.env.API_BASE_URL;
const API_PATH = process.env.NEXT_PUBLIC_API_PATH;
const GRAPHQL_PATH = process.env.NEXT_PUBLIC_GRAPHQL_PATH;

export const rscHttpLink = new HttpLink({
  uri: `${BASE_URL}${GRAPHQL_PATH}`,
  credentials: "same-origin",
});

export const rscTokenRefreshLink = new TokenRefreshLink({
  accessTokenField: "access_token",
  isTokenValidOrUndefined: async () => {
    const token = getAccessToken();
    if (!token) return false;
    try {
      const { exp } = jwtDecode<IJwtPayload>(token);
      if (Math.round(Date.now() / 1000) + 31 >= exp) {
        return false;
      } else {
        return true;
      }
    } catch (err) {
      return false;
    }
  },
  fetchAccessToken: () => {
    const refreshToken = cookies().get(
      process.env.REFRESH_TOKEN_COOKIE_NAME as string
    );
    return fetch(`${BASE_URL}${API_PATH}/auth/refresh-token`, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "refresh-token": `${refreshToken?.value as string}`,
      },
      cache: "no-store",
    });
  },
  handleFetch: (access_token) => {
    setAccessToken(access_token);
  },
  handleError: (err) => {
    // full control over handling token fetch Error
    console.warn("Your refresh token is invalid. Try to relogin");
    // console.error(err);

    // When the browser is offline and an error occurs we don’t want the user to be logged out of course.
    // We also don’t want to delete a JWT token from the `localStorage` in this case of course.
    if (err instanceof TypeError && err.message === "Network request failed") {
      console.log("Offline -> do nothing 🍵");
    } else {
      console.log("Online -> log out 👋");

      // your custom action here
      // user.logout();
    }
  },
});
