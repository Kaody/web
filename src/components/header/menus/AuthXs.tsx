import { Flex, Text, UnstyledButton } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";

export function AuthXs() {
  return (
    <UnstyledButton hiddenFrom="sm">
      <Flex justify="center" align="center">
        <Text size="xs" c="var(--mantine-color-gray-2)">
          Se connecter
        </Text>
        <IconUser size={28} color="var(--mantine-color-white)" />
      </Flex>
    </UnstyledButton>
  );
}
