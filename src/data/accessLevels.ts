import type { LocalizedText } from "../i18n";

/**
 * Access-level and status taxonomy for the controlled institutional window.
 *
 * Access is SIMULATED in v0.1 — there is no authentication. Each document,
 * product, and room carries a visible access label and (where relevant) a
 * lock indicator. Real role-based access, NDA tracking, and access logs are
 * deferred to the HYRION integration (see README "Future path").
 *
 * Labels and descriptions are localized (EN / AR / FR). "NDA" is kept as a
 * canonical acronym across languages.
 */

export type AccessKey =
  | "pre-nda"
  | "controlled"
  | "nda"
  | "cdg-review"
  | "legal-review";

export type StatusKey =
  | "ready"
  | "draft"
  | "planned"
  | "cdg-review"
  | "technical-review"
  | "legal-review";

export type AccessLevel = {
  key: AccessKey;
  label: LocalizedText;
  /** Tailwind utility classes for the badge */
  className: string;
  /** Whether the underlying material is treated as locked by default */
  locked: boolean;
  description: LocalizedText;
};

export const accessLevels: Record<AccessKey, AccessLevel> = {
  "pre-nda": {
    key: "pre-nda",
    label: { en: "Pre-NDA", ar: "ما قبل NDA", fr: "Pré-NDA" },
    className: "border-datablue/40 bg-datablue/10 text-datablue",
    locked: false,
    description: {
      en: "High-level summary without sensitive data. Initial reviewer.",
      ar: "ملخص عام دون بيانات حساسة. للمراجع الأولي.",
      fr: "Résumé de haut niveau sans données sensibles. Premier examinateur.",
    },
  },
  controlled: {
    key: "controlled",
    label: { en: "Controlled", ar: "مضبوط", fr: "Contrôlé" },
    className: "border-sand/40 bg-sand/10 text-sand",
    locked: true,
    description: {
      en: "Strategic documents for approved institutional review. CDG / selected stakeholders.",
      ar: "مستندات استراتيجية لمراجعة مؤسسية معتمدة. CDG / أصحاب مصلحة مختارون.",
      fr: "Documents stratégiques pour examen institutionnel approuvé. CDG / parties prenantes sélectionnées.",
    },
  },
  nda: {
    key: "nda",
    label: { en: "NDA", ar: "NDA", fr: "NDA" },
    className: "border-copper/50 bg-copper/10 text-copper",
    locked: true,
    description: {
      en: "Technical, financial, and product details. Released after a signed NDA.",
      ar: "تفاصيل تقنية ومالية ومنتجية. تُتاح بعد توقيع اتفاقية عدم الإفصاح.",
      fr: "Détails techniques, financiers et produits. Communiqués après signature d'un NDA.",
    },
  },
  "cdg-review": {
    key: "cdg-review",
    label: { en: "CDG Review", ar: "مراجعة CDG", fr: "Examen CDG" },
    className: "border-forest/60 bg-forest/30 text-ivory",
    locked: true,
    description: {
      en: "Full structure, cap table, IP, and acquisition pathway. CDG decision team.",
      ar: "الهيكل الكامل وجدول الملكية والملكية الفكرية ومسار الاستحواذ. فريق قرار CDG.",
      fr: "Structure complète, table de capitalisation, PI et parcours d'acquisition. Équipe de décision CDG.",
    },
  },
  "legal-review": {
    key: "legal-review",
    label: { en: "Legal Review", ar: "مراجعة قانونية", fr: "Examen juridique" },
    className: "border-atlas/60 bg-atlas/20 text-ivory/90",
    locked: true,
    description: {
      en: "Draft legal, IP, shareholder, and governance documents. Legal counsel only.",
      ar: "مسودات مستندات قانونية وملكية فكرية ومساهمين وحوكمة. للمستشار القانوني فقط.",
      fr: "Projets de documents juridiques, PI, actionnariat et gouvernance. Conseil juridique uniquement.",
    },
  },
};

export const statusLabels: Record<
  StatusKey,
  { label: LocalizedText; className: string }
> = {
  ready: {
    label: { en: "Ready", ar: "جاهز", fr: "Prêt" },
    className: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
  },
  draft: {
    label: { en: "Draft", ar: "مسودة", fr: "Brouillon" },
    className: "border-white/20 bg-white/5 text-ivory/70",
  },
  planned: {
    label: { en: "Planned", ar: "مُخطَّط", fr: "Planifié" },
    className: "border-datablue/40 bg-datablue/10 text-datablue",
  },
  "cdg-review": {
    label: { en: "CDG Review", ar: "مراجعة CDG", fr: "Examen CDG" },
    className: "border-sand/40 bg-sand/10 text-sand",
  },
  "technical-review": {
    label: { en: "Technical Review", ar: "مراجعة تقنية", fr: "Examen technique" },
    className: "border-copper/40 bg-copper/10 text-copper",
  },
  "legal-review": {
    label: { en: "Legal Review", ar: "مراجعة قانونية", fr: "Examen juridique" },
    className: "border-atlas/60 bg-atlas/20 text-ivory/80",
  },
};

/** Ordered list used to explain the access ladder in the UI. */
export const accessLadder: AccessKey[] = [
  "pre-nda",
  "controlled",
  "nda",
  "cdg-review",
  "legal-review",
];
