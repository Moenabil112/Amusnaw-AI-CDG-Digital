import { AlertTriangle } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import {
  thesisColumns,
  thesisDescription,
  thesisGap,
  thesisSolution,
} from "../data/strategicThesis";
import { useT } from "../i18n";
import { S } from "../i18n/strings";

export default function StrategicThesis() {
  const tt = useT();
  return (
    <section id="thesis" className="border-t border-white/5 py-20 sm:py-28">
      <div className="container-px">
        <Reveal>
          <SectionTitle
            eyebrow={tt(S.thesis.eyebrow)}
            title={
              <>
                {tt(S.thesis.titleLead)}{" "}
                <span className="text-sand">{tt(S.thesis.titleEmph)}</span>
              </>
            }
            description={tt(thesisDescription)}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="panel h-full p-7">
              <div className="mb-4 inline-flex items-center gap-2 text-copper">
                <AlertTriangle className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  {tt(S.thesis.theGap)}
                </span>
              </div>
              <ul className="space-y-3">
                {thesisGap.map((g) => (
                  <li
                    key={g.en}
                    className="flex items-start gap-3 text-sm text-ivory/75"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-copper/70" />
                    {tt(g)}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="panel h-full border-sand/20 bg-gradient-to-br from-forest/20 to-graphite-800/60 p-7">
              <p className="text-sm font-semibold uppercase tracking-wide text-sand">
                {tt(S.thesis.theSolution)}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ivory/90">
                {tt(thesisSolution)}
              </p>
              <div className="mt-6 rounded-lg border border-white/10 bg-graphite-900/50 p-4 text-sm italic text-ivory/70">
                {tt(S.thesis.quote)}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {thesisColumns.map((c, i) => (
            <Reveal key={c.step} delay={i * 0.08}>
              <div className="panel panel-hover h-full p-6">
                <span className="font-heading text-3xl font-bold text-white/15">
                  {c.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-ivory">
                  {tt(c.title)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/65">
                  {tt(c.body)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
