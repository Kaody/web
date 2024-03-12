import classes from "./Reviews.module.css";

import { Divider } from "@mantine/core";

import { Rating } from "./Rating";
import { Reviews } from "./Reviews";

export function ReviewsBox() {
  return (
    <section className={classes.section}>
      <Divider />
      <div className={classes.reviewsbox}>
        <Rating />
        <Reviews />
      </div>
    </section>
  );
}
