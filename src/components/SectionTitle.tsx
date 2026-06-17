import type { ReactNode } from "react";

type Props = {
  /** Chapter index, e.g. "04" */
  index?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
};

export default function SectionTitle({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-text text-center"
          : "max-w-text text-left"
      }
    >
      {eyebrow && (
        <p className="kicker mb-4">
          {index && (
            <>
              <span className="text-sand/60">{index}</span>
              <span
                aria-hidden="true"
                className="inline-block h-px w-6 bg-sand/30 align-middle"
              />
            </>
          )}
          {eyebrow}
        </p>
      )}
      <h2 className="text-section font-bold text-ivory-100">{title}</h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-ivory-300/75 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
