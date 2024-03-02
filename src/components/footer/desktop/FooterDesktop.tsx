import classes from "./FooterDesktop.module.css";

import { Container, Text } from "@mantine/core";
import Link from "next/link";

export function FooterDesktop() {
  return (
    <Container
      visibleFrom="md"
      size="lg"
      pt="sm"
      pb="xl"
      style={{
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <div className={classes.stack}>
        <Text fw="bolder">Pour mieux nous connaître</Text>
        <Link href="/#">À propos de Tsena Milay</Link>
        <Link href="/#">Carrières</Link>
        <Link href="/#">Durabilité</Link>
        <Link href="/#">Tsena Milay Science</Link>
      </div>

      <div className={classes.stack}>
        <Text fw="bolder">Gagnez de l&apos;argent</Text>
        <Link href="/#">Vendez sur Tsena Milay</Link>
        <Link href="/#">Vendez sur Tsena Milay Business</Link>
        <Link href="/#">Vendez sur Tsena Milay Handmade</Link>
        <Link href="/#">Tsena Milay pour les start-ups</Link>
        <Link href="/#">Protégez et développez votre marque</Link>
        <Link href="/#">Devenez Partenaire</Link>
        <Link href="/#">Expédié par Tsena Milay</Link>
        <Link href="/#">Faites la promotion de vos produits</Link>
      </div>

      <div className={classes.stack}>
        <Text fw="bolder">Moyens de paiement Tsena Milay</Text>
        <Link href="/#">Cartes de paiement</Link>
        <Link href="/#">Paiement en plusieurs fois</Link>
        <Link href="/#">Convertisseur de devises Tsena Milay</Link>
        <Link href="/#">Cartes cadeaux</Link>
        <Link href="/#">Recharge en ligne</Link>
        <Link href="/#">Recharge en point de vente</Link>
      </div>

      <div className={classes.stack}>
        <Text fw="bolder">Besoin d&apos;aide ?</Text>
        <Link href="/#">Voir ou suivre vos commandes</Link>
        <Link href="/#">Tarifs et options de livraison</Link>
        <Link href="/#">Tsena Milay Prime</Link>
        <Link href="/#">Retours et remplacements</Link>
        <Link href="/#">Rappels et alertes de sécurité des produits</Link>
        <Link href="/#">Infos sur notre Marketplace</Link>
        <Link href="/#">Application Tsena Milay Mobile</Link>
        <Link href="/#">Service Client</Link>
      </div>
    </Container>
  );
}
