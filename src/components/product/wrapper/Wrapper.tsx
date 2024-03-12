import classes from "../Product.module.css";

import { Paper } from "@mantine/core";

interface WrapperProps {
  children: React.ReactNode;
}

export function Wrapper(props: WrapperProps) {
  return (
    <Paper radius={0} className={classes.wrapper}>
      {props.children}
    </Paper>
  );
}
