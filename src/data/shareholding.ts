/** Source: 01_CONTEXT §10 / 02_MEMO §12 / §15. */

export type SeedItem = { item: string; value: string; highlight?: boolean };

/** CDG seed structure summary (CDG Entry section). */
export const seedStructure: SeedItem[] = [
  {
    item: "Seed Infrastructure Commitment",
    value: "USD 350,000",
    highlight: true,
  },
  { item: "Proposed CDG Position", value: "30%" },
  { item: "Month 18 Option", value: "Step-up to 51%" },
  { item: "Month 36 Option", value: "Step-up to 85%" },
  { item: "Founder Continuity Stake", value: "15%" },
];

export type ShareholdingRow = { party: string; allocation: string; pct: number };

/** Post-seed allocation. */
export const postSeedShareholding: ShareholdingRow[] = [
  { party: "CDG Invest / CDG Vehicle", allocation: "30%", pct: 30 },
  { party: "AKANIL", allocation: "16%", pct: 16 },
  { party: "Atlas Mining", allocation: "16%", pct: 16 },
  { party: "ZYNTRA Deeptech Saudi", allocation: "8%", pct: 8 },
  { party: "Founder / Originator Class", allocation: "16%", pct: 16 },
  { party: "Strategic / Technical Reserve", allocation: "14%", pct: 14 },
];

export type StepUpStage = { stage: string; position: string };

export const stepUpPathway: StepUpStage[] = [
  { stage: "Seed Entry", position: "CDG 30%" },
  { stage: "Month 18", position: "Option to increase to 51%" },
  { stage: "Month 36", position: "Option to increase up to 85%" },
];

export const founderContinuityNote =
  "Founder retains a 15% Strategic Continuity Stake to preserve knowledge continuity, technical alignment, and long-term strategic coherence.";

export const shareholdingLegalNote =
  "All ownership, IP, and step-up terms remain subject to legal review and final documentation.";

/** Use-of-funds breakdown for the Seed Infrastructure Commitment. */
export const seedBudget: { item: string; amount: string }[] = [
  { item: "Amusnaw AI SA incorporation & governance charter", amount: "USD 25,000" },
  { item: "HYRION Mining Data Infrastructure v1", amount: "USD 70,000" },
  { item: "Isseksi Copper Intelligence product packaging", amount: "USD 45,000" },
  { item: "PR3538746 Smart Fault MVP packaging", amount: "USD 45,000" },
  { item: "QASSAS Morocco adaptation", amount: "USD 55,000" },
  { item: "GIS, geochemical & geophysical data layer", amount: "USD 35,000" },
  { item: "CDG institutional dashboard & reporting", amount: "USD 25,000" },
  { item: "Legal & IP contribution valuation", amount: "USD 20,000" },
  { item: "Field verification reserve", amount: "USD 20,000" },
  { item: "Contingency", amount: "USD 10,000" },
];

export const seedNote =
  "The USD 350,000 is not exploration CAPEX. It is a Seed Infrastructure Commitment to build the company, productize the two launch products, deploy HYRION v1, adapt QASSAS to Morocco, and prepare a CDG scale decision pack.";
