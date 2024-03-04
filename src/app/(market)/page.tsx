import { Hero } from "@/components/hero";
import { Flash } from "@/components/products/flash";
import { News } from "@/components/products/news";
import { Promo } from "@/components/products/promo";
import { Recommended } from "@/components/products/recommended";

export const dynamic = false;

export default async function Home() {
  return (
    <main>
      <Hero />
      <News />
      <Promo />
      <Flash />
      <Recommended />
    </main>
  );
}
