"use client";

import { Carousel } from "@mantine/carousel";
import { Box, Image, Portal } from "@mantine/core";
import { useEffect, useState } from "react";

interface Props {
  images: {
    key: string;
    url: string;
  }[];
}

function ImageSlides({ images }: Props) {
  const [active, setActive] = useState<{
    key: string;
    url: string;
  }>();

  useEffect(() => {
    if (images[0]) {
      setActive(images[0]);
    }
  }, [images]);

  if (!images) return null;

  return (
    <>
      <Portal target="#preview-portal">
        {active && (
          <Image
            visibleFrom="md"
            src={active.url}
            alt={active.key}
            width="100%"
            height="100%"
            style={{ objectFit: "scale-down" }}
          />
        )}
      </Portal>

      {images &&
        images.map((image) => (
          <Carousel.Slide key={image.key}>
            <Box
              w={64}
              h={64}
              m="sm"
              style={{
                boxSizing: "border-box",
                border:
                  active === image
                    ? "2px solid var(--mantine-primary-color-0)"
                    : "2px solid var(--mantine-color-white)",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onMouseEnter={() => setActive(image)}
            >
              <Image
                src={image.url}
                alt={image.key}
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
