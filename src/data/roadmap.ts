import type { LocalizedText } from "../i18n";

/** Source: 01_CONTEXT §13 / 02_MEMO §14. Six-Month Delivery Roadmap. */

export type RoadmapMilestone = {
  month: LocalizedText;
  title: LocalizedText;
  deliverable: LocalizedText;
  detail: LocalizedText[];
};

export const roadmap: RoadmapMilestone[] = [
  {
    month: { en: "Month 1", ar: "الشهر 1", fr: "Mois 1" },
    title: {
      en: "Corporate & Governance Setup",
      ar: "التأسيس وإعداد الحوكمة",
      fr: "Constitution et gouvernance",
    },
    deliverable: {
      en: "Incorporation & governance charter",
      ar: "التأسيس وميثاق الحوكمة",
      fr: "Constitution et charte de gouvernance",
    },
    detail: [
      { en: "Incorporate Amusnaw AI SA", ar: "تأسيس Amusnaw AI SA", fr: "Constituer Amusnaw AI SA" },
      {
        en: "Prepare shareholder framework",
        ar: "إعداد إطار المساهمين",
        fr: "Préparer le cadre actionnarial",
      },
      {
        en: "Document IP contributions",
        ar: "توثيق مساهمات الملكية الفكرية",
        fr: "Documenter les apports de PI",
      },
      {
        en: "Define CDG reporting layer",
        ar: "تحديد طبقة التقارير لـ CDG",
        fr: "Définir la couche de reporting CDG",
      },
    ],
  },
  {
    month: { en: "Month 2", ar: "الشهر 2", fr: "Mois 2" },
    title: { en: "Isseksi Product Room", ar: "غرفة منتج Isseksi", fr: "Salle produit Isseksi" },
    deliverable: {
      en: "Ready Mining Intelligence & Governance Product",
      ar: "منتج جاهز في استخبارات التعدين والحوكمة",
      fr: "Produit prêt d'intelligence minière et de gouvernance",
    },
    detail: [
      {
        en: "Package Isseksi product environment",
        ar: "تجهيز بيئة منتج Isseksi",
        fr: "Conditionner l'environnement produit Isseksi",
      },
      {
        en: "Structure evidence & governance layers",
        ar: "هيكلة طبقات الأدلة والحوكمة",
        fr: "Structurer les couches de preuves et de gouvernance",
      },
      {
        en: "Prepare CDG-ready product demo",
        ar: "إعداد عرض منتج جاهز لـ CDG",
        fr: "Préparer une démo produit prête pour la CDG",
      },
    ],
  },
  {
    month: { en: "Month 3", ar: "الشهر 3", fr: "Mois 3" },
    title: {
      en: "PR3538746 MVP Framework",
      ar: "إطار MVP الخاص بـ PR3538746",
      fr: "Cadre MVP PR3538746",
    },
    deliverable: {
      en: "Smart Fault targeting framework",
      ar: "إطار استهداف الفوالق الذكي",
      fr: "Cadre de ciblage Smart Fault",
    },
    detail: [
      {
        en: "Digitize existing evidence",
        ar: "رقمنة الأدلة الموجودة",
        fr: "Numériser les preuves existantes",
      },
      {
        en: "Prepare structural / geochemical targeting model",
        ar: "إعداد نموذج استهداف بنيوي / جيوكيميائي",
        fr: "Préparer un modèle de ciblage structural / géochimique",
      },
      {
        en: "Define R&D validation workflow",
        ar: "تحديد سير عمل التحقق للبحث والتطوير",
        fr: "Définir le flux de validation R&D",
      },
    ],
  },
  {
    month: { en: "Month 4", ar: "الشهر 4", fr: "Mois 4" },
    title: {
      en: "HYRION Infrastructure v1",
      ar: "بنية HYRION التحتية الإصدار 1",
      fr: "Infrastructure HYRION v1",
    },
    deliverable: {
      en: "Evidence registry & decision gates",
      ar: "سجل الأدلة وبوابات القرار",
      fr: "Registre des preuves et points de décision",
    },
    detail: [
      {
        en: "Deploy evidence registry",
        ar: "نشر سجل الأدلة",
        fr: "Déployer le registre des preuves",
      },
      {
        en: "Configure permissions & decision gates",
        ar: "ضبط الصلاحيات وبوابات القرار",
        fr: "Configurer les permissions et points de décision",
      },
      {
        en: "Link budget-to-work tracking",
        ar: "ربط تتبّع الميزانية بالأعمال",
        fr: "Relier le suivi budget-travaux",
      },
    ],
  },
  {
    month: { en: "Month 5", ar: "الشهر 5", fr: "Mois 5" },
    title: { en: "QASSAS Morocco v1", ar: "QASSAS المغرب الإصدار 1", fr: "QASSAS Maroc v1" },
    deliverable: {
      en: "Exploration intelligence adaptation",
      ar: "تكييف الذكاء الاستكشافي",
      fr: "Adaptation de l'intelligence d'exploration",
    },
    detail: [
      {
        en: "Adapt QASSAS to Moroccan geology",
        ar: "تكييف QASSAS مع الجيولوجيا المغربية",
        fr: "Adapter QASSAS à la géologie marocaine",
      },
      {
        en: "Build target scoring logic",
        ar: "بناء منطق تقييم الأهداف",
        fr: "Construire la logique de notation des cibles",
      },
      {
        en: "Prepare sampling & geophysics planning",
        ar: "إعداد تخطيط أخذ العينات والجيوفيزياء",
        fr: "Préparer la planification d'échantillonnage et de géophysique",
      },
    ],
  },
  {
    month: { en: "Month 6", ar: "الشهر 6", fr: "Mois 6" },
    title: {
      en: "CDG Review & Scale Decision",
      ar: "مراجعة CDG وقرار التوسع",
      fr: "Examen CDG et décision d'échelle",
    },
    deliverable: {
      en: "Scale decision pack",
      ar: "حزمة قرار التوسع",
      fr: "Dossier de décision d'échelle",
    },
    detail: [
      {
        en: "Deliver Isseksi Product Room & PR3538746 Target Book",
        ar: "تسليم غرفة منتج Isseksi ودفتر أهداف PR3538746",
        fr: "Livrer la salle produit Isseksi et le Target Book PR3538746",
      },
      {
        en: "Deliver HYRION infrastructure & QASSAS Morocco v1",
        ar: "تسليم بنية HYRION التحتية وQASSAS المغرب الإصدار 1",
        fr: "Livrer l'infrastructure HYRION et QASSAS Maroc v1",
      },
      {
        en: "Present scale decision: continue / expand / step-up",
        ar: "تقديم قرار التوسع: الاستمرار / التوسيع / الاستحواذ التدريجي",
        fr: "Présenter la décision d'échelle : poursuivre / étendre / acquisition progressive",
      },
    ],
  },
];
