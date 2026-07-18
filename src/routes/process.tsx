import { Link } from "react-router-dom";
import { SEO } from "@/components/site/seo";
import { PageHero, Section, Card, Tag, BentoTile, CTAButton, Stat } from "@/components/site/primitives";
import { processPhases } from "@/content/nova";

function Page() {
  return (
    <>
      <SEO
        title="Process — NOVA Studio"
        description="The ten-phase NOVA Studio process — from discovery through launch and retained optimization. Deliverables and durations for each phase."
        path="/process"
        ogType="website"
      />
      <PageHero
        eyebrow="Process"
        title="A ten-phase system, not a slide."
        intro="We run every engagement through the same phases — scaled to the scope. Each phase has explicit deliverables and durations so you always know where we are."
      >
        <CTAButton href="/contact">Book a discovery call</CTAButton>
        <CTAButton href="/pricing" variant="secondary">See engagement models</CTAButton>
      </PageHero>

      <Section>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <Stat value="10" label="Phases" />
          <Stat value="12wk" label="Typical mid-size project" />
          <Stat value="48hr" label="First artifact after kickoff" />
          <Stat value="100%" label="Fixed-fee engagements" />
        </div>
      </Section>

      <Section
        eyebrow="Phases"
        title="From discovery to retained support"
        intro="Ten discrete phases. In smaller engagements we compress; in enterprise programs we run several in parallel."
      >
        <ol className="relative border-l border-border pl-6 md:pl-8">
          {processPhases.map((phase, i) => (
            <li key={phase.slug} className="relative mb-8 last:mb-0">
              <span className="absolute -left-[33px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-card font-mono text-[10px] md:-left-[41px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <Card>
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="text-xl font-semibold tracking-tight">{phase.name}</h3>
                  <Tag>{phase.duration}</Tag>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{phase.summary}</p>
                <div className="mt-5">
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    Deliverables
                  </div>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {phase.deliverables.map((d) => (
                      <li
                        key={d}
                        className="rounded-full border border-border bg-background px-2.5 py-1 text-xs"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        eyebrow="Principles"
        title="How we run the work"
        intro="A process is only as good as the principles that hold it together."
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Weekly demos", body: "Live working sessions, not status decks. You see progress every Thursday." },
            { title: "Fixed fees", body: "We price the scope, not the hours. Change requests are transparent." },
            { title: "One team, one Slack", body: "Embedded pods. No account layer. Your leads are the makers." },
            { title: "Written by default", body: "Decisions live in docs, not DMs — searchable and durable." },
          ].map((p) => (
            <BentoTile key={p.title}>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </BentoTile>
          ))}
        </div>
      </Section>

      <Section eyebrow="Tools" title="What we use, and why">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { title: "Design", body: "Figma, Rive, Framer. Tokens synced to code via Style Dictionary." },
            { title: "Engineering", body: "TypeScript, React, Next / Vite, Tailwind. Vercel & Cloudflare hosting." },
            { title: "Ops", body: "Linear for delivery, Loom for async, Notion for durable docs." },
          ].map((t) => (
            <Card key={t.title}>
              <Tag>{t.title}</Tag>
              <p className="mt-3 text-sm text-muted-foreground">{t.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Card className="bg-primary">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <Tag tone="on-primary">Ready to start?</Tag>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                Kickoff can be as soon as next Monday.
              </h3>
              <p className="mt-2 max-w-lg text-sm text-foreground/80">
                Send a brief or book a call. You'll meet the leads on the first call, not an account manager.
              </p>
            </div>
            <div className="flex gap-3">
              <CTAButton href="/contact">Send a brief</CTAButton>
              <Link
                to="/book"
                className="inline-flex items-center rounded-md border border-foreground/20 bg-transparent px-5 py-2.5 text-sm font-medium hover:bg-foreground hover:text-background"
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

export default Page;
