import { HttpLink } from "@apollo/client";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import { jwtDecode } from "jwt-decode";

import { getAccessToken, setAccessToken } from "@/constants/access-token";
import { isAuthenticatedVar } from "@/constants/authenticated";
import { IJwtPayload } from "@/constants/jwt-payload";

const API_PATH = process.env.NEXT_PUBLIC_API_PATH;
const GRAPHQL_PATH = process.env.NEXT_PUBLIC_GRAPHQL_PATH;

export const rccHttpLink = new HttpLink({
  uri: `${GRAPHQL_PATH}`,
  fetchOptions: { cache: "no-store" },
  credentials: "same-origin",
});

export const rccTokenRefreshLink = new TokenRefreshLink({
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
    return fetch(`${API_PATH}/auth/refresh-token`, {
      method: "POST",
      credentials: "same-origin",
      cache: "no-store",
    });
  },
  handleFetch: (access_token) => {
    isAuthenticatedVar(true);
    setAccessToken(access_token);
  },
  handleError: (err) => {
    // full control over handling token fetch Error
    console.warn("Your refresh token is invalid. Try to relogin");
    // console.error(err);

    // When the browser is offline and an error occurs we don’t want the user to be logged out of course.
    // We also don’t want to delete a JWT token from the `localStorage` in this case of course.
    if (
      !navigator.onLine ||
      (err instanceof TypeError && err.message === "Network request failed")
    ) {
      console.log("Offline -> do nothing 🍵");
    } else {
      isAuthenticatedVar(false);
      console.log("Online -> log out 👋");
      // your custom action here
      // user.logout();
    }
  },
});
