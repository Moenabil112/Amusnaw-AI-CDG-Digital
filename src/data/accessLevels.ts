/**
 * Access-level and status taxonomy for the controlled institutional window.
 *
 * Access is SIMULATED in v0.1 — there is no authentication. Each document,
 * product, and room carries a visible access label and (where relevant) a
 * lock indicator. Real role-based access, NDA tracking, and access logs are
 * deferred to the HYRION integration (see README "Future path").
 */

export type AccessKey =
  | "pre-nda"
  | "controlled"
  | "nda"
  | "cdg-review"
  | "legal-review";

export type StatusKey =
  | "ready"
  | "draft"
  | "planned"
  | "cdg-review"
  | "technical-review"
  | "legal-review";

export type AccessLevel = {
  key: AccessKey;
  label: string;
  /** Tailwind utility classes for the badge */
  className: string;
  /** Whether the underlying material is treated as locked by default */
  locked: boolean;
  description: string;
};

export const accessLevels: Record<AccessKey, AccessLevel> = {
  "pre-nda": {
    key: "pre-nda",
    label: "Pre-NDA",
    className: "border-datablue/40 bg-datablue/10 text-datablue",
    locked: false,
    description: "High-level summary without sensitive data. Initial reviewer.",
  },
  controlled: {
    key: "controlled",
    label: "Controlled",
    className: "border-sand/40 bg-sand/10 text-sand",
    locked: true,
    description:
      "Strategic documents for approved institutional review. CDG / selected stakeholders.",
  },
  nda: {
    key: "nda",
    label: "NDA",
    className: "border-copper/50 bg-copper/10 text-copper",
    locked: true,
    description:
      "Technical, financial, and product details. Released after a signed NDA.",
  },
  "cdg-review": {
    key: "cdg-review",
    label: "CDG Review",
    className: "border-forest/60 bg-forest/30 text-ivory",
    locked: true,
    description:
      "Full structure, cap table, IP, and acquisition pathway. CDG decision team.",
  },
  "legal-review": {
    key: "legal-review",
    label: "Legal Review",
    className: "border-atlas/60 bg-atlas/20 text-ivory/90",
    locked: true,
    description:
      "Draft legal, IP, shareholder, and governance documents. Legal counsel only.",
  },
};

export const statusLabels: Record<
  StatusKey,
  { label: string; className: string }
> = {
  ready: {
    label: "Ready",
    className: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
  },
  draft: {
    label: "Draft",
    className: "border-white/20 bg-white/5 text-ivory/70",
  },
  planned: {
    label: "Planned",
    className: "border-datablue/40 bg-datablue/10 text-datablue",
  },
  "cdg-review": {
    label: "CDG Review",
    className: "border-sand/40 bg-sand/10 text-sand",
  },
  "technical-review": {
    label: "Technical Review",
    className: "border-copper/40 bg-copper/10 text-copper",
  },
  "legal-review": {
    label: "Legal Review",
    className: "border-atlas/60 bg-atlas/20 text-ivory/80",
  },
};

/** Ordered list used to explain the access ladder in the UI. */
export const accessLadder: AccessKey[] = [
  "pre-nda",
  "controlled",
  "nda",
  "cdg-review",
  "legal-review",
];
