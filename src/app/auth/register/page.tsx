import { Divider, Flex, Text } from "@mantine/core";
import { Metadata } from "next";
import Link from "next/link";

import { RegisterForm } from "@/components/auth";

export const metadata: Metadata = {
  title: "Inscription",
};

function Register() {
  return (
    <>
      <Text>Créer un compte </Text>
      <RegisterForm />
      <Divider my="lg" />
      <Flex gap={2}>
        <Text size="sm">Vous possédez déjà un compte ?</Text>
        <Link href="/auth/login">
          <Text
            size="sm"
            style={{
              color: "var(--mantine-primary-color-0)",
            }}
          >
            Identifiez-vous
          </Text>
        </Link>
      </Flex>
    </>
  );
}

export default Register;
