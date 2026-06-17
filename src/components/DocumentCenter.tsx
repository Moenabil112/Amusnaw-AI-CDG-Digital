import { useMemo, useState } from "react";
import { Download, Eye, FileText, Lock, X } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import StatusBadge from "./StatusBadge";
import AccessBadge from "./AccessBadge";
import {
  documentCategories,
  documentCategoryLabels,
  documents,
  type DocCategory,
  type DocumentCard,
} from "../data/documents";
import { accessLevels } from "../data/accessLevels";
import { useT } from "../i18n";
import { S } from "../i18n/strings";

type Filter = "All" | DocCategory;
const FILTERS: Filter[] = ["All", ...documentCategories];

export default function DocumentCenter() {
  const tt = useT();
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<DocumentCard | null>(null);

  const visible = useMemo(
    () =>
      filter === "All"
        ? documents
        : documents.filter((d) => d.category === filter),
    [filter],
  );

  const filterLabel = (f: Filter) =>
    f === "All" ? tt(S.documents.all) : tt(documentCategoryLabels[f]);

  return (
    <section id="documents" className="section bg-graphite-900/40">
      <div className="container-px">
        <Reveal>
          <SectionTitle
            index="09"
            eyebrow={tt(S.documents.eyebrow)}
            title={tt(S.documents.title)}
            description={tt(S.documents.description)}
          />
        </Reveal>

        {/* Filters */}
        <Reveal>
          <div className="mt-8 flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  filter === f
                    ? "border-sand/50 bg-sand/15 text-sand"
                    : "border-white/10 bg-white/5 text-ivory/55 hover:text-ivory/80"
                }`}
              >
                {filterLabel(f)}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Cards */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((doc, i) => {
            const locked = accessLevels[doc.access].locked;
            return (
              <Reveal key={doc.id} delay={(i % 3) * 0.05}>
                <button
                  onClick={() => setActive(doc)}
                  className="panel panel-hover flex h-full w-full flex-col p-5 text-start"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2 text-ivory/40">
                      <FileText className="h-5 w-5" />
                      <span className="font-heading text-sm font-bold text-white/20">
                        {doc.number}
                      </span>
                    </div>
                    {locked && <Lock className="h-4 w-4 text-ivory/35" />}
                  </div>

                  <h3 className="mt-3 text-base font-semibold text-ivory">
                    {tt(doc.title)}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium text-ivory/45">
                    {tt(documentCategoryLabels[doc.category])}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ivory/65">
                    {tt(doc.description)}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <StatusBadge status={doc.status} />
                    <AccessBadge access={doc.access} />
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      {active && <DocModal doc={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function DocModal({
  doc,
  onClose,
}: {
  doc: DocumentCard;
  onClose: () => void;
}) {
  const tt = useT();
  const access = accessLevels[doc.access];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-graphite-900/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="panel relative z-10 w-full max-w-lg p-7">
        <button
          onClick={onClose}
          className="absolute end-4 top-4 rounded-md p-1.5 text-ivory/50 hover:bg-white/5 hover:text-ivory"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2 text-ivory/40">
          <FileText className="h-5 w-5" />
          <span className="text-xs font-semibold uppercase tracking-wide">
            {tt(S.documents.document)} {doc.number}
          </span>
        </div>
        <h3 className="mt-3 pe-8 text-xl font-bold text-ivory">
          {tt(doc.title)}
        </h3>
        <p className="mt-1 text-sm text-ivory/50">
          {tt(documentCategoryLabels[doc.category])}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <StatusBadge status={doc.status} />
          <AccessBadge access={doc.access} />
        </div>

        <p className="mt-4 text-sm leading-relaxed text-ivory/70">
          {tt(doc.description)}
        </p>

        <div className="mt-5 rounded-lg border border-white/10 bg-graphite-900/50 p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-ivory/80">
            <Lock className="h-4 w-4 text-sand" /> {tt(S.documents.access)}:{" "}
            {tt(access.label)}
          </div>
          <p className="mt-1.5 text-xs leading-relaxed text-ivory/55">
            {tt(access.description)} {tt(S.documents.modalNote)}
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            disabled
            className="btn flex-1 cursor-not-allowed border border-white/10 bg-white/5 text-ivory/45"
          >
            <Eye className="h-4 w-4" /> {tt(S.documents.preview)}
          </button>
          <button
            type="button"
            disabled
            className="btn flex-1 cursor-not-allowed border border-white/10 bg-white/5 text-ivory/45"
          >
            <Download className="h-4 w-4" /> {tt(S.documents.download)}
          </button>
          <a href="#access" onClick={onClose} className="btn-primary flex-1">
            {tt(S.common.requestAccess)}
          </a>
        </div>
      </div>
    </div>
  );
}
