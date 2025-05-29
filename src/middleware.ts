import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n/config";

// 정규표현식으로 locale prefix가 없는 루트 접근 감지
function hasLocalePrefix(pathname: string) {
  // ^/(ko|en)(/|$) → /ko 또는 /en으로 시작하면 true
  return locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 1. API, static 등은 무시 (선택)
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static")
  ) {
    return NextResponse.next();
  }

  // 2. 이미 locale prefix가 붙은 경우 통과
  if (hasLocalePrefix(pathname)) {
    return NextResponse.next();
  }

  // 3. locale prefix가 없으면 defaultLocale로 리다이렉트
  const url = req.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

// 4. matcher: 반드시 i18n 경로에만 적용 (선택적 세분화)
export const config = {
  matcher: [
    // 루트, 또는 locale 없는 페이지에만 적용
    "/((?!api|_next|static|favicon.ico).*)",
  ],
};
