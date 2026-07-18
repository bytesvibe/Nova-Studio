import { forwardRef, type HTMLAttributes, type ReactNode } from "react";

export function Tag({
  children,
  tone = "muted",
}: {
  children: ReactNode;
  tone?: "muted" | "on-primary" | "on-secondary" | "on-foreground";
}) {
  const toneClass =
    tone === "on-primary"
      ? "text-foreground/70"
      : tone === "on-secondary"
        ? "text-[color:var(--secondary-foreground)]/75"
        : tone === "on-foreground"
          ? "text-background/60"
          : "text-muted-foreground";
  return (
    <span className={`font-mono text-[11px] uppercase tracking-[0.14em] ${toneClass}`}>
      {children}
    </span>
  );
}

type CardProps = HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "article" | "section";
  padded?: boolean;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { className = "", padded = true, as = "div", children, ...rest },
  ref,
) {
  const Tag = as;
  return (
    <Tag
      ref={ref as never}
      className={`group relative flex flex-col justify-between rounded-2xl border border-border bg-card ${padded ? "p-6" : ""} transition-shadow duration-300 hover:shadow-[0_10px_36px_-16px_rgba(17,24,39,0.18)] ${className}`}
      {...(rest as HTMLAttributes<HTMLElement>)}
    >
      {children}
    </Tag>
  );
});

export function Section({
  id,
  eyebrow,
  title,
  intro,
  className = "",
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-6 py-16 md:py-24 ${className}`}>
      {(eyebrow || title || intro) && (
        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:max-w-3xl">
          {eyebrow && <Tag>{eyebrow}</Tag>}
          {title && (
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl md:leading-[1.05]">
              {title}
            </h2>
          )}
          {intro && <p className="text-base text-muted-foreground md:text-lg">{intro}</p>}
        </div>
      )}
      {children}
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="mx-auto max-w-7xl px-6 pt-16 pb-8 md:pt-24 md:pb-12">
      <div className="flex flex-col gap-6">
        <Tag>{eyebrow}</Tag>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          {title}
        </h1>
        {intro && <p className="max-w-2xl text-base text-muted-foreground md:text-lg">{intro}</p>}
        {children && <div className="flex flex-wrap gap-3 pt-2">{children}</div>}
      </div>
    </header>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="font-mono text-4xl font-semibold tracking-tight md:text-5xl">{value}</div>
      <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

export function CTAButton({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
}) {
  const base =
    "inline-flex items-center gap-1.5 rounded-md px-5 py-2.5 text-sm font-medium transition-opacity";
  const style =
    variant === "primary"
      ? "bg-foreground text-background hover:opacity-90"
      : "border border-border bg-card text-foreground hover:bg-muted";
  return (
    <a href={href} className={`${base} ${style}`}>
      {children}
    </a>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const track = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border bg-card/60 py-6">
      <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-12 px-6 font-mono text-sm uppercase tracking-[0.14em] text-muted-foreground">
        {track.map((label, i) => (
          <span key={i} className="flex items-center gap-3 whitespace-nowrap">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondary" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

export function BentoTile({
  className = "",
  variant = "card",
  children,
}: {
  className?: string;
  variant?: "card" | "primary" | "secondary" | "foreground";
  children: ReactNode;
}) {
  const bg =
    variant === "primary"
      ? "bg-primary text-foreground"
      : variant === "secondary"
        ? "bg-secondary text-[color:var(--secondary-foreground)]"
        : variant === "foreground"
          ? "bg-foreground text-background"
          : "bg-card text-foreground";
  return (
    <Card className={`${bg} ${className}`}>
      {children}
    </Card>
  );
}
