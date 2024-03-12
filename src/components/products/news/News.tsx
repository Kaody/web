import classes from "./News.module.css";

import { Image, NumberFormatter, Text } from "@mantine/core";
import Link from "next/link";
import { notFound } from "next/navigation";

import { query } from "@/actions";
import { Shelf } from "@/components/shelf";
import {
  GetProductsDocument,
  GetProductsQuery,
  GetProductsQueryVariables,
} from "@/generated/graphql";

export async function News() {
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
      <Shelf title="Nouvel Arrivage">
        {data.getProducts.map((product) => (
          <Link key={product._id} href={`/product/${product._id}`}>
            <article className={classes.article}>
              <div className={classes.image}>
                <Image
                  src="https://placehold.co/135x135"
                  alt={product.name}
                  style={{
                    width: 135,
                    height: 135,
                    objectFit: "scale-down",
                  }}
                />
              </div>
              <div className={classes.content}>
                <Text lineClamp={2} size="sm">
                  {product.name} Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Quisquam laudantium similique molestiae
                  quidem quos quaerat. Ex quas, officia aliquid eius quisquam
                  suscipit. Eligendi atque velit corporis porro modi. Minima,
                  consectetur.
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
