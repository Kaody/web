import { Title } from "@mantine/core";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { query } from "@/actions";
import { NetworkError } from "@/components/error";
import { Header } from "@/components/store";
import {
  GetOneStoreDocument,
  GetOneStoreQuery,
  GetOneStoreQueryVariables,
} from "@/generated/graphql";

export const dynamic = "force-dynamic";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data, error } = await query<
    GetOneStoreQuery,
    GetOneStoreQueryVariables
  >({
    query: GetOneStoreDocument,
    variables: { input: { store_id: params.id } },
    fetchPolicy: "no-cache",
  });

  return {
    title: {
      absolute:
        error && error.networkError
          ? "Erreur de chargement"
          : data
          ? data.getOneStore.name
          : "Boutique non trouvée",
    },
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const { data, error } = await query<
    GetOneStoreQuery,
    GetOneStoreQueryVariables
  >({
    query: GetOneStoreDocument,
    variables: { input: { store_id: params.id } },
    fetchPolicy: "no-cache",
  });

  if (error && error.networkError)
    return <NetworkError message={error.message} />;

  if (!data) notFound();

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
