"use client";

import { useQuery, useReactiveVar } from "@apollo/client";
import { Box, Skeleton } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

import { isAuthenticatedVar } from "@/constants/authenticated";
import { MeDocument, MeQuery, MeQueryVariables } from "@/generated/graphql";

const withGuest = (WrappedComponent: React.ComponentType) => {
  const GuestComponent: React.FC = (props) => {
    const { data } = useQuery<MeQuery, MeQueryVariables>(MeDocument, {
      fetchPolicy: "no-cache",
    });
    const isAuthenticated = useReactiveVar(isAuthenticatedVar);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
      // Vérifie si l'utilisateur est authentifié
      // Si non, redirige vers la page de connexion avec l'URL de redirection
      if (isAuthenticated && data) {
        router.replace(`/`);
      }
    }, [data, isAuthenticated, pathname, router]);

    // Rend le composant si l'utilisateur est authentifié
    return !isAuthenticated ? (
      <WrappedComponent {...props} />
    ) : (
      <Box my="sm">
        <Skeleton height={8} width="25%" />
        <Skeleton height={32} mt={6} />
        <Skeleton height={8} mt={8} width="35%" />
        <Skeleton height={32} mt={6} />
        <Skeleton height={8} mt={8} width="30%" />
        <Skeleton height={32} mt={6} />
        <Skeleton height={36} mt={12} width="45%" />
      </Box>
    );
  };

  return GuestComponent;
};

export default withGuest;
