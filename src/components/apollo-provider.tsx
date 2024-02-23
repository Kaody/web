"use client";

import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support/ssr";

import { makeClient } from "@/libs/apollo/rcc-apollo-client";

export const client = makeClient();

export function ApolloProvider({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={() => client}>
      {children}
    </ApolloNextAppProvider>
  );
}
