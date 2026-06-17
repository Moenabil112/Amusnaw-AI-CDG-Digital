import { motion } from "framer-motion";
import { ArrowRight, FileText, Boxes } from "lucide-react";
import { entity, heroBadges } from "../data/entity";
import { useLanguage, t } from "../i18n";

export default function Hero() {
  const { locale } = useLanguage();

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
            Controlled Institutional Digital Window
          </div>

          <h1 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-ivory sm:text-6xl md:text-7xl">
            {entity.name}
          </h1>
          <p className="mt-4 text-lg font-medium text-sand sm:text-xl">
            {entity.type}
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/80 sm:text-xl">
            {t(entity.tagline, locale)}
          </p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ivory/55">
            {t(entity.supporting, locale)}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#cdg-entry" className="btn-primary">
              Review CDG Entry <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#products" className="btn-secondary">
              <Boxes className="h-4 w-4" /> View Launch Products
            </a>
            <a href="#access" className="btn-ghost">
              <FileText className="h-4 w-4" /> Request Institutional Access
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {heroBadges.map((b) => (
              <div
                key={b.label}
                className={`rounded-lg border px-4 py-2.5 text-sm font-medium ${
                  b.emphasis
                    ? "border-copper/40 bg-copper/10 text-copper"
                    : "border-white/10 bg-white/5 text-ivory/70"
                }`}
              >
                {b.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
