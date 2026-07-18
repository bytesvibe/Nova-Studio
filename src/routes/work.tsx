import { Link, useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { SEO } from "@/components/site/seo";
import { PageHero, Section, Card, Tag, CTAButton } from "@/components/site/primitives";
import { projects, services as allServices, industries } from "@/content/nova";
import { getWorkImage } from "@/content/work-images";
import { ArrowUpRight } from "lucide-react";

const CATEGORIES = ["All", "Branding", "Web Design", "UI/UX", "SaaS", "Mobile Apps", "eCommerce", "Corporate", "Marketing"] as const;
const YEARS = ["All", "2025", "2024", "2023"] as const;

function ProjectCard({ p, index }: { p: (typeof projects)[number]; index: number }) {
  const variants = ["bg-primary", "bg-secondary text-[color:var(--secondary-foreground)]", "bg-card", "bg-foreground text-background"];
  const variant = variants[index % variants.length];
  const tone = variant.includes("bg-primary")
    ? "on-primary"
    : variant.includes("bg-secondary")
      ? "on-secondary"
      : variant.includes("bg-foreground")
        ? "on-foreground"
        : "muted";
  const subTextClass = variant.includes("bg-foreground") ? "text-background/70" : "text-muted-foreground";
  const image = getWorkImage(p.slug);

  return (
    <Card className={`${variant} min-h-[340px] overflow-hidden`}>
      {image && (
        <div className="-mx-6 -mt-6 mb-6 overflow-hidden">
          <img
            src={image}
            alt={`${p.client} — ${p.title}`}
            width={1024}
            height={1024}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="flex items-start justify-between gap-4">
        <Tag tone={tone as never}>
          {p.category} · {p.year}
        </Tag>
        <ArrowUpRight className="h-4 w-4 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
      <div className="mt-6">
        <div className="font-mono text-[11px] uppercase tracking-[0.14em] opacity-70">{p.client}</div>
        <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight md:text-3xl">{p.title}</h3>
        <p className={`mt-3 text-sm ${subTextClass}`}>{p.summary}</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-4 border-t border-current/10 pt-4 font-mono text-xs uppercase tracking-[0.12em] opacity-80">
        {p.metrics.slice(0, 3).map((m) => (
          <span key={m.label}>
            {m.value} <span className="opacity-60">{m.label}</span>
          </span>
        ))}
      </div>
      <Link to={`/work/${p.slug}`} className="absolute inset-0" aria-label={p.title} />
    </Card>
  );
}

function Work() {
  const [params, setParams] = useSearchParams();
  const category = params.get("category") ?? "All";
  const industry = params.get("industry") ?? "All";
  const service = params.get("service") ?? "All";
  const year = params.get("year") ?? "All";

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (industry !== "All" && p.industry !== industry) return false;
      if (service !== "All" && !p.services.includes(service)) return false;
      if (year !== "All" && String(p.year) !== year) return false;
      return true;
    });
  }, [category, industry, service, year]);

  function setFilter(key: string, value: string) {
    const next = new URLSearchParams(params);
    if (value === "All") next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true });
  }

  const industryOpts = ["All", ...Array.from(new Set(projects.map((p) => p.industry)))];
  const serviceOpts = ["All", ...Array.from(new Set(projects.flatMap((p) => p.services)))];

  return (
    <>
      <SEO
        title="Work — NOVA Studio"
        description="Selected work from NOVA Studio across branding, product, and web. Filter by category, industry, service, and year."
        path="/work"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Work — NOVA Studio",
          url: "/work",
          hasPart: projects.map((p) => ({
            "@type": "CreativeWork",
            name: p.title,
            about: p.category,
            url: `/work/${p.slug}`,
            creator: { "@type": "Organization", name: "NOVA Studio" },
          })),
        }}
      />
      <PageHero
        eyebrow="Work · 240+ projects shipped"
        title="Selected projects. Real outcomes."
        intro="Two years of engagements across SaaS, healthcare, commerce, hospitality, and beyond. Filter to find the shape of the work you're looking for."
      >
        <CTAButton href="/book">Start a project</CTAButton>
        <CTAButton href="/case-studies" variant="secondary">
          Read the case studies
        </CTAButton>
      </PageHero>

      <Section>
        <div className="grid gap-4 rounded-2xl border border-border bg-card p-4 md:grid-cols-4">
          <FilterGroup label="Category" value={category} options={CATEGORIES as unknown as string[]} onChange={(v) => setFilter("category", v)} />
          <FilterGroup label="Industry" value={industry} options={industryOpts} onChange={(v) => setFilter("industry", v)} />
          <FilterGroup
            label="Service"
            value={service}
            options={serviceOpts}
            format={(v) => allServices.find((s) => s.slug === v)?.name ?? v}
            onChange={(v) => setFilter("service", v)}
          />
          <FilterGroup label="Year" value={year} options={YEARS as unknown as string[]} onChange={(v) => setFilter("year", v)} />
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Showing {filtered.length} of {projects.length}
          </div>
          {(category !== "All" || industry !== "All" || service !== "All" || year !== "All") && (
            <button
              onClick={() => setParams(new URLSearchParams(), { replace: true })}
              className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground underline underline-offset-4"
            >
              Reset filters
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <Card className="mt-6">
            <p className="text-sm text-muted-foreground">
              No projects match those filters. Try broadening the criteria, or{" "}
              <Link to="/contact" className="underline underline-offset-4">
                tell us what you're looking for
              </Link>
              .
            </p>
          </Card>
        ) : (
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <ProjectCard key={p.slug} p={p} index={i} />
            ))}
          </div>
        )}
      </Section>

      <Section eyebrow="Industries" title="Where we tend to work." intro="Depth across a handful of verticals — the shortlist below covers the majority of our engagements.">
        <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-4">
          {industries.slice(0, 8).map((i) => (
            <Link
              key={i.slug}
              to={`/work?industry=${encodeURIComponent(i.name)}`}
              className="rounded-xl border border-border bg-card px-4 py-3 text-sm transition-colors hover:bg-muted"
            >
              {i.name}
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}

function FilterGroup({
  label,
  value,
  options,
  onChange,
  format,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
  format?: (v: string) => string;
}) {
  return (
    <div>
      <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {options.map((o) => {
          const active = o === value;
          return (
            <button
              key={o}
              onClick={() => onChange(o)}
              className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                active
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              {format ? format(o) : o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Work;
