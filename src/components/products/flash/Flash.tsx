import classes from "./Flash.module.css";

import { Box, Flex, Image, NumberFormatter, Rating, Text } from "@mantine/core";
import Link from "next/link";
import { notFound } from "next/navigation";

import { query } from "@/actions";
import { Shelf } from "@/components/shelf";
import {
  GetProductsDocument,
  GetProductsQuery,
  GetProductsQueryVariables,
} from "@/generated/graphql";

export async function Flash() {
  const { data, errors } = await query<
    GetProductsQuery,
    GetProductsQueryVariables
  >({
    query: GetProductsDocument,
    variables: { input: { offset: 0 } },
    fetchPolicy: "no-cache",
  });

  if (!data || errors) return notFound();

  return (
    <section className={classes.section}>
      <Shelf title="Ventes Flash du Jour">
        {data.getProducts.map((product) => (
          <Link key={product._id} href={`/product/${product._id}`}>
            <article className={classes.article}>
              <div className={classes.image}>
                <Image
                  src="https://placehold.co/200x200"
                  alt={product.name}
                  width={200}
                  height={200}
                  style={{
                    objectFit: "cover",
                  }}
                />
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
                      -8%
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
                <Text lineClamp={2} size="sm">
                  {product.name} Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Quisquam laudantium similique molestiae
                  quidem quos quaerat. Ex quas, officia aliquid eius quisquam
                  suscipit. Eligendi atque velit corporis porro modi. Minima,
                  consectetur.
                </Text>
                <Rating defaultValue={4.5} fractions={2} />
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
