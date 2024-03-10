import "@mantine/carousel/styles.css";
import classes from "../Product.module.css";

import { Carousel } from "@mantine/carousel";
import { Box } from "@mantine/core";

import ImageSlidesMobile from "./ImageSlidesMobile";

interface Props {
  images: { id: number; src: string }[];
}

export function ImagesBoxMobile({ images }: Props) {
  return (
    <Box className={classes.imagebox} hiddenFrom="md">
      <Carousel withIndicators height={400} withControls={false}>
        <ImageSlidesMobile images={images} />
      </Carousel>
    </Box>
  );
}
