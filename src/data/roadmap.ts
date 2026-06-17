/** Source: 01_CONTEXT §13 / 02_MEMO §14. Six-Month Delivery Roadmap. */

export type RoadmapMilestone = {
  month: string;
  title: string;
  deliverable: string;
  detail: string[];
};

export const roadmap: RoadmapMilestone[] = [
  {
    month: "Month 1",
    title: "Corporate & Governance Setup",
    deliverable: "Incorporation & governance charter",
    detail: [
      "Incorporate Amusnaw AI SA",
      "Prepare shareholder framework",
      "Document IP contributions",
      "Define CDG reporting layer",
    ],
  },
  {
    month: "Month 2",
    title: "Isseksi Product Room",
    deliverable: "Ready Mining Intelligence & Governance Product",
    detail: [
      "Package Isseksi product environment",
      "Structure evidence & governance layers",
      "Prepare CDG-ready product demo",
    ],
  },
  {
    month: "Month 3",
    title: "PR3538746 MVP Framework",
    deliverable: "Smart Fault targeting framework",
    detail: [
      "Digitize existing evidence",
      "Prepare structural / geochemical targeting model",
      "Define R&D validation workflow",
    ],
  },
  {
    month: "Month 4",
    title: "HYRION Infrastructure v1",
    deliverable: "Evidence registry & decision gates",
    detail: [
      "Deploy evidence registry",
      "Configure permissions & decision gates",
      "Link budget-to-work tracking",
    ],
  },
  {
    month: "Month 5",
    title: "QASSAS Morocco v1",
    deliverable: "Exploration intelligence adaptation",
    detail: [
      "Adapt QASSAS to Moroccan geology",
      "Build target scoring logic",
      "Prepare sampling & geophysics planning",
    ],
  },
  {
    month: "Month 6",
    title: "CDG Review & Scale Decision",
    deliverable: "Scale decision pack",
    detail: [
      "Deliver Isseksi Product Room & PR3538746 Target Book",
      "Deliver HYRION infrastructure & QASSAS Morocco v1",
      "Present scale decision: continue / expand / step-up",
    ],
  },
];
