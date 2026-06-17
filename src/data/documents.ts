import type { LocalizedText } from "../i18n";
import type { AccessKey, StatusKey } from "./accessLevels";

/**
 * Document Center index. Mirrors the 10-file ZIP package
 * (04_DOCUMENT_PACKAGE_INDEX.md §15). Files are NOT exposed by default — the
 * `file` path points at /documents/* and is gated behind access labels.
 * In v0.1 the preview/download is a controlled placeholder; real gating is a
 * HYRION responsibility.
 *
 * `category` is a stable English key (used for filtering); display labels are
 * localized via `documentCategoryLabels`.
 */

export type DocCategory =
  | "Strategic Entry"
  | "Corporate & Governance"
  | "Product Documents"
  | "Technical Demonstrator"
  | "Technology Infrastructure"
  | "CDG Communication"
  | "Legal / IP / Cap Table";

export type DocumentCard = {
  id: string;
  number: string;
  title: LocalizedText;
  category: DocCategory;
  status: StatusKey;
  access: AccessKey;
  description: LocalizedText;
  /** Local reference only — gated, not a public link in v0.1. */
  file: string;
};

export const documentCategories: DocCategory[] = [
  "Strategic Entry",
  "Corporate & Governance",
  "Product Documents",
  "Technical Demonstrator",
  "Technology Infrastructure",
  "CDG Communication",
  "Legal / IP / Cap Table",
];

export const documentCategoryLabels: Record<DocCategory, LocalizedText> = {
  "Strategic Entry": {
    en: "Strategic Entry",
    ar: "الدخول الاستراتيجي",
    fr: "Entrée stratégique",
  },
  "Corporate & Governance": {
    en: "Corporate & Governance",
    ar: "الشركة والحوكمة",
    fr: "Société et gouvernance",
  },
  "Product Documents": {
    en: "Product Documents",
    ar: "وثائق المنتجات",
    fr: "Documents produits",
  },
  "Technical Demonstrator": {
    en: "Technical Demonstrator",
    ar: "النموذج التقني",
    fr: "Démonstrateur technique",
  },
  "Technology Infrastructure": {
    en: "Technology Infrastructure",
    ar: "البنية التحتية التقنية",
    fr: "Infrastructure technologique",
  },
  "CDG Communication": {
    en: "CDG Communication",
    ar: "التواصل مع CDG",
    fr: "Communication CDG",
  },
  "Legal / IP / Cap Table": {
    en: "Legal / IP / Cap Table",
    ar: "القانوني / الملكية الفكرية / جدول الملكية",
    fr: "Juridique / PI / Table de capitalisation",
  },
};

export const documents: DocumentCard[] = [
  {
    id: "context-knowledge-base",
    number: "01",
    title: {
      en: "Context & Knowledge Base",
      ar: "السياق وقاعدة المعرفة",
      fr: "Contexte et base de connaissances",
    },
    category: "Strategic Entry",
    status: "ready",
    access: "nda",
    description: {
      en: "Master context and preserved strategic knowledge for the SPV, products, and CDG entry logic.",
      ar: "السياق الرئيسي والمعرفة الاستراتيجية المحفوظة للـ SPV والمنتجات ومنطق دخول CDG.",
      fr: "Contexte principal et savoir stratégique préservé pour la SPV, les produits et la logique d'entrée de la CDG.",
    },
    file: "/documents/01_AMUSNAW_CONTEXT_KNOWLEDGE_BASE.md",
  },
  {
    id: "cdg-strategic-entry-memo",
    number: "02",
    title: {
      en: "CDG Strategic Entry Memo",
      ar: "مذكرة الدخول الاستراتيجي لـ CDG",
      fr: "Note d'entrée stratégique CDG",
    },
    category: "Strategic Entry",
    status: "ready",
    access: "controlled",
    description: {
      en: "Main institutional memo: CDG is invited to co-build mining data infrastructure, not finance an experiment.",
      ar: "المذكرة المؤسسية الرئيسية: تُدعى CDG لبناء البنية التحتية لبيانات التعدين بشكل مشترك، لا لتمويل تجربة.",
      fr: "Note institutionnelle principale : la CDG est invitée à co-construire l'infrastructure de données minières, non à financer une expérience.",
    },
    file: "/documents/02_CDG_STRATEGIC_ENTRY_MEMO.md",
  },
  {
    id: "digital-window-architecture",
    number: "03",
    title: {
      en: "Digital Window Architecture",
      ar: "معمارية النافذة الرقمية",
      fr: "Architecture de la fenêtre numérique",
    },
    category: "Technology Infrastructure",
    status: "ready",
    access: "nda",
    description: {
      en: "Blueprint for the controlled institutional digital window and its modules.",
      ar: "مخطط النافذة الرقمية المؤسسية المضبوطة ووحداتها.",
      fr: "Plan de la fenêtre numérique institutionnelle contrôlée et de ses modules.",
    },
    file: "/documents/03_DIGITAL_WINDOW_ARCHITECTURE.md",
  },
  {
    id: "document-package-index",
    number: "04",
    title: {
      en: "Document Package Index",
      ar: "فهرس حزمة المستندات",
      fr: "Index du dossier documentaire",
    },
    category: "Strategic Entry",
    status: "ready",
    access: "controlled",
    description: {
      en: "Full document architecture: categories, access levels, and status labels.",
      ar: "معمارية المستندات الكاملة: الفئات ومستويات الوصول وعلامات الحالة.",
      fr: "Architecture documentaire complète : catégories, niveaux d'accès et libellés de statut.",
    },
    file: "/documents/04_DOCUMENT_PACKAGE_INDEX.md",
  },
  {
    id: "isseksi-product-sheet",
    number: "05",
    title: {
      en: "Isseksi Product Sheet",
      ar: "ورقة منتج Isseksi",
      fr: "Fiche produit Isseksi",
    },
    category: "Product Documents",
    status: "ready",
    access: "controlled",
    description: {
      en: "Isseksi Copper Intelligence as the ready mining intelligence & governance product.",
      ar: "Isseksi Copper Intelligence بوصفه المنتج الجاهز في استخبارات التعدين والحوكمة.",
      fr: "Isseksi Copper Intelligence en tant que produit prêt d'intelligence minière et de gouvernance.",
    },
    file: "/documents/05_ISSEKSI_READY_PRODUCT_SHEET.md",
  },
  {
    id: "pr3538746-mvp-sheet",
    number: "06",
    title: {
      en: "Aguelmous Demonstrator Sheet",
      ar: "ورقة نموذج أگلموس",
      fr: "Fiche du démonstrateur Aguelmous",
    },
    category: "Product Documents",
    status: "technical-review",
    access: "nda",
    description: {
      en: "Aguelmous Smart Fault Demonstrator (permit reference PR3538746) as the R&D-ready smart exploration MVP.",
      ar: "نموذج أگلموس للاستكشاف الذكي للفوالق (مرجع الرخصة PR3538746) بوصفه نموذج MVP للاستكشاف جاهزًا للبحث والتطوير.",
      fr: "Démonstrateur d'exploration intelligente Aguelmous (référence du permis PR3538746) en tant que MVP prêt pour la R&D.",
    },
    file: "/documents/06_PR3538746_SMART_FAULT_MVP_SHEET.md",
  },
  {
    id: "hyrion-infrastructure-note",
    number: "07",
    title: {
      en: "HYRION Infrastructure Note",
      ar: "مذكرة بنية HYRION التحتية",
      fr: "Note d'infrastructure HYRION",
    },
    category: "Technology Infrastructure",
    status: "ready",
    access: "controlled",
    description: {
      en: "HYRION as the evidence-governance operating system for mining data.",
      ar: "HYRION بوصفه نظام تشغيل حوكمة الأدلة لبيانات التعدين.",
      fr: "HYRION en tant que système d'exploitation de gouvernance des preuves pour les données minières.",
    },
    file: "/documents/07_HYRION_INFRASTRUCTURE_NOTE.md",
  },
  {
    id: "qassas-morocco-note",
    number: "08",
    title: {
      en: "QASSAS Morocco Adaptation Note",
      ar: "مذكرة تكييف QASSAS مع المغرب",
      fr: "Note d'adaptation QASSAS Maroc",
    },
    category: "Technology Infrastructure",
    status: "ready",
    access: "controlled",
    description: {
      en: "Applied QASSAS modules adapted to Moroccan geology and exploration logic.",
      ar: "وحدات QASSAS التطبيقية المُكيّفة مع الجيولوجيا ومنطق الاستكشاف المغربي.",
      fr: "Modules QASSAS appliqués, adaptés à la géologie et à la logique d'exploration marocaines.",
    },
    file: "/documents/08_QASSAS_MOROCCO_ADAPTATION_NOTE.md",
  },
  {
    id: "cdg-meeting-qa-brief",
    number: "09",
    title: {
      en: "CDG Meeting & Q&A Brief",
      ar: "موجز اجتماع CDG والأسئلة والأجوبة",
      fr: "Note de réunion et Q&R CDG",
    },
    category: "CDG Communication",
    status: "cdg-review",
    access: "cdg-review",
    description: {
      en: "Meeting script and anticipated questions for the first CDG conversation.",
      ar: "سيناريو الاجتماع والأسئلة المتوقعة لأول حوار مع CDG.",
      fr: "Script de réunion et questions anticipées pour la première discussion avec la CDG.",
    },
    file: "/documents/09_CDG_MEETING_AND_QA_BRIEF.md",
  },
  {
    id: "master-digital-window-prompt",
    number: "10",
    title: {
      en: "Master Digital Window Prompt",
      ar: "موجِّه النافذة الرقمية الرئيسي",
      fr: "Prompt maître de la fenêtre numérique",
    },
    category: "Technology Infrastructure",
    status: "ready",
    access: "nda",
    description: {
      en: "Build prompt and functional specification for the digital window front end.",
      ar: "موجِّه البناء والمواصفات الوظيفية لواجهة النافذة الرقمية.",
      fr: "Prompt de construction et spécification fonctionnelle du front-end de la fenêtre numérique.",
    },
    file: "/documents/10_MASTER_DIGITAL_WINDOW_PROMPT.md",
  },
];
