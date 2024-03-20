"use client";

import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";

interface Props {
  images: {
    key: string;
    url: string;
  }[];
}

function ImageSlidesMobile({ images }: Props) {
  return (
    <>
      {images.map((image) => (
        <Carousel.Slide key={image.key}>
          <Image
            src={image.url}
            alt={`${image.key}`}
            width="100%"
            height="100%"
            style={{ objectFit: "scale-down" }}
          />
        </Carousel.Slide>
      ))}
    </>
  );
}

export default ImageSlidesMobile;
