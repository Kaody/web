import classes from "./Reviews.module.css";

import {
  Flex,
  Progress,
  Rating as MantineRating,
  Text,
  Stack,
} from "@mantine/core";

const ratingValues = [
  {
    star: 5,
    percent: 77,
  },

  {
    star: 4,
    percent: 10,
  },

  {
    star: 3,
    percent: 3,
  },

  {
    star: 2,
    percent: 2,
  },

  {
    star: 1,
    percent: 2,
  },
];

export function Rating() {
  return (
    <div className={classes.rating}>
      <Text fw="bolder">Commentaires client</Text>
      <Flex gap="xs" align="center">
        <MantineRating defaultValue={4} fractions={2} />
        <Text c="var(--mantine-color-secondary-2)">4 sur 5</Text>
      </Flex>
      <Text size="sm" c="var(--mantine-color-secondary-2)">
        18 évaluations globales
      </Text>
      <Stack gap="sm">
        {ratingValues.map((rating) => (
          <Flex key={rating.star} gap="xs" align="center">
            <Text miw={55} size="sm" c="var(--mantine-color-secondary-2)">
              {rating.star} {rating.star > 1 ? "étoiles" : "étoile"}
            </Text>
            <Progress size="xl" value={rating.percent} flex={1} />
            <Text
              ta="end"
              miw={30}
              size="sm"
              c="var(--mantine-color-secondary-2)"
            >
              {rating.percent}%
            </Text>
          </Flex>
        ))}
      </Stack>
    </div>
  );
}
