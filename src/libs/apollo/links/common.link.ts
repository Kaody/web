import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

import { getAccessToken } from "@/constants/access-token";

export const authLink = setContext((_, { headers }) => {
  const accessToken = getAccessToken();
  if (accessToken) {
    return {
      headers: { ...headers, Authorization: `Bearer ${accessToken}` },
    };
  }
  return { headers: { ...headers } };
});

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});
