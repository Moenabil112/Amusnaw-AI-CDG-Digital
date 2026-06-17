/** Source: 08_QASSAS_MOROCCO_ADAPTATION_NOTE.md. */

export const qassasPositioning =
  "QASSAS is the exploration intelligence layer adapted to Moroccan geology. HYRION governs evidence; QASSAS interprets it.";

export type QassasModule = { title: string; application: string };

export const qassasModules: QassasModule[] = [
  {
    title: "Fault Corridor Intelligence",
    application:
      "Ranks structural corridors using maps, DEM, satellite data, and field evidence.",
  },
  {
    title: "Drainage Backtracking",
    application:
      "Traces stream-sediment anomalies upstream to likely source zones.",
  },
  {
    title: "Multi-Element Pathfinder Ranking",
    application: "Interprets Pb-Zn-Sb-Cu-Ag-As-Mo-Zn associations.",
  },
  {
    title: "Smart Sampling Planner",
    application:
      "Recommends soil, rock-chip, and stream-sediment follow-up points.",
  },
  {
    title: "Geophysical Line Planner",
    application: "Proposes IP, resistivity, and magnetics profiles.",
  },
  {
    title: "AI Target Score",
    application:
      "Scores targets by structure, geochemistry, geology, access, and evidence confidence.",
  },
  {
    title: "Drill Collar Recommender",
    application: "Suggests scout drilling positions after validation.",
  },
  {
    title: "Field Evidence Capture",
    application:
      "Links every field observation to GPS, image, note, and evidence record.",
  },
  {
    title: "Morocco-to-Africa Replication",
    application:
      "Converts the Moroccan model into a replicable African mining-intelligence service.",
  },
];

export const qassasNote =
  "QASSAS supports expert-reviewed exploration decisions. It does not replace geologists, engineers, laboratory validation, or regulatory review.";
