"use client";

import { Portal } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { Box, Image } from "@mantine/core";
import { useState } from "react";

interface Props {
  images: {
    id: number;
    src: string;
  }[];
}

function ImageSlides({ images }: Props) {
  const [active, setActive] = useState(0);

  return (
    <>
      <Portal target="#preview-portal">
        <Image
          visibleFrom="md"
          src={images[active].src}
          alt={`${active}`}
          width="100%"
          height="100%"
          style={{ objectFit: "scale-down" }}
        />
      </Portal>

      {images.map((image) => (
        <Carousel.Slide key={image.id}>
          <Box
            w={64}
            h={64}
            m="sm"
            style={{
              boxSizing: "border-box",
              border:
                active === image.id
                  ? "2px solid var(--mantine-primary-color-0)"
                  : "2px solid var(--mantine-color-white)",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onMouseEnter={() => setActive(image.id)}
          >
            <Image
              src={image.src}
              alt={`${image.id}`}
              width="100%"
              height="100%"
              style={{ objectFit: "scale-down" }}
            />
          </Box>
        </Carousel.Slide>
      ))}
    </>
  );
}

export default ImageSlides;
