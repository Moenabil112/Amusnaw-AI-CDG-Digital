import { Info, Layers } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import {
  qassasModules,
  qassasNote,
  qassasPositioning,
} from "../data/qassasModules";

export default function QassasSection() {
  return (
    <section id="qassas" className="border-t border-white/5 py-20 sm:py-28">
      <div className="container-px">
        <Reveal>
          <SectionTitle
            eyebrow="QASSAS Morocco Adaptation"
            title="Exploration intelligence adapted to Moroccan geology"
            description={qassasPositioning}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {qassasModules.map((m, i) => (
            <Reveal key={m.title} delay={(i % 3) * 0.06}>
              <div className="panel panel-hover h-full p-6">
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4 text-datablue" />
                  <span className="text-xs font-semibold uppercase tracking-wide text-datablue">
                    Module {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-ivory">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/65">
                  {m.application}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-6 text-sm leading-relaxed text-ivory/75">
            <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-datablue" />
            {qassasNote}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
