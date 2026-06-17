import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { roadmap } from "../data/roadmap";

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="border-t border-white/5 bg-graphite-800/30 py-20 sm:py-28"
    >
      <div className="container-px">
        <Reveal>
          <SectionTitle
            eyebrow="Six-Month Delivery Roadmap"
            title="From incorporation to a CDG scale decision in six months"
          />
        </Reveal>

        <div className="relative mt-12">
          {/* vertical spine */}
          <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-sand/50 via-copper/40 to-transparent md:left-1/2" />

          <div className="space-y-6">
            {roadmap.map((m, i) => (
              <Reveal key={m.month} delay={(i % 2) * 0.05}>
                <div
                  className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* node */}
                  <div className="absolute left-[18px] z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-copper bg-graphite-900 md:left-1/2" />

                  <div className="md:w-1/2" />
                  <div className="pl-10 md:w-1/2 md:px-8">
                    <div className="panel panel-hover p-6">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-sand">
                          {m.month}
                        </span>
                      </div>
                      <h3 className="mt-1 text-lg font-semibold text-ivory">
                        {m.title}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-copper">
                        {m.deliverable}
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        {m.detail.map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-2 text-xs leading-relaxed text-ivory/60"
                          >
                            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-ivory/40" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
