import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role?: string; // <- 옵셔널로 변경!
    } & DefaultSession["user"];
  }

  interface User {
    role?: string; // <- 옵셔널로 변경!
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role?: string; // <- 옵셔널로 변경!
  }
}
