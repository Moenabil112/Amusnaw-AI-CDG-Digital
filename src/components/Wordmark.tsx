import { entity } from "../data/entity";
import { useT } from "../i18n";

/**
 * Brand mark. "Amusnaw" is the brand; the descriptor is a small supporting
 * line that collapses on the narrowest screens to avoid header crowding.
 */
export default function Wordmark({ compact = false }: { compact?: boolean }) {
  const tt = useT();
  return (
    <div className="flex items-center gap-2.5">
      <svg
        viewBox="0 0 64 64"
        className="h-8 w-8 flex-shrink-0 sm:h-9 sm:w-9"
        aria-hidden="true"
      >
        <rect width="64" height="64" rx="12" fill="#161616" />
        <path
          d="M16 44 L32 18 L48 44"
          fill="none"
          stroke="#C9A46A"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 44 L32 31 L40 44"
          fill="none"
          stroke="#B87333"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="leading-tight">
        <p className="font-heading text-lg font-bold tracking-tight text-ivory">
          {entity.brandName}
        </p>
        {!compact && (
          <p className="hidden text-[10px] font-medium uppercase tracking-[0.14em] text-ivory/50 sm:block sm:text-[11px]">
            {tt(entity.displayDescriptor)}
          </p>
        )}
      </div>
    </div>
  );
}
