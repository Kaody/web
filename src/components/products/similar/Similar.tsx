import { query } from "@/actions";
import { List } from "@/components/products/list";
import {
  GetProductsDocument,
  GetProductsQuery,
  GetProductsQueryVariables,
} from "@/generated/graphql";

interface Props {
  category: string;
}

export async function Similar({ category }: Props) {
  const { data, error } = await query<
    GetProductsQuery,
    GetProductsQueryVariables
  >({
    query: GetProductsDocument,
    variables: { input: { offset: 0 } },
    fetchPolicy: "no-cache",
  });

  if (!data)
    return (
      <>
        {error && (
          <pre>ApolloError: {JSON.stringify(error.networkError?.message)}</pre>
        )}
      </>
    );

  return <List data={data} title="Produits liés à cet article" />;
}
