import { Flex, Group, Text, UnstyledButton } from "@mantine/core";

export function Order() {
  return (
    <UnstyledButton visibleFrom="sm">
      <Group gap={2}>
        <Flex direction="column" justify="center">
          <Text size="xs" c="var(--mantine-color-gray-2)">
            Retours
          </Text>
          <Text c="var(--mantine-color-white)" fw="bolder" size="xs">
            et commandes
          </Text>
        </Flex>
      </Group>
    </UnstyledButton>
  );
}
