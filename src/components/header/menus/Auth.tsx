import { Flex, Group, Text, UnstyledButton } from "@mantine/core";

export function Auth() {
  return (
    <UnstyledButton visibleFrom="sm">
      <Group gap={2}>
        <Flex direction="column" justify="center">
          <Text size="xs" c="var(--mantine-color-gray-2)">
            Bonjour, Identifiez-vous
          </Text>
          <Text c="var(--mantine-color-white)" fw="bolder" size="xs">
            Compte et listes
          </Text>
        </Flex>
      </Group>
    </UnstyledButton>
  );
}
