import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/site/seo";
import { PageHero, Section, Card, Tag, BentoTile } from "@/components/site/primitives";
import { blogPosts, team } from "@/content/nova";

const categories = ["All", "Design", "Engineering", "Strategy", "Studio"] as const;
type Category = (typeof categories)[number];

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function AuthorLine({ slug }: { slug: string }) {
  const a = team.find((t) => t.slug === slug);
  if (!a) return null;
  return (
    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
      {a.name} · {a.role}
    </span>
  );
}

function Page() {
  const [cat, setCat] = useState<Category>("All");
  const [q, setQ] = useState("");

  const featured = blogPosts.find((p) => p.featured);
  const filtered = useMemo(() => {
    return blogPosts.filter((p) => {
      const okCat = cat === "All" || p.category === cat;
      const okQ = q.trim() === "" || p.title.toLowerCase().includes(q.toLowerCase()) || p.excerpt.toLowerCase().includes(q.toLowerCase());
      return okCat && okQ;
    });
  }, [cat, q]);

  return (
    <>
      <SEO
        title="Journal — NOVA Studio"
        description="Essays on design, engineering, strategy, and studio life from the NOVA Studio team. Written by the people doing the work."
        path="/blog"
        ogType="website"
      />
      <PageHero
        eyebrow="Journal"
        title="Essays from the studio."
        intro="Long-form writing on design systems, positioning, process, and craft — from the people doing the work."
      />

      {featured && (
        <Section>
          <Link to={`/blog/${featured.slug}`}>
            <BentoTile variant="foreground">
              <Tag tone="on-foreground">Featured · {featured.category}</Tag>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm opacity-80 md:text-base">{featured.excerpt}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] opacity-70">
                <span>{formatDate(featured.publishedAt)}</span>
                <span aria-hidden>·</span>
                <span>{featured.readTime}</span>
                <span aria-hidden>·</span>
                <AuthorLine slug={featured.author} />
              </div>
            </BentoTile>
          </Link>
        </Section>
      )}

      <Section eyebrow="Library" title="All essays">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                  cat === c
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-card hover:bg-muted"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <input
            type="search"
            placeholder="Search essays"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-foreground md:w-64"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`}>
              <Card className="h-full">
                <Tag>{post.category}</Tag>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">{post.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                <div className="mt-6 flex flex-col gap-1 border-t border-border pt-4">
                  <AuthorLine slug={post.author} />
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    {formatDate(post.publishedAt)} · {post.readTime}
                  </span>
                </div>
              </Card>
            </Link>
          ))}
          {filtered.length === 0 && (
            <Card>
              <p className="text-sm text-muted-foreground">No essays match this search.</p>
            </Card>
          )}
        </div>
      </Section>
    </>
  );
}

export default Page;
