import { ArrowUpRight, MapPin, Award, Compass, Heart, Sparkles, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/site/seo";
import { agency, awards, team, timeline } from "@/content/nova";
import { BentoTile, Card, PageHero, Section, Stat, Tag } from "@/components/site/primitives";

const values = [
  {
    icon: Compass,
    title: "Strategy is a deliverable",
    body: "Every engagement starts with positioning. If we can't defend it in a sentence, we don't ship it.",
  },
  {
    icon: Sparkles,
    title: "Craft over volume",
    body: "We turn down more work than we take. The projects on our site are the projects on our schedule.",
  },
  {
    icon: Target,
    title: "Systems, not screens",
    body: "We leave clients with tokens, guidelines, and a working model — not a one-off deliverable.",
  },
  {
    icon: Heart,
    title: "Long-term partnerships",
    body: "The average NOVA client stays with us for 3.4 years. We optimize for the second engagement.",
  },
];

const leadership = team.filter((m) => m.group === "Leadership");

function About() {
  return (
    <>
      <SEO
        title="About — NOVA Studio"
        description="Founded in 2016. Three offices, one design language, and a stubborn belief that craft scales."
        ogTitle="About — NOVA Studio"
        ogDescription="The story, mission, and people behind NOVA Studio."
        path="/about"
      />

      <PageHero
        eyebrow="About the studio"
        title={
          <>
            A studio for the <span className="text-muted-foreground">long run.</span>
          </>
        }
        intro="NOVA Studio is a 48-person creative agency working from New York, Amsterdam, and Singapore. We design brands, products, and interfaces for companies that expect the work to still make sense five years from now."
      >
        <Link
          to="/work"
          className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          See our work <ArrowUpRight className="h-4 w-4" />
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
        >
          Get in touch
        </Link>
      </PageHero>

      {/* Mission bento */}
      <Section>
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          <BentoTile variant="primary" className="md:col-span-2">
            <Tag tone="on-primary">Mission</Tag>
            <p className="mt-6 text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
              {agency.mission}
            </p>
            <p className="mt-6 text-sm text-foreground/70">
              We are the studio our clients call when the next hire won't cut it — when brand,
              product, and marketing have quietly drifted apart and someone has to pull them back
              together.
            </p>
          </BentoTile>
          <BentoTile variant="secondary">
            <Tag tone="on-secondary">Vision</Tag>
            <p className="mt-6 text-lg font-medium leading-snug">
              A world where every digital product feels like it was made on purpose.
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--secondary-foreground)]/70">
              Est. {agency.founded}
            </p>
          </BentoTile>
        </div>
      </Section>

      {/* Values */}
      <Section
        eyebrow="How we work"
        title="Four values, plainly stated."
        intro="These aren't posters on a wall. They shape the projects we accept, the pods we assign, and the deliverables we ship."
      >
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {values.map((v) => (
            <Card key={v.title}>
              <v.icon className="h-5 w-5 text-muted-foreground" />
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section eyebrow="By the numbers" title="A decade in, still counting.">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {agency.stats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section eyebrow="Timeline" title="Ten years, five inflection points.">
        <ol className="relative space-y-8 border-l border-border pl-8 md:space-y-12">
          {timeline.map((t) => (
            <li key={t.year} className="relative">
              <span className="absolute -left-[37px] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-border bg-card">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
              </span>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {t.year}
              </div>
              <h3 className="mt-1 text-xl font-semibold tracking-tight">{t.title}</h3>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{t.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Offices */}
      <Section
        eyebrow="Global presence"
        title="Three studios, one design language."
        intro="Each office runs its own book of work, but every project ships against the same standards, tokens, and review cadence."
      >
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {agency.offices.map((o) => (
            <Card key={o.city}>
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <h3 className="mt-6 text-xl font-semibold tracking-tight">
                {o.city}
                <span className="ml-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {o.country}
                </span>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{o.address}</p>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                Timezone · {o.timezone}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Leadership */}
      <Section
        eyebrow="Leadership"
        title="The people who sign the work."
        intro="Every engagement is led by one of these four. No account managers. No layers."
      >
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {leadership.map((m) => (
            <Card key={m.slug}>
              <div className="aspect-square rounded-xl bg-muted" />
              <h3 className="mt-6 text-lg font-semibold tracking-tight">{m.name}</h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {m.role}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/team"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            Meet the whole team <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Awards */}
      <Section eyebrow="Recognition" title="Work that gets noticed.">
        <div className="grid gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-5">
          {awards.map((a) => (
            <Card key={a.name}>
              <Award className="h-5 w-5 text-muted-foreground" />
              <div className="mt-6 font-mono text-4xl font-semibold tracking-tight">
                {a.count}×
              </div>
              <p className="mt-2 text-sm font-medium leading-snug">{a.name}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <BentoTile variant="foreground" className="md:p-10">
          <Tag tone="on-foreground">Work with us</Tag>
          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
              Have a project in mind? Let's talk about it.
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 rounded-md bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
              >
                Send a brief <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/careers"
                className="inline-flex items-center gap-1.5 rounded-md border border-background/20 px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-background/10"
              >
                Or join the studio
              </Link>
            </div>
          </div>
        </BentoTile>
      </Section>
    </>
  );
}

export default About;
