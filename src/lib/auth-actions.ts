"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

interface SignInOptions {
  email: string;
  password: string;
}

export async function authenticateUser(options: SignInOptions) {
  const { email, password } = options;

  try {
    // 사용자 확인
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !user.password) {
      return {
        success: false,
        error: "이메일 또는 비밀번호가 일치하지 않습니다.",
      };
    }

    // 비밀번호 확인
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return {
        success: false,
        error: "이메일 또는 비밀번호가 일치하지 않습니다.",
      };
    }

    // 로그인 성공
    const userData = {
      id: user.id,
      name: user.name,
      email: user.email,
      image: user.image,
      role: user.role,
    };

    // JWT 토큰 생성
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.NEXTAUTH_SECRET || "development-secret",
      { expiresIn: "30d" }
    );

    return { success: true, user: userData, token };
  } catch (error) {
    console.error("로그인 오류:", error);
    return { success: false, error: "로그인 처리 중 오류가 발생했습니다." };
  }
}
