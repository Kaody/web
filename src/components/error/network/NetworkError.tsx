import classes from "./NetworkError.module.css";

import { Text } from "@mantine/core";

interface Props {
  message?: string;
}

export function NetworkError({ message }: Props) {
  return (
    <div className={classes.container}>
      <Text size="xl">Erreur de chargement</Text>
      <Text size="sm">
        Une erreur est survenue lors du chargement de la page.
      </Text>
      <Text size="xs">
        Verifiez votre connexion internet et réessayez. (raison: {message})
      </Text>
    </div>
  );
}
