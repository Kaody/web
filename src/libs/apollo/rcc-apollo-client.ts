import { ApolloLink } from "@apollo/client";
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

import {
  authLink,
  errorLink,
  rccHttpLink,
  rccTokenRefreshLink,
} from "@/libs/apollo/links";

// have a function to create a client for you
export function makeClient() {
  return new NextSSRApolloClient({
    // use the `NextSSRInMemoryCache`, not the normal `InMemoryCache`
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            // in a SSR environment, if you use multipart features like
            // @defer, you need to decide how to handle these.
            // This strips all interfaces with a `@defer` directive from your queries.
            errorLink,
            rccTokenRefreshLink,
            authLink,
            new SSRMultipartLink({ stripDefer: true }),
            rccHttpLink,
          ])
        : ApolloLink.from([
            errorLink,
            rccTokenRefreshLink,
            authLink,
            rccHttpLink,
          ]),
  });
}
