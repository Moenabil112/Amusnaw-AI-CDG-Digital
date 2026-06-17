import type { ReactNode } from "react";

type Props = {
  label: string;
  value: ReactNode;
  hint?: string;
  highlight?: boolean;
};

export default function MetricCard({ label, value, hint, highlight }: Props) {
  return (
    <div
      className={`panel p-5 ${
        highlight ? "border-copper/40 bg-copper/5" : ""
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ivory/55">
        {label}
      </p>
      <p
        className={`mt-2 text-xl font-bold tracking-tight sm:text-2xl ${
          highlight ? "text-copper" : "text-ivory"
        }`}
      >
        {value}
      </p>
      {hint && <p className="mt-1 text-xs text-ivory/50">{hint}</p>}
    </div>
  );
}
