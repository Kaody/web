"use client";

import { useReactiveVar } from "@apollo/client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

import { isAuthenticatedVar } from "@/constants/authenticated";
import { AdminRouteRegex, SuperAdminRouteRegex } from "@/constants/route";

const withAdmin = (WrappedComponent: React.ComponentType) => {
  const AuthComponent: React.FC = (props) => {
    const isAuthenticated = useReactiveVar(isAuthenticatedVar);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
      // Vérifie si l'utilisateur est authentifié
      // Si non, redirige vers la page d'accueil
      if (
        !isAuthenticated &&
        (AdminRouteRegex.test(pathname) || SuperAdminRouteRegex.test(pathname))
      ) {
        router.replace(`/`);
      }
    }, [isAuthenticated, pathname, router]);

    // Rend le composant si l'utilisateur est authentifié
    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };

  return AuthComponent;
};

export default withAdmin;
