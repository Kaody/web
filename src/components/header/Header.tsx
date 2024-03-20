"use client";

import classes from "./Header.module.css";

import { Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { Drawer } from "@/components/header/drawer";
import { Auth, Cart, Order } from "@/components/header/menus";
import { NavBar } from "@/components/header/navbar";
import { Location } from "@/components/location";
import { Logo } from "@/components/logo";
import { SearchBar } from "@/components/search";

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <header>
      <div className={classes.container}>
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
          <Order />
          <Cart />
        </div>
      </div>

      <NavBar drawerOpened={drawerOpened} toggleDrawer={toggleDrawer} />

      <Drawer drawerOpened={drawerOpened} closeDrawer={closeDrawer} />
    </header>
  );
}
