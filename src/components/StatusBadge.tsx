import { statusLabels, type StatusKey } from "../data/accessLevels";

export default function StatusBadge({ status }: { status: StatusKey }) {
  const s = statusLabels[status];
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${s.className}`}
    >
      {s.label}
    </span>
  );
}
