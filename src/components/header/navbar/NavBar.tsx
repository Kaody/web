import classes from "../Header.module.css";

import {
  Box,
  Burger,
  Center,
  Flex,
  Group,
  HoverCard,
  ScrollArea,
  Text,
  rem,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";

export function NavBar({
  drawerOpened,
  toggleDrawer,
}: {
  drawerOpened: boolean;
  toggleDrawer: () => void;
}) {
  return (
    <ScrollArea type="never">
      <Group className={classes.navbar} wrap="nowrap" gap={0}>
        <Flex onClick={toggleDrawer} className={classes.menu} visibleFrom="md">
          <Burger
            opened={drawerOpened}
            color="var(--mantine-color-white)"
            size="sm"
            mb={2}
          />
          <Text c="var(--mantine-color-white)" size="sm" fw="bolder">
            Toutes
          </Text>
        </Flex>
        <Link href="#" className={classes.link}>
          Meilleures Ventes
        </Link>
        <Link href="#" className={classes.link}>
          Ventes Flash
        </Link>
        <Link href="#" className={classes.link}>
          Vendre sur Tsenamilay
        </Link>

        <HoverCard
          width={600}
          position="bottom"
          radius="md"
          shadow="md"
          withinPortal
        >
          <HoverCard.Target>
            <Link href="#" className={classes.link}>
              <Center inline>
                <Box component="span" mr={5}>
                  Plus
                </Box>
                <IconChevronDown style={{ width: rem(16), height: rem(16) }} />
              </Center>
            </Link>
          </HoverCard.Target>
          {/* <HoverCard.Dropdown style={{ overflow: "hidden" }}></HoverCard.Dropdown> */}
        </HoverCard>
      </Group>
    </ScrollArea>
  );
}
