import classes from "./List.module.css";

import { Image, NumberFormatter, Rating, Text } from "@mantine/core";
import Link from "next/link";

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
                <Image
                  src="https://placehold.co/200x200"
                  alt={product.name}
                  style={{
                    objectFit: "scale-down",
                    width: 200,
                    height: 200,
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
