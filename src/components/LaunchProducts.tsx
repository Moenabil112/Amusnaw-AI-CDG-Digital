import { ArrowRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import StatusBadge from "./StatusBadge";
import AccessBadge from "./AccessBadge";
import { products } from "../data/products";
import { useT } from "../i18n";
import { S } from "../i18n/strings";

export default function LaunchProducts() {
  const tt = useT();
  return (
    <section id="products" className="border-t border-white/5 py-20 sm:py-28">
      <div className="container-px">
        <Reveal>
          <SectionTitle
            eyebrow={tt(S.products.eyebrow)}
            title={tt(S.products.title)}
            description={tt(S.products.description)}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <div className="panel panel-hover flex h-full flex-col p-7">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <StatusBadge status={p.statusKey} />
                  <AccessBadge access={p.accessKey} />
                  {p.partner && (
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-ivory/60">
                      {tt(S.common.partner)}: {p.partner}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-ivory">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-sand">{tt(p.type)}</p>

                <p className="mt-4 text-sm leading-relaxed text-ivory/70">
                  {tt(p.coreValue)}
                </p>

                <a
                  href={`#${p.sectionId}`}
                  className="btn-secondary mt-7 self-start"
                >
                  {tt(p.cta)} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
