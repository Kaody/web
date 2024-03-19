import classes from "../Product.module.css";

import { Skeleton } from "@mantine/core";

export function ImageBoxSkeleton() {
  return <Skeleton className={classes.imagebox} width="100%" />;
}
