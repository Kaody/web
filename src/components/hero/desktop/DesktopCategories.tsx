import classes from "./DesktopCategories.module.css";

import { Image, Paper, Text } from "@mantine/core";

const categories = [
  {
    id: "#1",
    name: "Cuisine et Maison",
    subCategories: [
      { id: 1, name: "Petit électroménager" },
      { id: 2, name: "Cuisine" },
      { id: 3, name: "Meubles" },
      { id: 4, name: "Rangement et organisation" },
    ],
  },
  {
    id: "#2",
    name: "High-Tech",
    subCategories: [
      { id: 1, name: "Téléphonie" },
      { id: 2, name: "Informatique" },
      { id: 3, name: "Photo et caméscopes" },
      { id: 4, name: "Audio et Hi-Fi" },
    ],
  },
  {
    id: "#3",
    name: "Beauté et Bien-être",
    subCategories: [
      { id: 1, name: "Soin du corps" },
      { id: 2, name: "Soin du visage" },
      { id: 3, name: "Parfum" },
      { id: 4, name: "Maquillage" },
    ],
  },
  {
    id: "#4",
    name: "Les top catégories",
    subCategories: [
      { id: 1, name: "Epicerie" },
      { id: 2, name: "Rangement et organisation" },
      { id: 3, name: "Objects connectés" },
      { id: 4, name: "Livres" },
    ],
  },
];

export function DesktopCategories() {
  return (
    <>
      {categories.map((category) => (
        <Paper
          visibleFrom="sm"
          key={category.id}
          radius={0}
          className={classes.wrapper}
        >
          <div className={classes.header}>
            <Text size="lg" fw="bolder">
              {category.name}
            </Text>
          </div>
          <div className={classes.body}>
            {category.subCategories.map((subCategory) => (
              <Paper
                key={subCategory.id}
                shadow="none"
                radius={0}
                className={classes.item}
              >
                <Image
                  src="https://placehold.co/135x120"
                  alt="category"
                  width={135}
                  height={120}
                  style={{
                    objectFit: "scale-down",
                  }}
                />
                <Text key={subCategory.id} truncate="end" size="xs">
                  {subCategory.name}
                </Text>
              </Paper>
            ))}
          </div>
          <div className={classes.footer}>
            <Text c="var(--mantine-primary-color-0)" size="sm">
              Voir plus
            </Text>
          </div>
        </Paper>
      ))}
    </>
  );
}
