import { Link } from "react-router-dom";
import { SEO } from "@/components/site/seo";
import { PageHero, Section, Card, Tag } from "@/components/site/primitives";

const updated = "July 1, 2026";

const sections = [
  {
    id: "overview",
    title: "Overview",
    body: [
      "NOVA Studio Ltd. (\"NOVA\", \"we\", \"us\") builds brands, products, and interfaces for clients around the world. This policy explains what personal data we collect, why we collect it, and the choices you have.",
      "This page is maintained by NOVA Studio and is provided as template content. It is not legal advice — for engagement-specific questions, contact privacy@novastudio.com.",
    ],
  },
  {
    id: "collect",
    title: "What we collect",
    body: [
      "Contact form submissions: name, email, company, and the message you send us.",
      "Booking form submissions: project details, budget range, and preferred call times.",
      "Careers applications: the information you choose to submit, including CV and portfolio links.",
      "Usage data: standard server logs and privacy-friendly analytics (aggregated page views, referrers, and rough geography — no cross-site tracking).",
    ],
  },
  {
    id: "use",
    title: "How we use it",
    body: [
      "To respond to your enquiry, schedule calls, or evaluate an application.",
      "To operate and improve novastudio.com, including debugging, security, and performance.",
      "To send you material you've explicitly asked for (a proposal, a follow-up email, a newsletter you subscribed to).",
    ],
  },
  {
    id: "share",
    title: "Who we share it with",
    body: [
      "We do not sell personal data. We share it only with the sub-processors we use to run the studio — currently including email, hosting, analytics, and scheduling providers. A current list of sub-processors is available on request.",
      "We may disclose information when required by law, court order, or to protect our rights.",
    ],
  },
  {
    id: "retention",
    title: "Retention",
    body: [
      "Enquiries: kept for 24 months, then archived or deleted.",
      "Signed engagements: kept for the duration of the engagement plus 7 years for tax and legal purposes.",
      "Careers applications: kept for 12 months unless you ask us to remove them earlier.",
    ],
  },
  {
    id: "rights",
    title: "Your rights",
    body: [
      "You can request access to your data, correct it, ask us to delete it, or object to how we use it. Email privacy@novastudio.com and we will respond within 30 days.",
      "If you are in the UK or EU, you also have the right to lodge a complaint with your local data protection authority.",
    ],
  },
  {
    id: "security",
    title: "Security",
    body: [
      "We use industry-standard controls — TLS in transit, encrypted storage at rest with our providers, least-privilege access, and mandatory 2FA on production systems.",
      "No system is perfectly secure. If you believe you've found a vulnerability, please report it to security@novastudio.com.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    body: [
      "NOVA Studio Ltd., 12 Redchurch Street, London E2 7DP, United Kingdom.",
      "Data protection contact: privacy@novastudio.com",
    ],
  },
];

function Page() {
  return (
    <>
      <SEO
        title="Privacy Policy — NOVA Studio"
        description="How NOVA Studio collects, uses, retains, and protects personal data."
        path="/privacy"
      />
      <PageHero eyebrow="Legal" title="Privacy Policy" intro={`Last updated ${updated}. This page explains how NOVA Studio handles personal data.`} />

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
                <Link to="/cookies" className="underline underline-offset-4">Cookie Policy</Link> and{" "}
                <Link to="/terms" className="underline underline-offset-4">Terms & Conditions</Link>.
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}

export default Page;
