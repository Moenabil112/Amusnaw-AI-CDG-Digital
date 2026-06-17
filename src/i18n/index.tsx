import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/**
 * Trilingual language layer — EN / AR / FR, all fully translated.
 *
 *  - English is the default language.
 *  - Arabic renders right-to-left with the Arabic font (handled in index.css
 *    via html[dir="rtl"]).
 *  - The selected language is persisted in localStorage and restored on load.
 *  - document.lang and document.dir are set dynamically.
 *
 * Content is expressed as `LocalizedText` ({ en, ar, fr }). Resolve it with
 * `t(value, locale)` or the `useT()` hook. Brand/defined terms (Amusnaw AI SA,
 * HYRION, QASSAS, Isseksi, PR3538746, CDG, USD figures, element symbols) are
 * intentionally kept in their canonical form across all three languages.
 */

export type Locale = "en" | "ar" | "fr";

export const LOCALES: { code: Locale; label: string; rtl: boolean; name: string }[] =
  [
    { code: "en", label: "EN", rtl: false, name: "English" },
    { code: "ar", label: "AR", rtl: true, name: "العربية" },
    { code: "fr", label: "FR", rtl: false, name: "Français" },
  ];

const STORAGE_KEY = "amusnaw.locale";

function readInitialLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "ar" || stored === "fr") return stored;
  return "en";
}

type LanguageContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  dir: "ltr" | "rtl";
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale);

  const dir: "ltr" | "rtl" = locale === "ar" ? "rtl" : "ltr";

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* localStorage unavailable — non-fatal */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);

  const value = useMemo(
    () => ({ locale, setLocale, dir }),
    [locale, setLocale, dir],
  );

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
 * A localized string. All three locales are provided for shipped content;
 * `ar`/`fr` are optional at the type level so partial content still compiles
 * and falls back to English.
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

/** Hook returning a resolver bound to the active locale: `const tt = useT()`. */
export function useT(): (text: LocalizedText | string) => string {
  const { locale } = useLanguage();
  return useCallback((text: LocalizedText | string) => t(text, locale), [locale]);
}
