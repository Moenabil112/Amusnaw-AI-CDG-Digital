import { AlertTriangle, ArrowRight, Cpu, FileStack } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import StatusBadge from "./StatusBadge";
import AccessBadge from "./AccessBadge";
import {
  pr3538746Caution,
  pr3538746Message,
  pr3538746Modules,
  pr3538746Outputs,
  pr3538746Validation,
} from "../data/pr3538746";
import { useT } from "../i18n";
import { S } from "../i18n/strings";

export default function PR3538746Section() {
  const tt = useT();
  return (
    <section id="pr3538746" className="border-t border-white/5 py-20 sm:py-28">
      <div className="container-px">
        <Reveal>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <StatusBadge status="technical-review" />
            <AccessBadge access="nda" />
          </div>
          <SectionTitle
            eyebrow={tt(S.pr.eyebrow)}
            title="PR3538746 Smart Fault Exploration"
            description={tt(S.pr.type)}
          />
          <p className="mt-5 max-w-3xl rounded-lg border-s-2 border-datablue/50 bg-datablue/5 px-5 py-4 text-base leading-relaxed text-ivory/85">
            {tt(pr3538746Message)}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="panel h-full p-7">
              <div className="mb-5 inline-flex items-center gap-2 text-sand">
                <Cpu className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  {tt(S.pr.qassasModules)}
                </span>
              </div>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {pr3538746Modules.map((m) => (
                  <div
                    key={m.en}
                    className="rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-ivory/80"
                  >
                    {tt(m)}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="panel h-full p-7">
              <div className="mb-5 inline-flex items-center gap-2 text-copper">
                <FileStack className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  {tt(S.pr.expectedOutputs)}
                </span>
              </div>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {pr3538746Outputs.map((o) => (
                  <li
                    key={o.en}
                    className="flex items-start gap-2.5 text-sm text-ivory/80"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-copper/70" />
                    {tt(o)}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* 90-day validation path */}
        <Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {pr3538746Validation.map((phase) => (
              <div key={phase.window.en} className="panel p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sand">
                  {tt(phase.window)}
                </p>
                <h4 className="mt-1 text-base font-semibold text-ivory">
                  {tt(phase.title)}
                </h4>
                <ul className="mt-3 space-y-2">
                  {phase.items.map((it) => (
                    <li
                      key={it.en}
                      className="flex items-start gap-2 text-xs leading-relaxed text-ivory/60"
                    >
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-ivory/40" />
                      {tt(it)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Caution + CTA */}
        <Reveal>
          <div className="mt-8 flex flex-col gap-4 rounded-xl border border-copper/30 bg-copper/5 p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-start gap-3 text-sm leading-relaxed text-ivory/85">
              <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-copper" />
              {tt(pr3538746Caution)}
            </p>
            <a href="#access" className="btn-secondary flex-shrink-0">
              {tt(S.pr.requestReview)} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
