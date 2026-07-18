# NOVA Studio

A premium multi-page marketing website for a fictional creative design agency, built as a client-side React SPA on the **Bento** design system.

- 25+ routes (Home, About, Services, Work, Case Studies, Industries, Process, Pricing, Team, Careers, Blog, Testimonials, Contact, Book, FAQ, Search, Legal, 404)
- Content-first — all copy lives in `src/content/nova.ts`
- No backend required; forms simulate submission

See [`/mnt/documents/NOVA-Studio.md`](./docs/NOVA-Studio.md) (or the generated artifact) for a full feature inventory.

---

## Tech Stack

- **React 19** + **TypeScript 5**
- **Vite 5** (SPA build)
- **react-router-dom v7** (client-side routing)
- **Tailwind CSS** with a Bento token layer (`src/styles.css`, OKLCH-based)
- **react-helmet-async** for SEO + JSON-LD
- **shadcn/ui** + **lucide-react** + **sonner**

---

## Prerequisites

- **Node.js 20+** (or **Bun 1.1+** — recommended)
- Git

The project is developed and tested with **bun**. `npm` and `pnpm` also work.

---

## Setup

```bash
# 1. Clone
git clone <your-repo-url> nova-studio
cd nova-studio

# 2. Install dependencies
bun install
# or: npm install
# or: pnpm install
```

That's it — no `.env` file is required to run the app locally.

---

## Environment Variables

The site is **fully static / client-side** and needs **no environment variables** to run, build, or preview.

If you extend the project (e.g. wire real form submissions to Lovable Cloud / Supabase, add analytics, etc.), define variables in a root `.env` file. Vite exposes any variable prefixed with `VITE_` to the client:

```bash
# .env  (do NOT commit)
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
VITE_ANALYTICS_ID=...
```

Access them in code via `import.meta.env.VITE_SUPABASE_URL`. Keep any **private** keys (service-role, secret API keys) on the server side only — never inline them in the client bundle.

---

## Running the App

### Development

```bash
bun dev
# or: npm run dev
```

The dev server starts on **http://localhost:8080** with hot module replacement.

### Production build

```bash
bun run build          # optimized production build → dist/
bun run build:dev      # development-mode build (source maps, no minify)
```

### Preview the production build

```bash
bun run preview
```

---

## Testing

The project doesn't yet ship a test suite. To add one:

### 1. Install testing dependencies

```bash
bun add -d vitest @testing-library/react @testing-library/jest-dom jsdom
```

### 2. Add `vitest.config.ts` at the repo root

```ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
```

### 3. Create `src/test/setup.ts`

```ts
import "@testing-library/jest-dom";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});
```

### 4. Add `"vitest/globals"` to `tsconfig.app.json` → `compilerOptions.types`.

### 5. Add scripts to `package.json`

```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest"
  }
}
```

### 6. Run

```bash
bun run test           # single run
bun run test:watch     # watch mode
```

Place tests next to components as `ComponentName.test.tsx`.

---

## Type-check & Lint

```bash
bunx tsc --noEmit      # TypeScript type-check
bun run lint           # ESLint
bun run format         # Prettier write
```

---

## Project Structure (short)

```
public/          robots.txt, sitemap.xml
src/
  main.tsx       React entry
  App.tsx        Route table + shell
  styles.css     Bento design tokens
  content/       nova.ts (all site copy) + work-images.ts
  assets/work/   Generated case-study visuals
  components/site/   Nav, Footer, SEO, primitives, CookieConsent, etc.
  routes/        All page components
index.html       Entry HTML + Organization / WebSite JSON-LD
```

Full walkthrough: `docs/NOVA-Studio.md`.

---

## Deployment

Any static host works — the build output in `dist/` is plain HTML/JS/CSS. Two things to configure on your host:

1. **SPA fallback:** rewrite unknown paths to `/index.html` so client-side routes deep-link correctly.
2. **Cache headers:** long-cache `dist/assets/*`, short-cache `index.html`.

The easiest path is **Publish** from within Lovable — it handles both automatically.

---

## License

Fictional agency content for demonstration purposes. Adapt freely for your own project.

