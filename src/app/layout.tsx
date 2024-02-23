import "./globals.css";

import type { Metadata } from "next";

import { ApolloProvider } from "@/components/apollo-provider";

export const metadata: Metadata = {
  title: "Tsena Milay",
  description: "Marketplace helping people to sell and buy products.",
};

type RootLayout = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: RootLayout) {
  return (
    <html lang="en">
      <body>
        <ApolloProvider>{children}</ApolloProvider>
      </body>
    </html>
  );
}
