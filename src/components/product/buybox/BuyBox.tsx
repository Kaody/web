import classes from "../Product.module.css";

import { IconHeart } from "@tabler/icons-react";

import {
  Box,
  Button,
  Divider,
  Flex,
  NumberFormatter,
  Paper,
  Stack,
  Text,
} from "@mantine/core";

import { GetSingleProductQuery } from "@/generated/graphql";
import Quantity from "./Quantity";

interface Props {
  data: GetSingleProductQuery;
}

export function BuyBox({ data }: Props) {
  return (
    <Paper className={classes.buybox}>
      <NumberFormatter
        style={{ fontSize: 24 }}
        suffix=" Ar"
        thousandSeparator="."
        decimalSeparator=","
        value={data.getProduct.price}
      />
      <Text size="sm">Livraison gratuite</Text>
      <Text fw="bolder" c="green">
        {data.getProduct.status}
      </Text>
      <Stack gap="xs">
        <Quantity quantity={data.getProduct.quantity} />
        <Button size="sm" fullWidth>
          Ajouter au panier
        </Button>
      </Stack>
      <Box
        py="sm"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <Flex gap="sm">
          <Text size="xs" c="gray">
            Vendu par
          </Text>
          <Text size="xs">Tsenamilay</Text>
        </Flex>
        <Flex gap="sm">
          <Text size="xs" c="gray">
            Paiement via
          </Text>
          <Text size="xs">Airtel Money</Text>
        </Flex>
      </Box>
      <Divider mb="xs" />
      <Button
        leftSection={<IconHeart size={18} />}
        variant="light"
        size="sm"
        fullWidth
      >
        Ajouter à votre liste
      </Button>
    </Paper>
  );
}
