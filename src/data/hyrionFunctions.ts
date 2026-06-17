/** Source: 07_HYRION_INFRASTRUCTURE_NOTE.md. */

export const hyrionPositioning =
  "HYRION is the operating system for mining evidence governance — not a traditional data room.";

export type Comparison = { dataRoom: string; hyrion: string };

export const hyrionComparison: Comparison[] = [
  { dataRoom: "File storage", hyrion: "Evidence governance" },
  { dataRoom: "Static folders", hyrion: "Structured evidence registry" },
  { dataRoom: "Manual access", hyrion: "Role-based access logic" },
  { dataRoom: "Unclear version history", hyrion: "Version-controlled documents" },
  { dataRoom: "No field chain", hyrion: "GPS / photo / sample / lab linkage" },
  { dataRoom: "No decision gates", hyrion: "Evidence-based escalation" },
  { dataRoom: "Limited reporting", hyrion: "Institutional reporting" },
];

export const hyrionProcessFlow: string[] = [
  "Evidence intake",
  "Verification",
  "Registry",
  "Access control",
  "Decision gates",
  "Reporting",
  "Acquisition readiness",
];

export type HyrionFunction = { title: string; description: string };

export const hyrionFunctions: HyrionFunction[] = [
  {
    title: "Evidence Registry",
    description:
      "Every license, map, sample, assay, report, and decision is registered with ID, status, owner, and version.",
  },
  {
    title: "Data Permissions",
    description: "Access is controlled by role, phase, and clearance level.",
  },
  {
    title: "Field Chain of Custody",
    description:
      "GPS, images, samples, lab results, and field notes are linked into one auditable record.",
  },
  {
    title: "Budget-to-Work Tracking",
    description: "Seed funds are connected to verified technical deliverables.",
  },
  {
    title: "Decision Gates",
    description: "Technical and investment escalation is prevented without documented evidence.",
  },
  {
    title: "Investor Reporting",
    description: "Monthly and quarterly institutional reports can be generated.",
  },
  {
    title: "Acquisition Readiness",
    description: "Mining cases are organized to be easier to review or acquire.",
  },
  {
    title: "Settlement Logic",
    description: "Rights, obligations, milestones, and exit events are documented.",
  },
];
