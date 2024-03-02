import classes from "./MobileCategories.module.css";

import { Box, Image, Paper, Text } from "@mantine/core";

const categories = [
  { id: "#1", name: "Cuisine et Maison" },
  { id: "#2", name: "High-Tech" },
  { id: "#3", name: "Beauté et Bien-être" },
  { id: "#4", name: "Les top catégories" },
];

export function MobileCategories() {
  return (
    <>
      {categories.map((category) => (
        <Paper
          hiddenFrom="sm"
          key={category.id}
          shadow="xs"
          radius="sm"
          className={classes.categories}
        >
          <Box h={40} p="xs">
            <Text truncate="end" size="sm">
              {category.name}
            </Text>
          </Box>
          <Image
            src="https://placehold.co/135x135"
            alt="category"
            width={135}
            height={135}
            style={{
              objectFit: "cover",
            }}
          />
        </Paper>
      ))}
    </>
  );
}
