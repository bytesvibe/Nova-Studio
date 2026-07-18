import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MapPin, Phone, Clock, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { SEO } from "@/components/site/seo";
import { agency } from "@/content/nova";
import { BentoTile, Card, PageHero, Section, Tag } from "@/components/site/primitives";

const budgets = ["< $25k", "$25–75k", "$75–200k", "$200k+", "Not sure yet"];
const services = [
  "Brand identity",
  "Product / UX design",
  "Web design & build",
  "Design system",
  "Retainer / embedded pod",
  "Something else",
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Brief received. We'll reply within one business day.");
  }

  return (
    <>
      <SEO
        title="Contact — NOVA Studio"
        description="Send NOVA Studio a brief. We reply to every discovery request within one business day."
        ogTitle="Contact — NOVA Studio"
        ogDescription="Talk to a partner directly — no sales team, no funnels."
        path="/contact"
      />

      <PageHero
        eyebrow="Contact"
        title={
          <>
            Send us a brief.
            <br />
            <span className="text-muted-foreground">We reply within a day.</span>
          </>
        }
        intro="No sales team, no funnels — you'll speak directly to a partner. The more detail you can share, the faster we can be useful."
      />

      {/* Form + sidebar */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <Card padded={false} className="p-6 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-start gap-4 py-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-foreground">
                  <Check className="h-5 w-5" />
                </span>
                <h2 className="text-3xl font-semibold tracking-tight">Brief received.</h2>
                <p className="max-w-md text-muted-foreground">
                  Thanks — a partner will read this within one business day and reply with a short
                  proposal or a next-step call.
                </p>
                <Link
                  to="/work"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium hover:opacity-80"
                >
                  Browse our work while you wait <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Your name" name="name" required placeholder="Ada Lovelace" />
                  <Field
                    label="Work email"
                    name="email"
                    type="email"
                    required
                    placeholder="ada@company.com"
                  />
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Company" name="company" placeholder="Acme Inc." />
                  <Field label="Role" name="role" placeholder="Head of Product" />
                </div>

                <FieldGroup label="What do you need help with?">
                  <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                    {services.map((s) => (
                      <Chip key={s} name="service" value={s} />
                    ))}
                  </div>
                </FieldGroup>

                <FieldGroup label="Rough budget">
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <Chip key={b} name="budget" value={b} single />
                    ))}
                  </div>
                </FieldGroup>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="What are you building? What's the timeline? What have you tried?"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/10"
                  />
                </div>

                <div className="flex flex-col-reverse items-start gap-4 pt-2 md:flex-row md:items-center md:justify-between">
                  <p className="text-xs text-muted-foreground">
                    By sending, you agree to our{" "}
                    <Link to="/privacy" className="underline underline-offset-4 hover:opacity-80">
                      privacy policy
                    </Link>
                    .
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
                  >
                    Send brief <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </Card>

          <div className="flex flex-col gap-4 md:gap-6">
            <BentoTile variant="primary">
              <Tag tone="on-primary">Direct line</Tag>
              <div className="mt-6 flex flex-col gap-4 text-sm">
                <a
                  href="mailto:hello@nova.studio"
                  className="flex items-center gap-3 hover:opacity-80"
                >
                  <Mail className="h-4 w-4" />
                  hello@nova.studio
                </a>
                <a href="tel:+12125550100" className="flex items-center gap-3 hover:opacity-80">
                  <Phone className="h-4 w-4" />
                  +1 (212) 555-0100
                </a>
              </div>
              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground/60">
                Replies within 1 business day
              </p>
            </BentoTile>

            <Card>
              <Clock className="h-4 w-4 text-muted-foreground" />
              <h3 className="mt-6 text-lg font-semibold tracking-tight">Studio hours</h3>
              <dl className="mt-4 space-y-2 text-sm">
                <Row k="Mon–Fri" v="09:00 – 18:00 local" />
                <Row k="Weekends" v="Async only" />
                <Row k="Response SLA" v="24h business" />
              </dl>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold tracking-tight">Prefer a call?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Book a 30-minute discovery slot directly on a partner's calendar.
              </p>
              <Link
                to="/book"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium hover:opacity-80"
              >
                Book a discovery call <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Card>
          </div>
        </div>
      </Section>

      {/* Offices */}
      <Section eyebrow="Offices" title="Three studios, three timezones.">
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {agency.offices.map((o) => (
            <Card key={o.city}>
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{o.city}</h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {o.country} · {o.timezone}
              </p>
              <p className="mt-4 text-sm text-muted-foreground">{o.address}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ teaser */}
      <Section>
        <BentoTile variant="foreground" className="md:p-10">
          <Tag tone="on-foreground">Before you write</Tag>
          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
                Common questions, answered honestly.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-background/70">
                Budget, timelines, retainers, IP — most of what people email us is already on the
                FAQ.
              </p>
            </div>
            <Link
              to="/faq"
              className="inline-flex items-center gap-1.5 rounded-md bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
            >
              Read the FAQ <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </BentoTile>
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
      >
        {label}
        {required && <span className="ml-1 text-foreground">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/10"
      />
    </div>
  );
}

function FieldGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </div>
      {children}
    </div>
  );
}

function Chip({ name, value, single }: { name: string; value: string; single?: boolean }) {
  return (
    <label className="cursor-pointer">
      <input
        type={single ? "radio" : "checkbox"}
        name={name}
        value={value}
        className="peer sr-only"
      />
      <span className="inline-flex w-full items-center justify-center rounded-full border border-border bg-card px-3 py-2 text-xs font-medium transition-colors hover:bg-muted peer-checked:border-foreground peer-checked:bg-foreground peer-checked:text-background">
        {value}
      </span>
    </label>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
        {k}
      </dt>
      <dd className="text-sm">{v}</dd>
    </div>
  );
}

export default Contact;
