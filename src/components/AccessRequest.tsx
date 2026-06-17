import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, ShieldCheck } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { contact } from "../data/entity";
import { accessLadder, accessLevels, type AccessKey } from "../data/accessLevels";
import { useT } from "../i18n";
import { S } from "../i18n/strings";

type FormState = {
  name: string;
  institution: string;
  role: string;
  email: string;
  phone: string;
  level: AccessKey;
  reason: string;
  nda: "yes" | "no";
};

const initial: FormState = {
  name: "",
  institution: "",
  role: "",
  email: "",
  phone: "",
  level: "controlled",
  reason: "",
  nda: "no",
};

export default function AccessRequest() {
  const tt = useT();
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  const update =
    (key: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // No backend in v0.1 — compose a mailto and show a static confirmation.
    const levelLabel = tt(accessLevels[form.level].label);
    const body = [
      "Institutional Access Request — Amusnaw AI SA",
      "",
      `Full name: ${form.name}`,
      `Institution: ${form.institution}`,
      `Role / department: ${form.role}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Requested access level: ${levelLabel}`,
      `NDA required: ${form.nda}`,
      "",
      "Reason for access:",
      form.reason,
    ].join("\n");

    const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(
      "Institutional Access Request — Amusnaw AI SA",
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-lg border border-white/10 bg-graphite-900/60 px-3.5 py-2.5 text-sm text-ivory placeholder:text-ivory/30 focus:border-sand/50 focus:outline-none focus:ring-1 focus:ring-sand/40";
  const labelClass =
    "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ivory/55";

  return (
    <section id="access" className="border-t border-white/5 py-20 sm:py-28">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <div>
              <SectionTitle
                eyebrow={tt(S.access.eyebrow)}
                title={tt(S.access.title)}
              />
              <p className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-ivory/70">
                <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-sand" />
                {tt(contact.reviewNote)}
              </p>

              <div className="mt-8 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-ivory/45">
                  {tt(S.access.ladder)}
                </p>
                {accessLadder.map((key) => {
                  const a = accessLevels[key];
                  return (
                    <div
                      key={key}
                      className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5"
                    >
                      <span
                        className={`mt-0.5 inline-flex flex-shrink-0 items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase ${a.className}`}
                      >
                        {tt(a.label)}
                      </span>
                      <span className="text-xs leading-relaxed text-ivory/55">
                        {tt(a.description)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {submitted ? (
              <div className="panel flex h-full flex-col items-center justify-center p-10 text-center">
                <CheckCircle2 className="h-12 w-12 text-sand" />
                <h3 className="mt-4 text-xl font-bold text-ivory">
                  {tt(S.access.successTitle)}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-ivory/65">
                  {tt(S.access.successBodyA)}{" "}
                  <span className="text-sand">{contact.email}</span>
                  {tt(S.access.successBodyB)}
                </p>
                <button
                  onClick={() => {
                    setForm(initial);
                    setSubmitted(false);
                  }}
                  className="btn-ghost mt-6"
                >
                  {tt(S.access.submitAnother)}
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="panel p-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelClass}>{tt(S.access.fullName)}</label>
                    <input
                      required
                      className={inputClass}
                      value={form.name}
                      onChange={update("name")}
                      placeholder={tt(S.access.fullName)}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      {tt(S.access.institution)}
                    </label>
                    <input
                      required
                      className={inputClass}
                      value={form.institution}
                      onChange={update("institution")}
                      placeholder={tt(S.access.institutionPh)}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>{tt(S.access.role)}</label>
                    <input
                      className={inputClass}
                      value={form.role}
                      onChange={update("role")}
                      placeholder={tt(S.access.rolePh)}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>{tt(S.access.email)}</label>
                    <input
                      required
                      type="email"
                      className={inputClass}
                      value={form.email}
                      onChange={update("email")}
                      placeholder="name@institution.org"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>{tt(S.access.phone)}</label>
                    <input
                      className={inputClass}
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="+212 …"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>{tt(S.access.level)}</label>
                    <select
                      className={inputClass}
                      value={form.level}
                      onChange={update("level")}
                    >
                      {accessLadder.map((key) => (
                        <option key={key} value={key}>
                          {tt(accessLevels[key].label)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label className={labelClass}>{tt(S.access.reason)}</label>
                  <textarea
                    required
                    rows={3}
                    className={inputClass}
                    value={form.reason}
                    onChange={update("reason")}
                    placeholder={tt(S.access.reasonPh)}
                  />
                </div>

                <div className="mt-4">
                  <label className={labelClass}>
                    {tt(S.access.ndaRequired)}
                  </label>
                  <div className="flex gap-2">
                    {(["yes", "no"] as const).map((v) => (
                      <button
                        key={v}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, nda: v }))}
                        className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors ${
                          form.nda === v
                            ? "border-sand/50 bg-sand/15 text-sand"
                            : "border-white/10 bg-white/5 text-ivory/60 hover:text-ivory"
                        }`}
                      >
                        {tt(v === "yes" ? S.access.yes : S.access.no)}
                      </button>
                    ))}
                  </div>
                </div>

                <button type="submit" className="btn-primary mt-6 w-full">
                  <Mail className="h-4 w-4" /> {tt(S.access.submit)}
                </button>
                <p className="mt-3 text-center text-xs text-ivory/40">
                  {tt(S.access.noStore)} {contact.email}.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
