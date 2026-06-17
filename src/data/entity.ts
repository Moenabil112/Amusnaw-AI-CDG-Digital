import type { LocalizedText } from "../i18n";

/**
 * Core entity definition. Source of truth: 01_AMUSNAW_CONTEXT_KNOWLEDGE_BASE.md
 * and 02_CDG_STRATEGIC_ENTRY_MEMO.md. Do not invent new claims here.
 *
 * Branding rule: "Amusnaw" is the brand. "AI" (Artificial Intelligence) and
 * "SA" (legal form) are abbreviations/legal markers — they must NOT dominate
 * the main title. The full legal name "Amusnaw AI SA" is reserved for the
 * entity/legal/document/footer contexts only.
 */
export const entity = {
  /** Primary brand — used as the hero/header title. */
  brandName: "Amusnaw",
  /** Full legal name — entity/legal/document/footer contexts only. */
  legalName: "Amusnaw AI SA",
  /** Short descriptor shown beside the brand. */
  displayDescriptor: {
    en: "Mining-Tech Data Infrastructure",
    ar: "البنية التحتية لبيانات التعدين",
    fr: "Infrastructure de données minières",
  } satisfies LocalizedText,
  /** Legal-structure marker. */
  legalDescriptor: {
    en: "Proposed Moroccan SA",
    ar: "شركة مغربية مقترحة بصيغة SA",
    fr: "SA marocaine proposée",
  } satisfies LocalizedText,
  /** AI capability marker. */
  aiDescriptor: {
    en: "AI-powered strategic mineral intelligence",
    ar: "ذكاء اصطناعي لاستخبارات المعادن الاستراتيجية",
    fr: "Intelligence minière stratégique assistée par IA",
  } satisfies LocalizedText,
  /** Full institutional descriptor — legal/entity/footer use. */
  legalType: {
    en: "Moroccan Mining-Tech Data Infrastructure SPV",
    ar: "شركة مغربية (SPV) للبنية التحتية لبيانات التعدين — Mining-Tech",
    fr: "SPV marocaine d'infrastructure de données minières — Mining-Tech",
  } satisfies LocalizedText,
  seedCommitment: "USD 350,000",
  strategicPartner: "CDG",

  /** Muted legal+AI descriptor line under the hero brand. */
  heroLegalLine: {
    en: "AI-powered Mining-Tech · Proposed Moroccan SA",
    ar: "تقنية تعدين مدعومة بالذكاء الاصطناعي · شركة مغربية مقترحة بصيغة SA",
    fr: "Mining-Tech assisté par IA · SA marocaine proposée",
  } satisfies LocalizedText,
  /** Hero main message. */
  heroMessage: {
    en: "Building Morocco's digital and governance infrastructure for intelligent mining data.",
    ar: "بناء البنية التحتية الرقمية والتنظيمية لبيانات التعدين الذكي في المغرب.",
    fr: "Construire l'infrastructure numérique et de gouvernance du Maroc pour les données minières intelligentes.",
  } satisfies LocalizedText,
  /** Product-proof line under the hero message. */
  heroProof: {
    en: "Launching with Isseksi as a ready mining intelligence product and Aguelmous as a smart fault exploration demonstrator.",
    ar: "تنطلق بمنتج إسيسكي كمنتج جاهز لاستخبارات التعدين، وأگلموس كنموذج للاستكشاف الذكي للفوالق.",
    fr: "Lancement avec Isseksi comme produit prêt d'intelligence minière, et Aguelmous comme démonstrateur d'exploration intelligente des failles.",
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
      fr: "Parcours de co-construction stratégique CDG",
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
