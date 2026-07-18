import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SEO } from "@/components/site/seo";
import { PageHero, Section, Card, Tag } from "@/components/site/primitives";
import { services, projects, industries, blogPosts } from "@/content/nova";

type Result = {
  kind: "Service" | "Work" | "Industry" | "Journal";
  title: string;
  summary: string;
  to: string;
  tag?: string;
};

function buildIndex(): Result[] {
  return [
    ...services.map((s) => ({
      kind: "Service" as const,
      title: s.name,
      summary: s.summary,
      to: `/services/${s.slug}`,
      tag: s.tag,
    })),
    ...projects.map((p) => ({
      kind: "Work" as const,
      title: p.title,
      summary: `${p.client} · ${p.industry} · ${p.summary}`,
      to: `/work/${p.slug}`,
      tag: p.category,
    })),
    ...industries.map((i) => ({
      kind: "Industry" as const,
      title: i.name,
      summary: i.summary,
      to: `/industries/${i.slug}`,
    })),
    ...blogPosts.map((b) => ({
      kind: "Journal" as const,
      title: b.title,
      summary: b.excerpt,
      to: `/blog/${b.slug}`,
      tag: b.category,
    })),
  ];
}

const kinds: Array<Result["kind"] | "All"> = ["All", "Service", "Work", "Industry", "Journal"];

function Page() {
  const [params, setParams] = useSearchParams();
  const initialQ = params.get("q") ?? "";
  const [q, setQ] = useState(initialQ);
  const kind = (params.get("kind") as Result["kind"] | null) ?? "All";

  const index = useMemo(buildIndex, []);
  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    let list = index;
    if (kind !== "All") list = list.filter((r) => r.kind === kind);
    if (!needle) return list.slice(0, 60);
    return list.filter((r) => (r.title + " " + r.summary + " " + (r.tag ?? "")).toLowerCase().includes(needle));
  }, [q, kind, index]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next = new URLSearchParams(params);
    if (q) next.set("q", q); else next.delete("q");
    setParams(next);
  }

  function setKind(k: string) {
    const next = new URLSearchParams(params);
    if (k === "All") next.delete("kind"); else next.set("kind", k);
    setParams(next);
  }

  return (
    <>
      <SEO
        title={q ? `Search: ${q} — NOVA Studio` : "Search — NOVA Studio"}
        description={
          q
            ? `Search results for "${q}" across NOVA Studio's services, work, industries, and journal.`
            : "Search NOVA Studio's services, work, industries, and journal."
        }
        path={q ? `/search?q=${encodeURIComponent(q)}` : "/search"}
        noIndex
      />
      <PageHero eyebrow="Search" title="Find something on NOVA." intro="Search across services, case studies, industries, and journal articles." />

      <Section>
        <form onSubmit={onSubmit} className="mb-6 flex gap-2">
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search everything…"
            className="w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-foreground"
            autoFocus
          />
          <button
            type="submit"
            className="rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background"
          >
            Search
          </button>
        </form>

        <div className="mb-8 flex flex-wrap gap-2">
          {kinds.map((k) => {
            const active = k === kind || (k === "All" && kind === "All");
            return (
              <button
                key={k}
                type="button"
                onClick={() => setKind(k)}
                className={`rounded-md border px-3 py-1.5 text-xs font-medium ${active ? "border-foreground bg-foreground text-background" : "border-border bg-card hover:border-foreground"}`}
              >
                {k}
              </button>
            );
          })}
        </div>

        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          {results.length} {results.length === 1 ? "result" : "results"}
          {q && <> for "{q}"</>}
        </p>

        {results.length === 0 ? (
          <Card>
            <p className="text-sm text-muted-foreground">
              Nothing matched. Try a broader term, or{" "}
              <Link to="/contact" className="underline underline-offset-4">contact us</Link>.
            </p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {results.map((r) => (
              <Link key={r.to} to={r.to}>
                <Card className="h-full">
                  <div className="flex items-center justify-between">
                    <Tag>{r.kind}</Tag>
                    {r.tag && <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{r.tag}</span>}
                  </div>
                  <h3 className="mt-2 text-base font-semibold">{r.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{r.summary}</p>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}

export default Page;
