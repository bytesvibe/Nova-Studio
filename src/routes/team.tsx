import { Link } from "react-router-dom";
import { SEO } from "@/components/site/seo";
import { PageHero, Section, Card, Tag, BentoTile, CTAButton, Stat } from "@/components/site/primitives";
import { team, agency, openRoles } from "@/content/nova";

const groups: Array<{ key: import("@/content/nova").TeamMember["group"]; label: string }> = [
  { key: "Leadership", label: "Leadership" },
  { key: "Designers", label: "Design" },
  { key: "Developers", label: "Engineering" },
  { key: "Project Managers", label: "Project Management" },
  { key: "Marketing", label: "Marketing" },
  { key: "Content", label: "Content" },
];

function Avatar({ name, size = "md" }: { name: string; size?: "md" | "lg" }) {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2);
  return (
    <div
      className={`grid place-items-center rounded-full bg-foreground font-mono text-background ${
        size === "lg" ? "h-16 w-16 text-lg" : "h-10 w-10 text-xs"
      }`}
    >
      {initials}
    </div>
  );
}

function Page() {
  const leadership = team.filter((t) => t.group === "Leadership");

  return (
    <>
      <SEO
        title="Team — NOVA Studio"
        description="The people behind NOVA Studio — leadership, designers, engineers, project managers, marketing, and content across New York, Amsterdam, and Singapore."
        path="/team"
        ogType="website"
      />
      <PageHero
        eyebrow="Team"
        title="Forty-eight people, three offices, one design language."
        intro="No account layer, no juniors on the front line. The people you meet on the first call are the people doing the work."
      >
        <CTAButton href="/careers">Open roles</CTAButton>
        <CTAButton href="/contact" variant="secondary">Work with us</CTAButton>
      </PageHero>

      <Section>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {agency.stats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Leadership" title="The partners">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {leadership.map((m, i) => (
            <BentoTile
              key={m.slug}
              variant={i === 0 ? "primary" : i === 1 ? "secondary" : i === 2 ? "foreground" : "card"}
            >
              <div className="flex items-start gap-4">
                <Avatar name={m.name} size="lg" />
                <div>
                  <Tag
                    tone={
                      i === 0
                        ? "on-primary"
                        : i === 1
                          ? "on-secondary"
                          : i === 2
                            ? "on-foreground"
                            : "muted"
                    }
                  >
                    {m.role}
                  </Tag>
                  <h3 className="mt-1 text-xl font-semibold tracking-tight">{m.name}</h3>
                  <p className="mt-2 text-sm opacity-80">{m.bio}</p>
                </div>
              </div>
            </BentoTile>
          ))}
        </div>
      </Section>

      {groups
        .filter((g) => g.key !== "Leadership")
        .map((g) => {
          const members = team.filter((t) => t.group === g.key);
          if (members.length === 0) return null;
          return (
            <Section key={g.key} eyebrow={g.label} title={`The ${g.label.toLowerCase()} team`}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {members.map((m) => (
                  <Card key={m.slug}>
                    <div className="flex items-start gap-3">
                      <Avatar name={m.name} />
                      <div>
                        <h4 className="text-base font-semibold">{m.name}</h4>
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                          {m.role}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">{m.bio}</p>
                  </Card>
                ))}
              </div>
            </Section>
          );
        })}

      <Section eyebrow="Culture" title="How we work together">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Craft-led", body: "We hire for taste and judgment, then trust it." },
            { title: "Written by default", body: "Decisions live in docs, not DMs — searchable and durable." },
            { title: "Async-friendly", body: "Three offices, one calendar. Loom before Zoom." },
            { title: "Paid to think", body: "One paid research day a month, per person." },
          ].map((c) => (
            <BentoTile key={c.title}>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </BentoTile>
          ))}
        </div>
      </Section>

      <Section>
        <Card className="bg-secondary">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <Tag tone="on-secondary">Hiring now</Tag>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                {openRoles.length} open positions across three offices.
              </h3>
            </div>
            <div className="flex gap-3">
              <Link
                to="/careers"
                className="inline-flex items-center rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90"
              >
                See open roles
              </Link>
            </div>
          </div>
        </Card>
      </Section>
    </>
  );
}

export default Page;
