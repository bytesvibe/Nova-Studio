import { Link } from "react-router-dom";
import { SEO } from "@/components/site/seo";
import { PageHero, Section, Card, Tag, BentoTile, CTAButton } from "@/components/site/primitives";
import { industries, projects } from "@/content/nova";

function Page() {
  const featuredByIndustry = (name: string) =>
    projects.filter((p) => p.industry.toLowerCase() === name.toLowerCase()).slice(0, 2);

  return (
    <>
      <SEO
        title="Industries — NOVA Studio"
        description="How NOVA Studio partners across healthcare, finance, education, hospitality, eCommerce, and more — with focus areas and case studies per sector."
        path="/industries"
        ogType="website"
      />
      <PageHero
        eyebrow="Industries"
        title="Fourteen industries, one studio."
        intro="We work across regulated and consumer sectors alike. Each engagement is shaped by the operating realities of the industry — compliance, distribution, pace, and audience."
      >
        <CTAButton href="/contact">Start a conversation</CTAButton>
        <CTAButton href="/work" variant="secondary">See the work</CTAButton>
      </PageHero>

      <Section
        eyebrow="Sectors"
        title="Where NOVA operates"
        intro="A bento of the industries we know well — each linking to the sector page with focus areas and related case studies."
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {industries.map((ind, i) => {
            const variant =
              i % 7 === 0 ? "primary" : i % 5 === 0 ? "secondary" : i % 6 === 0 ? "foreground" : "card";
            const featured = featuredByIndustry(ind.name);
            return (
              <Link key={ind.slug} to={`/industries/${ind.slug}`} className="block">
                <BentoTile variant={variant} className="h-full">
                  <div>
                    <Tag
                      tone={
                        variant === "primary"
                          ? "on-primary"
                          : variant === "secondary"
                            ? "on-secondary"
                            : variant === "foreground"
                              ? "on-foreground"
                              : "muted"
                      }
                    >
                      Industry
                    </Tag>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight">{ind.name}</h3>
                    <p className="mt-2 text-sm opacity-80">{ind.summary}</p>
                  </div>
                  <div className="mt-6 space-y-2">
                    <div className="flex flex-wrap gap-1.5">
                      {ind.focus.slice(0, 3).map((f) => (
                        <span
                          key={f}
                          className="rounded-full border border-current/20 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] opacity-80"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                    {featured.length > 0 && (
                      <div className="pt-3 font-mono text-[11px] uppercase tracking-[0.14em] opacity-70">
                        {featured.length} case stud{featured.length === 1 ? "y" : "ies"}
                      </div>
                    )}
                  </div>
                </BentoTile>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="Cross-sector"
        title="Patterns we bring across industries"
        intro="Different sectors share the same underlying design problems. These are the patterns we return to."
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              title: "Trust & compliance",
              body: "Regulated interfaces that stay human — HIPAA, PCI, SOC 2, WCAG AA baseline.",
            },
            {
              title: "Systems that scale",
              body: "Design systems that hold up across brands, regions, and product surfaces.",
            },
            {
              title: "Outcome-first UX",
              body: "Every flow tied to a measurable outcome — conversion, retention, or task success.",
            },
          ].map((c) => (
            <Card key={c.title}>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Card className="bg-foreground text-background">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <Tag tone="on-foreground">Not sure which sector fits?</Tag>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                Tell us the problem — we'll map it to a track.
              </h3>
            </div>
            <div className="flex gap-3">
              <CTAButton href="/contact">Book an intro</CTAButton>
              <CTAButton href="/services" variant="secondary">Browse services</CTAButton>
            </div>
          </div>
        </Card>
      </Section>
    </>
  );
}

export default Page;
