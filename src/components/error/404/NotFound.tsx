import classes from "./NotFound.module.css";

import Link from "next/link";
import { Flex, Text } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";

export function NotFound() {
  return (
    <div className={classes.container}>
      <Text size="xl">Page non trouvée</Text>
      <Text size="sm">La page demandée n&apos;a pas été trouvée.</Text>
      <Flex align="center" gap={2}>
        <IconArrowLeft color="var(--mantine-color-primary-0)" size={12} />
        <Text
          size="xs"
          c="var(--mantine-color-primary-0)"
          style={{
            textDecoration: "underline",
          }}
        >
          <Link href="/">Retour à l&apos;accueil</Link>
        </Text>
      </Flex>
    </div>
  );
}
