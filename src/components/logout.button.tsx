"use client";

import { useMutation } from "@apollo/client";
import { Button } from "@mantine/core";
/* import { usePathname, useRouter } from "next/navigation"; */

import { setAccessToken } from "@/constants/access-token";
import { isAuthenticatedVar } from "@/constants/authenticated";
/* import {
  AdminRouteRegex,
  AuthRoutes,
  SuperAdminRouteRegex,
} from "@/constants/route"; */
import {
  LogoutDocument,
  LogoutMutation,
  LogoutMutationVariables,
} from "@/generated/graphql";

const LogoutButton = () => {
  /* const router = useRouter();
  const pathname = usePathname(); */

  const [logout, { loading, client }] = useMutation<
    LogoutMutation,
    LogoutMutationVariables
  >(LogoutDocument, {
    onCompleted: () => {
      isAuthenticatedVar(false);
      setAccessToken("");
      client.resetStore();
      window.location.reload();
      /* if (AuthRoutes.includes(pathname)) {
        router.replace(`/auth/login?redirect=${pathname}`);
      } */
      /* if (
        AdminRouteRegex.test(pathname) ||
        SuperAdminRouteRegex.test(pathname)
      ) {
        window.location.reload();
      } */
    },
    fetchPolicy: "no-cache",
  });

  return (
    <Button
      loading={loading}
      onClick={() => {
        logout();
      }}
    >
      Déconnexion
    </Button>
  );
};

export default LogoutButton;
