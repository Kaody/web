import { Box, Title } from "@mantine/core";

import { LogoHorizontal } from "@/components/logo";

interface Props {
  children: React.ReactNode;
}

export function Container({ children }: Props) {
  return (
    <Box maw={350} style={{ margin: "0 auto" }}>
      <LogoHorizontal />
      <Title order={1}>Bienvenue sur</Title>
      <Title order={2}>Tsena Milay</Title>
      {children}
    </Box>
  );
}
