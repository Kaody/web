"use client";

import { useMutation } from "@apollo/client";
import { Box, Button, TextInput } from "@mantine/core";
import { useRouter, useSearchParams } from "next/navigation";

import { withGuest } from "@/components/hoc";
import {
  RegisterDocument,
  RegisterMutation,
  RegisterMutationVariables,
} from "@/generated/graphql";

export const dynamic = "force-dynamic";

function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  const [register, { loading, error }] = useMutation<
    RegisterMutation,
    RegisterMutationVariables
  >(RegisterDocument, {
    onCompleted() {
      if (redirect) {
        router.replace(redirect);
      } else {
        router.replace("/");
      }
    },
    fetchPolicy: "no-cache",
  });

  return (
    <Box my="sm">
      {error && <pre>{JSON.stringify(error.message)}</pre>}
      <form
        action={(formData: FormData) => {
          register({
            variables: {
              input: {
                first_name: formData.get("first_name") as string,
                last_name: formData.get("last_name") as string,
                email: formData.get("email") as string,
                password: formData.get("password") as string,
              },
            },
          });
        }}
      >
        <TextInput
          aria-label="Nom"
          withAsterisk
          label="Votre nom"
          description="Entrez votre nom"
          type="text"
          id="first_name"
          name="first_name"
          autoFocus
          required
        />
        <TextInput
          mt="xs"
          aria-label="Prénom"
          withAsterisk
          label="Votre prénom"
          description="Entrez votre prénom"
          type="text"
          id="last_name"
          name="last_name"
          required
        />
        <TextInput
          mt="xs"
          aria-label="Adresse e-mail"
          withAsterisk
          label="Adresse e-mail"
          description="Entrez votre adresse e-mail"
          type="email"
          id="email"
          name="email"
          required
        />
        <TextInput
          mt="xs"
          aria-label="Mot de passe"
          withAsterisk
          label="Mot de passe"
          description="Entrez votre mot de passe"
          type="password"
          id="password"
          name="password"
          required
        />
        <Button mt="md" fullWidth type="submit" loading={loading}>
          S&apos;inscrire
        </Button>
      </form>
    </Box>
  );
}

export default withGuest(RegisterForm);
