import { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  Cpu,
  FileStack,
  Lock,
  MapPin,
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import StatusBadge from "./StatusBadge";
import AccessBadge from "./AccessBadge";
import AguelmousMap from "./AguelmousMap";
import {
  aguelmous,
  aguelmousCaution,
  aguelmousMessage,
  aguelmousModules,
  aguelmousOutputs,
  aguelmousValidation,
} from "../data/aguelmous";
import { useT } from "../i18n";
import { S } from "../i18n/strings";

export default function AguelmousSection() {
  const tt = useT();
  const [showDetails, setShowDetails] = useState(false);

  const meta: { label: string; value: string; gated?: boolean }[] = [
    { label: tt(S.aguelmous.mProduct), value: aguelmous.displayName },
    { label: tt(S.aguelmous.mRegion), value: aguelmous.region },
    { label: tt(S.aguelmous.mContext), value: tt(aguelmous.geoContext) },
    { label: tt(S.aguelmous.mType), value: tt(aguelmous.typeLabel) },
    { label: tt(S.aguelmous.mPermit), value: aguelmous.permitReference, gated: true },
  ];

  return (
    <section id="aguelmous" className="border-t border-white/5 py-20 sm:py-28">
      <div className="container-px">
        <Reveal>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <StatusBadge status="technical-review" />
            <AccessBadge access="nda" />
          </div>
          <SectionTitle
            eyebrow={tt(S.aguelmous.eyebrow)}
            title="Aguelmous Smart Fault Demonstrator"
            description={tt(S.aguelmous.subtitle)}
          />
          <p className="mt-5 max-w-3xl rounded-lg border-s-2 border-datablue/50 bg-datablue/5 px-5 py-4 text-base leading-relaxed text-ivory/85">
            {tt(aguelmousMessage)}
          </p>
        </Reveal>

        {/* Map (left) + narrative & metadata (right). Mobile: map first. */}
        <div className="mt-12 grid items-start gap-6 lg:grid-cols-[1.25fr_1fr]">
          <Reveal>
            <AguelmousMap />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="panel h-full p-6 sm:p-7">
              <div className="mb-3 inline-flex items-center gap-2 text-sand">
                <MapPin className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  {aguelmous.region}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-ivory/75">
                {tt(aguelmous.locationDescription)}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ivory/60">
                {tt(aguelmous.sectionNarrative)}
              </p>

              {/* Access-controlled metadata drawer */}
              <button
                onClick={() => setShowDetails((v) => !v)}
                className="mt-6 inline-flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-ivory/80 hover:border-sand/40"
                aria-expanded={showDetails}
              >
                <span className="inline-flex items-center gap-2">
                  <Lock className="h-3.5 w-3.5 text-sand" />
                  {showDetails
                    ? tt(S.aguelmous.hideDetails)
                    : tt(S.aguelmous.viewDetails)}
                </span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    showDetails ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showDetails && (
                <dl className="mt-3 divide-y divide-white/5 rounded-lg border border-white/10 bg-graphite-900/50 px-4">
                  {meta.map((m) => (
                    <div
                      key={m.label}
                      className="flex items-center justify-between gap-4 py-2.5 text-sm"
                    >
                      <dt className="text-ivory/55">{m.label}</dt>
                      <dd
                        className={`text-end font-medium ${
                          m.gated ? "text-copper" : "text-ivory/90"
                        }`}
                      >
                        {m.value}
                      </dd>
                    </div>
                  ))}
                  <div className="py-2.5">
                    <AccessBadge access="nda" />
                  </div>
                </dl>
              )}
            </div>
          </Reveal>
        </div>

        {/* Modules + outputs */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="panel h-full p-7">
              <div className="mb-5 inline-flex items-center gap-2 text-sand">
                <Cpu className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  {tt(S.aguelmous.qassasModules)}
                </span>
              </div>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {aguelmousModules.map((m) => (
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
                  {tt(S.aguelmous.expectedOutputs)}
                </span>
              </div>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {aguelmousOutputs.map((o) => (
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

        {/* 90-day validation */}
        <Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {aguelmousValidation.map((phase) => (
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
              {tt(aguelmousCaution)}
            </p>
            <a href="#access" className="btn-secondary flex-shrink-0">
              {tt(S.aguelmous.requestReview)}{" "}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
