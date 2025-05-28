// src/features/auth/hooks/useAuth.ts
import { useSession } from "next-auth/react";
import type { AuthUser } from "../utils/auth-helpers";

export function useAuth() {
  const { data: session, status, update } = useSession();
  const user = session?.user as AuthUser | undefined;
  const isLoading = status === "loading";
  const isAuthenticated = !!user;

  // 권한 체크 함수들
  const isAdmin = user?.role === "ADMIN";
  const isEditor = user?.role === "EDITOR";
  const isUser = user?.role === "USER";

  // 특정 역할 체크
  const hasRole = (role: string) => user?.role === role;

  // 세션 업데이트
  const refreshSession = async () => {
    try {
      await update();
    } catch (error) {
      console.error("세션 업데이트 실패:", error);
    }
  };

  return {
    user,
    isLoading,
    isAuthenticated,
    isAdmin,
    isEditor,
    isUser,
    hasRole,
    session,
    status,
    refreshSession,
  };
}
