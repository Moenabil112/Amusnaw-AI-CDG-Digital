import type { LocalizedText } from "../i18n";

/**
 * Core entity definition. Source of truth: 01_AMUSNAW_CONTEXT_KNOWLEDGE_BASE.md
 * and 02_CDG_STRATEGIC_ENTRY_MEMO.md. Do not invent new claims here.
 */
export const entity = {
  name: "Amusnaw AI SA",
  type: {
    en: "Moroccan Mining-Tech Data Infrastructure SPV",
    ar: "شركة مغربية (SPV) للبنية التحتية لبيانات التعدين — Mining-Tech",
    fr: "SPV marocaine d'infrastructure de données minières — Mining-Tech",
  } satisfies LocalizedText,
  seedCommitment: "USD 350,000",
  strategicPartner: "CDG",
  tagline: {
    en: "Co-building Morocco's digital and governance infrastructure for intelligent mining data.",
    ar: "بناء مشترك للبنية التحتية الرقمية والتنظيمية لبيانات التعدين الذكي في المغرب.",
    fr: "Co-construire l'infrastructure numérique et de gouvernance du Maroc pour des données minières intelligentes.",
  } satisfies LocalizedText,
  supporting: {
    en: "Launching with two ready products: Isseksi Copper Intelligence and PR3538746 Smart Fault Exploration.",
    ar: "ينطلق بمنتجين جاهزين: Isseksi Copper Intelligence و PR3538746 Smart Fault Exploration.",
    fr: "Lancement avec deux produits prêts : Isseksi Copper Intelligence et PR3538746 Smart Fault Exploration.",
  } satisfies LocalizedText,
} as const;

export const heroBadges: { label: LocalizedText; emphasis?: boolean }[] = [
  {
    label: {
      en: "Seed Infrastructure Commitment: USD 350,000",
      ar: "التزام بنية تحتية تأسيسي: 350,000 دولار أمريكي",
      fr: "Engagement d'infrastructure d'amorçage : 350 000 USD",
    },
    emphasis: true,
  },
  {
    label: {
      en: "CDG Strategic Co-Building Pathway",
      ar: "مسار البناء الاستراتيجي المشترك مع CDG",
      fr: "Parcours de co-construction stratégique avec la CDG",
    },
  },
  {
    label: {
      en: "Controlled Institutional Digital Window",
      ar: "نافذة رقمية مؤسسية مضبوطة",
      fr: "Fenêtre numérique institutionnelle contrôlée",
    },
  },
];

/** Contact endpoint used by the access request (mailto fallback, no backend). */
export const contact = {
  email: "akanil.consulting@proton.me",
  reviewNote: {
    en: "Access is reviewed manually for institutional purposes. This is a controlled institutional digital window, not a public offering.",
    ar: "تتم مراجعة الوصول يدويًا لأغراض مؤسسية. هذه نافذة رقمية مؤسسية مضبوطة، وليست عرضًا عامًا.",
    fr: "L'accès est examiné manuellement à des fins institutionnelles. Il s'agit d'une fenêtre numérique institutionnelle contrôlée, et non d'une offre publique.",
  } satisfies LocalizedText,
};
