"use client";

import "@mantine/carousel/styles.css";
import classes from "./Hero.module.css";

import { Carousel, Embla } from "@mantine/carousel";
import { ActionIcon, Group, Image, ScrollArea } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState } from "react";
import { DesktopCategories } from "./desktop/DesktopCategories";
import { MobileCategories } from "./mobile/MobileCategories";

const data = [
  {
    alt: "Hero 1",
    image: "https://m.media-amazon.com/images/I/611Q6hm7OqL._SX3000_.jpg",
    sr: "https://m.media-amazon.com/images/I/71JhVgPkuhL._SR1236,1080_.jpg",
  },
  {
    alt: "Hero 2",
    image: "https://m.media-amazon.com/images/I/71QP7gjjoKL._SX3000_.jpg",
    sr: "https://m.media-amazon.com/images/I/71dS+nyDi5L._SR412,360_.jpg",
  },
  {
    alt: "Hero 3",
    image: "https://m.media-amazon.com/images/I/71WtvLIY2KL._SX3000_.jpg",
    sr: "https://m.media-amazon.com/images/I/71VRR4xROyL._SR1236,1080_.jpg",
  },
];

export function Hero() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const [embla, setEmbla] = useState<Embla | null>(null);
  const handleNext = () => embla?.scrollNext();
  const handlePrev = () => embla?.scrollPrev();

  const slides = data.map((data) => (
    <Carousel.Slide key={data.alt} style={{ cursor: "pointer" }}>
      {/* image sildes for mobile */}
      <Image
        alt={data.alt}
        src={data.sr}
        height={430}
        style={{
          objectFit: "cover",
          objectPosition: "top",
        }}
        hiddenFrom="sm"
      />

      {/* image sildes for tablette or desktop */}
      <Image
        alt={data.alt}
        src={data.image}
        height={600}
        style={{
          objectFit: "cover",
          objectPosition: "top",
        }}
        visibleFrom="sm"
      />
    </Carousel.Slide>
  ));

  return (
    <div className={classes.wrapper}>
      <Group className={classes.controlsWrapper}>
        <ActionIcon
          className={classes.control}
          onClick={handlePrev}
          radius="lg"
        >
          <IconChevronLeft size={52} />
        </ActionIcon>
        <ActionIcon
          className={classes.control}
          onClick={handleNext}
          radius="lg"
        >
          <IconChevronRight size={52} />
        </ActionIcon>
      </Group>
      <Carousel
        loop
        getEmblaApi={setEmbla}
        withControls={false}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {slides}
      </Carousel>

      <ScrollArea className={classes.scroll} type="never">
        <div className={classes.categoriesWrapper}>
          {/* desktop categories */}
          <DesktopCategories />
          {/* mobile categories */}
          <MobileCategories />
        </div>
      </ScrollArea>
    </div>
  );
}
