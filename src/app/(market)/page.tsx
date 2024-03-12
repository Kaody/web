import { Hero } from "@/components/hero";
import { Flash } from "@/components/products/flash";
import { News } from "@/components/products/news";
import { Promo } from "@/components/products/promo";
import { Recommended } from "@/components/products/recommended";

export default async function Home() {
  return (
    <main
      style={{
        backgroundColor: "rgb(227, 230, 230)",
      }}
    >
      <Hero />
      <News />
      <Promo />
      <Flash />
      <Recommended />
    </main>
  );
}
