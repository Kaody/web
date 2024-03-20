import { HttpLink } from "@apollo/client";
import { TokenRefreshLink } from "apollo-link-token-refresh";

import { setAccessToken } from "@/constants/access-token";
import { isAuthenticatedVar } from "@/constants/authenticated";
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
    try {
      const res = await fetch(
        `${BASE_URL}${API_PATH}/auth/verify-access-token`,
        {
          method: "POST",
          credentials: "same-origin",
          cache: "no-store",
        }
      );
      const decodedToken: IJwtPayload = await res.json();
      if (decodedToken.sub) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  },
  fetchAccessToken: () => {
    return fetch(`${BASE_URL}${API_PATH}/auth/refresh-token`, {
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
    if (err instanceof TypeError && err.message === "Network request failed") {
      console.log("Offline -> do nothing 🍵");
    } else {
      console.log("Online -> log out 👋");

      // your custom action here
      // user.logout();
    }
  },
});
