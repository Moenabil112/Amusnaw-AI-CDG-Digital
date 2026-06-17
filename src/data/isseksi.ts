import type { LocalizedText } from "../i18n";

/** Source: 05_ISSEKSI_READY_PRODUCT_SHEET.md. */

export const isseksiMessage: LocalizedText = {
  en: "Isseksi Copper Intelligence proves that Amusnaw AI SA is not launching with a concept. It is launching with a governed, interactive, investor-grade mining intelligence product.",
  ar: "يثبت Isseksi Copper Intelligence أن Amusnaw AI SA لا تنطلق بمجرد فكرة، بل بمنتج استخبارات تعدين محوكم وتفاعلي بمستوى يلائم المستثمرين.",
  fr: "Isseksi Copper Intelligence prouve qu'Amusnaw AI SA ne se lance pas avec un concept, mais avec un produit d'intelligence minière gouverné, interactif et de qualité investisseur.",
};

export type FeatureCard = { title: LocalizedText; description: LocalizedText };

export const isseksiCards: FeatureCard[] = [
  {
    title: { en: "Atlas Mining Connection", ar: "الارتباط بـ Atlas Mining", fr: "Lien avec Atlas Mining" },
    description: {
      en: "Connected to a mining partner with 22 years of experience across more than four countries — operational credibility, not theory.",
      ar: "مرتبط بشريك تعدين بخبرة 22 سنة في أكثر من أربع دول — مصداقية تشغيلية لا نظرية.",
      fr: "Lié à un partenaire minier fort de 22 ans d'expérience dans plus de quatre pays — une crédibilité opérationnelle, non théorique.",
    },
  },
  {
    title: { en: "Direct Mandate Context", ar: "سياق التفويض المباشر", fr: "Contexte de mandat direct" },
    description: {
      en: "Linked to an existing mandate so Isseksi reads as a real mining case, not a disconnected digital presentation.",
      ar: "مرتبط بتفويض قائم بحيث يُقرأ Isseksi كحالة تعدين حقيقية، لا كعرض رقمي منفصل.",
      fr: "Adossé à un mandat existant, Isseksi se lit comme un véritable cas minier, et non comme une présentation numérique déconnectée.",
    },
  },
  {
    title: { en: "License Intelligence", ar: "استخبارات الرخص", fr: "Intelligence des licences" },
    description: {
      en: "License identity, documents, and review status organized for institutional reading.",
      ar: "هوية الرخصة ووثائقها وحالة مراجعتها منظمة للقراءة المؤسسية.",
      fr: "Identité de la licence, documents et statut d'examen organisés pour une lecture institutionnelle.",
    },
  },
  {
    title: { en: "Evidence Mapping", ar: "تخطيط الأدلة", fr: "Cartographie des preuves" },
    description: {
      en: "Evidence cards marked by status and access level, previewed only under the right clearance.",
      ar: "بطاقات أدلة موسومة بالحالة ومستوى الوصول، تُعاين فقط بالتصريح المناسب.",
      fr: "Fiches de preuves marquées par statut et niveau d'accès, prévisualisées uniquement avec l'habilitation requise.",
    },
  },
  {
    title: { en: "GIS Visualization", ar: "التصور عبر GIS", fr: "Visualisation GIS" },
    description: {
      en: "License boundary and site context as an interactive map placeholder, ready for GeoJSON in a future HYRION version.",
      ar: "حدود الرخصة وسياق الموقع كعنصر خريطة تفاعلية مؤقت، جاهز لـ GeoJSON في إصدار HYRION لاحق.",
      fr: "Limite de licence et contexte du site sous forme de carte interactive temporaire, prête pour GeoJSON dans une future version HYRION.",
    },
  },
  {
    title: { en: "Capital Architecture", ar: "معمارية رأس المال", fr: "Architecture du capital" },
    description: {
      en: "An institutional structuring display — never framed as a public fundraising offer.",
      ar: "عرض لهيكلة مؤسسية — لا يُقدَّم إطلاقًا كعرض جمع تبرعات عام.",
      fr: "Une présentation de structuration institutionnelle — jamais présentée comme une offre publique de levée de fonds.",
    },
  },
  {
    title: { en: "HYRION Governance", ar: "حوكمة HYRION", fr: "Gouvernance HYRION" },
    description: {
      en: "Evidence registry, permissions, decision gates, and versioning turn a document package into a governed product.",
      ar: "سجل الأدلة والصلاحيات وبوابات القرار وإدارة الإصدارات تحوّل حزمة مستندات إلى منتج محوكم.",
      fr: "Registre des preuves, permissions, points de décision et versionnage transforment un dossier documentaire en un produit gouverné.",
    },
  },
  {
    title: { en: "Controlled Product Room", ar: "غرفة المنتج المضبوطة", fr: "Salle produit contrôlée" },
    description: {
      en: "A staged, access-gated room: overview pre-NDA, deeper layers under NDA and CDG review.",
      ar: "غرفة مُدرّجة محكومة بالوصول: نظرة عامة قبل NDA، وطبقات أعمق تحت NDA ومراجعة CDG.",
      fr: "Une salle échelonnée à accès restreint : aperçu en pré-NDA, couches plus profondes sous NDA et examen CDG.",
    },
  },
];
