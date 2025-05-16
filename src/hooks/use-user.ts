"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useUserStore, User } from "@/lib/store/user-store";

export function useUser() {
  const { data: session, status } = useSession();
  const { user, setUser, isLoading, setLoading, error, logout } =
    useUserStore();
  const [isInitialized, setIsInitialized] = useState(false);

  // 세션 상태가 변경될 때마다 스토어 업데이트
  useEffect(() => {
    if (status === "loading") {
      setLoading(true);
      return;
    }

    setLoading(false);

    if (status === "authenticated" && session?.user) {
      const userData: User = {
        id: session.user.id || "",
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        role: session.user.role || "USER",
      };
      setUser(userData);
    } else if (status === "unauthenticated") {
      logout();
    }

    setIsInitialized(true);
  }, [session, status, setUser, setLoading, logout]);

  return {
    user,
    isLoading: isLoading || status === "loading" || !isInitialized,
    isAuthenticated: !!user,
    error,
    logout,
  };
}
