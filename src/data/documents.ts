import type { AccessKey, StatusKey } from "./accessLevels";

/**
 * Document Center index. Mirrors the 10-file ZIP package
 * (04_DOCUMENT_PACKAGE_INDEX.md §15). Files are NOT exposed by default — the
 * `file` path points at /documents/* and is gated behind access labels.
 * In v0.1 the preview/download is a controlled placeholder; real gating is a
 * HYRION responsibility.
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
  title: string;
  category: DocCategory;
  status: StatusKey;
  access: AccessKey;
  description: string;
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

export const documents: DocumentCard[] = [
  {
    id: "context-knowledge-base",
    number: "01",
    title: "Context & Knowledge Base",
    category: "Strategic Entry",
    status: "ready",
    access: "nda",
    description:
      "Master context and preserved strategic knowledge for the SPV, products, and CDG entry logic.",
    file: "/documents/01_AMUSNAW_CONTEXT_KNOWLEDGE_BASE.md",
  },
  {
    id: "cdg-strategic-entry-memo",
    number: "02",
    title: "CDG Strategic Entry Memo",
    category: "Strategic Entry",
    status: "ready",
    access: "controlled",
    description:
      "Main institutional memo: CDG is invited to co-build mining data infrastructure, not finance an experiment.",
    file: "/documents/02_CDG_STRATEGIC_ENTRY_MEMO.md",
  },
  {
    id: "digital-window-architecture",
    number: "03",
    title: "Digital Window Architecture",
    category: "Technology Infrastructure",
    status: "ready",
    access: "nda",
    description:
      "Blueprint for the controlled institutional digital window and its modules.",
    file: "/documents/03_DIGITAL_WINDOW_ARCHITECTURE.md",
  },
  {
    id: "document-package-index",
    number: "04",
    title: "Document Package Index",
    category: "Strategic Entry",
    status: "ready",
    access: "controlled",
    description:
      "Full document architecture: categories, access levels, and status labels.",
    file: "/documents/04_DOCUMENT_PACKAGE_INDEX.md",
  },
  {
    id: "isseksi-product-sheet",
    number: "05",
    title: "Isseksi Product Sheet",
    category: "Product Documents",
    status: "ready",
    access: "controlled",
    description:
      "Isseksi Copper Intelligence as the ready mining intelligence & governance product.",
    file: "/documents/05_ISSEKSI_READY_PRODUCT_SHEET.md",
  },
  {
    id: "pr3538746-mvp-sheet",
    number: "06",
    title: "PR3538746 MVP Sheet",
    category: "Product Documents",
    status: "technical-review",
    access: "nda",
    description:
      "PR3538746 Smart Fault Exploration as the R&D-ready smart exploration MVP.",
    file: "/documents/06_PR3538746_SMART_FAULT_MVP_SHEET.md",
  },
  {
    id: "hyrion-infrastructure-note",
    number: "07",
    title: "HYRION Infrastructure Note",
    category: "Technology Infrastructure",
    status: "ready",
    access: "controlled",
    description:
      "HYRION as the evidence-governance operating system for mining data.",
    file: "/documents/07_HYRION_INFRASTRUCTURE_NOTE.md",
  },
  {
    id: "qassas-morocco-note",
    number: "08",
    title: "QASSAS Morocco Adaptation Note",
    category: "Technology Infrastructure",
    status: "ready",
    access: "controlled",
    description:
      "Applied QASSAS modules adapted to Moroccan geology and exploration logic.",
    file: "/documents/08_QASSAS_MOROCCO_ADAPTATION_NOTE.md",
  },
  {
    id: "cdg-meeting-qa-brief",
    number: "09",
    title: "CDG Meeting & Q&A Brief",
    category: "CDG Communication",
    status: "cdg-review",
    access: "cdg-review",
    description:
      "Meeting script and anticipated questions for the first CDG conversation.",
    file: "/documents/09_CDG_MEETING_AND_QA_BRIEF.md",
  },
  {
    id: "master-digital-window-prompt",
    number: "10",
    title: "Master Digital Window Prompt",
    category: "Technology Infrastructure",
    status: "ready",
    access: "nda",
    description:
      "Build prompt and functional specification for the digital window front end.",
    file: "/documents/10_MASTER_DIGITAL_WINDOW_PROMPT.md",
  },
];
