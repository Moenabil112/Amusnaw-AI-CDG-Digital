import { Lock, Map, ArrowRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import StatusBadge from "./StatusBadge";
import AccessBadge from "./AccessBadge";
import { isseksiCards, isseksiMessage } from "../data/isseksi";

export default function IsseksiSection() {
  return (
    <section
      id="isseksi"
      className="border-t border-white/5 bg-graphite-800/30 py-20 sm:py-28"
    >
      <div className="container-px">
        <Reveal>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <StatusBadge status="ready" />
            <AccessBadge access="controlled" />
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-ivory/60">
              Partner: Atlas Mining
            </span>
          </div>
          <SectionTitle
            eyebrow="Product 01 — Ready Product"
            title="Isseksi Copper Intelligence"
            description="Ready Mining Intelligence & Governance Product"
          />
          <p className="mt-5 max-w-3xl rounded-lg border-l-2 border-sand/50 bg-sand/5 px-5 py-4 text-base leading-relaxed text-ivory/85">
            {isseksiMessage}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {isseksiCards.map((c, i) => (
            <Reveal key={c.title} delay={(i % 4) * 0.06}>
              <div className="panel panel-hover h-full p-5">
                <h3 className="text-base font-semibold text-ivory">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/65">
                  {c.description}
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
                    GIS license visualization
                  </p>
                  <p className="mt-1 text-xs text-ivory/40">
                    Interactive map placeholder — GeoJSON / HYRION integration in
                    a future version
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 border-t border-white/10 px-5 py-3 text-xs text-ivory/45">
                <Lock className="h-3.5 w-3.5" /> Controlled spatial data —
                displayed under access level only.
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="panel flex h-full flex-col justify-between p-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-ivory/60">
                  <Lock className="h-3.5 w-3.5" /> Access-gated
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ivory">
                  Controlled Product Room
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/65">
                  Executive snapshot, license & evidence layer, governance logic,
                  and HYRION-ready access control — staged by clearance.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <button
                  type="button"
                  disabled
                  className="btn w-full cursor-not-allowed border border-white/10 bg-white/5 text-ivory/50"
                  title="Access reviewed manually"
                >
                  <Lock className="h-4 w-4" /> View Controlled Product Room
                </button>
                <a href="#access" className="btn-secondary w-full">
                  Request Isseksi Product Review <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
