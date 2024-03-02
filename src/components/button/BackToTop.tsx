"use client";

import classes from "./BackToTop.module.css";

import { Text } from "@mantine/core";

export function BackToTop() {
  return (
    <div
      className={classes.backToTop}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <Text size="sm">Retour en haut</Text>
    </div>
  );
}
