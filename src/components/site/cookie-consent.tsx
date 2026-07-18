import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "nova-cookie-consent";

export type CookieChoice = {
  status: "accepted" | "essential-only";
  timestamp: string;
  version: 1;
};

export function getCookieChoice(): CookieChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CookieChoice) : null;
  } catch {
    return null;
  }
}

function saveChoice(status: CookieChoice["status"]) {
  const choice: CookieChoice = { status, timestamp: new Date().toISOString(), version: 1 };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(choice));
  } catch {
    /* storage unavailable */
  }
  window.dispatchEvent(new CustomEvent("nova:cookie-consent", { detail: choice }));
}

export function clearCookieChoice() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent("nova:cookie-consent", { detail: null }));
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Delay a beat so it doesn't fight the page's LCP paint.
    const t = window.setTimeout(() => {
      if (!getCookieChoice()) setVisible(true);
    }, 400);
    const onChange = () => {
      if (getCookieChoice()) setVisible(false);
    };
    window.addEventListener("nova:cookie-consent", onChange);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("nova:cookie-consent", onChange);
    };
  }, []);

  if (!visible) return null;

  const decide = (status: CookieChoice["status"]) => {
    saveChoice(status);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed inset-x-3 bottom-3 z-50 sm:inset-x-auto sm:bottom-6 sm:left-6 sm:right-6 sm:mx-auto sm:max-w-3xl"
    >
      <div className="rounded-2xl border border-border bg-card/95 p-4 shadow-2xl backdrop-blur sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
          <div className="flex-1">
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Cookies
            </div>
            <p className="mt-2 text-sm leading-relaxed text-foreground">
              We use essential cookies to run this site, plus optional analytics cookies to understand
              how it's used. Read the{" "}
              <Link to="/cookies" className="underline underline-offset-4">
                Cookies policy
              </Link>{" "}
              for details. You can change your choice later on that page.
            </p>
          </div>
          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => decide("essential-only")}
              className="rounded-md border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              Essential only
            </button>
            <button
              type="button"
              onClick={() => decide("accepted")}
              className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
