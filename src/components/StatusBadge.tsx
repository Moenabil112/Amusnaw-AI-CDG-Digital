import { statusLabels, type StatusKey } from "../data/accessLevels";
import { useT } from "../i18n";

export default function StatusBadge({ status }: { status: StatusKey }) {
  const tt = useT();
  const s = statusLabels[status];
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${s.className}`}
    >
      {tt(s.label)}
    </span>
  );
}
