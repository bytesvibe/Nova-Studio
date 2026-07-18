import { useMemo, useState } from "react";
import { SEO } from "@/components/site/seo";
import { PageHero, Section, Card, Tag, BentoTile } from "@/components/site/primitives";
import { services, agency } from "@/content/nova";

type FormState = {
  projectType: string;
  budget: string;
  timeline: string;
  company: string;
  name: string;
  email: string;
  notes: string;
  date: string;
  time: string;
};

const projectTypes = ["Brand", "Website", "Product design", "Design system", "Not sure yet"];
const budgets = ["<$25k", "$25k–$60k", "$60k–$150k", "$150k+", "Not sure"];
const timelines = ["ASAP", "This quarter", "Next quarter", "Flexible"];
const timeSlots = ["09:00", "10:30", "13:00", "14:30", "16:00"];

const emptyState: FormState = {
  projectType: "",
  budget: "",
  timeline: "",
  company: "",
  name: "",
  email: "",
  notes: "",
  date: "",
  time: "",
};

function StepDot({ n, active, done }: { n: number; active: boolean; done: boolean }) {
  return (
    <div
      className={`grid h-8 w-8 place-items-center rounded-full border font-mono text-[11px] ${
        done
          ? "border-foreground bg-foreground text-background"
          : active
            ? "border-foreground bg-background text-foreground"
            : "border-border bg-card text-muted-foreground"
      }`}
    >
      {String(n).padStart(2, "0")}
    </div>
  );
}

function ChipRow({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(o)}
          className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
            value === o
              ? "border-foreground bg-foreground text-background"
              : "border-border bg-card hover:bg-muted"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

function Page() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(emptyState);
  const [submitted, setSubmitted] = useState(false);

  const steps = [
    { n: 1, label: "Project" },
    { n: 2, label: "Company" },
    { n: 3, label: "Schedule" },
  ];

  const canAdvance = useMemo(() => {
    if (step === 1) return form.projectType && form.budget && form.timeline;
    if (step === 2) return form.company && form.name && form.email;
    if (step === 3) return form.date && form.time;
    return false;
  }, [step, form]);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  return (
    <>
      <SEO
        title="Book a discovery call — NOVA Studio"
        description="Book a 30-minute discovery call with a NOVA Studio partner. Tell us about your project, pick a time, and we'll confirm within one business day."
        path="/book"
        ogType="website"
      />
      <PageHero
        eyebrow="Discovery call"
        title="Thirty minutes with a partner."
        intro="No account managers. You'll speak with the person who would lead the engagement — a partner from the discipline closest to your problem."
      />

      <Section>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          <Card>
            {submitted ? (
              <div className="flex flex-col items-start gap-4">
                <Tag>Confirmed</Tag>
                <h3 className="text-2xl font-semibold tracking-tight">
                  You're on the calendar.
                </h3>
                <p className="text-sm text-muted-foreground">
                  We'll send a calendar invite and a short prep doc to <strong>{form.email}</strong> within one business day. Look for a note from a partner in the {form.projectType.toLowerCase() || "relevant"} practice.
                </p>
                <div className="grid grid-cols-2 gap-4 rounded-xl border border-border bg-background p-4 text-sm md:grid-cols-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                      Date
                    </div>
                    <div className="mt-1 font-medium">{form.date}</div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                      Time
                    </div>
                    <div className="mt-1 font-medium">{form.time}</div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                      Duration
                    </div>
                    <div className="mt-1 font-medium">30 min</div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                      Format
                    </div>
                    <div className="mt-1 font-medium">Zoom</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setForm(emptyState);
                    setStep(1);
                    setSubmitted(false);
                  }}
                  className="text-sm underline underline-offset-4"
                >
                  Book another call
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8 flex items-center gap-3">
                  {steps.map((s, i) => (
                    <div key={s.n} className="flex items-center gap-3">
                      <StepDot n={s.n} active={step === s.n} done={step > s.n} />
                      <span
                        className={`font-mono text-[11px] uppercase tracking-[0.14em] ${
                          step === s.n ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {s.label}
                      </span>
                      {i < steps.length - 1 && (
                        <span aria-hidden className="mx-2 h-px w-8 bg-border" />
                      )}
                    </div>
                  ))}
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (step < 3) setStep(step + 1);
                    else setSubmitted(true);
                  }}
                  className="space-y-8"
                >
                  {step === 1 && (
                    <div className="space-y-6">
                      <div>
                        <label className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                          Project type
                        </label>
                        <div className="mt-3">
                          <ChipRow options={projectTypes} value={form.projectType} onChange={(v) => set("projectType", v)} />
                        </div>
                      </div>
                      <div>
                        <label className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                          Budget
                        </label>
                        <div className="mt-3">
                          <ChipRow options={budgets} value={form.budget} onChange={(v) => set("budget", v)} />
                        </div>
                      </div>
                      <div>
                        <label className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                          Timeline
                        </label>
                        <div className="mt-3">
                          <ChipRow options={timelines} value={form.timeline} onChange={(v) => set("timeline", v)} />
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      {[
                        { label: "Company", key: "company" as const, type: "text" },
                        { label: "Your name", key: "name" as const, type: "text" },
                        { label: "Work email", key: "email" as const, type: "email" },
                      ].map((f) => (
                        <label key={f.key} className="flex flex-col gap-1.5">
                          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                            {f.label}
                          </span>
                          <input
                            type={f.type}
                            required
                            value={form[f.key]}
                            onChange={(e) => set(f.key, e.target.value)}
                            className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-foreground"
                          />
                        </label>
                      ))}
                      <label className="flex flex-col gap-1.5 md:col-span-2">
                        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                          Anything we should know (optional)
                        </span>
                        <textarea
                          rows={4}
                          value={form.notes}
                          onChange={(e) => set("notes", e.target.value)}
                          className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-foreground"
                        />
                      </label>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6">
                      <label className="flex flex-col gap-1.5">
                        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                          Preferred date
                        </span>
                        <input
                          type="date"
                          required
                          value={form.date}
                          onChange={(e) => set("date", e.target.value)}
                          className="w-full max-w-xs rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-foreground"
                        />
                      </label>
                      <div>
                        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                          Preferred time (your local timezone)
                        </span>
                        <div className="mt-3">
                          <ChipRow options={timeSlots} value={form.time} onChange={(v) => set("time", v)} />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between border-t border-border pt-6">
                    <button
                      type="button"
                      onClick={() => setStep(Math.max(1, step - 1))}
                      disabled={step === 1}
                      className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-40"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      disabled={!canAdvance}
                      className="inline-flex items-center rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {step < 3 ? "Continue" : "Confirm booking"}
                    </button>
                  </div>
                </form>
              </>
            )}
          </Card>

          <div className="space-y-4">
            <BentoTile variant="primary">
              <Tag tone="on-primary">What to expect</Tag>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  "30 minutes on Zoom with a NOVA partner.",
                  "You share the problem; we ask sharp questions.",
                  "You leave with a rough shape of the engagement.",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </BentoTile>

            <Card>
              <Tag>Practices</Tag>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {services.slice(0, 6).map((s) => (
                  <li key={s.slug}>{s.name}</li>
                ))}
              </ul>
            </Card>

            <Card>
              <Tag>Offices</Tag>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {agency.offices.map((o) => (
                  <li key={o.city}>
                    {o.city}, {o.country} · {o.timezone}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}

export default Page;
