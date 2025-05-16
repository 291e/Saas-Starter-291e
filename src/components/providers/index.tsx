"use client";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";
import { ClientCookiesProvider } from "./cookies-provider";
import { useState, useEffect } from "react";
import { useUserStore } from "@/lib/store/user-store";

export function Providers({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  // Zustand 스토어 하이드레이션
  useEffect(() => {
    useUserStore.persist.rehydrate();
    setIsMounted(true);
  }, []);

  return (
    <SessionProvider>
      <ClientCookiesProvider>
        {isMounted ? children : null}
        <Toaster position="bottom-center" />
      </ClientCookiesProvider>
    </SessionProvider>
  );
}
