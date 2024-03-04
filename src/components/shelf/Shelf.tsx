import classes from "./Shelf.module.css";

import { Paper, ScrollArea, Text } from "@mantine/core";

interface ShelfProps {
  title: string;
  children: React.ReactNode;
}

export function Shelf({ title, children }: ShelfProps) {
  return (
    <Paper radius={0} className={classes.wrapper}>
      <Text visibleFrom="sm" size="lg" fw="bolder" pb="sm">
        {title}
      </Text>
      <Text hiddenFrom="sm" size="md" pb="sm">
        {title}
      </Text>
      <ScrollArea className={classes.scroll} type="never">
        <div className={classes.itemWrapper}>{children}</div>
      </ScrollArea>
    </Paper>
  );
}
