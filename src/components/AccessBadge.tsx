import { Lock } from "lucide-react";
import { accessLevels, type AccessKey } from "../data/accessLevels";

export default function AccessBadge({
  access,
  showLock = true,
}: {
  access: AccessKey;
  showLock?: boolean;
}) {
  const a = accessLevels[access];
  return (
    <span
      title={a.description}
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${a.className}`}
    >
      {showLock && a.locked && <Lock className="h-3 w-3" />}
      {a.label}
    </span>
  );
}
