import { useEffect, useState } from "react";

const STORAGE_KEY = "nova.built-by-dismissed";

export function BuiltByPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem(STORAGE_KEY) === "1") return;
    const t = window.setTimeout(() => setOpen(true), 900);
    return () => window.clearTimeout(t);
  }, []);

  function dismiss() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="built-by-title"
      onClick={dismiss}
    >
      <div
        className="relative w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:text-foreground"
        >
          ×
        </button>

        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          A note from the makers
        </p>
        <h2
          id="built-by-title"
          className="mt-3 font-display text-2xl leading-tight tracking-tight text-foreground"
        >
          This site is built by{" "}
          <a
            href="https://bytesvibe.com"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 decoration-2"
            style={{ textDecorationColor: "var(--color-accent, #FAD4C0)" }}
          >
            bytesvibe.com
          </a>
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Design, engineering, and creative direction crafted end-to-end.
          Have a project in mind? We'd love to hear about it.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://bytesvibe.com"
            target="_blank"
            rel="noreferrer"
            onClick={dismiss}
            className="inline-flex flex-1 items-center justify-center rounded-full bg-foreground px-5 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-background transition hover:opacity-90"
          >
            Visit bytesvibe.com
          </a>
          <button
            type="button"
            onClick={dismiss}
            className="inline-flex flex-1 items-center justify-center rounded-full border border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground transition hover:bg-muted"
          >
            Continue browsing
          </button>
        </div>
      </div>
    </div>
  );
}
