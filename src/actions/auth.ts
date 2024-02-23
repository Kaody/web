"use server";

import { unstable_noStore as noStore } from "next/cache";
import { cookies } from "next/headers";

import { mutation } from "@/actions";
import {
  LoginDocument,
  LoginMutation,
  LoginMutationVariables,
} from "@/generated/graphql";

export const login = async (formData: FormData) => {
  noStore();
  const credentials = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  return mutation<LoginMutation, LoginMutationVariables>({
    mutation: LoginDocument,
    variables: {
      input: { ...credentials },
    },
  });
};

export const refresh = async () => {
  const cookie = cookies().get(process.env.REFRESH_TOKEN_COOKIE_NAME as string);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        cookie: cookie ? `${cookie.name}=${cookie.value}` : ``,
      },
      cache: "no-store",
    }
  );
  return res.json();
};
