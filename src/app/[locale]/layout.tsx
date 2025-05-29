import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/layout/header";
import { SocialProviders } from "@/components/providers/SocialProviders";
import { locales, defaultLocale, Locale } from "@/lib/i18n/config";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SaaS Starter Kit",
  description: "A modern SaaS starter kit built with Next.js",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  const validLocale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : defaultLocale;

  return (
    <html lang={validLocale} className={manrope.className}>
      <body className="min-h-[100dvh]">
        <SocialProviders>
          <Header locale={validLocale} />
          {children}
        </SocialProviders>
      </body>
    </html>
  );
}
