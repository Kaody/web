import { Image } from "@mantine/core";
import Link from "next/link";

export function LogoHorizontal() {
  return (
    <Link href="/">
      <Image
        alt="logo"
        src="/tsenamilay_logo_v@hd.png"
        h={30}
        w="auto"
        fit="contain"
      />
    </Link>
  );
}
