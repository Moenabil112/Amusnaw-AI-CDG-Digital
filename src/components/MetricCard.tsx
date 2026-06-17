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
      className={`panel h-full p-6 ${
        highlight ? "border-copper/35 bg-copper/[0.06]" : ""
      }`}
    >
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ivory-300/55">
        {label}
      </p>
      <p
        className={`mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl ${
          highlight ? "text-copper-400" : "text-ivory-100"
        }`}
      >
        {value}
      </p>
      {hint && (
        <p className="mt-2 text-sm leading-relaxed text-ivory-300/60">{hint}</p>
      )}
    </div>
  );
}
