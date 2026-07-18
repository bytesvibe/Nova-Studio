import { Link } from "react-router-dom";
import { SEO } from "@/components/site/seo";
import { PageHero, Section, Card, Tag, BentoTile, CTAButton, Marquee } from "@/components/site/primitives";
import { testimonials, clientLogos, projects } from "@/content/nova";

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 text-foreground" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <span key={i} aria-hidden>
          ★
        </span>
      ))}
    </div>
  );
}

function Page() {
  const featured = testimonials[0];
  const rest = testimonials.slice(1);

  return (
    <>
      <SEO
        title="Testimonials — NOVA Studio"
        description="What clients say about working with NOVA Studio — written reviews, ratings, and client success stories across finance, hospitality, SaaS, and more."
        path="/testimonials"
        ogType="website"
      />
      <PageHero
        eyebrow="Testimonials"
        title="What clients say about the work."
        intro="Written testimonials from teams we've partnered with over the last decade. No paraphrasing, no cherry-picked snippets."
      >
        <CTAButton href="/work">See the work behind them</CTAButton>
        <CTAButton href="/contact" variant="secondary">Start a project</CTAButton>
      </PageHero>

      {featured && (
        <Section>
          <BentoTile variant="foreground">
            <Tag tone="on-foreground">Featured</Tag>
            <blockquote className="mt-4 text-2xl font-medium leading-tight tracking-tight md:text-4xl md:leading-[1.15]">
              "{featured.quote}"
            </blockquote>
            <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-base font-medium">{featured.author}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] opacity-70">
                  {featured.role} · {featured.company}
                </p>
              </div>
              <Stars n={featured.rating} />
            </div>
          </BentoTile>
        </Section>
      )}

      <Section eyebrow="Video testimonials" title="Straight from the client, on camera">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {rest.slice(0, 3).map((t, i) => (
            <Card key={t.author}>
              <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-muted">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-foreground text-background">
                  <span aria-hidden>▶</span>
                </div>
                <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")} · {t.company}
                </span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">"{t.quote}"</p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{t.author}</p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    {t.role} · {t.company}
                  </p>
                </div>
                <Stars n={t.rating} />
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Written reviews" title="The full library">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.author + t.company} className="h-full">
              <Stars n={t.rating} />
              <blockquote className="mt-4 text-base leading-relaxed">"{t.quote}"</blockquote>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-medium">{t.author}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {t.role} · {t.company}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Success stories" title="From feedback to outcomes">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <Link key={p.slug} to={`/work/${p.slug}`}>
              <Card className="h-full">
                <Tag>{p.category}</Tag>
                <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">"{p.testimonial.quote}"</p>
                <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {p.testimonial.author} · {p.client}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          Trusted by
        </div>
      </div>
      <Marquee items={clientLogos} />

      <Section>
        <Card className="bg-primary">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <Tag tone="on-primary">Want to join them?</Tag>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                Send a brief — we reply within one business day.
              </h3>
            </div>
            <div className="flex gap-3">
              <CTAButton href="/contact">Send a brief</CTAButton>
              <CTAButton href="/book" variant="secondary">Book a call</CTAButton>
            </div>
          </div>
        </Card>
      </Section>
    </>
  );
}

export default Page;
