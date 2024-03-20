import classes from "./List.module.css";

import { NumberFormatter, Rating, Text } from "@mantine/core";
import Link from "next/link";
import { Suspense } from "react";

import { RetreiveImageBox } from "@/components/product/imagesbox/RetreiveImageBox";
import { Shelf } from "@/components/shelf";
import { GetProductsQuery } from "@/generated/graphql";

interface Props {
  title: string;
  data: GetProductsQuery;
}

export async function List({ data, title }: Props) {
  return (
    <section className={classes.section}>
      <Shelf title={title}>
        {data.getProducts.map((product) => (
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
