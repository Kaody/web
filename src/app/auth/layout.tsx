import { Box } from "@mantine/core";

import { Container } from "@/components/auth";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Box component="section" p="md">
        <Container>{children}</Container>
      </Box>
    </main>
  );
}
