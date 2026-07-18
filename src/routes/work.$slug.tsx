import { Link, useParams } from "react-router-dom";
import { SEO } from "@/components/site/seo";
import { PageHero, Section, Card, Tag, Stat, CTAButton } from "@/components/site/primitives";
import { projects, services as allServices } from "@/content/nova";
import { getWorkImage } from "@/content/work-images";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

function CaseStudy() {
  const { slug } = useParams();
  const idx = projects.findIndex((p) => p.slug === slug);
  const project = idx >= 0 ? projects[idx] : undefined;

  if (!project) {
    return (
      <>
        <SEO
          title="Case study not found (404) — NOVA Studio"
          description="This case study doesn't exist or was moved. Browse all NOVA Studio projects instead."
          noIndex
        />
        <Section eyebrow="404" title="Case study not found.">
          <Link to="/work" className="text-sm underline underline-offset-4">
            Back to work
          </Link>
        </Section>
      </>
    );
  }

  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];
  const related = projects.filter((p) => p.slug !== project.slug && p.industry === project.industry).slice(0, 2);
  const usedServices = project.services
    .map((s) => allServices.find((x) => x.slug === s))
    .filter(Boolean) as typeof allServices;

  return (
    <>
      <SEO
        title={`${project.title} — ${project.client} · NOVA Studio`}
        description={project.summary}
        ogType="article"
        path={`/work/${project.slug}`}
      />

      <PageHero
        eyebrow={`${project.client} · ${project.category} · ${project.year}`}
        title={project.title}
        intro={project.summary}
      >
        <CTAButton href="/book">Start a similar project</CTAButton>
        <CTAButton href="/work" variant="secondary">
          <ArrowLeft className="h-3.5 w-3.5" /> All work
        </CTAButton>
      </PageHero>

      {/* Hero bento */}
      <Section>
        <div className="grid gap-4 md:grid-cols-6 md:grid-rows-2">
          <Card className="bg-primary md:col-span-4 md:row-span-2">
            <Tag tone="on-primary">At a glance</Tag>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {project.metrics.map((m) => (
                <Stat key={m.label} value={m.value} label={m.label} />
              ))}
            </div>
            <div className="mt-10 grid gap-4 border-t border-foreground/10 pt-6 text-sm sm:grid-cols-2">
              <Info label="Client" value={project.client} />
              <Info label="Industry" value={project.industry} />
              <Info label="Year" value={String(project.year)} />
              <Info label="Category" value={project.category} />
            </div>
          </Card>
          <Card className="bg-secondary text-[color:var(--secondary-foreground)] md:col-span-2">
            <Tag tone="on-secondary">Services</Tag>
            <ul className="mt-6 flex flex-col gap-2 text-sm">
              {usedServices.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="underline-offset-4 hover:underline">
                    → {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="bg-foreground text-background md:col-span-2">
            <Tag tone="on-foreground">Engagement</Tag>
            <p className="mt-4 text-sm text-background/80">
              A cross-functional pod working alongside the {project.client} team from research through launch.
            </p>
          </Card>
        </div>
      </Section>

      {/* Problem / Strategy / Outcome */}
      <Section eyebrow="The case" title="Problem, strategy, outcome." intro="How the engagement unfolded — the constraints we started with, the direction we set, and what shipped.">
        <div className="grid gap-4 md:grid-cols-3">
          <NarrativeCard label="Problem" body={project.problem} />
          <NarrativeCard label="Strategy" body={project.strategy} />
          <NarrativeCard label="Outcome" body={project.outcome} />
        </div>
      </Section>

      {/* Process */}
      <Section eyebrow="Process" title="How we shipped this.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Research", body: "Stakeholder interviews, artifact review, and field research where it applied." },
            { title: "Strategy", body: "Positioning, IA, and design principles agreed before pixels moved." },
            { title: "Design & build", body: "Cross-functional pod delivering weekly, with the client's team in the room." },
            { title: "Launch & learn", body: "Instrumented from day one; iterated against real metrics." },
          ].map((step, i) => (
            <Card key={step.title}>
              <div className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Phase {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-4 text-lg font-semibold">{step.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Gallery */}
      <Section eyebrow="Gallery" title="Selected work.">
        <div className="grid gap-4 md:grid-cols-6 md:grid-rows-2">
          {(() => {
            const image = getWorkImage(project.slug);
            return image ? (
              <div className="relative overflow-hidden rounded-2xl border border-border md:col-span-4 md:row-span-2">
                <img
                  src={image}
                  alt={`${project.client} — ${project.title}`}
                  width={1600}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover aspect-[16/10] md:aspect-auto"
                />
              </div>
            ) : (
              <div className="rounded-2xl border border-border bg-primary md:col-span-4 md:row-span-2 aspect-[16/10] md:aspect-auto" />
            );
          })()}
          <div className="rounded-2xl border border-border bg-secondary md:col-span-2 aspect-[4/3] p-6">
            <Tag tone="on-secondary">Deliverable</Tag>
            <p className="mt-3 text-sm text-[color:var(--secondary-foreground)]/85">
              {project.strategy.split(".")[0]}.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card md:col-span-2 aspect-[4/3] p-6">
            <Tag>Outcome</Tag>
            <p className="mt-3 text-sm text-muted-foreground">{project.outcome.split(".")[0]}.</p>
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      <Section>
        <Card className="bg-foreground text-background">
          <Quote className="h-6 w-6 opacity-60" />
          <p className="mt-4 max-w-3xl text-2xl font-medium leading-snug md:text-3xl">
            "{project.testimonial.quote}"
          </p>
          <div className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-background/70">
            {project.testimonial.author} · {project.testimonial.role}
          </div>
        </Card>
      </Section>

      {/* Related */}
      {related.length > 0 && (
        <Section eyebrow="Related" title={`More from ${project.industry}.`}>
          <div className="grid gap-6 md:grid-cols-2">
            {related.map((p) => (
              <Card key={p.slug} className="min-h-[240px]">
                <Tag>
                  {p.client} · {p.year}
                </Tag>
                <h3 className="mt-4 text-xl font-semibold leading-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
                <Link to={`/work/${p.slug}`} className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium underline underline-offset-4">
                  Read case study <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {/* Prev / Next */}
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          <Link to={`/work/${prev.slug}`} className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-muted">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              <ArrowLeft className="h-3.5 w-3.5" /> Previous
            </div>
            <div className="mt-3 text-lg font-semibold leading-tight">{prev.title}</div>
          </Link>
          <Link to={`/work/${next.slug}`} className="group rounded-2xl border border-border bg-card p-6 text-right transition-colors hover:bg-muted">
            <div className="flex items-center justify-end gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Next <ArrowRight className="h-3.5 w-3.5" />
            </div>
            <div className="mt-3 text-lg font-semibold leading-tight">{next.title}</div>
          </Link>
        </div>
      </Section>
    </>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground/60">{label}</div>
      <div className="mt-1 font-medium">{value}</div>
    </div>
  );
}

function NarrativeCard({ label, body }: { label: string; body: string }) {
  return (
    <Card>
      <Tag>{label}</Tag>
      <p className="mt-4 text-base leading-relaxed text-foreground/90">{body}</p>
    </Card>
  );
}

export default CaseStudy;
