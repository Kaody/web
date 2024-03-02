import "@mantine/core/styles.css";
import "./globals.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import type { Metadata } from "next";

import { ApolloProvider } from "@/components/apollo-provider";
import { Header } from "@/components/header";
import { theme } from "@/theme";
import { Footer } from "@/components/footer";

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
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <ApolloProvider>
          <MantineProvider theme={theme}>
            <Header />
            {children}
            <Footer />
          </MantineProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
