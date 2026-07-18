import { Link, useParams } from "react-router-dom";
import { SEO } from "@/components/site/seo";
import { PageHero, Section, Card, Tag } from "@/components/site/primitives";
import { blogPosts, team } from "@/content/nova";

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const author = post ? team.find((t) => t.slug === post.author) : undefined;

  if (!post) {
    return (
      <>
        <SEO title="Article not found (404) — NOVA Studio" description="This journal entry doesn't exist. Browse the NOVA Studio journal instead." noIndex />
        <Section eyebrow="404" title="Article not found.">
          <Link to="/blog" className="text-sm underline underline-offset-4">
            Back to journal
          </Link>
        </Section>
      </>
    );
  }

  const idx = blogPosts.findIndex((p) => p.slug === post.slug);
  const prev = blogPosts[(idx - 1 + blogPosts.length) % blogPosts.length];
  const next = blogPosts[(idx + 1) % blogPosts.length];

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const paragraphs = [
    `In the last decade at NOVA, we've shipped enough ${post.category.toLowerCase()} work to notice a pattern: the interesting problems are always upstream of the deliverable.`,
    "This essay is our current thinking — subject to revision, argued in good faith, and grounded in engagements we can point to.",
    "We start with the constraint most teams forget: the artifact is the smallest part of the work. Everything before it — the framing, the sequencing, the shared vocabulary — is what determines whether the artifact survives contact with the org.",
    "The rest of this piece walks through three examples, one counter-example, and the decision framework we use internally when the tradeoffs get sharp.",
    "If any of this maps to a problem on your desk, we'd love to hear about it. Half of our best writing starts as a reader email.",
  ];

  return (
    <>
      <SEO
        title={`${post.title} — NOVA Studio Journal`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        ogType="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.publishedAt,
          dateModified: post.publishedAt,
          articleSection: post.category,
          author: author
            ? { "@type": "Person", name: author.name, jobTitle: author.role }
            : { "@type": "Organization", name: "NOVA Studio" },
          publisher: {
            "@type": "Organization",
            name: "NOVA Studio",
            logo: { "@type": "ImageObject", url: "/favicon.ico" },
          },
          mainEntityOfPage: { "@type": "WebPage", "@id": `/blog/${post.slug}` },
        }}
      />
      <PageHero
        eyebrow={`${post.category} · ${post.readTime}`}
        title={post.title}
        intro={post.excerpt}
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          {formatDate(post.publishedAt)}
        </span>
      </PageHero>

      <Section>
        <article className="mx-auto max-w-3xl">
          <div className="mb-8 flex items-center gap-3 border-y border-border py-4">
            {author && (
              <>
                <div className="grid h-10 w-10 place-items-center rounded-full bg-foreground font-mono text-xs text-background">
                  {author.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-medium">{author.name}</p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    {author.role}
                  </p>
                </div>
              </>
            )}
          </div>

          <div className="prose-nova space-y-5 text-base leading-relaxed text-foreground/90">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <h2 className="pt-6 text-2xl font-semibold tracking-tight">Three lessons that stuck</h2>
            <ol className="ml-5 list-decimal space-y-2 text-foreground/85">
              <li>Constraints beat frameworks. Pick two you can actually enforce.</li>
              <li>Every artifact is a policy in disguise — write the policy first.</li>
              <li>If you can't demo the change in a Thursday review, the scope is wrong.</li>
            </ol>

            <p className="pt-4">
              We'll keep writing about this — subscribe below, or send us the version of this problem
              you're wrestling with. All reader mail gets read; most gets a reply.
            </p>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-3 border-t border-border pt-6 md:flex-row">
            <Link to={`/blog/${prev.slug}`} className="text-sm text-muted-foreground hover:text-foreground">
              ← {prev.title}
            </Link>
            <Link to={`/blog/${next.slug}`} className="text-sm text-muted-foreground hover:text-foreground">
              {next.title} →
            </Link>
          </div>
        </article>
      </Section>

      {related.length > 0 && (
        <Section eyebrow="Related" title="More on this topic">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} to={`/blog/${r.slug}`}>
                <Card className="h-full">
                  <Tag>{r.category}</Tag>
                  <h3 className="mt-2 text-base font-semibold">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.excerpt}</p>
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}

export default BlogPost;
