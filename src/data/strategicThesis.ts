import type { LocalizedText } from "../i18n";

/** Source: 02_CDG_STRATEGIC_ENTRY_MEMO.md §2 + master prompt §8. */

export const thesisDescription: LocalizedText = {
  en: "Many early-stage mining opportunities face the same structural problem — and the answer is infrastructure, not another permit.",
  ar: "تواجه العديد من فرص التعدين في مراحلها المبكرة المشكلة الهيكلية نفسها — والجواب هو البنية التحتية، لا رخصة إضافية.",
  fr: "De nombreuses opportunités minières en phase initiale rencontrent le même problème structurel — et la réponse est l'infrastructure, non un permis de plus.",
};

export const thesisGap: LocalizedText[] = [
  {
    en: "Fragmented geological documents",
    ar: "وثائق جيولوجية مجزّأة",
    fr: "Documents géologiques fragmentés",
  },
  {
    en: "Scattered GIS and evidence files",
    ar: "ملفات GIS وأدلة متناثرة",
    fr: "Fichiers GIS et preuves dispersés",
  },
  {
    en: "Weak evidence traceability",
    ar: "ضعف في تتبّع الأدلة",
    fr: "Faible traçabilité des preuves",
  },
  {
    en: "Uncontrolled data sharing",
    ar: "مشاركة بيانات غير مضبوطة",
    fr: "Partage de données non maîtrisé",
  },
  {
    en: "Slow conversion from field evidence to investment decisions",
    ar: "بطء التحول من الأدلة الميدانية إلى قرارات الاستثمار",
    fr: "Conversion lente des preuves de terrain en décisions d'investissement",
  },
  {
    en: "Limited investor-grade mining intelligence",
    ar: "محدودية استخبارات التعدين بمستوى يلائم المستثمرين",
    fr: "Intelligence minière de qualité investisseur limitée",
  },
];

export const thesisSolution: LocalizedText = {
  en: "Amusnaw AI SA organizes mining evidence into governed, searchable, auditable, and institutionally reviewable intelligence.",
  ar: "تنظّم Amusnaw AI SA أدلة التعدين في استخبارات محوكمة وقابلة للبحث والتدقيق والمراجعة المؤسسية.",
  fr: "Amusnaw AI SA organise les preuves minières en une intelligence gouvernée, consultable, auditable et examinable au niveau institutionnel.",
};

export type ThesisColumn = {
  step: string;
  title: LocalizedText;
  body: LocalizedText;
};

export const thesisColumns: ThesisColumn[] = [
  {
    step: "01",
    title: {
      en: "Fragmented Evidence",
      ar: "أدلة مجزّأة",
      fr: "Preuves fragmentées",
    },
    body: {
      en: "Geological documents, GIS layers, lab assays, and field records sit scattered across formats with weak traceability and uncontrolled sharing.",
      ar: "تتناثر الوثائق الجيولوجية وطبقات GIS والتحاليل المخبرية والسجلات الميدانية عبر صيغ متعددة مع ضعف التتبّع ومشاركة غير مضبوطة.",
      fr: "Documents géologiques, couches GIS, analyses de laboratoire et relevés de terrain restent éparpillés entre les formats, avec une faible traçabilité et un partage non maîtrisé.",
    },
  },
  {
    step: "02",
    title: {
      en: "Governed Intelligence",
      ar: "استخبارات محوكمة",
      fr: "Intelligence gouvernée",
    },
    body: {
      en: "HYRION registers, verifies, permissions, and version-controls every evidence item; QASSAS turns it into ranked, decision-ready intelligence.",
      ar: "يسجّل HYRION كل عنصر دليل ويتحقق منه ويضبط صلاحياته وإصداراته؛ ويحوّله QASSAS إلى استخبارات مُرتّبة جاهزة للقرار.",
      fr: "HYRION enregistre, vérifie, gère les permissions et le versionnage de chaque preuve ; QASSAS la transforme en intelligence classée, prête pour la décision.",
    },
  },
  {
    step: "03",
    title: {
      en: "Institutional Decision Support",
      ar: "دعم القرار المؤسسي",
      fr: "Aide à la décision institutionnelle",
    },
    body: {
      en: "Mining evidence becomes searchable, auditable, and reviewable — ready for institutional review, capital structuring, and a CDG scale decision.",
      ar: "تصبح أدلة التعدين قابلة للبحث والتدقيق والمراجعة — جاهزة للمراجعة المؤسسية وهيكلة رأس المال وقرار التوسع مع CDG.",
      fr: "Les preuves minières deviennent consultables, auditables et examinables — prêtes pour l'examen institutionnel, la structuration du capital et une décision d'échelle de la CDG.",
    },
  },
];
