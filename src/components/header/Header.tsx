"use client";

import classes from "./Header.module.css";

import { Box, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { Drawer } from "@/components/header/drawer";
import { Auth, AuthXs, Cart, Order } from "@/components/header/menus";
import { NavBar } from "@/components/header/navbar";
import { Location } from "@/components/location";
import { Logo } from "@/components/logo";
import { SearchBar } from "@/components/search";

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Box>
      <header className={classes.header}>
        <div className={classes.left}>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            color="var(--mantine-color-white)"
            hiddenFrom="md"
          />

          <Logo />

          <Group visibleFrom="md">
            <Location />
          </Group>
        </div>
        <div className={classes.center}>
          <SearchBar />
        </div>
        <div className={classes.right}>
          <Auth />
          <AuthXs />
          <Order />
          <Cart />
        </div>
      </header>

      <NavBar drawerOpened={drawerOpened} toggleDrawer={toggleDrawer} />

      <Drawer drawerOpened={drawerOpened} closeDrawer={closeDrawer} />
    </Box>
  );
}
