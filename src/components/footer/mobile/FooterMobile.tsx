import classes from "./FooterMobile.module.css";

import { Container } from "@mantine/core";
import Link from "next/link";

export function FooterMobile() {
  return (
    <Container
      hiddenFrom="md"
      size="lg"
      pb="xl"
      style={{
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <div className={classes.stack}>
        <Link href="/#">Retours</Link>
        <Link href="/#">Chez vous</Link>
        <Link href="/#">Vos commandes</Link>
        <Link href="/#">Vendre sur Tsena Milay</Link>
        <Link href="/#">Registre et cadeaux</Link>
        <Link href="/#">Information sur notre Marketplace</Link>
        <Link href="/#">Gerer vos abonnements</Link>
        <Link href="/#">Vendre sur Tsena Milay</Link>
      </div>

      <div className={classes.stack}>
        <Link href="/#">Service client</Link>
        <Link href="/#">Votre compte</Link>
        <Link href="/#">Vos listes</Link>
        <Link href="/#">Créez un compte professionnel</Link>
        <Link href="/#">Trouver un cadeau</Link>
        <Link href="/#">Téléchargez l&apos;application</Link>
      </div>
    </Container>
  );
}
