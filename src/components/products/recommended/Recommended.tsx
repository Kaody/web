import classes from "./Recommended.module.css";

import { Image, NumberFormatter, Rating, Text } from "@mantine/core";
import Link from "next/link";
import { notFound } from "next/navigation";

import { query } from "@/actions";
import { Shelf } from "@/components/shelf";
import {
  GetProductsDocument,
  GetProductsQuery,
  GetProductsQueryVariables,
} from "@/generated/graphql";

export async function Recommended() {
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
      <Shelf title="Inspiré de vos visites récentes">
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
                <Text lineClamp={2} size="sm">
                  {product.name} Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Quisquam laudantium similique molestiae
                  quidem quos quaerat. Ex quas, officia aliquid eius quisquam
                  suscipit. Eligendi atque velit corporis porro modi. Minima,
                  consectetur.
                </Text>
                <Rating defaultValue={4.5} fractions={2} />
                <Text size="xs" truncate>
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
