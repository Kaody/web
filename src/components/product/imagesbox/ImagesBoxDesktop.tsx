import "@mantine/carousel/styles.css";
import classes from "../Product.module.css";

import { Carousel } from "@mantine/carousel";
import { Box } from "@mantine/core";

import ImageSlides from "./ImageSlides";

interface Props {
  images: { id: number; src: string }[];
}

export function ImagesBoxDesktop({ images }: Props) {
  return (
    <Box className={classes.imagebox} visibleFrom="md">
      {/* preview product image here */}
      <div id="preview-portal" className={classes.preview} />

      <Carousel
        visibleFrom="md"
        align="start"
        slideSize="25%"
        classNames={{
          control: classes.control,
        }}
      >
        <ImageSlides images={images} />
      </Carousel>
    </Box>
  );
}
