"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { defaultLocale, isLocale, localeHtmlLanguage, type Locale } from "@/lib/locales";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const storageKey = "gonzalo-portfolio-language";
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(storageKey);
    if (isLocale(savedLocale)) setLocaleState(savedLocale);
    setIsReady(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = localeHtmlLanguage[locale];
    if (isReady) window.localStorage.setItem(storageKey, locale);
  }, [isReady, locale]);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
  }, []);

  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}

export function useLocalizedDocument(title: string, description: string) {
  useEffect(() => {
    const updateDocument = () => {
      document.title = title;
      const descriptionTag = document.querySelector('meta[name="description"]');
      descriptionTag?.setAttribute("content", description);
    };

    updateDocument();
    const animationFrameId = window.requestAnimationFrame(updateDocument);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [description, title]);
}
