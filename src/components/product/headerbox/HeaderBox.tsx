import classes from "../Product.module.css";

import { Divider, Flex, Rating, Text, Title } from "@mantine/core";
import Link from "next/link";

import { GetSingleProductQuery } from "@/generated/graphql";

interface Props {
  data: GetSingleProductQuery;
}

export function HeaderBox({ data }: Props) {
  return (
    <div className={classes.headerbox}>
      <Title order={2} fw="lighter" className={classes.title}>
        {data.getProduct.name} Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Tempora, dolorem? Sit maxime in sapiente,
        exercitationem voluptatibus autem? Accusantium amet.
      </Title>
      <Text c="var(--mantine-color-secondary-2)" size="sm">
        <Link
          className={classes.store}
          href={`/store/${data.getProduct.store._id}`}
        >
          Visiter la boutique {data.getProduct.store.name}
        </Link>
      </Text>
      <Flex gap="xs" className={classes.rating}>
        <Text size="sm" c="var(--mantine-color-secondary-2)">
          4,0
        </Text>
        <Rating defaultValue={4} fractions={2} />
        <Link href={`#reviews`}>
          <Text ml="sm" size="sm" c="var(--mantine-color-secondary-2)">
            18 évaluations
          </Text>
        </Link>
      </Flex>
      <Divider my="xs" />
    </div>
  );
}
