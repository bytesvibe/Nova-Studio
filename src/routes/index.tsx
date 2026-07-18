import { ArrowUpRight, Sparkles, LayoutGrid, Zap, Users, BarChart3, Palette, Quote, Star } from "lucide-react";
import { SEO } from "@/components/site/seo";
import { Link } from "react-router-dom";
import { agency, clientLogos, projects, services, industries, processPhases, testimonials } from "@/content/nova";
import { Card, Tag, Section, Stat, Marquee, BentoTile } from "@/components/site/primitives";

const featured = projects.filter((p) => p.featured);
const featuredServices = services.slice(0, 6);
const featuredIndustries = industries.slice(0, 8);
const featuredTestimonials = testimonials.slice(0, 3);
const highlightedPhases = processPhases.slice(0, 4);

function Home() {
  return (
    <>
      <SEO
        title="NOVA Studio — Brands, products, and interfaces that scale"
        description="A creative agency for brands, products, and interfaces. NOVA Studio designs and builds for startups, scale-ups, and global companies."
        ogTitle="NOVA Studio — Brands, products, and interfaces that scale"
        ogDescription="A creative agency for brands, products, and interfaces."
        path="/"
      />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-14 pb-12 md:pt-24 md:pb-16">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            <Sparkles className="h-3 w-3" /> Studio at work · booking Q3
          </span>
          <h1 className="max-w-5xl text-4xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            Design that behaves
            <br />
            <span className="text-muted-foreground">like a system.</span>
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
            {agency.mission}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/book"
              className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Book a discovery call <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              See our work
            </Link>
          </div>
        </div>
      </section>

      <Marquee items={clientLogos} />

      {/* Featured bento */}
      <Section
        id="featured"
        eyebrow="Featured work"
        title="A few things we've shipped."
        intro="Selected work from the last twelve months across finance, healthcare, and commerce."
      >
        <div className="grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-4 md:grid-cols-4 md:gap-6">
          <BentoTile variant="primary" className="md:col-span-2 md:row-span-2">
            <div className="flex items-center justify-between">
              <Tag tone="on-primary">01 · {featured[0]?.category}</Tag>
              <LayoutGrid className="h-4 w-4 text-foreground/60" />
            </div>
            <div className="mt-8 flex flex-1 items-center justify-center">
              <div className="grid w-full max-w-sm grid-cols-3 gap-2">
                <div className="col-span-2 row-span-2 h-24 rounded-lg bg-foreground/90" />
                <div className="h-11 rounded-lg bg-secondary" />
                <div className="h-11 rounded-lg bg-card" />
                <div className="col-span-3 h-11 rounded-lg bg-foreground/10" />
              </div>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground/60">
                {featured[0]?.client}
              </p>
              <h3 className="mt-1 text-2xl font-semibold tracking-tight">{featured[0]?.title}</h3>
              <Link
                to={`/work/${featured[0]?.slug ?? ""}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium hover:opacity-80"
              >
                Read case study <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </BentoTile>

          <BentoTile>
            <Tag>Speed</Tag>
            <div className="mt-6">
              <div className="font-mono text-5xl font-semibold tracking-tight">42ms</div>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                Avg. interaction
              </p>
            </div>
            <Zap className="mt-6 h-4 w-4 text-muted-foreground" />
          </BentoTile>

          <BentoTile variant="secondary">
            <Tag tone="on-secondary">{featured[1]?.category}</Tag>
            <div className="mt-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--secondary-foreground)]/70">
                {featured[1]?.client}
              </p>
              <h3 className="mt-1 text-lg font-semibold leading-tight">{featured[1]?.title}</h3>
              <Link
                to={`/work/${featured[1]?.slug ?? ""}`}
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium hover:opacity-80"
              >
                Read case study <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </BentoTile>

          <BentoTile className="md:col-span-2">
            <div className="flex items-center justify-between">
              <Tag>Insight</Tag>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="mt-6 flex flex-1 items-end gap-2">
              {[38, 62, 44, 78, 56, 90, 72, 84, 60, 96, 70, 88].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-md bg-foreground/85" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {featured[2]?.client}
              </p>
              <span className="font-mono text-xs text-success">
                {featured[2]?.metrics[0]?.value}
              </span>
            </div>
            <h3 className="mt-1 text-lg font-semibold tracking-tight">{featured[2]?.title}</h3>
          </BentoTile>
        </div>
      </Section>

      {/* Services */}
      <Section
        eyebrow="Services"
        title="What we do, block by block."
        intro="A studio built around fifteen focused practices — you pick the pieces, we compose the engagement."
      >
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {featuredServices.map((s, i) => (
            <Card key={s.slug}>
              <div className="flex items-center justify-between">
                <Tag>{String(i + 1).padStart(2, "0")}</Tag>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {s.tag}
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold tracking-tight">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
              </div>
              <Link
                to={`/services/${s.slug}`}
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium hover:opacity-80"
              >
                Learn more <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            All services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Industries */}
      <Section
        eyebrow="Industries"
        title="Where we go deep."
        intro="Fourteen industries. A shared vocabulary with your team from day one."
      >
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {featuredIndustries.map((ind) => (
            <Link
              key={ind.slug}
              to={`/industries/${ind.slug}`}
              className="group flex items-center justify-between rounded-2xl border border-border bg-card px-4 py-4 transition-colors hover:bg-muted"
            >
              <span className="text-sm font-medium">{ind.name}</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/industries"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            All industries <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Process */}
      <Section
        eyebrow="Process"
        title="A ten-phase engagement, calibrated to you."
        intro="Not every project needs every phase. We scope the ones that matter for your outcome."
      >
        <div className="grid gap-4 md:grid-cols-4 md:gap-6">
          {highlightedPhases.map((p, i) => (
            <Card key={p.slug}>
              <Tag>Phase {String(i + 1).padStart(2, "0")}</Tag>
              <h3 className="mt-6 text-lg font-semibold tracking-tight">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {p.duration}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/process"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            See the full process <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Testimonials */}
      <Section
        eyebrow="Testimonials"
        title="What partners say."
        intro="A partial list — the rest are on the record on our testimonials page."
      >
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {featuredTestimonials.map((t) => (
            <Card key={t.author} className="justify-between">
              <div>
                <Quote className="h-5 w-5 text-muted-foreground" />
                <p className="mt-4 text-base leading-relaxed">"{t.quote}"</p>
              </div>
              <div className="mt-8">
                <div className="flex items-center gap-1 text-foreground">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-sm font-medium">{t.author}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {t.role} · {t.company}
                </p>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            All testimonials <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Stats */}
      <Section eyebrow="By the numbers" title="Studio at a glance.">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {agency.stats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <BentoTile variant="foreground" className="md:p-10">
          <Tag tone="on-foreground">Get started</Tag>
          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
                Let's design the next chapter of your product.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-background/70 md:text-base">
                We reply to every discovery request within one business day. No sales team, no funnels — you'll speak directly to a partner.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/book"
                className="inline-flex items-center gap-1.5 rounded-md bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
              >
                Book a call <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 rounded-md border border-background/20 px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-background/10"
              >
                Send a brief
              </Link>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-background/15 pt-8 md:grid-cols-4">
            <div>
              <Palette className="h-4 w-4 text-background/60" />
              <p className="mt-3 text-sm text-background/70">One coherent design language</p>
            </div>
            <div>
              <Users className="h-4 w-4 text-background/60" />
              <p className="mt-3 text-sm text-background/70">Embedded pods, not freelancers</p>
            </div>
            <div>
              <Zap className="h-4 w-4 text-background/60" />
              <p className="mt-3 text-sm text-background/70">Ship weekly, not quarterly</p>
            </div>
            <div>
              <LayoutGrid className="h-4 w-4 text-background/60" />
              <p className="mt-3 text-sm text-background/70">Systems that outlast us</p>
            </div>
          </div>
        </BentoTile>
      </Section>
    </>
  );
}

export default Home;
