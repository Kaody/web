"use client";

import { useReactiveVar } from "@apollo/client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

import { isAuthenticatedVar } from "@/constants/authenticated";

const withAuth = (WrappedComponent: React.ComponentType) => {
  const AuthComponent: React.FC = (props) => {
    const isAuthenticated = useReactiveVar(isAuthenticatedVar);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
      // Vérifie si l'utilisateur est authentifié
      // Si non, redirige vers la page de connexion avec l'URL de redirection
      if (!isAuthenticated) {
        router.push(`/auth/login?redirect=${pathname}`);
      }
    }, [isAuthenticated, pathname, router]);

    // Rend le composant si l'utilisateur est authentifié
    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };

  return AuthComponent;
};

export default withAuth;
