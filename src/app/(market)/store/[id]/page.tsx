import { query } from "@/actions";
import { Header } from "@/components/store";
import {
  GetOneStoreDocument,
  GetOneStoreQuery,
  GetOneStoreQueryVariables,
} from "@/generated/graphql";
import { Title } from "@mantine/core";

/* export const dynamic = "force-dynamic"; */

export default async function Page({ params }: { params: { id: string } }) {
  const { data, errors } = await query<
    GetOneStoreQuery,
    GetOneStoreQueryVariables
  >({
    query: GetOneStoreDocument,
    variables: { input: { store_id: params.id } },
    fetchPolicy: "no-cache",
  });
  if (!data || errors) {
    return (
      <>
        {errors?.graphQLErrors.map(({ extensions }, i) => (
          <span key={i}>
            {(extensions.originalError as { message: string }).message}
          </span>
        ))}
        {errors?.networkError?.message}
      </>
    );
  }
  return (
    <main>
      <Header data={data} />
      <div
        style={{
          minHeight: 350,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* cette page est en cours de dev */}
        <Title order={1}>Pas encore disponible</Title>
      </div>
    </main>
  );
}
