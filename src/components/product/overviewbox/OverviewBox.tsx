import classes from "../Product.module.css";

import { Divider, Flex, NumberFormatter, Stack, Text } from "@mantine/core";

import { GetSingleProductQuery } from "@/generated/graphql";

interface Props {
  data: GetSingleProductQuery;
}

export function OverviewBox({ data }: Props) {
  return (
    <div className={classes.overviewbox}>
      <Stack gap="xs">
        {data.getProduct.attributes.map((attribute, index) => (
          <Flex key={index} gap="xs" maw={600}>
            <Text
              size="sm"
              fw="bolder"
              miw={150}
              maw={150}
              style={{
                wordBreak: "break-word",
              }}
            >
              {attribute.name}
            </Text>
            <Text
              size="sm"
              style={{
                wordBreak: "break-word",
              }}
            >
              {attribute.value}
            </Text>
          </Flex>
        ))}
      </Stack>
      <Divider my="xs" />
      <Text fw="bolder">À propos de cet article</Text>
      <Text size="sm">{data.getProduct.description}</Text>
    </div>
  );
}
