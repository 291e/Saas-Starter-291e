"use client";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

export function SocialProviders({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {children}
      <Toaster position="bottom-center" />
    </SessionProvider>
  );
}
