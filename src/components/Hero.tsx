import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, FileText, Boxes } from "lucide-react";
import { entity, heroBadges } from "../data/entity";
import { useT } from "../i18n";
import { S } from "../i18n/strings";

export default function Hero() {
  const tt = useT();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Subtle parallax: background drifts/fades as the hero scrolls away.
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      id="overview"
      ref={ref}
      className="relative overflow-hidden pt-[120px] pb-20 sm:pt-[150px] sm:pb-28"
    >
      {/* Parallax engineering grid + copper/forest seams */}
      <motion.div
        style={{ y: gridY, opacity: fade }}
        className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:48px_48px] opacity-40"
      />
      <motion.div
        style={{ opacity: fade }}
        className="pointer-events-none absolute -end-32 top-10 h-72 w-72 rounded-full bg-copper/10 blur-3xl"
      />
      <motion.div
        style={{ opacity: fade }}
        className="pointer-events-none absolute -start-24 top-40 h-72 w-72 rounded-full bg-forest/20 blur-3xl"
      />

      <motion.div style={{ y: contentY }} className="container-px relative">
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

          {/* Brand is the title; AI/SA live in the muted legal line below. */}
          <h1 className="font-heading text-6xl font-extrabold leading-[0.95] tracking-tight text-ivory sm:text-7xl md:text-8xl">
            {entity.brandName}
          </h1>
          <p className="mt-3 text-lg font-semibold text-sand sm:text-2xl">
            {tt(entity.displayDescriptor)}
          </p>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-ivory/45 sm:text-sm">
            {tt(entity.heroLegalLine)}
          </p>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ivory/80 sm:text-xl">
            {tt(entity.heroMessage)}
          </p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ivory/55">
            {tt(entity.heroProof)}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#cdg-entry" className="btn-primary">
              {tt(S.hero.reviewCdg)} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </a>
            <a href="#products" className="btn-secondary">
              <Boxes className="h-4 w-4" /> {tt(S.hero.viewProducts)}
            </a>
            <a href="#access" className="btn-ghost">
              <FileText className="h-4 w-4" />{" "}
              {tt(S.common.requestInstitutionalAccess)}
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-2.5">
            {heroBadges.map((b) => (
              <div
                key={b.label.en}
                className={`rounded-lg border px-3.5 py-2 text-xs font-medium sm:text-sm ${
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
      </motion.div>
    </section>
  );
}
