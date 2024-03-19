import { ApolloClient, InMemoryCache, from } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

import { errorLink } from "@/libs/apollo/links";
import { rscHttpLink } from "@/libs/apollo/links/rsc.link";

const link = from([errorLink, rscHttpLink]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const { getClient } = registerApolloClient(() => client);

export default getClient;
