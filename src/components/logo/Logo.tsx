import { Image } from "@mantine/core";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <Image
        alt="logo"
        src="/tsenamilay_logo_h@max_w.png"
        h={45}
        w="auto"
        fit="contain"
      />
    </Link>
  );
}
