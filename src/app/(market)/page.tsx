import { Skeleton } from "@mantine/core";
import { Suspense } from "react";

import { Hero } from "@/components/hero";
import { Flash } from "@/components/products/flash";
import { News } from "@/components/products/news";
import { Promo } from "@/components/products/promo";
import { Recommended } from "@/components/products/recommended";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <main
      style={{
        backgroundColor: "rgb(227, 230, 230)",
      }}
    >
      <Hero />
      <Suspense fallback={<Skeleton mt="xl" height={50} width="100%" />}>
        <News />
      </Suspense>
      <Suspense fallback={<Skeleton mt="xl" height={50} width="100%" />}>
        <Promo />
      </Suspense>
      <Suspense fallback={<Skeleton mt="xl" height={50} width="100%" />}>
        <Flash />
      </Suspense>
      <Suspense fallback={<Skeleton mt="xl" height={50} width="100%" />}>
        <Recommended />
      </Suspense>
    </main>
  );
}
