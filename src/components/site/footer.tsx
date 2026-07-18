import { Link } from "react-router-dom";
import { NovaLogo } from "./logo";
import { agency, services, industries } from "@/content/nova";

const footerServices = services.slice(0, 6);
const footerIndustries = industries.slice(0, 6);

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <NovaLogo />
            <p className="mt-5 max-w-xs text-sm text-muted-foreground">
              {agency.mission}
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                (e.currentTarget as HTMLFormElement).reset();
              }}
              className="mt-6 flex max-w-sm items-center gap-2 rounded-md border border-border bg-background p-1"
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="w-full bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="rounded-sm bg-foreground px-3 py-2 text-xs font-medium text-background transition-opacity hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              NOVA Notes · monthly · no spam
            </p>
          </div>

          <FooterCol title="Studio">
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/team">Team</FooterLink>
            <FooterLink to="/careers">Careers</FooterLink>
            <FooterLink to="/process">Process</FooterLink>
            <FooterLink to="/testimonials">Testimonials</FooterLink>
          </FooterCol>

          <FooterCol title="Services">
            {footerServices.map((s) => (
              <FooterLink key={s.slug} to={`/services/${s.slug}`}>
                {s.name}
              </FooterLink>
            ))}
            <FooterLink to="/services">All services</FooterLink>
          </FooterCol>

          <FooterCol title="Work">
            <FooterLink to="/work">Portfolio</FooterLink>
            <FooterLink to="/case-studies">Case studies</FooterLink>
            <FooterLink to="/industries">Industries</FooterLink>
            <FooterLink to="/pricing">Pricing</FooterLink>
            <FooterLink to="/blog">Journal</FooterLink>
          </FooterCol>

          <FooterCol title="Contact">
            <FooterLink to="/contact">Contact</FooterLink>
            <FooterLink to="/book">Book a call</FooterLink>
            <FooterLink to="/faq">FAQ</FooterLink>
            <li className="pt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Offices
            </li>
            {agency.offices.map((o) => (
              <li key={o.city} className="text-sm text-muted-foreground">
                {o.city}, {o.country}
              </li>
            ))}
          </FooterCol>
        </div>

        {/* Industries strip */}
        <div className="mt-14 border-t border-border pt-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Industries
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {footerIndustries.map((i) => (
              <li key={i.slug}>
                <Link
                  to={`/industries/${i.slug}`}
                  className="hover:text-foreground"
                >
                  {i.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/industries" className="text-foreground underline underline-offset-4">
                All industries
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            © {new Date().getFullYear()} NOVA Studio · All rights reserved · Built by{" "}
            <a
              href="https://bytesvibe.com"
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline underline-offset-4 hover:opacity-80"
            >
              bytesvibe.com
            </a>
          </p>
          <div className="flex flex-wrap gap-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            {agency.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                {s.label}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground">Terms</Link>
            <Link to="/cookies" className="hover:text-foreground">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="md:col-span-2">
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
        {title}
      </p>
      <ul className="mt-4 space-y-2 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        to={to}
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        {children}
      </Link>
    </li>
  );
}
