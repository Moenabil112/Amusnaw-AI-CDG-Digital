import { Lock, Map, ArrowRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import StatusBadge from "./StatusBadge";
import AccessBadge from "./AccessBadge";
import { isseksiCards, isseksiMessage } from "../data/isseksi";
import { useT } from "../i18n";
import { S } from "../i18n/strings";

export default function IsseksiSection() {
  const tt = useT();
  return (
    <section id="isseksi" className="section bg-graphite-900/40">
      <div className="container-px">
        <Reveal>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <StatusBadge status="ready" />
            <AccessBadge access="controlled" />
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-ivory/60">
              {tt(S.common.partner)}: Atlas Mining
            </span>
          </div>
          <SectionTitle
            eyebrow={tt(S.isseksi.eyebrow)}
            title="Isseksi Copper Intelligence"
            description={tt(S.isseksi.type)}
          />
          <p className="mt-5 max-w-3xl rounded-lg border-s-2 border-sand/50 bg-sand/5 px-5 py-4 text-base leading-relaxed text-ivory/85">
            {tt(isseksiMessage)}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {isseksiCards.map((c, i) => (
            <Reveal key={c.title.en} delay={(i % 4) * 0.06}>
              <div className="panel panel-hover h-full p-5">
                <h3 className="text-base font-semibold text-ivory">
                  {tt(c.title)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/65">
                  {tt(c.description)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* GIS placeholder + controlled room */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div className="panel relative overflow-hidden p-0">
              <div className="flex aspect-[16/8] items-center justify-center bg-grid-faint [background-size:32px_32px]">
                <div className="text-center">
                  <Map className="mx-auto h-10 w-10 text-sand/50" />
                  <p className="mt-3 text-sm font-medium text-ivory/60">
                    {tt(S.isseksi.gisTitle)}
                  </p>
                  <p className="mt-1 text-xs text-ivory/40">
                    {tt(S.isseksi.gisHint)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 border-t border-white/10 px-5 py-3 text-xs text-ivory/45">
                <Lock className="h-3.5 w-3.5" /> {tt(S.isseksi.gisLock)}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="panel flex h-full flex-col justify-between p-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-ivory/60">
                  <Lock className="h-3.5 w-3.5" /> {tt(S.common.accessGated)}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ivory">
                  {tt(S.isseksi.roomTitle)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/65">
                  {tt(S.isseksi.roomBody)}
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <button
                  type="button"
                  disabled
                  className="btn w-full cursor-not-allowed border border-white/10 bg-white/5 text-ivory/50"
                >
                  <Lock className="h-4 w-4" /> {tt(S.isseksi.viewRoom)}
                </button>
                <a href="#access" className="btn-secondary w-full">
                  {tt(S.isseksi.requestReview)}{" "}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
