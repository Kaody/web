import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";

import { MeDocument, MeQuery, MeQueryVariables } from "@/generated/graphql";
import { AuthSm } from "./AuthSm";
import { AuthXs } from "./AuthXs";

export function Auth() {
  const { data, loading } = useQuery<MeQuery, MeQueryVariables>(MeDocument, {
    fetchPolicy: "no-cache",
  });

  return (
    <>
      <AuthSm data={data} loading={loading} />
      <AuthXs data={data} loading={loading} />
    </>
  );
}
