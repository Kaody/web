"use client";

import classes from "./Drawer.module.css";

import {
  Divider,
  Drawer as MantineDrawer,
  ScrollArea,
  Stack,
  Title,
  rem,
} from "@mantine/core";
import Link from "next/link";

const categories = [
  "High-Tech",
  "Beauté et Parfum",
  "Cuisine et Maison",
  "Epicerie",
];

export function Drawer({
  drawerOpened,
  closeDrawer,
}: {
  drawerOpened: boolean;
  closeDrawer: () => void;
}) {
  return (
    <MantineDrawer
      opened={drawerOpened}
      onClose={closeDrawer}
      padding="md"
      title="Navigation"
      size="sm"
    >
      <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md" scrollbarSize={5}>
        <Divider my="sm" />
        <Stack mx="md">
          <Title order={4}>Tendances</Title>
          <Link href="#" className={classes.link}>
            Nouveautés
          </Link>
          <Link href="#" className={classes.link}>
            Meilleures Ventes
          </Link>
          <Link href="#" className={classes.link}>
            Ventes Flash
          </Link>
        </Stack>
        <Divider my="sm" />
        <Stack mx="md">
          <Title order={4}>Choisir une catégorie</Title>
          {categories.map((category) => (
            <Link href="#" className={classes.link} key={category}>
              {category}
            </Link>
          ))}
        </Stack>
        <Divider my="sm" />
        <Stack mx="md">
          <Title order={4}>Vos commandes</Title>
          <Link href="#" className={classes.link}>
            Suivre vos commandes
          </Link>
          <Link href="#" className={classes.link}>
            Retours
          </Link>
        </Stack>
        <Divider my="sm" />
        <Stack mx="md">
          <Title order={4}>Aide et paramètres</Title>
          <Link href="#" className={classes.link}>
            Votre compte
          </Link>
          <Link href="#" className={classes.link}>
            Service Client
          </Link>
          <Link href="#" className={classes.link}>
            Paramètres de paiement
          </Link>
        </Stack>
      </ScrollArea>
    </MantineDrawer>
  );
}
