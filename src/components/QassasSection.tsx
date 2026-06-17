import { Info, Layers } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import {
  qassasModules,
  qassasNote,
  qassasPositioning,
} from "../data/qassasModules";
import { useT } from "../i18n";
import { S } from "../i18n/strings";

export default function QassasSection() {
  const tt = useT();
  return (
    <section id="qassas" className="section">
      <div className="container-px">
        <Reveal>
          <SectionTitle
            index="07"
            eyebrow={tt(S.qassas.eyebrow)}
            title={tt(S.qassas.title)}
            description={tt(qassasPositioning)}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {qassasModules.map((m, i) => (
            <Reveal key={m.title.en} delay={(i % 3) * 0.06}>
              <div className="panel panel-hover h-full p-6">
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4 text-datablue" />
                  <span className="text-xs font-semibold uppercase tracking-wide text-datablue">
                    {tt(S.qassas.module)} {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-ivory">
                  {tt(m.title)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/65">
                  {tt(m.application)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-6 text-sm leading-relaxed text-ivory/75">
            <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-datablue" />
            {tt(qassasNote)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
