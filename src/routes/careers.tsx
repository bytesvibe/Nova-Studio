import { useState } from "react";
import { SEO } from "@/components/site/seo";
import { PageHero, Section, Card, Tag, BentoTile, CTAButton, Stat } from "@/components/site/primitives";
import { openRoles, agency } from "@/content/nova";

const filters = ["All", "Full-time", "Contract"] as const;
type Filter = (typeof filters)[number];

function Page() {
  const [filter, setFilter] = useState<Filter>("All");
  const [submitted, setSubmitted] = useState(false);

  const visible = openRoles.filter((r) => (filter === "All" ? true : r.type === filter));

  return (
    <>
      <SEO
        title="Careers — NOVA Studio"
        description="Join NOVA Studio. Open roles across design, engineering, and operations in New York, Amsterdam, Singapore, and remote — with our hiring process and benefits."
        path="/careers"
        ogType="website"
      />
      <PageHero
        eyebrow="Careers"
        title="Come build the studio."
        intro="We hire for craft, judgment, and kindness — in that order. Every role reports into a partner, and every partner is a maker."
      >
        <CTAButton href="#roles">See open roles</CTAButton>
        <CTAButton href="#apply" variant="secondary">Apply</CTAButton>
      </PageHero>

      <Section>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <Stat value={String(openRoles.length)} label="Open roles" />
          <Stat value="3" label="Offices" />
          <Stat value="92%" label="Retention (3y)" />
          <Stat value="6wk" label="Paid time off" />
        </div>
      </Section>

      <Section eyebrow="Why NOVA" title="What you get, beyond the salary">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Transparent pay", body: "Bands published internally. Same role, same range — regardless of who negotiates." },
            { title: "Real projects", body: "Ship for brands people know. No made-up work, no dashboards for the shelf." },
            { title: "Time to think", body: "One paid research day a month. Four-week paid sabbatical every three years." },
            { title: "Global mobility", body: "Three offices, one working culture. Swap studios for up to three months a year." },
          ].map((c) => (
            <BentoTile key={c.title}>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </BentoTile>
          ))}
        </div>
      </Section>

      <Section id="roles" eyebrow="Open positions" title="Roles we're actively hiring">
        <div className="mb-6 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                filter === f
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-card hover:bg-muted"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-3">
          {visible.map((role) => (
            <Card key={role.title} className="hover:border-foreground/30">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{role.title}</h3>
                  <div className="mt-1 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    <span>{role.location}</span>
                    <span aria-hidden>·</span>
                    <span>{role.type}</span>
                  </div>
                </div>
                <a
                  href="#apply"
                  className="inline-flex items-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-muted"
                >
                  Apply →
                </a>
              </div>
            </Card>
          ))}
          {visible.length === 0 && (
            <Card>
              <p className="text-sm text-muted-foreground">No roles match this filter right now.</p>
            </Card>
          )}
        </div>
      </Section>

      <Section eyebrow="Hiring process" title="What to expect after you apply">
        <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { step: "01", title: "Portfolio review", body: "One week. We read every application — no ATS filter, no keyword game." },
            { step: "02", title: "Intro call", body: "45 minutes with a partner. Mutual fit, working style, expectations." },
            { step: "03", title: "Paid exercise", body: "Four hours, paid at your day rate. Real work, not a puzzle." },
            { step: "04", title: "Panel & offer", body: "Two-hour panel, then a written offer within 48 hours." },
          ].map((s) => (
            <li key={s.step}>
              <Card>
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {s.step}
                </div>
                <h3 className="mt-2 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="apply" eyebrow="Apply" title="Send us your work">
        <Card>
          {submitted ? (
            <div className="flex flex-col items-start gap-3">
              <Tag>Received</Tag>
              <h3 className="text-xl font-semibold">Thanks — we'll be in touch within one week.</h3>
              <p className="text-sm text-muted-foreground">
                A partner will personally read your application. If we don't move forward, we still write back.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="grid grid-cols-1 gap-4 md:grid-cols-2"
            >
              {[
                { label: "Full name", type: "text", name: "name", required: true },
                { label: "Email", type: "email", name: "email", required: true },
                { label: "Portfolio URL", type: "url", name: "portfolio", required: true },
                { label: "Role you're applying for", type: "text", name: "role", required: true },
              ].map((f) => (
                <label key={f.name} className="flex flex-col gap-1.5 text-sm">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    {f.label}
                  </span>
                  <input
                    type={f.type}
                    name={f.name}
                    required={f.required}
                    className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-foreground"
                  />
                </label>
              ))}
              <label className="flex flex-col gap-1.5 text-sm md:col-span-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  Why NOVA?
                </span>
                <textarea
                  name="note"
                  rows={4}
                  required
                  className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-foreground"
                />
              </label>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90"
                >
                  Send application
                </button>
              </div>
            </form>
          )}
        </Card>
        <p className="mt-4 text-xs text-muted-foreground">
          We recruit primarily from our three offices: {agency.offices.map((o) => o.city).join(", ")}. Remote considered for senior roles.
        </p>
      </Section>
    </>
  );
}

export default Page;
