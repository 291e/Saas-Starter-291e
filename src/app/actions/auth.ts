// 이 파일은 더 이상 사용하지 않습니다. 클라이언트 컴포넌트로 로그인 처리가 이동되었습니다.

"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

const loginSchema = z.object({
  email: z.string().email("유효한 이메일 주소를 입력해주세요."),
  password: z.string().min(6, "비밀번호는 최소 6자 이상이어야 합니다."),
});

type LoginState = {
  error?: string;
  details?: {
    email?: string[];
    password?: string[];
  };
};

export async function login(
  prevState: LoginState | null,
  formData: FormData
): Promise<LoginState | null> {
  const validatedFields = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      error: "입력값이 유효하지 않습니다.",
      details: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  try {
    // 사용자 확인
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user || !user.password) {
      return {
        error: "이메일 또는 비밀번호가 일치하지 않습니다.",
      };
    }

    // 비밀번호 확인
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return {
        error: "이메일 또는 비밀번호가 일치하지 않습니다.",
      };
    }

    // 로그인 성공
    redirect("/dashboard");

    return null;
  } catch (error) {
    console.error("Login error:", error);
    return {
      error: "로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.",
    };
  }
}
