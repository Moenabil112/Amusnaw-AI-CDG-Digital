import { Database, ShieldCheck } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import {
  hyrionComparison,
  hyrionFunctions,
  hyrionPositioning,
  hyrionProcessFlow,
} from "../data/hyrionFunctions";

export default function HyrionSection() {
  return (
    <section
      id="hyrion"
      className="border-t border-white/5 bg-graphite-800/30 py-20 sm:py-28"
    >
      <div className="container-px">
        <Reveal>
          <SectionTitle
            eyebrow="HYRION Mining Data Infrastructure"
            title="The operating system for mining evidence governance"
            description={hyrionPositioning}
          />
        </Reveal>

        {/* Comparison: Data Room vs HYRION */}
        <Reveal>
          <div className="mt-12 panel overflow-hidden">
            <div className="grid grid-cols-2 border-b border-white/10">
              <div className="px-6 py-4 text-sm font-semibold uppercase tracking-wide text-ivory/50">
                Traditional Data Room
              </div>
              <div className="border-l border-white/10 bg-sand/5 px-6 py-4 text-sm font-semibold uppercase tracking-wide text-sand">
                HYRION
              </div>
            </div>
            {hyrionComparison.map((row) => (
              <div
                key={row.hyrion}
                className="grid grid-cols-2 border-b border-white/5 last:border-0"
              >
                <div className="px-6 py-3.5 text-sm text-ivory/55 line-through decoration-white/20">
                  {row.dataRoom}
                </div>
                <div className="border-l border-white/10 px-6 py-3.5 text-sm font-medium text-ivory">
                  {row.hyrion}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Process flow */}
        <Reveal>
          <div className="mt-8 panel p-6">
            <div className="mb-4 inline-flex items-center gap-2 text-sand">
              <ShieldCheck className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Process Flow
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
              {hyrionProcessFlow.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-ivory/80">
                    <span className="mr-1.5 text-xs font-semibold text-sand">
                      {i + 1}
                    </span>
                    {step}
                  </span>
                  {i < hyrionProcessFlow.length - 1 && (
                    <span className="text-ivory/25">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Function cards */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {hyrionFunctions.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.06}>
              <div className="panel panel-hover h-full p-5">
                <Database className="h-5 w-5 text-sand/70" />
                <h3 className="mt-3 text-base font-semibold text-ivory">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/65">
                  {f.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
