import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { entity, heroBadges } from "../data/entity";
import { useT } from "../i18n";
import { S } from "../i18n/strings";

export default function Hero() {
  const tt = useT();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      id="overview"
      ref={ref}
      className="relative flex min-h-[88vh] items-center overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      {/* Layered, quiet background: grid + contour + copper glow */}
      <motion.div
        style={reduce ? undefined : { y: bgY, opacity: fade }}
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-grid-faint [background-size:54px_54px] opacity-[0.35]" />
        <svg
          className="absolute inset-x-0 bottom-0 h-1/2 w-full opacity-[0.18]"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
        >
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <path
              key={i}
              d={`M0,${230 + i * 26} C360,${170 + i * 22} 1080,${
                300 + i * 18
              } 1440,${200 + i * 24}`}
              fill="none"
              stroke="rgba(201,164,106,0.5)"
              strokeWidth="1"
            />
          ))}
        </svg>
        <div className="absolute -end-40 top-0 h-96 w-96 rounded-full bg-copper/10 blur-[120px]" />
        <div className="absolute -start-32 top-1/3 h-96 w-96 rounded-full bg-forest/20 blur-[130px]" />
      </motion.div>

      <motion.div
        style={reduce ? undefined : { y: contentY }}
        className="container-wide relative"
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="kicker mb-7 rounded-full border border-sand/25 bg-sand/[0.07] px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-sand" />
            {tt(S.hero.badge)}
          </div>

          {/* Brand is the title; AI/SA live in the muted descriptor line */}
          <h1 className="text-hero font-extrabold text-ivory-100">
            {entity.brandName}
          </h1>
          <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-sand-300 sm:text-base">
            {tt(entity.heroLegalLine)}
          </p>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory-100/85 sm:text-2xl sm:leading-relaxed">
            {tt(entity.heroMessage)}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ivory-300/65">
            {tt(entity.heroProof)}
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
            <a href="#thesis" className="btn-primary w-full sm:w-auto">
              {tt(S.hero.explore)}{" "}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </a>
            <a href="#cdg-entry" className="link-quiet">
              {tt(S.hero.reviewCdg)}
              <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
            </a>
          </div>

          {/* Quiet status chips (not a KPI dashboard) */}
          <div className="mt-12 flex flex-wrap gap-2">
            {heroBadges.map((b) => (
              <span
                key={b.label.en}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                  b.emphasis
                    ? "border-copper/35 bg-copper/[0.08] text-copper-400"
                    : "border-white/[0.08] bg-white/[0.03] text-ivory-300/65"
                }`}
              >
                {tt(b.label)}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* scroll affordance */}
      {!reduce && (
        <motion.div
          style={{ opacity: fade }}
          className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center text-ivory-300/40"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
