// src/features/auth/utils/auth-helpers.ts

import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { authOptions } from "@/lib/auth";
import type { NextRequest } from "next/server";
import type { User } from "next-auth";

export interface AuthUser extends Omit<User, "role"> {
  role: string;
  id: string;
}

// SSR/Server Side에서 유저 정보 가져오기
export async function getUserFromServerSession(): Promise<AuthUser | null> {
  try {
    const session = await getServerSession(authOptions);
    return (session?.user as AuthUser) || null;
  } catch (error) {
    console.error("세션 가져오기 실패:", error);
    return null;
  }
}

// NextRequest에서 세션 가져오기 (API Route/Middleware 등)
export async function getUserFromRequest(
  req: NextRequest
): Promise<AuthUser | null> {
  try {
    const token = await getToken({ req });
    return (token as AuthUser) || null;
  } catch (error) {
    console.error("토큰 가져오기 실패:", error);
    return null;
  }
}

// 권한 체크
export function requireAdmin(user: AuthUser | null): void {
  if (!user) {
    throw new Error("인증되지 않은 사용자입니다.");
  }

  if (user.role !== "ADMIN") {
    throw new Error("관리자 권한이 필요합니다.");
  }
}

// 일반 사용자 권한 체크
export function requireAuth(user: AuthUser | null): void {
  if (!user) {
    throw new Error("인증되지 않은 사용자입니다.");
  }
}

// 특정 역할 체크
export function requireRole(user: AuthUser | null, role: string): void {
  if (!user) {
    throw new Error("인증되지 않은 사용자입니다.");
  }

  if (user.role !== role) {
    throw new Error(`${role} 권한이 필요합니다.`);
  }
}
