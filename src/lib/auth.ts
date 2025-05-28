import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import NaverProvider from "next-auth/providers/naver";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { AppConfig } from "@/config/app.config";
import { PrismaAdapter } from "@auth/prisma-adapter";

if (!AppConfig.auth.enabled) {
  throw new Error("인증 기능이 비활성화되어 있습니다.");
}

if (
  AppConfig.auth.providers.google &&
  (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET)
) {
  throw new Error("Google OAuth credentials are not set");
}

if (
  AppConfig.auth.providers.naver &&
  (!process.env.NAVER_CLIENT_ID || !process.env.NAVER_CLIENT_SECRET)
) {
  throw new Error("Naver OAuth credentials are not set");
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    ...(AppConfig.auth.providers.google
      ? [
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
          }),
        ]
      : []),
    ...(AppConfig.auth.providers.naver
      ? [
          NaverProvider({
            clientId: process.env.NAVER_CLIENT_ID!,
            clientSecret: process.env.NAVER_CLIENT_SECRET!,
          }),
        ]
      : []),
    ...(AppConfig.auth.providers.credentials
      ? [
          CredentialsProvider({
            name: "credentials",
            credentials: {
              email: { label: "이메일", type: "email" },
              password: { label: "비밀번호", type: "password" },
            },
            async authorize(credentials) {
              if (!credentials?.email || !credentials?.password) {
                throw new Error("이메일과 비밀번호를 입력해주세요.");
              }

              const user = await prisma.user.findUnique({
                where: {
                  email: credentials.email,
                },
              });

              if (!user || !user.password) {
                throw new Error("이메일 또는 비밀번호가 일치하지 않습니다.");
              }

              const isCorrectPassword = await bcrypt.compare(
                credentials.password,
                user.password
              );

              if (!isCorrectPassword) {
                throw new Error("이메일 또는 비밀번호가 일치하지 않습니다.");
              }

              return {
                id: user.id,
                name: user.name,
                email: user.email,
                image: user.image,
                role: user.role,
              };
            },
          }),
        ]
      : []),
  ],
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role || "USER";
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: AppConfig.auth.sessionMaxAge,
  },
  secret: process.env.NEXTAUTH_SECRET,
};
