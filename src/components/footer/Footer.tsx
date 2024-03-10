import classes from "./Footer.module.css";

import { Text } from "@mantine/core";
import Link from "next/link";

import { BackToTop } from "@/components/button";
import { FooterDesktop } from "@/components/footer/desktop";
import { FooterMobile } from "@/components/footer/mobile";
import { LogoHorizontal } from "@/components/logo";

export function Footer() {
  return (
    <footer className={classes.footer}>
      <BackToTop />

      <div className={classes.content}>
        {/* footer for desktop screen */}
        <FooterDesktop />

        {/* footer for mobile screen */}
        <FooterMobile />

        <div className={classes.imageWrapper}>
          <LogoHorizontal />
        </div>
      </div>

      <div className={classes.end}>
        <ul>
          <Link href="/#">Conditions générales de vente</Link>
          <Link href="/#">Vos informations personnelles</Link>
          <Link href="/#">Cookies</Link>
          <Link href="/#">Annonces basées sur vos centres d&apos;intérêt</Link>
        </ul>
        <div className={classes.copyright}>
          <Text size="xs">&copy; {new Date().getFullYear()} Tsena Milay</Text>
          <Text size="xs">Powered by Airtel Madagascar</Text>
        </div>
      </div>
    </footer>
  );
}
