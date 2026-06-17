import type { LocalizedText } from "../i18n";

/**
 * Core entity definition. Source of truth: 01_AMUSNAW_CONTEXT_KNOWLEDGE_BASE.md
 * and 02_CDG_STRATEGIC_ENTRY_MEMO.md. Do not invent new claims here.
 */
export const entity = {
  name: "Amusnaw AI SA",
  type: "Moroccan Mining-Tech Data Infrastructure SPV",
  meaning: "Amusnaw — “the wise one” in Amazigh",
  seedCommitment: "USD 350,000",
  seedCommitmentLabel: "Seed Infrastructure Commitment",
  strategicPartner: "CDG",
  founderRole: "Mining-Tech Originator & Field Intelligence Architect",
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

export const heroBadges: { label: string; emphasis?: boolean }[] = [
  { label: "Seed Infrastructure Commitment: USD 350,000", emphasis: true },
  { label: "CDG Strategic Co-Building Pathway" },
  { label: "Controlled Institutional Digital Window" },
];

/** Contact endpoint used by the access request (mailto fallback, no backend). */
export const contact = {
  email: "contact@amusnaw.ai",
  reviewNote:
    "Access is reviewed manually for institutional purposes. This is a controlled institutional digital window, not a public offering.",
};

/** The five founding contribution layers. Source: memo §6 / context §9. */
export const foundingLayers: {
  contributor: string;
  layer: string;
  value: string;
}[] = [
  {
    contributor: "AKANIL",
    layer: "IP, field intelligence & knowledge transfer",
    value:
      "Moroccan anchoring, African field intelligence, trust architecture, HYRION/QASSAS knowledge context.",
  },
  {
    contributor: "Atlas Mining",
    layer: "Mining operating & field partner",
    value: "22 years of mining experience across more than four countries.",
  },
  {
    contributor: "ZYNTRA Deeptech",
    layer: "Saudi AI product layer",
    value: "Deeptech architecture, AI product logic, scalable software.",
  },
  {
    contributor: "QASSAS",
    layer: "Exploration intelligence",
    value: "Fault intelligence, geochemical interpretation, field-data ranking.",
  },
  {
    contributor: "HYRION",
    layer: "Evidence governance",
    value: "Data registry, permissions, decision gates, acquisition readiness.",
  },
];
