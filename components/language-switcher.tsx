"use client";

import { type Locale } from "@/lib/locales";
import { useLanguage } from "./language-provider";

type LanguageSwitcherProps = {
  onLanguageChange?: () => void;
};

const languages: Array<{ code: Locale; flag: string }> = [
  { code: "es", flag: "🇪🇸" },
  { code: "en", flag: "🇬🇧" },
  { code: "fr", flag: "🇫🇷" },
  { code: "de", flag: "🇩🇪" },
];

const labels: Record<Locale, { group: string; options: Record<Locale, string> }> = {
  es: {
    group: "Seleccionar idioma",
    options: { es: "Cambiar a español", en: "Cambiar a inglés", fr: "Cambiar a francés", de: "Cambiar a alemán" },
  },
  en: {
    group: "Choose language",
    options: { es: "Switch to Spanish", en: "Switch to English", fr: "Switch to French", de: "Switch to German" },
  },
  fr: {
    group: "Choisir la langue",
    options: { es: "Passer à l'espagnol", en: "Passer à l'anglais", fr: "Passer au français", de: "Passer à l'allemand" },
  },
  de: {
    group: "Sprache wählen",
    options: { es: "Auf Spanisch wechseln", en: "Auf Englisch wechseln", fr: "Auf Französisch wechseln", de: "Auf Deutsch wechseln" },
  },
};

export function LanguageSwitcher({ onLanguageChange }: LanguageSwitcherProps) {
  const { locale, setLocale } = useLanguage();
  const copy = labels[locale];

  return (
    <div className="language-switcher" role="group" aria-label={copy.group}>
      {languages.map(({ code, flag }) => (
        <button
          className={locale === code ? "language-button is-active" : "language-button"}
          type="button"
          key={code}
          aria-label={copy.options[code]}
          aria-pressed={locale === code}
          data-tooltip={copy.options[code]}
          title={copy.options[code]}
          onClick={() => {
            setLocale(code);
            onLanguageChange?.();
          }}
        >
          <span aria-hidden="true">{flag}</span>
        </button>
      ))}
    </div>
  );
}
