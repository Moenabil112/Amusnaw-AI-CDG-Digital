import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Wordmark from "./Wordmark";
import { navItems } from "../data/nav";
import { LOCALES, useLanguage, useT } from "../i18n";
import { S } from "../i18n/strings";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("overview");
  const { locale, setLocale } = useLanguage();
  const tt = useT();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active-section highlight via IntersectionObserver.
  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-graphite-900/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-px flex h-[72px] items-center justify-between gap-4">
        <a href="#overview" className="flex-shrink-0">
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-md px-3 py-2 text-[13px] font-medium transition-colors ${
                active === item.id
                  ? "text-sand"
                  : "text-ivory/65 hover:text-ivory"
              }`}
            >
              {tt(item.label)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Language switcher placeholder — EN active, AR/FR wired for later */}
          <div className="hidden items-center rounded-md border border-white/10 bg-white/5 p-0.5 sm:flex">
            {LOCALES.map((l) => (
              <button
                key={l.code}
                onClick={() => setLocale(l.code)}
                aria-pressed={locale === l.code}
                title={l.name}
                className={`rounded px-2 py-1 text-[11px] font-semibold transition-colors ${
                  locale === l.code
                    ? "bg-sand/20 text-sand"
                    : "text-ivory/50 hover:text-ivory/80"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <a href="#access" className="hidden btn-primary sm:inline-flex">
            {tt(S.common.requestAccess)}
          </a>

          <button
            className="rounded-md border border-white/10 bg-white/5 p-2 text-ivory lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-graphite-900/95 backdrop-blur-md lg:hidden">
          <nav className="container-px grid grid-cols-2 gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2.5 text-sm font-medium ${
                  active === item.id
                    ? "bg-sand/10 text-sand"
                    : "text-ivory/70 hover:bg-white/5"
                }`}
              >
                {tt(item.label)}
              </a>
            ))}
            {/* Language switcher (mobile) */}
            <div className="col-span-2 mt-2 flex items-center gap-1 rounded-md border border-white/10 bg-white/5 p-1">
              {LOCALES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLocale(l.code)}
                  aria-pressed={locale === l.code}
                  className={`flex-1 rounded px-2 py-1.5 text-xs font-semibold transition-colors ${
                    locale === l.code
                      ? "bg-sand/20 text-sand"
                      : "text-ivory/55 hover:text-ivory/80"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <a
              href="#access"
              onClick={() => setOpen(false)}
              className="btn-primary col-span-2 mt-1"
            >
              {tt(S.common.requestInstitutionalAccess)}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
