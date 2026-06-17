import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import MetricCard from "./MetricCard";
import { entity } from "../data/entity";
import { seedNote } from "../data/shareholding";
import { useT } from "../i18n";
import { S } from "../i18n/strings";

export default function NumbersSection() {
  const tt = useT();

  const metrics = [
    {
      label: tt(S.numbers.seedLabel),
      value: entity.seedCommitment,
      hint: tt(S.numbers.seedExplain),
      highlight: true,
    },
    {
      label: tt(S.numbers.positionLabel),
      value: "30%",
      hint: tt(S.numbers.positionExplain),
    },
    {
      label: tt(S.numbers.deliveryLabel),
      value: tt(S.numbers.deliveryValue),
      hint: tt(S.numbers.deliveryExplain),
    },
    {
      label: tt(S.numbers.stepupLabel),
      value: tt(S.numbers.stepupValue),
      hint: tt(S.numbers.stepupExplain),
    },
    {
      label: tt(S.numbers.continuityLabel),
      value: "15%",
      hint: tt(S.numbers.continuityExplain),
    },
  ];

  return (
    <section id="numbers" className="section">
      <div className="container-px">
        <Reveal>
          <SectionTitle
            index="08"
            eyebrow={tt(S.numbers.eyebrow)}
            title={tt(S.numbers.title)}
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={(i % 3) * 0.07}>
              <MetricCard
                label={m.label}
                value={m.value}
                hint={m.hint}
                highlight={m.highlight}
              />
            </Reveal>
          ))}
          {/* Seed-definition emphasis spans the last cell on desktop */}
          <Reveal delay={0.14}>
            <div className="glass flex h-full flex-col justify-center p-6">
              <p className="text-sm leading-relaxed text-ivory-100/85">
                {tt(seedNote)}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
