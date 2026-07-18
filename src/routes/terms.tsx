import { Link } from "react-router-dom";
import { SEO } from "@/components/site/seo";
import { PageHero, Section, Card, Tag } from "@/components/site/primitives";

const updated = "July 1, 2026";

const sections = [
  {
    id: "engagement",
    title: "1. Engagement",
    body: [
      "These terms govern engagements between NOVA Studio Ltd. (\"NOVA\") and the client named in the accompanying proposal or Statement of Work (\"SOW\").",
      "This page is template content maintained by NOVA Studio. The signed SOW takes precedence over anything on this page in the event of a conflict.",
    ],
  },
  {
    id: "scope",
    title: "2. Scope & change orders",
    body: [
      "The SOW defines deliverables, milestones, revision rounds, and fee. Work outside that scope requires a written change order signed by both parties before it begins.",
      "Every phase includes a defined number of revision rounds. Additional rounds are billed at our then-current rate card.",
    ],
  },
  {
    id: "fees",
    title: "3. Fees & payment",
    body: [
      "Projects are billed 30% at kickoff, 40% at mid-point, and 30% on delivery unless the SOW states otherwise. Retainers are billed monthly in advance.",
      "Invoices are due within 14 days. Overdue amounts accrue interest at 4% above the Bank of England base rate.",
      "Third-party costs (fonts, stock, hosting, tooling) are passed through at cost and require written approval when they exceed £250.",
    ],
  },
  {
    id: "ip",
    title: "4. Intellectual property",
    body: [
      "On full payment, NOVA assigns to the client all rights, title, and interest in the final deliverables identified in the SOW.",
      "NOVA retains ownership of pre-existing tools, libraries, and methods, and grants the client a perpetual, worldwide, non-exclusive license to use them as embedded in the deliverables.",
      "NOVA reserves the right to reference the engagement publicly (case study, portfolio, awards) unless the SOW includes a written confidentiality carve-out.",
    ],
  },
  {
    id: "warranties",
    title: "5. Warranties & liability",
    body: [
      "NOVA warrants that the services will be performed with reasonable skill and care. Deliverables are provided \"as is\" beyond that warranty.",
      "Neither party is liable for indirect or consequential losses. Each party's total liability is capped at the fees paid under the relevant SOW in the twelve months preceding the claim.",
      "Nothing in these terms limits liability for fraud, willful misconduct, or anything that cannot lawfully be limited.",
    ],
  },
  {
    id: "termination",
    title: "6. Termination",
    body: [
      "Either party can terminate for material breach on 14 days' written notice if the breach isn't cured.",
      "On termination, the client pays for all work performed up to the effective date, including any non-cancellable third-party commitments.",
    ],
  },
  {
    id: "law",
    title: "7. Governing law",
    body: [
      "These terms are governed by the laws of England & Wales, and disputes are subject to the exclusive jurisdiction of the courts of London.",
    ],
  },
  {
    id: "contact",
    title: "8. Contact",
    body: [
      "NOVA Studio Ltd., 12 Redchurch Street, London E2 7DP, United Kingdom.",
      "Legal contact: legal@novastudio.com",
    ],
  },
];

function Page() {
  return (
    <>
      <SEO
        title="Terms & Conditions — NOVA Studio"
        description="The terms and conditions that govern engagements with NOVA Studio."
        path="/terms"
      />
      <PageHero eyebrow="Legal" title="Terms & Conditions" intro={`Last updated ${updated}. These are the default terms — a signed SOW will always take precedence.`} />

      <Section>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <Tag>On this page</Tag>
            <nav className="mt-3 space-y-1.5">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="block text-sm text-muted-foreground hover:text-foreground">
                  {s.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="space-y-10">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="text-2xl font-semibold tracking-tight">{s.title}</h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            ))}

            <Card>
              <Tag>Related</Tag>
              <p className="mt-2 text-sm text-muted-foreground">
                See our{" "}
                <Link to="/privacy" className="underline underline-offset-4">Privacy Policy</Link> and{" "}
                <Link to="/cookies" className="underline underline-offset-4">Cookie Policy</Link>.
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}

export default Page;
