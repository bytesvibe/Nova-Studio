import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SEO } from "@/components/site/seo";
import { PageHero, Section, Card, Tag } from "@/components/site/primitives";
import { getCookieChoice, clearCookieChoice, type CookieChoice } from "@/components/site/cookie-consent";

const updated = "July 1, 2026";

const cookies = [
  { name: "nova_session", type: "Necessary", purpose: "Maintains form state across page loads.", retention: "Session" },
  { name: "nova_theme", type: "Necessary", purpose: "Remembers your light/dark preference.", retention: "1 year" },
  { name: "nova_consent", type: "Necessary", purpose: "Stores your cookie preferences.", retention: "12 months" },
  { name: "_analytics_id", type: "Analytics", purpose: "Aggregated page-view analytics — no cross-site tracking.", retention: "13 months" },
];

function Page() {
  return (
    <>
      <SEO
        title="Cookie Policy — NOVA Studio"
        description="Which cookies novastudio.com sets, why, and how you can manage them."
        path="/cookies"
      />
      <PageHero eyebrow="Legal" title="Cookie Policy" intro={`Last updated ${updated}. What we set, why we set it, and how to opt out.`} />

      <Section>
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">What cookies are</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Cookies are small text files that a website stores on your device. We use a small set of them to make novastudio.com work and to understand aggregate usage — never to build a profile of you or sell data.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              This page is maintained by NOVA Studio as template content and is provided alongside our{" "}
              <Link to="/privacy" className="underline underline-offset-4">Privacy Policy</Link>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Cookies we set</h2>
            <div className="mt-4 overflow-hidden rounded-lg border border-border bg-card">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-border bg-muted/40">
                  <tr>
                    <th className="px-4 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Name</th>
                    <th className="px-4 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Type</th>
                    <th className="px-4 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Purpose</th>
                    <th className="px-4 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Retention</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {cookies.map((c) => (
                    <tr key={c.name}>
                      <td className="px-4 py-3 font-mono text-xs">{c.name}</td>
                      <td className="px-4 py-3">
                        <Tag>{c.type}</Tag>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{c.purpose}</td>
                      <td className="px-4 py-3 text-muted-foreground">{c.retention}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div id="preferences">
            <h2 className="text-2xl font-semibold tracking-tight">Your preferences</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Update or withdraw your consent at any time. Your choice is stored on this device only.
            </p>
            <div className="mt-4">
              <CookiePreferences />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Managing cookies in your browser</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              You can clear or block cookies at any time in your browser settings. Blocking necessary cookies may break form state and preferences; blocking analytics cookies won't affect the site's functionality.
            </p>
          </div>

          <Card>
            <Tag>Questions?</Tag>
            <p className="mt-2 text-sm text-muted-foreground">
              Email privacy@novastudio.com or read the full{" "}
              <Link to="/privacy" className="underline underline-offset-4">Privacy Policy</Link>.
            </p>
          </Card>
        </div>
      </Section>
    </>
  );
}

function CookiePreferences() {
  const [choice, setChoice] = useState<CookieChoice | null>(null);

  useEffect(() => {
    setChoice(getCookieChoice());
    const onChange = () => setChoice(getCookieChoice());
    window.addEventListener("nova:cookie-consent", onChange);
    return () => window.removeEventListener("nova:cookie-consent", onChange);
  }, []);

  const setStatus = (status: CookieChoice["status"]) => {
    const next: CookieChoice = { status, timestamp: new Date().toISOString(), version: 1 };
    try {
      window.localStorage.setItem("nova-cookie-consent", JSON.stringify(next));
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new CustomEvent("nova:cookie-consent", { detail: next }));
  };

  const label =
    choice?.status === "accepted"
      ? "All cookies (essential + analytics)"
      : choice?.status === "essential-only"
        ? "Essential cookies only"
        : "No choice recorded yet";

  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Current choice
          </div>
          <div className="mt-1 text-base font-medium">{label}</div>
          {choice && (
            <div className="mt-1 font-mono text-[11px] text-muted-foreground">
              Saved {new Date(choice.timestamp).toLocaleString()}
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setStatus("essential-only")}
            className="rounded-md border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => setStatus("accepted")}
            className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Accept all
          </button>
          {choice && (
            <button
              type="button"
              onClick={() => clearCookieChoice()}
              className="rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Withdraw & re-ask
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
