import Link from "next/link";
import { locales } from "@/lib/i18n/config";

export default function LanguageSwitcher({
  currentLocale,
}: {
  currentLocale: string;
}) {
  return (
    <div>
      {locales.map((lng) =>
        lng !== currentLocale ? (
          <Link key={lng} href={`/${lng}`}>
            {lng.toUpperCase()}
          </Link>
        ) : null
      )}
    </div>
  );
}
