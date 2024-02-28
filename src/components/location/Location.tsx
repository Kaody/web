import { Flex, Group, Text, UnstyledButton } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";

export function Location() {
  return (
    <UnstyledButton>
      <Group gap={2}>
        <IconMapPin color="var(--mantine-color-white)" size={18} />
        <Flex direction="column" justify="center">
          <Text size="xs" c="var(--mantine-color-gray-2)">
            Votre adresse de livraison:
          </Text>
          <Text c="var(--mantine-color-white)" fw="bolder" size="sm">
            Madagascar
          </Text>
        </Flex>
      </Group>
    </UnstyledButton>
  );
}
