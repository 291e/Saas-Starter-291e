// src/lib/i18n/index.ts
import type { Locale } from "./config";
import en from "./dictionaries/en.json";
import ko from "./dictionaries/ko.json";

const dictionaries: Record<Locale, any> = { en, ko };

export function getDictionary(locale: Locale) {
  return dictionaries[locale] || dictionaries["en"];
}
