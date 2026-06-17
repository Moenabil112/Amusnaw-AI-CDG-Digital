import type { LocalizedText } from "../i18n";

/** Source: 01_CONTEXT §10 / 02_MEMO §12 / §15. */

export type SeedItem = {
  item: LocalizedText;
  value: LocalizedText;
  highlight?: boolean;
};

/** CDG seed structure summary (CDG Entry section). */
export const seedStructure: SeedItem[] = [
  {
    item: {
      en: "Seed Infrastructure Commitment",
      ar: "التزام بنية تحتية تأسيسي",
      fr: "Engagement d'infrastructure d'amorçage",
    },
    value: { en: "USD 350,000", ar: "350,000 دولار أمريكي", fr: "350 000 USD" },
    highlight: true,
  },
  {
    item: {
      en: "Proposed CDG Position",
      ar: "الحصة المقترحة لـ CDG",
      fr: "Position proposée de la CDG",
    },
    value: { en: "30%", ar: "30%", fr: "30 %" },
  },
  {
    item: { en: "Month 18 Option", ar: "خيار الشهر 18", fr: "Option au mois 18" },
    value: { en: "Step-up to 51%", ar: "ارتقاء إلى 51%", fr: "Passage à 51 %" },
  },
  {
    item: { en: "Month 36 Option", ar: "خيار الشهر 36", fr: "Option au mois 36" },
    value: { en: "Step-up to 85%", ar: "ارتقاء إلى 85%", fr: "Passage à 85 %" },
  },
  {
    item: {
      en: "Founder Continuity Stake",
      ar: "حصة استمرارية المؤسس",
      fr: "Participation de continuité du fondateur",
    },
    value: { en: "15%", ar: "15%", fr: "15 %" },
  },
];

export type ShareholdingRow = {
  party: LocalizedText;
  allocation: string;
  pct: number;
};

/** Post-seed allocation. */
export const postSeedShareholding: ShareholdingRow[] = [
  {
    party: {
      en: "CDG Invest / CDG Vehicle",
      ar: "CDG Invest / كيان CDG",
      fr: "CDG Invest / véhicule CDG",
    },
    allocation: "30%",
    pct: 30,
  },
  { party: { en: "AKANIL", ar: "AKANIL", fr: "AKANIL" }, allocation: "16%", pct: 16 },
  {
    party: { en: "Atlas Mining", ar: "Atlas Mining", fr: "Atlas Mining" },
    allocation: "16%",
    pct: 16,
  },
  {
    party: {
      en: "ZYNTRA Deeptech Saudi",
      ar: "ZYNTRA Deeptech Saudi",
      fr: "ZYNTRA Deeptech Saudi",
    },
    allocation: "8%",
    pct: 8,
  },
  {
    party: {
      en: "Founder / Originator Class",
      ar: "فئة المؤسس / صاحب الفكرة",
      fr: "Catégorie fondateur / initiateur",
    },
    allocation: "16%",
    pct: 16,
  },
  {
    party: {
      en: "Strategic / Technical Reserve",
      ar: "احتياطي استراتيجي / تقني",
      fr: "Réserve stratégique / technique",
    },
    allocation: "14%",
    pct: 14,
  },
];

export type StepUpStage = { stage: LocalizedText; position: LocalizedText };

export const stepUpPathway: StepUpStage[] = [
  {
    stage: { en: "Seed Entry", ar: "الدخول التأسيسي", fr: "Entrée d'amorçage" },
    position: { en: "CDG 30%", ar: "CDG 30%", fr: "CDG 30 %" },
  },
  {
    stage: { en: "Month 18", ar: "الشهر 18", fr: "Mois 18" },
    position: {
      en: "Option to increase to 51%",
      ar: "خيار الزيادة إلى 51%",
      fr: "Option d'augmentation à 51 %",
    },
  },
  {
    stage: { en: "Month 36", ar: "الشهر 36", fr: "Mois 36" },
    position: {
      en: "Option to increase up to 85%",
      ar: "خيار الزيادة حتى 85%",
      fr: "Option d'augmentation jusqu'à 85 %",
    },
  },
];

export const founderContinuityNote: LocalizedText = {
  en: "Founder retains a 15% Strategic Continuity Stake to preserve knowledge continuity, technical alignment, and long-term strategic coherence.",
  ar: "يحتفظ المؤسس بحصة استمرارية استراتيجية بنسبة 15% للحفاظ على استمرارية المعرفة والمواءمة التقنية والاتساق الاستراتيجي طويل الأمد.",
  fr: "Le fondateur conserve une participation de continuité stratégique de 15 % afin de préserver la continuité des connaissances, l'alignement technique et la cohérence stratégique à long terme.",
};

export const shareholdingLegalNote: LocalizedText = {
  en: "All ownership, IP, and step-up terms remain subject to legal review and final documentation.",
  ar: "تظل جميع شروط الملكية والملكية الفكرية والاستحواذ التدريجي خاضعة للمراجعة القانونية والتوثيق النهائي.",
  fr: "Toutes les modalités de propriété, de PI et d'acquisition progressive restent soumises à un examen juridique et à une documentation finale.",
};

/** Use-of-funds breakdown for the Seed Infrastructure Commitment. */
export const seedBudget: { item: LocalizedText; amount: string }[] = [
  {
    item: {
      en: "Amusnaw AI SA incorporation & governance charter",
      ar: "تأسيس Amusnaw AI SA وميثاق الحوكمة",
      fr: "Constitution d'Amusnaw AI SA et charte de gouvernance",
    },
    amount: "USD 25,000",
  },
  {
    item: {
      en: "HYRION Mining Data Infrastructure v1",
      ar: "HYRION — البنية التحتية لبيانات التعدين الإصدار 1",
      fr: "HYRION — Infrastructure de données minières v1",
    },
    amount: "USD 70,000",
  },
  {
    item: {
      en: "Isseksi Copper Intelligence product packaging",
      ar: "تجهيز منتج Isseksi Copper Intelligence",
      fr: "Conditionnement du produit Isseksi Copper Intelligence",
    },
    amount: "USD 45,000",
  },
  {
    item: {
      en: "PR3538746 Smart Fault MVP packaging",
      ar: "تجهيز MVP الخاص بـ PR3538746 Smart Fault",
      fr: "Conditionnement du MVP PR3538746 Smart Fault",
    },
    amount: "USD 45,000",
  },
  {
    item: {
      en: "QASSAS Morocco adaptation",
      ar: "تكييف QASSAS مع المغرب",
      fr: "Adaptation QASSAS Maroc",
    },
    amount: "USD 55,000",
  },
  {
    item: {
      en: "GIS, geochemical & geophysical data layer",
      ar: "طبقة بيانات GIS والجيوكيمياء والجيوفيزياء",
      fr: "Couche de données GIS, géochimiques et géophysiques",
    },
    amount: "USD 35,000",
  },
  {
    item: {
      en: "CDG institutional dashboard & reporting",
      ar: "لوحة معلومات وتقارير مؤسسية لـ CDG",
      fr: "Tableau de bord et reporting institutionnels CDG",
    },
    amount: "USD 25,000",
  },
  {
    item: {
      en: "Legal & IP contribution valuation",
      ar: "تقييم المساهمات القانونية والملكية الفكرية",
      fr: "Évaluation des apports juridiques et de PI",
    },
    amount: "USD 20,000",
  },
  {
    item: {
      en: "Field verification reserve",
      ar: "احتياطي التحقق الميداني",
      fr: "Réserve de vérification de terrain",
    },
    amount: "USD 20,000",
  },
  {
    item: { en: "Contingency", ar: "احتياطي للطوارئ", fr: "Provision pour imprévus" },
    amount: "USD 10,000",
  },
];

export const seedNote: LocalizedText = {
  en: "The USD 350,000 is not exploration CAPEX. It is a Seed Infrastructure Commitment to build the company, productize the two launch products, deploy HYRION v1, adapt QASSAS to Morocco, and prepare a CDG scale decision pack.",
  ar: "مبلغ 350,000 دولار أمريكي ليس نفقات رأسمالية للاستكشاف. إنه التزام بنية تحتية تأسيسي لبناء الشركة، وتحويل منتجَي الإطلاق إلى منتجات، ونشر HYRION الإصدار 1، وتكييف QASSAS مع المغرب، وتجهيز حزمة قرار التوسع لـ CDG.",
  fr: "Les 350 000 USD ne constituent pas des CAPEX d'exploration. Il s'agit d'un engagement d'infrastructure d'amorçage pour bâtir la société, produire les deux produits de lancement, déployer HYRION v1, adapter QASSAS au Maroc et préparer un dossier de décision d'échelle pour la CDG.",
};
