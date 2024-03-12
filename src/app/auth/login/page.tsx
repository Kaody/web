import { Divider, Text, rem } from "@mantine/core";
import { Metadata } from "next";

import LoginForm from "@/components/auth/login.form";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Connexion",
};

function Login() {
  return (
    <>
      <Text>S&apos;identifier</Text>
      <LoginForm />
      <Text
        size="sm"
        style={{
          color: "var(--mantine-color-secondary-0)",
          textDecoration: "underline",
        }}
      >
        <Link href="/auth/forgot-password">Mot de passe oublié ?</Link>
      </Text>
      <Divider my="lg" />
      <Link
        style={{
          border: "calc(0.0625rem * 1) solid var(--mantine-color-gray-4)",
          padding: rem(6),
          borderRadius: "var(--mantine-radius-sm)",
          width: "100%",
          display: "block",
          textAlign: "center",
          fontSize: "var(--mantine-font-size-sm)",
        }}
        href="/auth/register"
      >
        Créer votre compte Tsena Milay
      </Link>
    </>
  );
}

export default Login;
