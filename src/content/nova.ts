// Realistic content library for NOVA Studio.
// Reused across pages so navigation, filtering, and detail views stay in sync.

export const agency = {
  name: "NOVA Studio",
  tagline: "Design that behaves like a system.",
  mission:
    "We build brands, products, and interfaces that stay coherent as companies grow — from the first sketch to the ten-thousandth screen.",
  founded: 2016,
  offices: [
    { city: "New York", country: "USA", timezone: "EST", address: "27 Lispenard St, Floor 4" },
    { city: "Amsterdam", country: "NL", timezone: "CET", address: "Herengracht 182" },
    { city: "Singapore", country: "SG", timezone: "SGT", address: "9 Straits View, Marina One" },
  ],
  stats: [
    { label: "Projects shipped", value: "240+" },
    { label: "Countries served", value: "34" },
    { label: "Avg. NPS", value: "72" },
    { label: "Team members", value: "48" },
  ],
  socials: [
    { label: "Dribbble", href: "https://dribbble.com" },
    { label: "Behance", href: "https://behance.net" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Twitter", href: "https://twitter.com" },
  ],
};

export type Service = {
  slug: string;
  name: string;
  tag: string;
  summary: string;
  benefits: string[];
  deliverables: string[];
  process: { title: string; body: string }[];
  faq: { q: string; a: string }[];
  related: string[]; // service slugs
};

export const services: Service[] = [
  {
    slug: "brand-identity",
    name: "Brand Identity",
    tag: "Strategy · Visual",
    summary:
      "A defensible brand system: positioning, voice, logo, typography, color, and the guidelines that keep it consistent as you scale.",
    benefits: [
      "Clarify positioning before design begins",
      "One coherent system across every touchpoint",
      "Guidelines that non-designers can actually follow",
      "Naming and messaging that reads the same everywhere",
    ],
    deliverables: [
      "Brand strategy document",
      "Verbal identity & tone of voice",
      "Logo suite (primary, mono, mark)",
      "Type system & color tokens",
      "Brand guidelines (Figma + PDF)",
    ],
    process: [
      { title: "Discovery", body: "Stakeholder interviews, audit, competitive landscape." },
      { title: "Strategy", body: "Positioning, audience, voice, and design principles." },
      { title: "Design", body: "Logo, type, color, iconography, motion." },
      { title: "System", body: "Guidelines, templates, and rollout support." },
    ],
    faq: [
      { q: "How long does a brand system take?", a: "Typically 6–10 weeks from kickoff to guideline handover." },
      { q: "Do you handle naming?", a: "Yes — as a strategy add-on with linguistic and trademark screening." },
      { q: "Can you refresh an existing brand?", a: "Absolutely. Roughly 60% of our brand work is evolution, not rebuild." },
    ],
    related: ["logo-design", "design-systems", "creative-strategy"],
  },
  {
    slug: "logo-design",
    name: "Logo Design",
    tag: "Visual",
    summary: "A wordmark, monogram, or combination mark engineered for scale, contrast, and longevity.",
    benefits: [
      "Optical corrections at every size",
      "Optimized for dark, light, and single-color use",
      "Delivered as SVG, PDF, and variable font when relevant",
      "Documented construction and clearspace",
    ],
    deliverables: ["Primary logo", "Monogram", "Wordmark", "Usage guide", "Vector source files"],
    process: [
      { title: "Brief", body: "Positioning and constraints." },
      { title: "Exploration", body: "3–5 directions with rationale." },
      { title: "Refinement", body: "Optical tuning and stress testing." },
      { title: "Handover", body: "Sources, guidelines, and asset kit." },
    ],
    faq: [
      { q: "How many rounds?", a: "Three is standard. Additional rounds are scoped as needed." },
      { q: "Do we own the logo?", a: "Yes. Full IP transfers on final invoice." },
    ],
    related: ["brand-identity", "design-systems"],
  },
  {
    slug: "ui-design",
    name: "UI Design",
    tag: "Product",
    summary: "Interface design grounded in a design system: legible, accessible, and fast to build.",
    benefits: [
      "Component-first design that maps to code",
      "WCAG 2.2 AA baseline",
      "Dark and light parity from the start",
      "Motion specs your engineers can ship",
    ],
    deliverables: ["Figma design files", "Component library", "Interaction specs", "Redlines"],
    process: [
      { title: "Audit", body: "Existing screens, patterns, and tokens." },
      { title: "Foundations", body: "Type, color, spacing, radius, motion." },
      { title: "Components", body: "Anatomy, variants, states." },
      { title: "Screens", body: "Priority flows, then long tail." },
    ],
    faq: [
      { q: "Do you work in Figma?", a: "Yes, exclusively. We hand off variables, modes, and libraries." },
    ],
    related: ["ux-research", "design-systems", "dashboard-design"],
  },
  {
    slug: "ux-research",
    name: "UX Research",
    tag: "Research",
    summary: "Qualitative and quantitative research that tells you what to build, not just how it looks.",
    benefits: [
      "Interviews and usability tests with real users",
      "Analytics review and event instrumentation",
      "Prioritized findings, not a 60-page report",
      "Research repository your team can search",
    ],
    deliverables: ["Research plan", "Interview transcripts", "Insights & opportunity map", "Prioritized recommendations"],
    process: [
      { title: "Plan", body: "Objectives, questions, participants." },
      { title: "Field", body: "Interviews, tests, diary studies." },
      { title: "Synthesize", body: "Affinity mapping, themes, quotes." },
      { title: "Recommend", body: "What to build, in what order." },
    ],
    faq: [
      { q: "How many participants?", a: "5–8 per persona for qualitative rounds is our default." },
    ],
    related: ["ui-design", "product-design", "creative-strategy"],
  },
  {
    slug: "web-design",
    name: "Web Design",
    tag: "Marketing · Product",
    summary: "Marketing sites and product surfaces designed to convert, load fast, and stay editorial.",
    benefits: [
      "Conversion-oriented information architecture",
      "Design tokens ready for engineering",
      "Fully responsive across breakpoints",
      "Performance budgets baked in",
    ],
    deliverables: ["Sitemap", "Wireframes", "Visual design", "Prototypes", "Handover kit"],
    process: [
      { title: "Strategy", body: "Audience, goals, IA." },
      { title: "Wireframes", body: "Structure before style." },
      { title: "Design", body: "Layouts, type, motion." },
      { title: "Handover", body: "Specs and QA support." },
    ],
    faq: [
      { q: "Do you build what you design?", a: "Often, yes — through our Website Development service." },
    ],
    related: ["website-development", "landing-pages", "brand-identity"],
  },
  {
    slug: "website-development",
    name: "Website Development",
    tag: "Engineering",
    summary: "Production builds in Next.js, TanStack Start, or Astro — accessible, typed, and CMS-connected.",
    benefits: [
      "TypeScript end to end",
      "Headless CMS integration (Sanity, Contentful, Storyblok)",
      "Core Web Vitals as an acceptance criterion",
      "CI, previews, and observability set up on day one",
    ],
    deliverables: ["Production codebase", "CMS models", "CI/CD pipeline", "Docs & training"],
    process: [
      { title: "Setup", body: "Repos, environments, tokens." },
      { title: "Build", body: "Components, pages, CMS wiring." },
      { title: "QA", body: "Accessibility, performance, cross-browser." },
      { title: "Launch", body: "DNS, monitoring, handover." },
    ],
    faq: [
      { q: "Which stacks do you support?", a: "Next.js, TanStack Start, Astro, and Remix are our primary targets." },
    ],
    related: ["web-design", "website-maintenance", "landing-pages"],
  },
  {
    slug: "landing-pages",
    name: "Landing Pages",
    tag: "Marketing",
    summary: "High-conversion campaign pages, shipped in weeks, instrumented from launch.",
    benefits: ["A/B ready", "Analytics instrumented", "CMS-editable", "Motion where it earns its keep"],
    deliverables: ["Copy direction", "Design", "Build", "Instrumentation"],
    process: [
      { title: "Angle", body: "Message-market fit." },
      { title: "Design", body: "Single scroll, sharp hierarchy." },
      { title: "Ship", body: "Build, instrument, monitor." },
    ],
    faq: [{ q: "Turnaround?", a: "Two to four weeks for a single-page campaign." }],
    related: ["web-design", "website-development", "creative-strategy"],
  },
  {
    slug: "mobile-app-design",
    name: "Mobile App Design",
    tag: "Product",
    summary: "iOS and Android product design with native patterns, offline states, and platform parity.",
    benefits: ["Platform-native patterns", "Offline-first flows", "Accessibility from day one", "Motion prototypes"],
    deliverables: ["Flows", "Screens", "Prototypes", "Component library"],
    process: [
      { title: "Discover", body: "Users, jobs, constraints." },
      { title: "Design", body: "Flows and screens." },
      { title: "Prototype", body: "Test with real users." },
      { title: "Handover", body: "Redlines and specs." },
    ],
    faq: [{ q: "Do you design for tablet?", a: "Yes, as a scoped add-on." }],
    related: ["ui-design", "product-design", "ux-research"],
  },
  {
    slug: "dashboard-design",
    name: "Dashboard Design",
    tag: "Product",
    summary: "Data-dense interfaces that stay legible — for analytics, admin, and operator tools.",
    benefits: ["Information density without noise", "Chart library aligned to your data", "Keyboard-first flows", "Role-aware views"],
    deliverables: ["IA", "Screens", "Chart specs", "Empty & error states"],
    process: [
      { title: "Model", body: "Data and roles." },
      { title: "Layouts", body: "Hierarchy and density." },
      { title: "Components", body: "Tables, charts, filters." },
      { title: "Polish", body: "Empty, loading, error." },
    ],
    faq: [{ q: "Which chart libraries?", a: "We design to your chosen library — Recharts, Visx, Nivo, or bespoke D3." }],
    related: ["ui-design", "design-systems", "product-design"],
  },
  {
    slug: "product-design",
    name: "Product Design",
    tag: "Product",
    summary: "End-to-end product design partnership — strategy, research, and shipping alongside your team.",
    benefits: ["Embedded designers", "Weekly shipping cadence", "Strategy + craft in one pod", "Research feeding roadmap"],
    deliverables: ["Roadmap input", "Weekly design output", "Research", "System contributions"],
    process: [
      { title: "Embed", body: "Match to squad and rituals." },
      { title: "Ship", body: "Weekly design output." },
      { title: "Learn", body: "Research and iteration." },
      { title: "System", body: "Contribute back to library." },
    ],
    faq: [{ q: "How long is an engagement?", a: "Minimum three months, most run 6–12." }],
    related: ["ui-design", "ux-research", "design-systems"],
  },
  {
    slug: "motion-graphics",
    name: "Motion Graphics",
    tag: "Motion",
    summary: "Brand and product motion — from micro-interactions to hero animations and campaign film.",
    benefits: ["Motion principles doc", "Lottie & code-ready outputs", "Reusable presets", "Performance-conscious"],
    deliverables: ["Motion principles", "Lottie files", "MP4/GIF renders", "After Effects sources"],
    process: [
      { title: "Principles", body: "Timing, easing, hierarchy." },
      { title: "Storyboards", body: "Frames and beats." },
      { title: "Animate", body: "Craft and iterate." },
      { title: "Handover", body: "Optimized outputs." },
    ],
    faq: [{ q: "Do you deliver Lottie?", a: "Yes — size-budgeted and tested across browsers." }],
    related: ["brand-identity", "ui-design", "creative-strategy"],
  },
  {
    slug: "social-media-design",
    name: "Social Media Design",
    tag: "Marketing",
    summary: "On-brand social systems: templates, campaigns, and always-on creative for lean teams.",
    benefits: ["Template libraries per platform", "Editable in Figma", "Campaign toolkits", "Motion variants"],
    deliverables: ["Template library", "Campaign creative", "Motion snippets", "Guidelines"],
    process: [
      { title: "Audit", body: "Current channels and performance." },
      { title: "System", body: "Templates by format." },
      { title: "Campaigns", body: "Seasonal creative." },
      { title: "Enablement", body: "Team training." },
    ],
    faq: [{ q: "Do you post for us?", a: "No — we design; you (or your agency) post." }],
    related: ["brand-identity", "motion-graphics", "creative-strategy"],
  },
  {
    slug: "creative-strategy",
    name: "Creative Strategy",
    tag: "Strategy",
    summary: "The layer above design: audience, message, and creative direction that make the work work.",
    benefits: ["Audience clarity", "Message architecture", "Creative direction", "Campaign concepts"],
    deliverables: ["Audience map", "Message house", "Creative brief", "Campaign concept"],
    process: [
      { title: "Listen", body: "Stakeholders and customers." },
      { title: "Frame", body: "Message and audience." },
      { title: "Direct", body: "Creative principles." },
      { title: "Activate", body: "Concepts and toolkits." },
    ],
    faq: [{ q: "Is this a standalone service?", a: "Yes, and it also opens most of our engagements." }],
    related: ["brand-identity", "landing-pages", "social-media-design"],
  },
  {
    slug: "design-systems",
    name: "Design Systems",
    tag: "Product · Engineering",
    summary: "Design systems that hold up under load — Figma libraries, tokens, and code parity.",
    benefits: ["Token pipeline (Figma → code)", "Variants, modes, themes", "Documentation site", "Governance model"],
    deliverables: ["Token architecture", "Component library", "Docs site", "Governance playbook"],
    process: [
      { title: "Audit", body: "Existing patterns and code." },
      { title: "Tokens", body: "Foundations and semantic layer." },
      { title: "Components", body: "Anatomy and variants." },
      { title: "Docs", body: "Usage and governance." },
    ],
    faq: [{ q: "Style Dictionary or Tokens Studio?", a: "Both — we recommend based on your Figma and CI setup." }],
    related: ["ui-design", "product-design", "website-development"],
  },
  {
    slug: "website-maintenance",
    name: "Website Maintenance",
    tag: "Engineering",
    summary: "Retained support: updates, performance, accessibility, and continuous improvement.",
    benefits: ["Monthly performance report", "Quarterly accessibility audit", "Content updates", "Roadmap of improvements"],
    deliverables: ["Monthly report", "Ticket queue", "Quarterly audit", "Roadmap"],
    process: [
      { title: "Onboard", body: "Access, docs, tooling." },
      { title: "Operate", body: "Tickets and updates." },
      { title: "Improve", body: "Quarterly initiatives." },
      { title: "Report", body: "What shipped, what's next." },
    ],
    faq: [{ q: "SLA?", a: "Same-business-day acknowledgment on all tickets; severity 1 within 2 hours." }],
    related: ["website-development", "landing-pages"],
  },
];

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: "Branding" | "Web Design" | "UI/UX" | "SaaS" | "Mobile Apps" | "eCommerce" | "Corporate" | "Marketing";
  industry: string;
  services: string[]; // service slugs
  year: number;
  summary: string;
  metrics: { label: string; value: string }[];
  problem: string;
  strategy: string;
  outcome: string;
  testimonial: { quote: string; author: string; role: string };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "helios-banking",
    title: "Rebuilding a challenger bank around clarity",
    client: "Helios",
    category: "SaaS",
    industry: "Finance",
    services: ["ui-design", "design-systems", "ux-research"],
    year: 2025,
    summary:
      "A 24-month partnership rebuilding Helios's mobile banking product on a token-driven design system.",
    metrics: [
      { label: "Onboarding conversion", value: "+38%" },
      { label: "Support tickets", value: "−41%" },
      { label: "App Store rating", value: "4.8" },
    ],
    problem:
      "Helios had shipped fast for three years and was drowning in inconsistency — 14 button styles, three tone-of-voice systems, and an onboarding flow that leaked 60% of signups.",
    strategy:
      "We embedded a pod of four designers alongside their platform team, built a semantic token pipeline, and rewrote the onboarding flow around a single clarity principle.",
    outcome:
      "Onboarding conversion lifted 38% in the first quarter after launch. Support ticket volume dropped 41% year-over-year.",
    testimonial: {
      quote: "NOVA didn't just design our app — they gave us the operating system to keep designing it.",
      author: "Priya Anand",
      role: "VP Product, Helios",
    },
    featured: true,
  },
  {
    slug: "meridian-health",
    title: "A patient portal that patients actually use",
    client: "Meridian Health",
    category: "UI/UX",
    industry: "Healthcare",
    services: ["ux-research", "ui-design", "product-design"],
    year: 2024,
    summary: "Redesigning a hospital network's patient portal around real appointment workflows.",
    metrics: [
      { label: "Weekly active patients", value: "+112%" },
      { label: "Booking completion", value: "+54%" },
      { label: "Accessibility score", value: "98/100" },
    ],
    problem:
      "The legacy portal was WCAG 2.0 barely, mobile-broken, and hidden behind a login that half of patients couldn't complete.",
    strategy:
      "Ten weeks of research across four hospitals, then a mobile-first redesign built on the existing FHIR APIs.",
    outcome: "Portal adoption more than doubled; call-center booking volume dropped 22%.",
    testimonial: {
      quote: "We finally have a portal our patients recommend to each other.",
      author: "Dr. Marcus Bell",
      role: "CMIO, Meridian Health",
    },
    featured: true,
  },
  {
    slug: "atlas-commerce",
    title: "A commerce brand fit for global scale",
    client: "Atlas Goods",
    category: "Branding",
    industry: "eCommerce",
    services: ["brand-identity", "web-design", "website-development"],
    year: 2025,
    summary: "Brand system, storefront, and campaign toolkit for a 14-market DTC launch.",
    metrics: [
      { label: "Launch markets", value: "14" },
      { label: "First-quarter revenue", value: "$4.2M" },
      { label: "Return rate", value: "−17%" },
    ],
    problem:
      "Atlas was expanding from one market to fourteen and had no brand system that could carry the weight.",
    strategy:
      "A modular identity, a localizable Shopify Hydrogen storefront, and a campaign toolkit that lets regional teams ship without breaking the brand.",
    outcome:
      "Fourteen markets launched in nine months with a single design language and no regional drift.",
    testimonial: {
      quote: "The system NOVA built is the reason we scaled without hiring a designer per market.",
      author: "Lena Schuster",
      role: "Head of Brand, Atlas Goods",
    },
    featured: true,
  },
  {
    slug: "orbit-saas",
    title: "Positioning a data platform for enterprise",
    client: "Orbit Data",
    category: "Marketing",
    industry: "Technology",
    services: ["creative-strategy", "web-design", "website-development"],
    year: 2024,
    summary: "Repositioning and marketing site rebuild that unlocked enterprise pipeline.",
    metrics: [
      { label: "Enterprise pipeline", value: "+3.1×" },
      { label: "Time to first demo", value: "−48%" },
      { label: "Site LCP", value: "1.1s" },
    ],
    problem: "Orbit's site sold to developers; their sales motion was aimed at CTOs and CIOs.",
    strategy: "New positioning, new IA, new site — with a clear enterprise track that never hides the developer story.",
    outcome: "Enterprise pipeline tripled within two quarters of launch.",
    testimonial: {
      quote: "The clearest positioning work we've ever paid for.",
      author: "Tom Ríos",
      role: "CMO, Orbit Data",
    },
  },
  {
    slug: "verdant-mobile",
    title: "A field app for the people who actually use it",
    client: "Verdant Ag",
    category: "Mobile Apps",
    industry: "Manufacturing",
    services: ["ux-research", "mobile-app-design", "product-design"],
    year: 2024,
    summary: "A rebuilt mobile app for agronomists working across 200,000 hectares.",
    metrics: [
      { label: "Daily active users", value: "94%" },
      { label: "Data entry time", value: "−63%" },
      { label: "Offline sessions", value: "38% of usage" },
    ],
    problem:
      "The legacy app assumed a stable connection and a desk. Agronomists worked in fields, on tractors, with gloves on.",
    strategy: "Field research on three continents; a redesign around offline-first, gesture-first, glove-first patterns.",
    outcome: "94% daily active use — a number we still don't fully believe.",
    testimonial: {
      quote: "The team spent a week in the fields with us. It shows in every screen.",
      author: "Ana Duarte",
      role: "Head of Operations, Verdant Ag",
    },
  },
  {
    slug: "kestrel-hotels",
    title: "A hospitality brand with room to breathe",
    client: "Kestrel Hotels",
    category: "Corporate",
    industry: "Hospitality",
    services: ["brand-identity", "web-design", "motion-graphics"],
    year: 2023,
    summary: "Brand refresh and site rebuild for a boutique hotel group across four cities.",
    metrics: [
      { label: "Direct bookings", value: "+72%" },
      { label: "OTA dependency", value: "−28%" },
      { label: "Site sessions", value: "+2.4×" },
    ],
    problem: "Kestrel's brand read the same as every other boutique group — warm, quiet, forgettable.",
    strategy: "A sharper visual identity built around light and shadow, and a booking flow that stops fighting the guest.",
    outcome: "Direct bookings up 72% year-over-year; OTA dependency down almost a third.",
    testimonial: {
      quote: "We stopped competing on price the moment the new brand went live.",
      author: "Julien Marchand",
      role: "Founder, Kestrel Hotels",
    },
  },
];

export type Industry = {
  slug: string;
  name: string;
  summary: string;
  focus: string[];
};

export const industries: Industry[] = [
  { slug: "healthcare", name: "Healthcare", summary: "HIPAA-aware digital experiences for providers, payers, and patients.", focus: ["Patient portals", "Clinician tools", "Health-tech SaaS"] },
  { slug: "finance", name: "Finance", summary: "Banking, wealth, and fintech products designed for trust and speed.", focus: ["Challenger banks", "Wealth platforms", "Compliance UX"] },
  { slug: "education", name: "Education", summary: "Learning platforms and institutional sites that scale to real cohorts.", focus: ["LMS platforms", "K-12 & higher-ed", "Edtech SaaS"] },
  { slug: "hospitality", name: "Hospitality", summary: "Hotels, restaurants, and travel brands that convert direct.", focus: ["Booking flows", "Loyalty programs", "Hotel groups"] },
  { slug: "real-estate", name: "Real Estate", summary: "Listing platforms and developer sites that sell without shouting.", focus: ["Marketplaces", "Developer sites", "PropTech"] },
  { slug: "technology", name: "Technology", summary: "Positioning and product design for B2B SaaS and developer tools.", focus: ["Developer tools", "Data platforms", "AI infrastructure"] },
  { slug: "ecommerce", name: "eCommerce", summary: "DTC brands, marketplaces, and storefronts built to scale globally.", focus: ["Shopify Hydrogen", "Marketplaces", "Global expansion"] },
  { slug: "automotive", name: "Automotive", summary: "OEM and mobility experiences from configurator to companion app.", focus: ["Configurators", "Companion apps", "Dealer platforms"] },
  { slug: "construction", name: "Construction", summary: "Field-first tools and public-facing sites for the built environment.", focus: ["Field apps", "Project portals", "Firm websites"] },
  { slug: "food-restaurant", name: "Food & Restaurant", summary: "Brands, sites, and ordering flows for hospitality operators.", focus: ["Multi-location brands", "Ordering flows", "Loyalty"] },
  { slug: "travel", name: "Travel", summary: "OTA-grade booking experiences without the OTA feel.", focus: ["Booking engines", "Travel brands", "Loyalty programs"] },
  { slug: "nonprofit", name: "Nonprofit", summary: "Fundraising sites and campaign tools that respect donor time.", focus: ["Fundraising", "Advocacy", "Reporting sites"] },
  { slug: "manufacturing", name: "Manufacturing", summary: "Industrial B2B: catalogs, portals, and operator tools.", focus: ["Product catalogs", "Dealer portals", "Operator apps"] },
  { slug: "professional-services", name: "Professional Services", summary: "Firms who bill by the hour need sites that earn the meeting.", focus: ["Firm websites", "Practice areas", "Case libraries"] },
];

export type ProcessPhase = {
  slug: string;
  name: string;
  duration: string;
  summary: string;
  deliverables: string[];
};

export const processPhases: ProcessPhase[] = [
  { slug: "discovery", name: "Discovery", duration: "1–2 weeks", summary: "Stakeholder interviews, artifact review, and success criteria.", deliverables: ["Kickoff notes", "Success criteria", "RACI"] },
  { slug: "research", name: "Research", duration: "2–4 weeks", summary: "Qualitative and quantitative research with real users.", deliverables: ["Research plan", "Findings", "Opportunity map"] },
  { slug: "strategy", name: "Strategy", duration: "1–2 weeks", summary: "Positioning, IA, and design principles.", deliverables: ["Strategy doc", "Design principles", "IA"] },
  { slug: "wireframing", name: "Wireframing", duration: "2–3 weeks", summary: "Structure before style — flows and low-fi layouts.", deliverables: ["Flows", "Wireframes", "Prototype"] },
  { slug: "ui-design", name: "UI Design", duration: "4–8 weeks", summary: "Visual design, components, and interaction specs.", deliverables: ["Designs", "Components", "Specs"] },
  { slug: "development", name: "Development", duration: "6–12 weeks", summary: "Production build with CI, previews, and observability.", deliverables: ["Codebase", "CI/CD", "Docs"] },
  { slug: "testing", name: "Testing", duration: "1–2 weeks", summary: "Accessibility, performance, and cross-browser QA.", deliverables: ["QA report", "A11y audit", "Performance report"] },
  { slug: "launch", name: "Launch", duration: "1 week", summary: "DNS, monitoring, and comms.", deliverables: ["Launch checklist", "Monitoring", "Training"] },
  { slug: "optimization", name: "Optimization", duration: "Ongoing", summary: "Experiments and iteration based on real data.", deliverables: ["Experiment log", "Monthly report"] },
  { slug: "support", name: "Support", duration: "Retained", summary: "Retained team for updates and improvements.", deliverables: ["SLA", "Roadmap", "Quarterly review"] },
];

export type PricingTier = {
  slug: string;
  name: string;
  price: string;
  timeline: string;
  best: string;
  includes: string[];
  addOns: string[];
};

export const pricingTiers: PricingTier[] = [
  {
    slug: "starter",
    name: "Starter",
    price: "From $12k",
    timeline: "2–4 weeks",
    best: "Founders who need to launch this quarter.",
    includes: ["Landing page or single flow", "Copy direction", "Design & build", "Analytics setup"],
    addOns: ["Motion graphics", "Additional pages", "CMS integration"],
  },
  {
    slug: "growth",
    name: "Growth",
    price: "From $38k",
    timeline: "6–10 weeks",
    best: "Teams rebuilding their marketing surface.",
    includes: ["Positioning workshop", "Up to 8 pages", "Design system foundations", "CMS integration"],
    addOns: ["Blog engine", "Localization", "Advanced motion"],
  },
  {
    slug: "business",
    name: "Business",
    price: "From $95k",
    timeline: "12–18 weeks",
    best: "Scale-ups shipping a product surface.",
    includes: ["Brand refresh", "Marketing site", "Design system", "Product design pod (2 months)"],
    addOns: ["Additional pods", "Research sprints", "Motion suite"],
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    price: "From $250k",
    timeline: "6+ months",
    best: "Companies with a global surface area.",
    includes: ["Embedded product pod", "Design system with governance", "Multi-brand support", "Retained motion + brand"],
    addOns: ["Regional teams", "Executive workshops", "Board-level reporting"],
  },
  {
    slug: "custom",
    name: "Custom Solution",
    price: "Let's talk",
    timeline: "Bespoke",
    best: "Programs that don't fit a package.",
    includes: ["Bespoke scope", "Dedicated leadership", "Multi-year roadmap"],
    addOns: ["Anything above, at scale"],
  },
];

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  group: "Leadership" | "Designers" | "Developers" | "Project Managers" | "Marketing" | "Content";
  bio: string;
};

export const team: TeamMember[] = [
  { slug: "iman-tabari", name: "Iman Tabari", role: "Founder & CEO", group: "Leadership", bio: "Formerly design lead at two unicorn fintechs. Iman started NOVA to prove that craft scales." },
  { slug: "hana-oduya", name: "Hana Oduya", role: "Chief Design Officer", group: "Leadership", bio: "Ex-IDEO and ex-Airbnb. Hana runs the design practice across three offices." },
  { slug: "leo-brandt", name: "Leo Brandt", role: "Head of Engineering", group: "Leadership", bio: "Fifteen years shipping production web. Currently obsessed with edge-rendered React." },
  { slug: "sofia-mendez", name: "Sofia Mendez", role: "Head of Strategy", group: "Leadership", bio: "Strategy lead across brand and product. Believes strategy is a design deliverable." },
  { slug: "nina-koval", name: "Nina Koval", role: "Design Director", group: "Designers", bio: "Leads the brand practice out of Amsterdam." },
  { slug: "yuki-tanabe", name: "Yuki Tanabe", role: "Senior Product Designer", group: "Designers", bio: "Systems, dashboards, and dense data." },
  { slug: "arjun-rao", name: "Arjun Rao", role: "Motion Designer", group: "Designers", bio: "From title sequences to product motion." },
  { slug: "marta-ferreira", name: "Marta Ferreira", role: "Staff Engineer", group: "Developers", bio: "Typescript, tokens, and CI. Wrote most of our internal component library." },
  { slug: "daniel-park", name: "Daniel Park", role: "Senior Engineer", group: "Developers", bio: "Frontend platform lead. Cares deeply about Core Web Vitals." },
  { slug: "emma-lundgren", name: "Emma Lundgren", role: "Senior PM", group: "Project Managers", bio: "Runs our largest enterprise engagements." },
  { slug: "kwame-osei", name: "Kwame Osei", role: "Project Manager", group: "Project Managers", bio: "Keeps design pods honest and on-schedule." },
  { slug: "riya-chandra", name: "Riya Chandra", role: "Marketing Lead", group: "Marketing", bio: "Grows NOVA without a growth-hack in sight." },
  { slug: "jasper-whitlock", name: "Jasper Whitlock", role: "Content Lead", group: "Content", bio: "Editor of NOVA Notes and our essay-first blog." },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: 5;
};

export const testimonials: Testimonial[] = [
  { quote: "NOVA felt like an internal team from week one — with the taste of a top studio.", author: "Priya Anand", role: "VP Product", company: "Helios", rating: 5 },
  { quote: "The clearest positioning work we've ever paid for.", author: "Tom Ríos", role: "CMO", company: "Orbit Data", rating: 5 },
  { quote: "We stopped competing on price the moment the new brand went live.", author: "Julien Marchand", role: "Founder", company: "Kestrel Hotels", rating: 5 },
  { quote: "The team spent a week in the fields with us. It shows in every screen.", author: "Ana Duarte", role: "Head of Operations", company: "Verdant Ag", rating: 5 },
  { quote: "Our finance team calls the new dashboard 'the calmest software we own'.", author: "Sarah Feld", role: "CFO", company: "Northline Logistics", rating: 5 },
  { quote: "They handed us a system, not a set of screens.", author: "Lena Schuster", role: "Head of Brand", company: "Atlas Goods", rating: 5 },
];

export type BlogPost = {
  slug: string;
  title: string;
  category: "Design" | "Engineering" | "Strategy" | "Studio";
  author: string; // team slug
  readTime: string;
  publishedAt: string;
  excerpt: string;
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  { slug: "the-token-pipeline-we-actually-use", title: "The token pipeline we actually use", category: "Design", author: "marta-ferreira", readTime: "8 min", publishedAt: "2026-05-04", excerpt: "How we move design tokens from Figma variables to production CSS without breaking anyone's Friday.", featured: true },
  { slug: "positioning-before-design", title: "Positioning before design, always", category: "Strategy", author: "sofia-mendez", readTime: "6 min", publishedAt: "2026-04-19", excerpt: "Why every one of our engagements starts with a positioning workshop — and what a good one looks like." },
  { slug: "designing-for-gloves", title: "Designing for gloves, tractors, and bad signal", category: "Design", author: "yuki-tanabe", readTime: "9 min", publishedAt: "2026-03-28", excerpt: "Field research notes from six weeks with agronomists across three continents." },
  { slug: "the-case-against-hero-video", title: "The case against hero video", category: "Design", author: "nina-koval", readTime: "5 min", publishedAt: "2026-03-10", excerpt: "It costs performance, distracts from the product, and rarely tests better. So why do we keep shipping it?" },
  { slug: "core-web-vitals-in-tanstack-start", title: "Core Web Vitals in TanStack Start", category: "Engineering", author: "daniel-park", readTime: "11 min", publishedAt: "2026-02-22", excerpt: "A performance budget you can actually enforce, from route to render." },
  { slug: "how-we-hire-designers", title: "How we hire designers at NOVA", category: "Studio", author: "hana-oduya", readTime: "7 min", publishedAt: "2026-02-04", excerpt: "The exercise, the panel, the pay range. All of it, on the record." },
];

export const clientLogos = [
  "Helios", "Meridian", "Atlas Goods", "Orbit", "Verdant", "Kestrel",
  "Northline", "Sable & Co.", "Fieldwork", "Loom Health", "Parallax", "Tinderbox",
];

export const techPartners = [
  "Figma", "Vercel", "Sanity", "Contentful", "Shopify", "Stripe", "Supabase", "Linear",
];

export const awards = [
  { name: "Awwwards Site of the Day", count: 14 },
  { name: "FWA of the Day", count: 9 },
  { name: "Communication Arts", count: 6 },
  { name: "European Design Awards", count: 4 },
  { name: "Brand New — Noted", count: 11 },
];

export const timeline = [
  { year: 2016, title: "Founded in Brooklyn", body: "Three designers, one shared studio, one Basecamp account." },
  { year: 2018, title: "First enterprise engagement", body: "A multi-year product design partnership with a Fortune 500 insurer." },
  { year: 2020, title: "Amsterdam studio opens", body: "Six people, one canal, a lot of stroopwafels." },
  { year: 2022, title: "Singapore studio opens", body: "Serving APAC clients from a real timezone." },
  { year: 2024, title: "48 people, three offices", body: "A single design language across every project we ship." },
];

export const openRoles = [
  { title: "Senior Product Designer", location: "Amsterdam / Remote (EU)", type: "Full-time" },
  { title: "Staff Engineer, Frontend Platform", location: "New York / Remote (US)", type: "Full-time" },
  { title: "Design Systems Engineer", location: "Remote (Global)", type: "Full-time" },
  { title: "Brand Designer", location: "New York", type: "Full-time" },
  { title: "Motion Designer", location: "Remote (EU)", type: "Contract" },
  { title: "Senior Project Manager", location: "Singapore", type: "Full-time" },
];
