import classes from "./Reviews.module.css";

import { Avatar, Flex, Rating, Stack, Text } from "@mantine/core";

const reviews = [
  {
    name: "Tozlu",
    title: "Très bonne enceinte",
    star: 5,
    review:
      "Le JBL Flip 6 est tout simplement incroyable ! La qualité sonore est exceptionnelle pour un haut-parleur portable de cette taille.",
    date: "20 novembre 2021",
  },
  {
    name: "Jules",
    title: "Bon rapport qualité prix",
    star: 4,
    review:
      "Enceinte qui fonctionne très très bien et de bonnes basses, j’adore le son",
    date: "24 février 2024",
  },
  {
    name: "Tristan",
    title:
      "Plus puissante et avec des basses plus chaudes que l’ancienne mouture,mais quelques réserves",
    star: 5,
    review:
      "Le son de ma voiture etant HS j’ai opté pour cette enceinte et écoutez, bah elle fait clairement le travail, l’autonomie est plutôt bonne, ça tabasse assez fort dans un espace clos",
    date: "24 février 2024",
  },
];

export function Reviews() {
  return (
    <div className={classes.reviews}>
      <div className={classes.blankdiv} />
      <Stack maw={680}>
        <Text fw="bolder">Meilleures évaluations</Text>
        {reviews.map((review, index) => (
          <div key={index} className={classes.review}>
            <Flex align="center" gap="xs">
              <Avatar radius="xl" />
              <Text size="sm">{review.name}</Text>
            </Flex>
            <Flex align="center" gap="xs" wrap="wrap">
              <Rating value={review.star} fractions={2} />
              <Text size="sm" fw="bolder">
                {review.title}
              </Text>
            </Flex>
            <Text size="sm" c="var(--mantine-color-gray-7)">
              Commenté le {review.date}
            </Text>
            <Text size="sm">{review.review}</Text>
          </div>
        ))}
      </Stack>
    </div>
  );
}
