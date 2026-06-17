import type { LocalizedText } from "../i18n";

/**
 * Source: 06_PR3538746_SMART_FAULT_MVP_SHEET.md.
 *
 * Presented product-first as the "Aguelmous Smart Fault Demonstrator". The
 * permit reference (PR3538746) is confined to the metadata drawer / detail
 * fields — never a headline.
 */

/** Identity / metadata used by the map section and detail drawer. */
export const aguelmous = {
  id: "aguelmous",
  displayName: "Aguelmous Smart Fault Demonstrator",
  permitReference: "PR3538746",
  region: "Beni Mellal–Khénifra",
  geoContext: {
    en: "Near the High Atlas influence zone",
    ar: "بالقرب من نطاق تأثير الأطلس الكبير",
    fr: "À proximité de la zone d'influence du Haut Atlas",
  } satisfies LocalizedText,
  typeLabel: {
    en: "R&D-ready Smart Exploration MVP",
    ar: "نموذج MVP للاستكشاف الذكي جاهز للبحث والتطوير",
    fr: "Démonstrateur d'exploration intelligente prêt pour la R&D",
  } satisfies LocalizedText,
  /** Concise location description for the map narrative. */
  locationDescription: {
    en: "Located in the Beni Mellal–Khénifra region, near the High Atlas influence zone, the Aguelmous demonstrator is positioned as a Moroccan smart exploration case for fault-controlled polymetallic target intelligence.",
    ar: "يقع نموذج أگلموس داخل جهة بني ملال–خنيفرة، بالقرب من نطاق تأثير الأطلس الكبير، ويُقدَّم كحالة مغربية للاستكشاف الذكي للأهداف متعددة المعادن المرتبطة بالفوالق والبنيات الجيولوجية.",
    fr: "Situé dans la région Béni Mellal–Khénifra, à proximité de la zone d'influence du Haut Atlas, le démonstrateur d'Aguelmous est présenté comme un cas marocain d'exploration intelligente des cibles polymétalliques contrôlées par les structures.",
  } satisfies LocalizedText,
  /** Short section narrative (right column). */
  sectionNarrative: {
    en: "A Moroccan R&D-ready smart exploration demonstrator located in the Beni Mellal–Khénifra region, near the High Atlas influence zone, designed to test fault-controlled polymetallic target intelligence through QASSAS and HYRION.",
    ar: "نموذج مغربي للاستكشاف الذكي جاهز للبحث والتطوير يقع في جهة بني ملال–خنيفرة، بالقرب من نطاق تأثير الأطلس الكبير، مُصمَّم لاختبار استخبارات الأهداف متعددة المعادن المرتبطة بالفوالق عبر QASSAS وHYRION.",
    fr: "Un démonstrateur marocain d'exploration intelligente prêt pour la R&D, situé dans la région Béni Mellal–Khénifra, à proximité de la zone d'influence du Haut Atlas, conçu pour tester l'intelligence des cibles polymétalliques contrôlées par les failles via QASSAS et HYRION.",
  } satisfies LocalizedText,
} as const;

export const aguelmousMessage: LocalizedText = {
  en: "Aguelmous is not presented as a proven mineral asset. It is presented as a disciplined smart exploration demonstrator for AI-assisted fault-controlled target generation.",
  ar: "لا يُقدَّم أگلموس كأصل معدني مثبت، بل كنموذج منضبط للاستكشاف الذكي لتوليد أهداف يتحكم فيها الفالق بمساعدة الذكاء الاصطناعي.",
  fr: "Aguelmous n'est pas présenté comme un actif minéral prouvé, mais comme un démonstrateur d'exploration intelligente discipliné pour la génération de cibles contrôlées par les failles, assistée par IA.",
};

export const aguelmousCaution: LocalizedText = {
  en: "This demonstrator does not claim a proven resource, guaranteed discovery, or immediate mine development.",
  ar: "لا يدّعي هذا النموذج وجود مورد مثبت أو اكتشاف مضمون أو تطوير منجم فوري.",
  fr: "Ce démonstrateur ne revendique aucune ressource prouvée, aucune découverte garantie, ni développement minier immédiat.",
};

/** QASSAS modules exercised by the demonstrator. */
export const aguelmousModules: LocalizedText[] = [
  { en: "Fault Corridor Intelligence", ar: "ذكاء ممرات الفوالق", fr: "Intelligence des couloirs de failles" },
  { en: "Drainage Backtracking", ar: "التتبّع العكسي للتصريف", fr: "Remontée des drainages" },
  {
    en: "Multi-Element Pathfinder Ranking",
    ar: "ترتيب العناصر الكاشفة المتعددة",
    fr: "Classement multi-éléments indicateurs",
  },
  { en: "Smart Sampling Planner", ar: "مخطّط أخذ العينات الذكي", fr: "Planificateur d'échantillonnage intelligent" },
  { en: "Geophysical Line Planner", ar: "مخطّط الخطوط الجيوفيزيائية", fr: "Planificateur de lignes géophysiques" },
  { en: "AI Target Score", ar: "تقييم الأهداف بالذكاء الاصطناعي", fr: "Score de cible par IA" },
  { en: "Drill Collar Recommender", ar: "موصي مواقع الحفر", fr: "Recommandateur de collets de forage" },
  { en: "Field Evidence Capture", ar: "التقاط الأدلة الميدانية", fr: "Saisie des preuves de terrain" },
];

/** Expected demonstrator outputs. */
export const aguelmousOutputs: LocalizedText[] = [
  { en: "Target Book", ar: "دفتر الأهداف", fr: "Target Book" },
  { en: "Fault Corridor Ranking", ar: "ترتيب ممرات الفوالق", fr: "Classement des couloirs de failles" },
  {
    en: "Multi-Element Pathfinder Matrix",
    ar: "مصفوفة العناصر الكاشفة المتعددة",
    fr: "Matrice multi-éléments indicateurs",
  },
  { en: "Smart Sampling Plan", ar: "خطة أخذ العينات الذكية", fr: "Plan d'échantillonnage intelligent" },
  { en: "Geophysics Line Plan", ar: "خطة الخطوط الجيوفيزيائية", fr: "Plan de lignes géophysiques" },
  { en: "HYRION Evidence Registry", ar: "سجل أدلة HYRION", fr: "Registre de preuves HYRION" },
  { en: "90-Day Validation Plan", ar: "خطة تحقق 90 يومًا", fr: "Plan de validation à 90 jours" },
  {
    en: "180-Day Drill-Readiness Recommendation",
    ar: "توصية الجاهزية للحفر خلال 180 يومًا",
    fr: "Recommandation de préparation au forage à 180 jours",
  },
];

export type ValidationPhase = {
  window: LocalizedText;
  title: LocalizedText;
  items: LocalizedText[];
};

export const aguelmousValidation: ValidationPhase[] = [
  {
    window: { en: "Days 1–30", ar: "الأيام 1–30", fr: "Jours 1–30" },
    title: { en: "Data Structuring", ar: "هيكلة البيانات", fr: "Structuration des données" },
    items: [
      {
        en: "Digitize available documents",
        ar: "رقمنة الوثائق المتاحة",
        fr: "Numériser les documents disponibles",
      },
      {
        en: "Build GIS baseline & sample database",
        ar: "بناء خط أساس GIS وقاعدة بيانات العينات",
        fr: "Construire la base GIS et la base de données d'échantillons",
      },
      {
        en: "Create initial evidence registry",
        ar: "إنشاء سجل الأدلة الأولي",
        fr: "Créer le registre de preuves initial",
      },
    ],
  },
  {
    window: { en: "Days 31–60", ar: "الأيام 31–60", fr: "Jours 31–60" },
    title: { en: "Target Intelligence", ar: "استخبارات الأهداف", fr: "Intelligence des cibles" },
    items: [
      {
        en: "Build multi-element anomaly matrix",
        ar: "بناء مصفوفة شذوذ العناصر المتعددة",
        fr: "Construire la matrice d'anomalies multi-éléments",
      },
      {
        en: "Run drainage backtracking & rank fault corridors",
        ar: "تشغيل التتبّع العكسي للتصريف وترتيب ممرات الفوالق",
        fr: "Exécuter la remontée des drainages et classer les couloirs de failles",
      },
      {
        en: "Define smart sampling and geophysics planning",
        ar: "تحديد تخطيط أخذ العينات الذكي والجيوفيزياء",
        fr: "Définir la planification d'échantillonnage intelligent et de géophysique",
      },
    ],
  },
  {
    window: { en: "Days 61–90", ar: "الأيام 61–90", fr: "Jours 61–90" },
    title: { en: "Demonstrator Review", ar: "مراجعة النموذج", fr: "Examen du démonstrateur" },
    items: [
      {
        en: "Produce initial Target Book",
        ar: "إنتاج دفتر الأهداف الأولي",
        fr: "Produire le Target Book initial",
      },
      {
        en: "Prepare field validation plan",
        ar: "إعداد خطة التحقق الميداني",
        fr: "Préparer le plan de validation de terrain",
      },
      {
        en: "Present CDG review dashboard",
        ar: "تقديم لوحة مراجعة CDG",
        fr: "Présenter le tableau de bord d'examen CDG",
      },
    ],
  },
];
