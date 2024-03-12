"use client";

import { useMutation } from "@apollo/client";
import { Box, Button, TextInput } from "@mantine/core";
import { useRouter, useSearchParams } from "next/navigation";

import { withGuest } from "@/components/hoc";
import { setAccessToken } from "@/constants/access-token";
import { isAuthenticatedVar } from "@/constants/authenticated";
import {
  LoginDocument,
  LoginMutation,
  LoginMutationVariables,
  MeDocument,
} from "@/generated/graphql";

export const dynamic = "force-dynamic";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  const [login, { loading, error }] = useMutation<
    LoginMutation,
    LoginMutationVariables
  >(LoginDocument, {
    onCompleted(data) {
      const { access_token } = data.login;
      isAuthenticatedVar(true);
      setAccessToken(access_token);
      if (redirect) {
        router.replace(redirect);
      } else {
        router.replace("/");
      }
    },
    fetchPolicy: "no-cache",
    refetchQueries: [{ query: MeDocument }],
  });

  return (
    <Box my="sm">
      {error && <pre>{JSON.stringify(error.message)}</pre>}
      <form
        action={(formData: FormData) => {
          login({
            variables: {
              input: {
                email: formData.get("email") as string,
                password: formData.get("password") as string,
              },
            },
          });
        }}
      >
        <TextInput
          aria-label="Adresse e-mail"
          withAsterisk
          label="Adresse e-mail"
          description="Entrez votre adresse e-mail"
          type="email"
          id="email"
          name="email"
          autoFocus
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
          S&apos;identifier
        </Button>
      </form>
    </Box>
  );
}

export default withGuest(LoginForm);
