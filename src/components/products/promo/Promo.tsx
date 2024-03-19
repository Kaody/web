import classes from "./Promo.module.css";

import { Box, Flex, NumberFormatter, Text } from "@mantine/core";
import Link from "next/link";
import { Suspense } from "react";

import { query } from "@/actions";
import { RetreiveImageBox } from "@/components/product";
import { Shelf } from "@/components/shelf";
import {
  GetProductsDocument,
  GetProductsQuery,
  GetProductsQueryVariables,
} from "@/generated/graphql";

export async function Promo() {
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
      <Shelf title="Offres et Promotions">
        {data.getProducts.map((product) => (
          <Link key={product._id} href={`/product/${product._id}`}>
            <article className={classes.article}>
              <div className={classes.image}>
                <Suspense key={product.name} fallback={<p>chargement...</p>}>
                  <RetreiveImageBox imagekeys={product.images} />
                </Suspense>
              </div>
              <div className={classes.content}>
                <Flex gap="xs" align="center">
                  <Box
                    style={{
                      backgroundColor: "var(--mantine-primary-color-0)",
                      padding: "0.1rem 0.5rem",
                      borderRadius: "0.25rem",
                    }}
                  >
                    <Text size="sm" c="var(--mantine-color-white)">
                      -5%
                    </Text>
                  </Box>
                  <Text
                    size="sm"
                    fw="bolder"
                    c="var(--mantine-primary-color-0)"
                  >
                    Offre à durée limitée
                  </Text>
                </Flex>
                <NumberFormatter
                  style={{ fontWeight: "bolder" }}
                  suffix=" Ar"
                  thousandSeparator="."
                  decimalSeparator=","
                  value={product.price}
                />
                <Text lineClamp={2} size="sm">
                  {product.name}
                </Text>
              </div>
            </article>
          </Link>
        ))}
      </Shelf>
    </section>
  );
}
