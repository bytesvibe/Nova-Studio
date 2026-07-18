import { Helmet } from "react-helmet-async";

export function SEO({
  title,
  description,
  ogTitle,
  ogDescription,
  ogType = "website",
  path,
  jsonLd,
  noIndex = false,
}: {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  /** Route path, e.g. "/about". Used for canonical and og:url. */
  path?: string;
  /** Structured data object(s) — will be JSON-encoded into <script type="application/ld+json">. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** Ask crawlers not to index this page (e.g. search results). */
  noIndex?: boolean;
}) {
  const t = title;
  const d = description ?? "";
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  return (
    <Helmet>
      <title>{t}</title>
      {d && <meta name="description" content={d} />}
      {noIndex && <meta name="robots" content="noindex, follow" />}
      <meta property="og:title" content={ogTitle ?? t} />
      <meta property="og:description" content={ogDescription ?? d} />
      <meta property="og:type" content={ogType} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle ?? t} />
      {d && <meta name="twitter:description" content={ogDescription ?? d} />}
      {path && <link rel="canonical" href={path} />}
      {path && <meta property="og:url" content={path} />}
      {blocks.map((b, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(b)}
        </script>
      ))}
    </Helmet>
  );
}
