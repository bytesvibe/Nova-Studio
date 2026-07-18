import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/site/seo";
import { PageHero, Section, Card, Tag } from "@/components/site/primitives";

type QA = { q: string; a: string };
type Group = { id: string; title: string; items: QA[] };

const groups: Group[] = [
  {
    id: "engagements",
    title: "Engagements",
    items: [
      { q: "How do we start working together?", a: "Every engagement starts with a 30-minute intro call, followed by a written brief and a fixed-fee kickoff sprint. We rarely say yes on the first call — we want to be sure we're the right fit." },
      { q: "What size teams do you usually work with?", a: "Anything from a two-founder seed team to a global enterprise with a mature in-house design org. Roughly 60% of our clients are Series A–C." },
      { q: "Do you sign NDAs?", a: "Yes, we counter-sign standard mutual NDAs before sharing sensitive material. For anything more custom, our legal team will review inside three business days." },
      { q: "Can we co-work with our in-house team?", a: "Yes. Most of our long engagements are embedded — we plug into your Slack, Linear, Figma, and standups, and we hand off cleanly at the end." },
    ],
  },
  {
    id: "pricing",
    title: "Pricing & billing",
    items: [
      { q: "How much does a typical project cost?", a: "Sprints start at £18k, full projects usually land between £60k–£240k, and retainers begin at £14k/month. Every proposal shows a fixed scope, milestones, and change-order rules up front." },
      { q: "Do you bill hourly?", a: "No. We bill by milestone or by monthly retainer. It keeps the incentives on outcomes, not timesheets." },
      { q: "What is your payment schedule?", a: "Projects are typically billed 30% at kickoff, 40% at mid-point, and 30% at delivery. Retainers are billed monthly in advance." },
      { q: "Do you offer discounts?", a: "For multi-quarter retainers and non-profits, yes. We don't discount project fees to win work — we scope down instead." },
    ],
  },
  {
    id: "process",
    title: "Process & delivery",
    items: [
      { q: "How long does a typical engagement take?", a: "Sprints are 2 weeks, projects run 6–14 weeks, and retainers are open-ended with quarterly reviews." },
      { q: "How do you handle revisions?", a: "Every phase has a defined number of revision rounds baked into the fee. Anything beyond that is a written change order — no surprises." },
      { q: "Who is our main point of contact?", a: "A named engagement lead runs your account end-to-end. You'll also meet the whole delivery team inside week one." },
      { q: "What tools do you use?", a: "Figma, Linear, Notion, and GitHub. We adapt to your stack for anything we ship into production." },
    ],
  },
  {
    id: "legal",
    title: "Legal & IP",
    items: [
      { q: "Who owns the work?", a: "You do, on final payment. All deliverables transfer to you with a broad, perpetual, worldwide license — with a narrow carve-out for portfolio use." },
      { q: "Can we keep the work private?", a: "Yes. We're happy to hold work off our public case studies indefinitely; just tell us before kickoff." },
      { q: "Do you carry insurance?", a: "Yes — professional indemnity and public liability. Certificates available on request." },
      { q: "Where are you incorporated?", a: "NOVA Studio Ltd. is registered in England & Wales, with operating entities in Portugal and the United States." },
    ],
  },
];

function Page() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return groups;
    return groups
      .map((g) => ({ ...g, items: g.items.filter((i) => (i.q + " " + i.a).toLowerCase().includes(q)) }))
      .filter((g) => g.items.length > 0);
  }, [query]);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: groups.flatMap((g) =>
      g.items.map((i) => ({
        "@type": "Question",
        name: i.q,
        acceptedAnswer: { "@type": "Answer", text: i.a },
      })),
    ),
  };

  return (
    <>
      <SEO
        title="FAQ — NOVA Studio"
        description="Answers to common questions about engagements, pricing, process, and legal terms at NOVA Studio."
        path="/faq"
        jsonLd={faqJsonLd}
      />
      <PageHero
        eyebrow="FAQ"
        title="Answers to the questions we get most."
        intro="Timelines, pricing, contracts, and how we run engagements. Can't find yours? Send it to hello@novastudio.com — we reply within one business day."
      />

      <Section>
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions…"
            className="w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm outline-none ring-0 placeholder:text-muted-foreground focus:border-foreground md:max-w-md"
          />
          <div className="hidden gap-2 md:flex">
            {groups.map((g) => (
              <a key={g.id} href={`#${g.id}`} className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium hover:border-foreground">
                {g.title}
              </a>
            ))}
          </div>
        </div>

        {filtered.length === 0 && (
          <Card>
            <p className="text-sm text-muted-foreground">
              No questions match that search. Try a shorter query, or{" "}
              <Link to="/contact" className="underline underline-offset-4">
                contact us directly
              </Link>
              .
            </p>
          </Card>
        )}

        <div className="space-y-12">
          {filtered.map((g) => (
            <div key={g.id} id={g.id} className="scroll-mt-24">
              <div className="mb-4 flex items-baseline justify-between">
                <div>
                  <Tag>{g.title}</Tag>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">{g.title}</h2>
                </div>
                <Link to="/contact" className="text-xs font-medium text-muted-foreground hover:text-foreground">
                  Still stuck? Contact →
                </Link>
              </div>
              <div className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-card">
                {g.items.map((i, idx) => (
                  <details key={idx} className="group">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 text-sm font-medium hover:bg-muted/40">
                      <span>{i.q}</span>
                      <span className="mt-0.5 font-mono text-xs text-muted-foreground transition group-open:rotate-45">+</span>
                    </summary>
                    <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {i.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Still curious?" title="Talk to the team.">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card>
            <Tag>Email</Tag>
            <p className="mt-2 text-sm text-muted-foreground">hello@novastudio.com — replies within one business day.</p>
          </Card>
          <Card>
            <Tag>Book</Tag>
            <p className="mt-2 text-sm text-muted-foreground">
              <Link to="/book" className="underline underline-offset-4">Book a 30-minute intro call</Link> with an engagement lead.
            </p>
          </Card>
          <Card>
            <Tag>Search</Tag>
            <p className="mt-2 text-sm text-muted-foreground">
              <Link to="/search" className="underline underline-offset-4">Search the whole site</Link> for services, work, and articles.
            </p>
          </Card>
        </div>
      </Section>
    </>
  );
}

export default Page;
