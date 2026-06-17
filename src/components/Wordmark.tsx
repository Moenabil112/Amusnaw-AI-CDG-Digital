export default function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <svg
        viewBox="0 0 64 64"
        className="h-9 w-9 flex-shrink-0"
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
        <p className="font-heading text-base font-bold tracking-tight text-ivory">
          Amusnaw AI SA
        </p>
        {!compact && (
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-ivory/50">
            Moroccan Mining-Tech Data Infrastructure SPV
          </p>
        )}
      </div>
    </div>
  );
}
