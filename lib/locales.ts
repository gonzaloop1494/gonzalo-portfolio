export const localeCodes = ["es", "en", "fr", "de"] as const;

export type Locale = (typeof localeCodes)[number];

export const defaultLocale: Locale = "es";

export const localeHtmlLanguage: Record<Locale, string> = {
  es: "es",
  en: "en",
  fr: "fr",
  de: "de",
};

export function isLocale(value: string | null): value is Locale {
  return localeCodes.some((locale) => locale === value);
}
