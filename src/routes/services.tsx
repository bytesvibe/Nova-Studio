import { Link } from "react-router-dom";
import { SEO } from "@/components/site/seo";
import { PageHero, Section, Card, Tag, BentoTile } from "@/components/site/primitives";
import { services } from "@/content/nova";

const categories: { label: string; match: (tag: string) => boolean }[] = [
  { label: "Strategy", match: (t) => /strategy/i.test(t) },
  { label: "Visual", match: (t) => /visual/i.test(t) },
  { label: "Product", match: (t) => /product|ui|ux/i.test(t) },
  { label: "Engineering", match: (t) => /engineering|web|dev/i.test(t) },
  { label: "Motion", match: (t) => /motion/i.test(t) },
];

function Page() {
  return (
    <>
      <SEO
        title="Services — NOVA Studio"
        description="Fifteen focused practices spanning brand, product, web, motion, and design systems."
        path="/services"
      />
      <PageHero
        eyebrow="Services"
        title="Fifteen focused practices."
        intro="Compose an engagement from brand, product, web, motion, and systems. Every service ships with a defined scope, deliverables, and success criteria."
      />

      <Section>
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <span
              key={c.label}
              className="rounded-full border border-border bg-card px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
            >
              {c.label}
            </span>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="group">
              <BentoTile
                variant={i % 7 === 0 ? "primary" : i % 11 === 0 ? "secondary" : "card"}
                className="h-full transition-transform duration-300 group-hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <Tag tone={i % 7 === 0 ? "on-primary" : i % 11 === 0 ? "on-secondary" : "muted"}>
                    {s.tag}
                  </Tag>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-tight">{s.name}</h3>
                <p className="mt-3 line-clamp-3 text-sm text-foreground/75">{s.summary}</p>
                <div className="mt-8 flex items-center justify-between text-sm">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    {s.deliverables.length} deliverables
                  </span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </BentoTile>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Engage" title="Ways to work with us.">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { name: "Project", body: "Fixed scope, fixed timeline, fixed price. Best for launches." },
            { name: "Retainer", body: "Dedicated squad for 3–12 months. Best for continuous product work." },
            { name: "Sprint", body: "Two weeks, one outcome. Best for research, audits, and diagnostics." },
          ].map((t) => (
            <Card key={t.name}>
              <Tag>Model</Tag>
              <h3 className="mt-6 text-xl font-semibold">{t.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
              <Link to="/pricing" className="mt-8 text-sm underline underline-offset-4">
                See pricing →
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Card className="bg-foreground text-background">
          <Tag tone="on-foreground">Not sure where to start?</Tag>
          <h2 className="mt-6 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Book a 30-minute call — we&apos;ll help you scope it.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/book"
              className="inline-flex items-center gap-1.5 rounded-md bg-background px-5 py-2.5 text-sm font-medium text-foreground"
            >
              Book a call
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-md border border-background/30 px-5 py-2.5 text-sm font-medium"
            >
              Send a brief
            </Link>
          </div>
        </Card>
      </Section>
    </>
  );
}

export default Page;
