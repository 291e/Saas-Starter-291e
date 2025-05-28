import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { SocialProviders } from "@/components/providers/SocialProviders";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SaaS Starter Kit",
  description: "A modern SaaS starter kit built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={manrope.className}>
      <body className="min-h-[100dvh]">
        <SocialProviders>
          <Header />
          {children}
        </SocialProviders>
      </body>
    </html>
  );
}
