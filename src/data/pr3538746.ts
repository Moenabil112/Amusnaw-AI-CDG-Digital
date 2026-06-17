/** Source: 06_PR3538746_SMART_FAULT_MVP_SHEET.md. */

export const pr3538746Message =
  "PR3538746 is not presented as a proven mineral asset. It is presented as a disciplined smart exploration MVP for AI-assisted fault-controlled target generation.";

export const pr3538746Caution =
  "This MVP does not claim a proven resource, guaranteed discovery, or immediate mine development.";

/** QASSAS modules exercised by the MVP. */
export const pr3538746Modules: string[] = [
  "Fault Corridor Intelligence",
  "Drainage Backtracking",
  "Multi-Element Pathfinder Ranking",
  "Smart Sampling Planner",
  "Geophysical Line Planner",
  "AI Target Score",
  "Drill Collar Recommender",
  "Field Evidence Capture",
];

/** Expected MVP outputs. */
export const pr3538746Outputs: string[] = [
  "Target Book",
  "Fault Corridor Ranking",
  "Multi-Element Pathfinder Matrix",
  "Smart Sampling Plan",
  "Geophysics Line Plan",
  "HYRION Evidence Registry",
  "90-Day Validation Plan",
  "180-Day Drill-Readiness Recommendation",
];

export type ValidationPhase = { window: string; title: string; items: string[] };

export const pr3538746Validation: ValidationPhase[] = [
  {
    window: "Days 1–30",
    title: "Data Structuring",
    items: [
      "Digitize available documents",
      "Build GIS baseline & sample database",
      "Create initial evidence registry",
    ],
  },
  {
    window: "Days 31–60",
    title: "Target Intelligence",
    items: [
      "Build multi-element anomaly matrix",
      "Run drainage backtracking & rank fault corridors",
      "Define smart sampling and geophysics planning",
    ],
  },
  {
    window: "Days 61–90",
    title: "MVP Review",
    items: [
      "Produce initial Target Book",
      "Prepare field validation plan",
      "Present CDG review dashboard",
    ],
  },
];
