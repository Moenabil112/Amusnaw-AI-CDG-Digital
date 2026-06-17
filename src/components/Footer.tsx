import Wordmark from "./Wordmark";
import { navItems } from "../data/nav";
import { entity } from "../data/entity";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-graphite-900 py-12">
      <div className="container-px">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <Wordmark />
            <p className="mt-4 text-sm leading-relaxed text-ivory/55">
              A controlled institutional digital window presented to support a
              first CDG review conversation — before incorporation and
              execution.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3">
            {navItems.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="text-sm text-ivory/55 transition-colors hover:text-sand"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-ivory/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {entity.name}. {entity.type}.
          </p>
          <p className="max-w-xl sm:text-right">
            Confidential — controlled institutional materials. Not a public
            offering, fundraising, or solicitation. All structure, ownership, and
            IP terms remain subject to legal review and final documentation.
          </p>
        </div>
      </div>
    </footer>
  );
}
