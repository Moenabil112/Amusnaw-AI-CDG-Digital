import type { LocalizedText } from "../i18n";

/** Source: 06_PR3538746_SMART_FAULT_MVP_SHEET.md. */

export const pr3538746Message: LocalizedText = {
  en: "PR3538746 is not presented as a proven mineral asset. It is presented as a disciplined smart exploration MVP for AI-assisted fault-controlled target generation.",
  ar: "لا يُقدَّم PR3538746 كأصل معدني مثبت، بل كنموذج MVP منضبط للاستكشاف الذكي لتوليد أهداف يتحكم فيها الفالق بمساعدة الذكاء الاصطناعي.",
  fr: "PR3538746 n'est pas présenté comme un actif minéral prouvé, mais comme un MVP d'exploration intelligente discipliné pour la génération de cibles contrôlées par les failles, assistée par IA.",
};

export const pr3538746Caution: LocalizedText = {
  en: "This MVP does not claim a proven resource, guaranteed discovery, or immediate mine development.",
  ar: "لا يدّعي هذا الـ MVP وجود مورد مثبت أو اكتشاف مضمون أو تطوير منجم فوري.",
  fr: "Ce MVP ne revendique aucune ressource prouvée, aucune découverte garantie, ni développement minier immédiat.",
};

/** QASSAS modules exercised by the MVP. */
export const pr3538746Modules: LocalizedText[] = [
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

/** Expected MVP outputs. */
export const pr3538746Outputs: LocalizedText[] = [
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

export const pr3538746Validation: ValidationPhase[] = [
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
    title: { en: "MVP Review", ar: "مراجعة الـ MVP", fr: "Examen du MVP" },
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
