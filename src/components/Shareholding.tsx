import { Scale, TrendingUp } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import {
  founderContinuityNote,
  postSeedShareholding,
  seedBudget,
  shareholdingLegalNote,
  stepUpPathway,
} from "../data/shareholding";
import { useT } from "../i18n";
import { S } from "../i18n/strings";

export default function Shareholding() {
  const tt = useT();
  return (
    <section
      id="shareholding"
      className="border-t border-white/5 py-20 sm:py-28"
    >
      <div className="container-px">
        <Reveal>
          <SectionTitle
            eyebrow={tt(S.shareholding.eyebrow)}
            title={tt(S.shareholding.title)}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Post-seed allocation */}
          <Reveal>
            <div className="panel h-full p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ivory/60">
                {tt(S.shareholding.postSeed)}
              </p>
              <div className="mt-5 space-y-4">
                {postSeedShareholding.map((row) => (
                  <div key={row.party.en}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-ivory/80">{tt(row.party)}</span>
                      <span className="font-semibold text-ivory">
                        {row.allocation}
                      </span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-sand to-copper"
                        style={{ width: `${row.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Step-up + budget */}
          <div className="flex h-full flex-col gap-6">
            <Reveal>
              <div className="panel p-7">
                <div className="mb-4 inline-flex items-center gap-2 text-sand">
                  <TrendingUp className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    {tt(S.shareholding.stepUp)}
                  </span>
                </div>
                <div className="space-y-3">
                  {stepUpPathway.map((s) => (
                    <div
                      key={s.stage.en}
                      className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm"
                    >
                      <span className="font-medium text-ivory/80">
                        {tt(s.stage)}
                      </span>
                      <span className="font-semibold text-copper">
                        {tt(s.position)}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs leading-relaxed text-ivory/55">
                  {tt(founderContinuityNote)}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="panel p-7">
                <div className="mb-4 inline-flex items-center gap-2 text-copper">
                  <Scale className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    {tt(S.shareholding.seedUse)}
                  </span>
                </div>
                <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-1">
                  {seedBudget.map((b) => (
                    <li
                      key={b.item.en}
                      className="flex items-center justify-between gap-4 border-b border-white/5 py-1.5 text-xs last:border-0"
                    >
                      <span className="text-ivory/65">{tt(b.item)}</span>
                      <span className="flex-shrink-0 font-semibold text-ivory/90">
                        {b.amount}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <p className="mt-6 rounded-lg border border-white/10 bg-white/5 px-5 py-4 text-xs italic leading-relaxed text-ivory/55">
            {tt(shareholdingLegalNote)}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
