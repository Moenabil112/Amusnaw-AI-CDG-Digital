import type { LocalizedText } from "../i18n";

/** Section navigation map. `id` must match the section element id in App.tsx. */
export type NavItem = { id: string; label: LocalizedText };

export const navItems: NavItem[] = [
  { id: "overview", label: { en: "Overview", ar: "نظرة عامة", fr: "Aperçu" } },
  { id: "cdg-entry", label: { en: "CDG Entry", ar: "دخول CDG", fr: "Entrée CDG" } },
  { id: "products", label: { en: "Products", ar: "المنتجات", fr: "Produits" } },
  { id: "isseksi", label: { en: "Isseksi", ar: "Isseksi", fr: "Isseksi" } },
  { id: "aguelmous", label: { en: "Aguelmous", ar: "أگلموس", fr: "Aguelmous" } },
  { id: "hyrion", label: { en: "HYRION", ar: "HYRION", fr: "HYRION" } },
  { id: "qassas", label: { en: "QASSAS", ar: "QASSAS", fr: "QASSAS" } },
  { id: "documents", label: { en: "Documents", ar: "المستندات", fr: "Documents" } },
  { id: "access", label: { en: "Access", ar: "الوصول", fr: "Accès" } },
];
