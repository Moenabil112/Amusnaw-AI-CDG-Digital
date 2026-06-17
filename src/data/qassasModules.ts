import type { LocalizedText } from "../i18n";

/** Source: 08_QASSAS_MOROCCO_ADAPTATION_NOTE.md. */

export const qassasPositioning: LocalizedText = {
  en: "QASSAS is the exploration intelligence layer adapted to Moroccan geology. HYRION governs evidence; QASSAS interprets it.",
  ar: "QASSAS هو طبقة الذكاء الاستكشافي المُكيّفة مع الجيولوجيا المغربية. يحوكم HYRION الأدلة؛ ويفسّرها QASSAS.",
  fr: "QASSAS est la couche d'intelligence d'exploration adaptée à la géologie marocaine. HYRION gouverne les preuves ; QASSAS les interprète.",
};

export type QassasModule = { title: LocalizedText; application: LocalizedText };

export const qassasModules: QassasModule[] = [
  {
    title: {
      en: "Fault Corridor Intelligence",
      ar: "ذكاء ممرات الفوالق",
      fr: "Intelligence des couloirs de failles",
    },
    application: {
      en: "Ranks structural corridors using maps, DEM, satellite data, and field evidence.",
      ar: "يرتّب الممرات البنيوية باستخدام الخرائط ونماذج الارتفاع الرقمية (DEM) وبيانات الأقمار الصناعية والأدلة الميدانية.",
      fr: "Classe les couloirs structuraux à l'aide de cartes, de MNT (DEM), de données satellitaires et de preuves de terrain.",
    },
  },
  {
    title: { en: "Drainage Backtracking", ar: "التتبّع العكسي للتصريف", fr: "Remontée des drainages" },
    application: {
      en: "Traces stream-sediment anomalies upstream to likely source zones.",
      ar: "يتتبّع شذوذات رواسب المجاري نحو المنبع إلى مناطق المصدر المحتملة.",
      fr: "Remonte les anomalies de sédiments de ruisseau vers les zones sources probables.",
    },
  },
  {
    title: {
      en: "Multi-Element Pathfinder Ranking",
      ar: "ترتيب العناصر الكاشفة المتعددة",
      fr: "Classement multi-éléments indicateurs",
    },
    application: {
      en: "Interprets Pb-Zn-Sb-Cu-Ag-As-Mo-Zn associations.",
      ar: "يفسّر ارتباطات Pb-Zn-Sb-Cu-Ag-As-Mo-Zn.",
      fr: "Interprète les associations Pb-Zn-Sb-Cu-Ag-As-Mo-Zn.",
    },
  },
  {
    title: { en: "Smart Sampling Planner", ar: "مخطّط أخذ العينات الذكي", fr: "Planificateur d'échantillonnage intelligent" },
    application: {
      en: "Recommends soil, rock-chip, and stream-sediment follow-up points.",
      ar: "يوصي بنقاط متابعة للتربة وشظايا الصخور ورواسب المجاري.",
      fr: "Recommande des points de suivi pour sols, éclats de roche et sédiments de ruisseau.",
    },
  },
  {
    title: { en: "Geophysical Line Planner", ar: "مخطّط الخطوط الجيوفيزيائية", fr: "Planificateur de lignes géophysiques" },
    application: {
      en: "Proposes IP, resistivity, and magnetics profiles.",
      ar: "يقترح مقاطع الاستقطاب المحرَّض (IP) والمقاومية والمغناطيسية.",
      fr: "Propose des profils de PP (IP), de résistivité et de magnétisme.",
    },
  },
  {
    title: { en: "AI Target Score", ar: "تقييم الأهداف بالذكاء الاصطناعي", fr: "Score de cible par IA" },
    application: {
      en: "Scores targets by structure, geochemistry, geology, access, and evidence confidence.",
      ar: "يقيّم الأهداف حسب البنية والجيوكيمياء والجيولوجيا وسهولة الوصول وثقة الأدلة.",
      fr: "Note les cibles selon la structure, la géochimie, la géologie, l'accessibilité et la fiabilité des preuves.",
    },
  },
  {
    title: { en: "Drill Collar Recommender", ar: "موصي مواقع الحفر", fr: "Recommandateur de collets de forage" },
    application: {
      en: "Suggests scout drilling positions after validation.",
      ar: "يقترح مواقع الحفر الاستطلاعي بعد التحقق.",
      fr: "Suggère des positions de forage de reconnaissance après validation.",
    },
  },
  {
    title: { en: "Field Evidence Capture", ar: "التقاط الأدلة الميدانية", fr: "Saisie des preuves de terrain" },
    application: {
      en: "Links every field observation to GPS, image, note, and evidence record.",
      ar: "يربط كل ملاحظة ميدانية بـ GPS وصورة وملاحظة وسجل دليل.",
      fr: "Relie chaque observation de terrain à un GPS, une image, une note et un enregistrement de preuve.",
    },
  },
  {
    title: {
      en: "Morocco-to-Africa Replication",
      ar: "التكرار من المغرب إلى إفريقيا",
      fr: "Réplication Maroc-Afrique",
    },
    application: {
      en: "Converts the Moroccan model into a replicable African mining-intelligence service.",
      ar: "يحوّل النموذج المغربي إلى خدمة استخبارات تعدين قابلة للتكرار في إفريقيا.",
      fr: "Convertit le modèle marocain en un service d'intelligence minière reproductible en Afrique.",
    },
  },
];

export const qassasNote: LocalizedText = {
  en: "QASSAS supports expert-reviewed exploration decisions. It does not replace geologists, engineers, laboratory validation, or regulatory review.",
  ar: "يدعم QASSAS قرارات الاستكشاف الخاضعة لمراجعة الخبراء. وهو لا يحل محل الجيولوجيين أو المهندسين أو التحقق المخبري أو المراجعة التنظيمية.",
  fr: "QASSAS appuie des décisions d'exploration examinées par des experts. Il ne remplace ni les géologues, ni les ingénieurs, ni la validation en laboratoire, ni l'examen réglementaire.",
};
