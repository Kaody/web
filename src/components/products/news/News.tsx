import classes from "./News.module.css";

import { NumberFormatter, Text } from "@mantine/core";
import Link from "next/link";
import { Suspense } from "react";

import { query } from "@/actions";
import { RetreiveImageBox } from "@/components/product/imagesbox";
import { Shelf } from "@/components/shelf";
import {
  GetProductsDocument,
  GetProductsQuery,
  GetProductsQueryVariables,
} from "@/generated/graphql";

export async function News() {
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

  return (
    <section className={classes.section}>
      <Shelf title="Nouvel Arrivage">
        {data &&
          data.getProducts.map((product) => (
            <Link key={product._id} href={`/product/${product._id}`}>
              <article className={classes.article}>
                <div className={classes.image}>
                  <Suspense key={product.name} fallback={<p>chargement...</p>}>
                    <RetreiveImageBox imagekeys={product.images} />
                  </Suspense>
                </div>
                <div className={classes.content}>
                  <Text lineClamp={2} size="sm">
                    {product.name}
                  </Text>
                  <Text truncate size="xs">
                    {product.category.name}
                  </Text>
                  <NumberFormatter
                    style={{ fontWeight: "bolder" }}
                    suffix=" Ar"
                    thousandSeparator="."
                    decimalSeparator=","
                    value={product.price}
                  />
                </div>
              </article>
            </Link>
          ))}
      </Shelf>
    </section>
  );
}
