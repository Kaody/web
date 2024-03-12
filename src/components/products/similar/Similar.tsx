import { query } from "@/actions";
import { List } from "@/components/products/list";
import {
  GetProductsDocument,
  GetProductsQuery,
  GetProductsQueryVariables,
} from "@/generated/graphql";

export async function Similar() {
  const { data } = await query<GetProductsQuery, GetProductsQueryVariables>({
    query: GetProductsDocument,
    variables: { input: { offset: 0 } },
    fetchPolicy: "no-cache",
  });

  return (
    <>
      {data && data.getProducts ? (
        <List data={data} title="Produits liés à cet article" />
      ) : null}
    </>
  );
}
