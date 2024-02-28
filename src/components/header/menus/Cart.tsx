import { Flex, Text, UnstyledButton } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

export function Cart() {
  return (
    <Link
      style={{
        display: "flex",
        alignItems: "center",
      }}
      href="/cart"
    >
      <UnstyledButton>
        <Flex align="center">
          <IconShoppingCart size={28} color="var(--mantine-color-white)" />
          <Text
            visibleFrom="sm"
            c="var(--mantine-color-white)"
            fw="bolder"
            size="xs"
          >
            Panier
          </Text>
        </Flex>
      </UnstyledButton>
    </Link>
  );
}
