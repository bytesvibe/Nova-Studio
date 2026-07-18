import { Link } from "react-router-dom";
import { SEO } from "@/components/site/seo";
import { PageHero, Section, Card, Tag, CTAButton } from "@/components/site/primitives";
import { pricingTiers } from "@/content/nova";

function Page() {
  return (
    <>
      <SEO
        title="Pricing — NOVA Studio"
        description="Transparent engagement models — from Starter landing pages to Enterprise programs. Fixed fees, clear timelines, and no hidden retainers."
        path="/pricing"
        ogType="website"
      />
      <PageHero
        eyebrow="Pricing"
        title="Fixed fees. Clear scopes. No account layer."
        intro="Five engagement models — pick the closest fit and we'll shape it around your reality. Every proposal spells out scope, timeline, and total price on page one."
      >
        <CTAButton href="/contact">Request a proposal</CTAButton>
        <CTAButton href="/process" variant="secondary">See the process</CTAButton>
      </PageHero>

      <Section
        eyebrow="Engagement models"
        title="Five ways to work with NOVA"
        intro="Prices are starting points — most engagements land within 15% of the anchor once we scope."
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => {
            const featured = i === 2;
            return (
              <Card
                key={tier.slug}
                className={featured ? "bg-foreground text-background" : ""}
              >
                <div className="flex items-start justify-between">
                  <Tag tone={featured ? "on-foreground" : "muted"}>
                    {featured ? "Most popular" : "Model"}
                  </Tag>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] opacity-70">
                    {tier.timeline}
                  </span>
                </div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">{tier.name}</h3>
                <div className="mt-1 font-mono text-3xl font-semibold tracking-tight">
                  {tier.price}
                </div>
                <p className="mt-3 text-sm opacity-80">{tier.best}</p>

                <div className="mt-6">
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] opacity-70">
                    Includes
                  </div>
                  <ul className="mt-2 space-y-2 text-sm">
                    {tier.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2">
                        <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-70" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5">
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] opacity-70">
                    Add-ons
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {tier.addOns.map((a) => (
                      <span
                        key={a}
                        className="rounded-full border border-current/20 px-2 py-0.5 text-xs opacity-80"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className={`inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium transition-opacity ${
                      featured
                        ? "bg-background text-foreground hover:opacity-90"
                        : "bg-foreground text-background hover:opacity-90"
                    }`}
                  >
                    Start with {tier.name}
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="Compare"
        title="At a glance"
        intro="What's included across the five models."
      >
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-muted/60">
              <tr>
                <th className="p-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  Feature
                </th>
                {pricingTiers.map((t) => (
                  <th
                    key={t.slug}
                    className="p-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    {t.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { row: "Starting price", key: "price" as const },
                { row: "Timeline", key: "timeline" as const },
                { row: "Best for", key: "best" as const },
              ].map(({ row, key }) => (
                <tr key={row} className="border-t border-border">
                  <td className="p-4 font-medium">{row}</td>
                  {pricingTiers.map((t) => (
                    <td key={t.slug} className="p-4 text-muted-foreground">
                      {t[key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section eyebrow="How we price" title="The mechanics behind the number">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              title: "Scoped, not billed by the hour",
              body: "You get a fixed price against a fixed scope. Change requests are priced explicitly.",
            },
            {
              title: "Milestone billing",
              body: "50% at kickoff, 25% at design sign-off, 25% at launch. Retainers billed monthly, net-30.",
            },
            {
              title: "No hidden costs",
              body: "Fonts, stock, hosting, and third-party fees are itemised on page one of the proposal.",
            },
          ].map((c) => (
            <Card key={c.title}>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Common pricing questions">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            {
              q: "Can you work with a smaller budget?",
              a: "Sometimes. We run 3–4 Sprint engagements per quarter for pre-seed teams and mission-aligned nonprofits.",
            },
            {
              q: "Do you offer retainers?",
              a: "Yes — Growth and above can convert into monthly retainers post-launch, typically 40–120 hours / month.",
            },
            {
              q: "Which currencies do you accept?",
              a: "USD, EUR, GBP, and SGD via wire or ACH. Enterprise clients can pay in local currency.",
            },
            {
              q: "How do you handle change orders?",
              a: "Small changes are absorbed. Anything over a day of effort gets a written change order before we start.",
            },
          ].map((f) => (
            <Card key={f.q}>
              <h3 className="text-base font-semibold">{f.q}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Card className="bg-secondary">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <Tag tone="on-secondary">Ready for a quote?</Tag>
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
