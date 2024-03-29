import "@mantine/core/styles.css";
import "./globals.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import type { Metadata } from "next";

import { ApolloProvider } from "@/components/apollo-provider";
import { theme } from "@/theme";

export const metadata: Metadata = {
  title: {
    default: "Tsenamilay.mg",
    template: "%s | Tsenamilay.mg",
  },
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
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
