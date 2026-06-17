import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/**
 * Trilingual-ready language layer.
 *
 * v0.1 ships English as the default language. Arabic and French are wired
 * into the type system and the language switcher so they can be populated
 * later WITHOUT rebuilding the application:
 *
 *  1. Add the translated strings to `dictionary` below (or split per-locale
 *     files and import them here).
 *  2. The provider already flips `dir="rtl"` and the Arabic font for `ar`.
 *  3. Data files expose an optional `i18n` map keyed by locale for content
 *     that lives outside this dictionary.
 */

export type Locale = "en" | "ar" | "fr";

export const LOCALES: { code: Locale; label: string; rtl: boolean }[] = [
  { code: "en", label: "EN", rtl: false },
  { code: "ar", label: "AR", rtl: true },
  { code: "fr", label: "FR", rtl: false },
];

type LanguageContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  dir: "ltr" | "rtl";
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const dir: "ltr" | "rtl" = locale === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);

  const value = useMemo(() => ({ locale, setLocale, dir }), [locale, dir]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

/**
 * A localized string. English is required; the others are optional so the
 * UI can fall back gracefully while translations are being prepared.
 */
export type LocalizedText = {
  en: string;
  ar?: string;
  fr?: string;
};

/** Resolve a LocalizedText (or plain string) for the active locale. */
export function t(text: LocalizedText | string, locale: Locale): string {
  if (typeof text === "string") return text;
  return text[locale] ?? text.en;
}
