import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SiteNav } from "./components/site/nav";
import { SiteFooter } from "./components/site/footer";
import { BackToTop } from "./components/site/back-to-top";
import { ScrollToTop } from "./components/site/scroll-to-top";
import { Toaster } from "sonner";
import { SEO } from "./components/site/seo";
import { CookieConsent } from "./components/site/cookie-consent";
import { BuiltByPopup } from "./components/site/built-by-popup";

import Home from "./routes/index";
import About from "./routes/about";
import Services from "./routes/services";
import ServiceDetail from "./routes/services.$slug";
import Work from "./routes/work";
import CaseStudy from "./routes/work.$slug";
import CaseStudies from "./routes/case-studies";
import Industries from "./routes/industries";
import IndustryDetail from "./routes/industries.$slug";
import Process from "./routes/process";
import Pricing from "./routes/pricing";
import Team from "./routes/team";
import Careers from "./routes/careers";
import Blog from "./routes/blog";
import BlogPost from "./routes/blog.$slug";
import Testimonials from "./routes/testimonials";
import Contact from "./routes/contact";
import Book from "./routes/book";
import Faq from "./routes/faq";
import Privacy from "./routes/privacy";
import Terms from "./routes/terms";
import Cookies from "./routes/cookies";
import Search from "./routes/search";

function NotFound() {
  return (
    <>
      <SEO
        title="Page not found (404) — NOVA Studio"
        description="This page doesn't exist, was moved, or never did. Try search or head back to the homepage."
        noIndex
      />
      {/* Hints for prerenderers (rendertron, prerender.io, etc.) to return HTTP 404
          instead of 200 when snapshotting this route. A pure client-side SPA can't
          set the response status itself — that requires SSR or a prerender layer. */}
      <Helmet>
        <meta name="prerender-status-code" content="404" />
        <meta httpEquiv="Status" content="404 Not Found" />
      </Helmet>
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-md text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Error 404</p>
          <h1 className="mt-3 text-6xl font-bold tracking-tight text-foreground">Lost in the grid.</h1>
          <p className="mt-4 text-sm text-muted-foreground">
            The page you're looking for doesn't exist, moved, or never did.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <a href="/" className="inline-block rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background">
              Go home
            </a>
            <a href="/search" className="inline-block rounded-md border border-border bg-card px-4 py-2 text-sm font-medium">
              Search the site
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <SiteNav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />
          <Route path="/process" element={<Process />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
      <BackToTop />
      <CookieConsent />
      <BuiltByPopup />
      <Toaster />
    </div>
  );
}
