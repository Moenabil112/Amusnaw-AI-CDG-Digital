import Wordmark from "./Wordmark";
import { navItems } from "../data/nav";
import { entity } from "../data/entity";
import { useT } from "../i18n";
import { S } from "../i18n/strings";

export default function Footer() {
  const tt = useT();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-graphite-900 py-12">
      <div className="container-px">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <Wordmark />
            <p className="mt-4 text-sm leading-relaxed text-ivory/55">
              {tt(S.footer.blurb)}
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3">
            {navItems.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="text-sm text-ivory/55 transition-colors hover:text-sand"
              >
                {tt(n.label)}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-ivory/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {entity.name}. {tt(entity.type)}.
          </p>
          <p className="max-w-xl sm:text-end">{tt(S.footer.confidential)}</p>
        </div>
      </div>
    </footer>
  );
}
