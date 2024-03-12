"use client";

import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";

interface Props {
  images: {
    id: number;
    src: string;
  }[];
}

function ImageSlidesMobile({ images }: Props) {
  return (
    <>
      {images.map((image) => (
        <Carousel.Slide key={image.id}>
          <Image
            src={image.src}
            alt={`${image.id}`}
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
