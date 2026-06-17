/** Source: 02_CDG_STRATEGIC_ENTRY_MEMO.md §2 + master prompt §8. */

export const thesisStatement =
  "Morocco does not only need more mining permits. Morocco needs better mining data infrastructure.";

export const thesisGap: string[] = [
  "Fragmented geological documents",
  "Scattered GIS and evidence files",
  "Weak evidence traceability",
  "Uncontrolled data sharing",
  "Slow conversion from field evidence to investment decisions",
  "Limited investor-grade mining intelligence",
];

export const thesisSolution =
  "Amusnaw AI SA organizes mining evidence into governed, searchable, auditable, and institutionally reviewable intelligence.";

export type ThesisColumn = {
  step: string;
  title: string;
  body: string;
};

export const thesisColumns: ThesisColumn[] = [
  {
    step: "01",
    title: "Fragmented Evidence",
    body: "Geological documents, GIS layers, lab assays, and field records sit scattered across formats with weak traceability and uncontrolled sharing.",
  },
  {
    step: "02",
    title: "Governed Intelligence",
    body: "HYRION registers, verifies, permissions, and version-controls every evidence item; QASSAS turns it into ranked, decision-ready intelligence.",
  },
  {
    step: "03",
    title: "Institutional Decision Support",
    body: "Mining evidence becomes searchable, auditable, and reviewable — ready for institutional review, capital structuring, and a CDG scale decision.",
  },
];
