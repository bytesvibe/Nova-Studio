import type { ReactNode } from "react";
import { PageHero, Section, CTAButton, Card, Tag } from "./primitives";

export function PageStub({
  eyebrow,
  title,
  intro,
  phase,
  bullets,
  cta,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  phase: string;
  bullets: string[];
  cta?: { label: string; href: string };
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro}>
        <CTAButton href="/book">Book a discovery call</CTAButton>
        <CTAButton href="/work" variant="secondary">
          See our work
        </CTAButton>
      </PageHero>
      <Section>
        <Card className="bg-primary">
          <div className="flex items-center justify-between">
            <Tag tone="on-primary">{phase}</Tag>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground/70">
              In progress
            </span>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                What this page will include
              </h2>
              <p className="mt-2 text-sm text-foreground/70">
                A short preview of the sections we're building next.
              </p>
            </div>
            <ul className="space-y-2 text-sm text-foreground/80">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          {cta && (
            <div className="mt-8">
              <CTAButton href={cta.href}>{cta.label}</CTAButton>
            </div>
          )}
        </Card>
      </Section>
    </>
  );
}
