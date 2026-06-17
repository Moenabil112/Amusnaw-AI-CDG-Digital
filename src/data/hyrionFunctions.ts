import type { LocalizedText } from "../i18n";

/** Source: 07_HYRION_INFRASTRUCTURE_NOTE.md. */

export const hyrionPositioning: LocalizedText = {
  en: "HYRION is the operating system for mining evidence governance — not a traditional data room.",
  ar: "HYRION هو نظام التشغيل لحوكمة أدلة التعدين — وليس غرفة بيانات تقليدية.",
  fr: "HYRION est le système d'exploitation de la gouvernance des preuves minières — et non une salle de données traditionnelle.",
};

export type Comparison = { dataRoom: LocalizedText; hyrion: LocalizedText };

export const hyrionComparison: Comparison[] = [
  {
    dataRoom: { en: "File storage", ar: "تخزين ملفات", fr: "Stockage de fichiers" },
    hyrion: { en: "Evidence governance", ar: "حوكمة الأدلة", fr: "Gouvernance des preuves" },
  },
  {
    dataRoom: { en: "Static folders", ar: "مجلدات ساكنة", fr: "Dossiers statiques" },
    hyrion: {
      en: "Structured evidence registry",
      ar: "سجل أدلة مُهيكل",
      fr: "Registre de preuves structuré",
    },
  },
  {
    dataRoom: { en: "Manual access", ar: "وصول يدوي", fr: "Accès manuel" },
    hyrion: {
      en: "Role-based access logic",
      ar: "منطق وصول قائم على الأدوار",
      fr: "Logique d'accès basée sur les rôles",
    },
  },
  {
    dataRoom: {
      en: "Unclear version history",
      ar: "سجل إصدارات غير واضح",
      fr: "Historique de versions flou",
    },
    hyrion: {
      en: "Version-controlled documents",
      ar: "مستندات بإدارة إصدارات",
      fr: "Documents avec contrôle de version",
    },
  },
  {
    dataRoom: { en: "No field chain", ar: "لا سلسلة ميدانية", fr: "Aucune chaîne de terrain" },
    hyrion: {
      en: "GPS / photo / sample / lab linkage",
      ar: "ربط GPS / صورة / عينة / مختبر",
      fr: "Liaison GPS / photo / échantillon / labo",
    },
  },
  {
    dataRoom: { en: "No decision gates", ar: "لا بوابات قرار", fr: "Aucun point de décision" },
    hyrion: {
      en: "Evidence-based escalation",
      ar: "تصعيد قائم على الأدلة",
      fr: "Escalade fondée sur les preuves",
    },
  },
  {
    dataRoom: { en: "Limited reporting", ar: "تقارير محدودة", fr: "Reporting limité" },
    hyrion: {
      en: "Institutional reporting",
      ar: "تقارير مؤسسية",
      fr: "Reporting institutionnel",
    },
  },
];

export const hyrionProcessFlow: LocalizedText[] = [
  { en: "Evidence intake", ar: "استقبال الأدلة", fr: "Réception des preuves" },
  { en: "Verification", ar: "التحقق", fr: "Vérification" },
  { en: "Registry", ar: "السجل", fr: "Registre" },
  { en: "Access control", ar: "ضبط الوصول", fr: "Contrôle d'accès" },
  { en: "Decision gates", ar: "بوابات القرار", fr: "Points de décision" },
  { en: "Reporting", ar: "إعداد التقارير", fr: "Reporting" },
  { en: "Acquisition readiness", ar: "الجاهزية للاستحواذ", fr: "Préparation à l'acquisition" },
];

export type HyrionFunction = { title: LocalizedText; description: LocalizedText };

export const hyrionFunctions: HyrionFunction[] = [
  {
    title: { en: "Evidence Registry", ar: "سجل الأدلة", fr: "Registre des preuves" },
    description: {
      en: "Every license, map, sample, assay, report, and decision is registered with ID, status, owner, and version.",
      ar: "تُسجَّل كل رخصة وخريطة وعينة وتحليل وتقرير وقرار مع معرّف وحالة ومالك وإصدار.",
      fr: "Chaque licence, carte, échantillon, analyse, rapport et décision est enregistré avec identifiant, statut, propriétaire et version.",
    },
  },
  {
    title: { en: "Data Permissions", ar: "صلاحيات البيانات", fr: "Permissions de données" },
    description: {
      en: "Access is controlled by role, phase, and clearance level.",
      ar: "يُضبط الوصول حسب الدور والمرحلة ومستوى التصريح.",
      fr: "L'accès est contrôlé par rôle, phase et niveau d'habilitation.",
    },
  },
  {
    title: {
      en: "Field Chain of Custody",
      ar: "سلسلة الحيازة الميدانية",
      fr: "Chaîne de conservation de terrain",
    },
    description: {
      en: "GPS, images, samples, lab results, and field notes are linked into one auditable record.",
      ar: "يُربط GPS والصور والعينات ونتائج المختبر والملاحظات الميدانية في سجل واحد قابل للتدقيق.",
      fr: "GPS, images, échantillons, résultats de laboratoire et notes de terrain sont liés en un seul enregistrement auditable.",
    },
  },
  {
    title: {
      en: "Budget-to-Work Tracking",
      ar: "تتبّع الميزانية مقابل الأعمال",
      fr: "Suivi budget-travaux",
    },
    description: {
      en: "Seed funds are connected to verified technical deliverables.",
      ar: "تُربط أموال التأسيس بمخرجات تقنية مُتحقَّق منها.",
      fr: "Les fonds d'amorçage sont reliés à des livrables techniques vérifiés.",
    },
  },
  {
    title: { en: "Decision Gates", ar: "بوابات القرار", fr: "Points de décision" },
    description: {
      en: "Technical and investment escalation is prevented without documented evidence.",
      ar: "يُمنع التصعيد التقني والاستثماري دون أدلة موثقة.",
      fr: "Toute escalade technique ou d'investissement est empêchée sans preuves documentées.",
    },
  },
  {
    title: { en: "Investor Reporting", ar: "تقارير المستثمرين", fr: "Reporting investisseurs" },
    description: {
      en: "Monthly and quarterly institutional reports can be generated.",
      ar: "يمكن توليد تقارير مؤسسية شهرية وربع سنوية.",
      fr: "Des rapports institutionnels mensuels et trimestriels peuvent être générés.",
    },
  },
  {
    title: { en: "Acquisition Readiness", ar: "الجاهزية للاستحواذ", fr: "Préparation à l'acquisition" },
    description: {
      en: "Mining cases are organized to be easier to review or acquire.",
      ar: "تُنظَّم حالات التعدين لتسهيل مراجعتها أو الاستحواذ عليها.",
      fr: "Les dossiers miniers sont organisés pour faciliter leur examen ou leur acquisition.",
    },
  },
  {
    title: { en: "Settlement Logic", ar: "منطق التسوية", fr: "Logique de règlement" },
    description: {
      en: "Rights, obligations, milestones, and exit events are documented.",
      ar: "تُوثَّق الحقوق والالتزامات والمعالم وأحداث الخروج.",
      fr: "Droits, obligations, jalons et événements de sortie sont documentés.",
    },
  },
];
