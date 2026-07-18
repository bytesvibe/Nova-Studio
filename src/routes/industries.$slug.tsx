import { Link, useParams } from "react-router-dom";
import { SEO } from "@/components/site/seo";
import { PageHero, Section, Card, Tag, BentoTile, CTAButton } from "@/components/site/primitives";
import { industries, projects, services } from "@/content/nova";

function IndustryDetail() {
  const { slug } = useParams();
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    return (
      <>
        <SEO title="Industry not found (404) — NOVA Studio" description="This industry page doesn't exist. Browse all NOVA Studio industries." noIndex />
        <Section eyebrow="404" title="Industry not found.">
          <Link to="/industries" className="text-sm underline underline-offset-4">
            Back to industries
          </Link>
        </Section>
      </>
    );
  }

  const idx = industries.findIndex((i) => i.slug === industry.slug);
  const prev = industries[(idx - 1 + industries.length) % industries.length];
  const next = industries[(idx + 1) % industries.length];

  const relatedProjects = projects.filter(
    (p) => p.industry.toLowerCase() === industry.name.toLowerCase(),
  );

  const relevantServices = services.slice(0, 6);

  return (
    <>
      <SEO
        title={`${industry.name} — NOVA Studio`}
        description={industry.summary}
        path={`/industries/${industry.slug}`}
        ogType="article"
      />
      <PageHero eyebrow="Industry" title={industry.name} intro={industry.summary}>
        <CTAButton href="/contact">Start a {industry.name.toLowerCase()} project</CTAButton>
        <CTAButton href="/work" variant="secondary">See related work</CTAButton>
      </PageHero>

      <Section eyebrow="Focus" title="Where we focus in this sector">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {industry.focus.map((f, i) => (
            <BentoTile
              key={f}
              variant={i === 0 ? "primary" : i === 1 ? "secondary" : "card"}
            >
              <Tag
                tone={i === 0 ? "on-primary" : i === 1 ? "on-secondary" : "muted"}
              >
                Focus 0{i + 1}
              </Tag>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{f}</h3>
              <p className="mt-2 text-sm opacity-80">
                Dedicated craft for {f.toLowerCase()} in {industry.name.toLowerCase()} — from research to launch.
              </p>
            </BentoTile>
          ))}
        </div>
      </Section>

      <Section eyebrow="Approach" title={`How we work in ${industry.name}`}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card>
            <Tag>Regulatory posture</Tag>
            <h3 className="mt-3 text-lg font-semibold">Compliance-aware from day one</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We staff every {industry.name.toLowerCase()} engagement with people who have shipped in this sector before. Compliance is a design input, not a review gate.
            </p>
          </Card>
          <Card>
            <Tag>Measurement</Tag>
            <h3 className="mt-3 text-lg font-semibold">Tied to outcomes that matter here</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We agree on the two or three metrics your leadership already tracks — and design toward those.
            </p>
          </Card>
        </div>
      </Section>

      {relatedProjects.length > 0 && (
        <Section eyebrow="Case studies" title={`Recent ${industry.name.toLowerCase()} work`}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {relatedProjects.map((p) => (
              <Link key={p.slug} to={`/work/${p.slug}`}>
                <Card>
                  <Tag>{p.category}</Tag>
                  <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
                  <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    {p.client} · {p.year}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <Section eyebrow="Services" title="Services we typically bring">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {relevantServices.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`}>
              <Card>
                <Tag>{s.tag}</Tag>
                <h4 className="mt-2 text-base font-semibold">{s.name}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-col justify-between gap-4 border-t border-border pt-6 md:flex-row">
          <Link to={`/industries/${prev.slug}`} className="text-sm text-muted-foreground hover:text-foreground">
            ← {prev.name}
          </Link>
          <Link to="/industries" className="text-sm underline underline-offset-4">
            All industries
          </Link>
          <Link to={`/industries/${next.slug}`} className="text-sm text-muted-foreground hover:text-foreground">
            {next.name} →
          </Link>
        </div>
      </Section>
    </>
  );
}

export default IndustryDetail;
