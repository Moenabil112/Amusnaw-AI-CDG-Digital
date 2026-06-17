import type { AccessKey, StatusKey } from "./accessLevels";

export type Product = {
  id: "isseksi" | "pr3538746";
  name: string;
  type: string;
  status: string;
  statusKey: StatusKey;
  access: string;
  accessKey: AccessKey;
  partner?: string;
  description: string;
  coreValue: string;
  cta: string;
  /** anchor id of the dedicated section */
  sectionId: string;
};

/** Source: 05_ISSEKSI_READY_PRODUCT_SHEET.md & 06_PR3538746_SMART_FAULT_MVP_SHEET.md */
export const products: Product[] = [
  {
    id: "isseksi",
    name: "Isseksi Copper Intelligence",
    type: "Ready Mining Intelligence & Governance Product",
    status: "Ready Product",
    statusKey: "ready",
    access: "Controlled",
    accessKey: "controlled",
    partner: "Atlas Mining",
    description:
      "A governed mining intelligence product connected to Atlas Mining and an existing mandate.",
    coreValue:
      "Governed mining product room, license intelligence, evidence architecture, and HYRION-ready decision support.",
    cta: "View Isseksi Product",
    sectionId: "isseksi",
  },
  {
    id: "pr3538746",
    name: "PR3538746 Smart Fault Exploration",
    type: "R&D-ready Smart Exploration MVP",
    status: "MVP / R&D-ready",
    statusKey: "technical-review",
    access: "Controlled / NDA",
    accessKey: "nda",
    description:
      "An AI-assisted fault-controlled exploration demonstrator using QASSAS and HYRION.",
    coreValue:
      "AI-assisted fault-controlled target intelligence using QASSAS, HYRION, geochemistry, geophysics, and field evidence.",
    cta: "View PR3538746 MVP",
    sectionId: "pr3538746",
  },
];
