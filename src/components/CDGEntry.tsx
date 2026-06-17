import { Building2, Handshake } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { seedStructure, seedNote } from "../data/shareholding";

export default function CDGEntry() {
  return (
    <section
      id="cdg-entry"
      className="border-t border-white/5 bg-graphite-800/30 py-20 sm:py-28"
    >
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <SectionTitle
                eyebrow="CDG Strategic Entry"
                title="CDG is invited as a strategic co-builder — not a passive financier."
              />
              <p className="mt-5 flex items-start gap-3 text-base leading-relaxed text-ivory/75">
                <Handshake className="mt-1 h-5 w-5 flex-shrink-0 text-sand" />
                Strategic co-builder of Morocco's intelligent mining data
                infrastructure, entering through a disciplined, staged, and
                infrastructure-driven commitment.
              </p>

              <div className="mt-8 rounded-xl border border-copper/30 bg-copper/5 p-6">
                <div className="mb-3 inline-flex items-center gap-2 text-copper">
                  <Building2 className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    What the USD 350,000 funds
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-ivory/80">
                  {seedNote}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="panel overflow-hidden">
              <div className="border-b border-white/10 bg-graphite-900/50 px-6 py-4">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ivory/60">
                  Seed Structure
                </p>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {seedStructure.map((row) => (
                    <tr
                      key={row.item}
                      className="border-b border-white/5 last:border-0"
                    >
                      <td className="px-6 py-4 text-ivory/70">{row.item}</td>
                      <td
                        className={`px-6 py-4 text-right font-semibold ${
                          row.highlight ? "text-copper" : "text-ivory"
                        }`}
                      >
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="border-t border-white/10 px-6 py-3 text-xs text-ivory/45">
                Structured for staged CDG step-up acquisition. Subject to legal
                review.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
