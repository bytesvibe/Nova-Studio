import { Link } from "react-router-dom";
import { SEO } from "@/components/site/seo";
import { PageHero, Section, Card, Tag, Stat, CTAButton } from "@/components/site/primitives";
import { projects } from "@/content/nova";
import { getWorkImage } from "@/content/work-images";
import { ArrowRight } from "lucide-react";

function CaseStudies() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <>
      <SEO
        title="Case studies — NOVA Studio"
        description="In-depth case studies covering the problem, strategy, and measurable outcomes of every NOVA Studio engagement."
        path="/case-studies"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "NOVA Studio case studies",
          itemListElement: projects.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `/work/${p.slug}`,
            name: `${p.title} — ${p.client}`,
          })),
        }}
      />

      <PageHero
        eyebrow={`Case studies · ${projects.length} shipped`}
        title="Every project, in detail."
        intro="Long-form case studies covering the problem, the research, the strategy, the design, and the numbers on the other side."
      >
        <CTAButton href="/work">Browse all work</CTAButton>
        <CTAButton href="/book" variant="secondary">
          Start a project
        </CTAButton>
      </PageHero>

      <Section eyebrow="At a glance" title="Outcomes across the portfolio.">
        <div className="grid gap-6 rounded-2xl border border-border bg-card p-8 sm:grid-cols-2 lg:grid-cols-4">
          <Stat value="+38%" label="Avg. conversion lift" />
          <Stat value="−41%" label="Support tickets" />
          <Stat value="34" label="Countries served" />
          <Stat value="4.8" label="Avg. store rating" />
        </div>
      </Section>

      {featured.length > 0 && (
        <Section eyebrow="Featured" title="Signature engagements." intro="The projects we point to when clients ask what a real NOVA engagement looks like.">
          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((p, i) => {
              const image = getWorkImage(p.slug);
              return (
                <Card key={p.slug} className={`min-h-[380px] overflow-hidden ${i % 2 === 0 ? "bg-primary" : "bg-secondary text-[color:var(--secondary-foreground)]"}`}>
                  {image && (
                    <div className="-mx-6 -mt-6 mb-6 overflow-hidden">
                      <img
                        src={image}
                        alt={`${p.client} — ${p.title}`}
                        width={1200}
                        height={750}
                        loading="lazy"
                        className="aspect-[16/10] w-full object-cover"
                      />
                    </div>
                  )}
                  <Tag tone={i % 2 === 0 ? "on-primary" : "on-secondary"}>
                    {p.category} · {p.year}
                  </Tag>
                  <div className="mt-6">
                    <div className="font-mono text-[11px] uppercase tracking-[0.14em] opacity-70">{p.client}</div>
                    <h3 className="mt-3 text-3xl font-semibold leading-tight tracking-tight">{p.title}</h3>
                    <p className="mt-3 text-sm opacity-80">{p.summary}</p>
                  </div>
                  <div className="mt-8 grid grid-cols-3 gap-4 border-t border-current/10 pt-6">
                    {p.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="font-mono text-2xl font-semibold">{m.value}</div>
                        <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] opacity-70">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <Link to={`/work/${p.slug}`} className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium underline underline-offset-4">
                    Read the case study <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Card>
              );
            })}
          </div>
        </Section>
      )}

      <Section eyebrow="All case studies" title="The full library.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <Card key={p.slug} className="min-h-[300px]">
              <Tag>
                {p.category} · {p.year}
              </Tag>
              <div className="mt-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{p.client}</div>
                <h3 className="mt-3 text-xl font-semibold leading-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                {p.metrics.slice(0, 2).map((m) => (
                  <span key={m.label}>
                    {m.value} <span className="opacity-70">{m.label}</span>
                  </span>
                ))}
              </div>
              <Link to={`/work/${p.slug}`} className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium underline underline-offset-4">
                Read case study <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Card className="bg-foreground text-background">
          <div className="grid gap-8 md:grid-cols-[2fr_1fr] md:items-center">
            <div>
              <Tag tone="on-foreground">Next</Tag>
              <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                Have a project that belongs in this library?
              </h2>
              <p className="mt-3 max-w-xl text-sm text-background/70">
                Tell us where you're headed. We'll come back with a scope, a timeline, and the team we'd put on it.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link to="/book" className="inline-flex items-center gap-1.5 rounded-md bg-background px-5 py-2.5 text-sm font-medium text-foreground">
                Book a call <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-md border border-background/30 px-5 py-2.5 text-sm font-medium">
                Send a brief
              </Link>
            </div>
          </div>
        </Card>
      </Section>
    </>
  );
}

export default CaseStudies;
