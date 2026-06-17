import { Database, ShieldCheck, ArrowRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import {
  hyrionComparison,
  hyrionFunctions,
  hyrionPositioning,
  hyrionProcessFlow,
} from "../data/hyrionFunctions";
import { useT } from "../i18n";
import { S } from "../i18n/strings";

export default function HyrionSection() {
  const tt = useT();
  return (
    <section
      id="hyrion"
      className="section bg-graphite-900/40"
    >
      <div className="container-px">
        <Reveal>
          <SectionTitle
            index="06"
            eyebrow={tt(S.hyrion.eyebrow)}
            title={tt(S.hyrion.title)}
            description={tt(hyrionPositioning)}
          />
        </Reveal>

        {/* Evidence lifecycle rail — the OS metaphor */}
        <Reveal>
          <div className="mt-14">
            <div className="mb-5 flex items-center gap-2 text-sand">
              <ShieldCheck className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">
                {tt(S.hyrion.processFlow)}
              </span>
            </div>
            <ol className="relative grid gap-3 md:grid-cols-7 md:gap-2">
              {/* connector line (desktop) */}
              <div className="pointer-events-none absolute inset-x-6 top-7 hidden h-px bg-gradient-to-r from-sand/30 via-copper/30 to-transparent md:block" />
              {hyrionProcessFlow.map((step, i) => (
                <li
                  key={step.en}
                  className="relative flex items-center gap-3 md:flex-col md:items-start md:gap-3"
                >
                  <span className="z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-sand/30 bg-graphite-800 font-heading text-sm font-bold text-sand">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium leading-snug text-ivory-100/85 md:text-[13px]">
                    {tt(step)}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        {/* Data room vs HYRION — refined */}
        <Reveal>
          <div className="mt-12 panel overflow-hidden">
            <div className="grid grid-cols-2 border-b border-white/[0.08]">
              <div className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-ivory-300/45 sm:px-6">
                {tt(S.hyrion.dataRoom)}
              </div>
              <div className="border-s border-white/[0.08] bg-sand/[0.06] px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-sand sm:px-6">
                HYRION
              </div>
            </div>
            {hyrionComparison.map((row) => (
              <div
                key={row.hyrion.en}
                className="grid grid-cols-2 border-b border-white/[0.05] last:border-0"
              >
                <div className="px-5 py-3.5 text-sm text-ivory-300/45 line-through decoration-white/15 sm:px-6">
                  {tt(row.dataRoom)}
                </div>
                <div className="flex items-center gap-2 border-s border-white/[0.08] px-5 py-3.5 text-sm font-medium text-ivory-100 sm:px-6">
                  <ArrowRight className="hidden h-3.5 w-3.5 flex-shrink-0 text-copper-400 sm:block rtl:rotate-180" />
                  {tt(row.hyrion)}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Function cards */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {hyrionFunctions.map((f, i) => (
            <Reveal key={f.title.en} delay={(i % 4) * 0.06}>
              <div className="panel panel-hover h-full p-5">
                <Database className="h-5 w-5 text-sand/70" />
                <h3 className="mt-3 text-base font-semibold text-ivory-100">
                  {tt(f.title)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory-300/60">
                  {tt(f.description)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
