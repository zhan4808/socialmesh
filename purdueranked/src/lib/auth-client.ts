"use client";

import { useSession } from "next-auth/react";

export function useAuth() {
  const { data: session, status } = useSession();
  const user = session?.user;
  const isAuthenticated = status === "authenticated";
  const isLoading = status === "loading";

  return {
    user,
    isAuthenticated,
    isLoading,
    session
  };
} 