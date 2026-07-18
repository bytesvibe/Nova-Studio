import { Link, useParams } from "react-router-dom";
import { SEO } from "@/components/site/seo";
import { PageHero, Section, Card, Tag, BentoTile } from "@/components/site/primitives";
import { services } from "@/content/nova";

function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <>
        <SEO title="Service not found (404) — NOVA Studio" description="This service doesn't exist. Browse all NOVA Studio services instead." noIndex />
        <Section eyebrow="404" title="Service not found.">
          <Link to="/services" className="text-sm underline underline-offset-4">
            ← All services
          </Link>
        </Section>
      </>
    );
  }

  const related = service.related
    .map((s) => services.find((x) => x.slug === s))
    .filter(Boolean) as typeof services;

  const idx = services.findIndex((s) => s.slug === service.slug);
  const next = services[(idx + 1) % services.length];
  const prev = services[(idx - 1 + services.length) % services.length];

  return (
    <>
      <SEO
        title={`${service.name} — NOVA Studio`}
        description={service.summary}
        path={`/services/${service.slug}`}
        jsonLd={
          service.faq.length > 0
            ? {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: service.faq.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              }
            : undefined
        }
      />
      <PageHero eyebrow={service.tag} title={service.name} intro={service.summary}>
        <Link
          to="/book"
          className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background"
        >
          Start this engagement
        </Link>
        <Link
          to="/services"
          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium"
        >
          All services
        </Link>
      </PageHero>

      {/* Benefits + Deliverables bento */}
      <Section>
        <div className="grid gap-4 md:grid-cols-6 md:auto-rows-fr">
          <BentoTile variant="primary" className="md:col-span-4">
            <Tag tone="on-primary">Why teams choose it</Tag>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight md:text-3xl">Benefits</h2>
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </BentoTile>

          <BentoTile variant="card" className="md:col-span-2">
            <Tag>At a glance</Tag>
            <dl className="mt-6 space-y-4 font-mono text-sm">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Category</dt>
                <dd className="mt-1">{service.tag}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Deliverables</dt>
                <dd className="mt-1">{service.deliverables.length}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Typical timeline</dt>
                <dd className="mt-1">4–12 weeks</dd>
              </div>
            </dl>
          </BentoTile>

          <BentoTile variant="card" className="md:col-span-6">
            <Tag>Deliverables</Tag>
            <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {service.deliverables.map((d, i) => (
                <div
                  key={d}
                  className="flex items-start gap-3 rounded-xl border border-border bg-background/40 p-4"
                >
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm">{d}</span>
                </div>
              ))}
            </div>
          </BentoTile>
        </div>
      </Section>

      {/* Process */}
      <Section eyebrow="Process" title="How we run it.">
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, i) => (
            <Card key={step.title}>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                Step {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
            </Card>
          ))}
        </ol>
      </Section>

      {/* FAQ */}
      <Section eyebrow="FAQ" title="Common questions.">
        <div className="divide-y divide-border rounded-2xl border border-border bg-card">
          {service.faq.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-medium">
                {f.q}
                <span className="font-mono text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* Related */}
      {related.length > 0 && (
        <Section eyebrow="Related" title="Often paired with">
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} to={`/services/${r.slug}`}>
                <Card className="h-full">
                  <Tag>{r.tag}</Tag>
                  <h3 className="mt-6 text-xl font-semibold">{r.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{r.summary}</p>
                  <span className="mt-6 text-sm">Explore →</span>
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* Prev / Next + CTA */}
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          <Link to={`/services/${prev.slug}`}>
            <Card className="h-full">
              <Tag>Previous</Tag>
              <div className="mt-4 text-lg font-semibold">← {prev.name}</div>
            </Card>
          </Link>
          <Link to={`/services/${next.slug}`}>
            <Card className="h-full text-right">
              <Tag>Next</Tag>
              <div className="mt-4 text-lg font-semibold">{next.name} →</div>
            </Card>
          </Link>
        </div>

        <Card className="mt-8 bg-secondary">
          <Tag tone="on-secondary">Ready to start?</Tag>
          <div className="mt-6 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <h2 className="max-w-xl text-2xl font-semibold tracking-tight md:text-3xl">
              Bring us your {service.name.toLowerCase()} brief — we&apos;ll reply within one business day.
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background"
              >
                Send brief
              </Link>
              <Link
                to="/book"
                className="inline-flex items-center gap-1.5 rounded-md border border-foreground/20 bg-transparent px-5 py-2.5 text-sm font-medium"
              >
                Book a call
              </Link>
            </div>
          </div>
        </Card>
      </Section>
    </>
  );
}

export default ServiceDetail;
