import { motion } from "framer-motion";
import { ArrowRight, FileText, Boxes } from "lucide-react";
import { entity, heroBadges } from "../data/entity";
import { useT } from "../i18n";
import { S } from "../i18n/strings";

export default function Hero() {
  const tt = useT();

  return (
    <section
      id="overview"
      className="relative overflow-hidden pt-[112px] pb-20 sm:pt-[140px] sm:pb-28"
    >
      {/* Faint engineering grid + copper seam accents */}
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:48px_48px] opacity-40" />
      <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-copper/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-forest/20 blur-3xl" />

      <div className="container-px relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sand/30 bg-sand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sand">
            <span className="h-1.5 w-1.5 rounded-full bg-sand" />
            {tt(S.hero.badge)}
          </div>

          <h1 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-ivory sm:text-6xl md:text-7xl">
            {entity.name}
          </h1>
          <p className="mt-4 text-lg font-medium text-sand sm:text-xl">
            {tt(entity.type)}
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/80 sm:text-xl">
            {tt(entity.tagline)}
          </p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ivory/55">
            {tt(entity.supporting)}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#cdg-entry" className="btn-primary">
              {tt(S.hero.reviewCdg)} <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#products" className="btn-secondary">
              <Boxes className="h-4 w-4" /> {tt(S.hero.viewProducts)}
            </a>
            <a href="#access" className="btn-ghost">
              <FileText className="h-4 w-4" />{" "}
              {tt(S.common.requestInstitutionalAccess)}
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {heroBadges.map((b) => (
              <div
                key={b.label.en}
                className={`rounded-lg border px-4 py-2.5 text-sm font-medium ${
                  b.emphasis
                    ? "border-copper/40 bg-copper/10 text-copper"
                    : "border-white/10 bg-white/5 text-ivory/70"
                }`}
              >
                {tt(b.label)}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
