# 10xaischool — Project Rules for AI Tools

## Project Overview
Next.js 14+ (App Router) · TypeScript/JavaScript · Tailwind CSS · Redux Toolkit · Firebase

This is an AI-powered learning platform (10xaischool). Follow every rule below before writing or editing any file.

---

## PART A — ARCHITECTURE

### A1. Tech Stack (never deviate)

| Layer | Choice |
|---|---|
| Framework | Next.js 14+ with **App Router** |
| Language | JavaScript (`.js`, `.jsx`) — migrate a file to TypeScript (`.ts`, `.tsx`) only when it deals with config/types |
| Styling | **Tailwind CSS** for layout/spacing + **CSS Modules** (`*.module.css`) for component-scoped styles |
| State | **Redux Toolkit** (`createSlice`, `createAsyncThunk`) + **RTK Query** for all API calls |
| Backend-as-a-service | Firebase (Firestore helpers live in `src/firebase/firestore/`) |
| HTTP client | Axios — configured in `src/axios.js` |
| Deployment | AWS CodeDeploy (`appspec.yml`) + Vercel (`vercel.json`) |
| Package manager | **npm** (never yarn or pnpm) |

---

### A2. Feature-Driven Folder Structure

Every time you create a new file, ask yourself: **which feature folder does this belong in?** Do not create flat structures. Always group related files into a feature folder.

```
10xaischool/
├── public/                         # Static assets — one subfolder per feature
│   ├── AI-Avatars/
│   ├── hero_sections_images/
│   ├── home_page_images/
│   ├── login_icons/
│   └── [feature]_images/          # ← always create a named subfolder, never dump at root
│
├── src/
│   ├── app/                        # Next.js routing ONLY — no business logic here
│   │   ├── layout.js               # Root layout (fonts, providers)
│   │   ├── page.js                 # Landing page (thin — delegates to components/)
│   │   ├── globals.css
│   │   ├── not-found.js            # 404 handler
│   │   ├── (routes)/               # Public route group
│   │   ├── classroom/              # Protected classroom shell
│   │   │   ├── layout.js
│   │   │   ├── ClassroomLayoutClient.js
│   │   │   └── [feature]/page.js   # One page.js per feature route
│   │   ├── login/
│   │   ├── register/
│   │   └── sitemap.ts / robots.ts  # Dynamic sitemap + robots
│   │
│   ├── components/                 # All UI — grouped strictly by Feature Name
│   │   ├── [featureName]Components/   # e.g. classroomComponents/, jobsComponents/
│   │   │   ├── FeatureWidget.jsx
│   │   │   └── FeatureWidget.module.css
│   │   ├── LandingPage/
│   │   │   └── [SectionName]/
│   │   │       ├── index.js
│   │   │       ├── SectionName.module.css
│   │   │       └── SectionNameData.js
│   │   ├── Modals/                 # All modals in one place
│   │   ├── shared/                 # Truly cross-cutting atoms only
│   │   ├── UIComponents/           # Global shared UI widgets (pagination, selectors)
│   │   └── Button/index.jsx
│   │
│   ├── config/                     # Static config objects / TypeScript types
│   │
│   ├── firebase/
│   │   └── firestore/              # One file per Firestore operation
│   │       ├── addData.js
│   │       ├── getData.js
│   │       ├── getAllDocuments.js
│   │       ├── editData.js
│   │       ├── updateArrayElement.js
│   │       └── getRecentDocuments.js
│   │
│   ├── hooks/                      # Custom React hooks — every file prefixed with "use"
│   │   ├── useAutoLogin.js
│   │   └── useFormData.js
│   │
│   ├── redux/
│   │   ├── store.js
│   │   ├── reducers.js             # combineReducers — register every new slice here
│   │   ├── provider.js
│   │   ├── features/
│   │   │   └── [featureName]/
│   │   │       ├── [featureName]Slice.js   # UI/local state
│   │   │       └── [featureName]Api.js     # RTK Query endpoints
│   │   ├── services/
│   │   │   └── axiosBaseQuery.js
│   │   ├── transforms/
│   │   └── utils/
│   │
│   ├── services/                   # Generic API clients (axiosBaseQuery lives here too)
│   │
│   ├── shared/                     # Non-component shared code
│   │   ├── config.js
│   │   ├── helpers/
│   │   ├── libs/
│   │   ├── staticData/             # JSON data files
│   │   ├── styles/                 # Global CSS + style utilities
│   │   ├── svgIcons/               # SVG as React components, grouped by domain
│   │   └── utils/
│   │       ├── Common.js
│   │       └── formRegex.js
│   │
│   ├── store/                      # Additional RTK Query API slices
│   ├── styles/                     # Feature-specific global CSS
│   ├── utils/                      # Pure JS helpers (auth, cache, validation)
│   └── widgets/                    # Header + Footer (persistent shell UI)
│       ├── Header/index.js
│       └── Footer/index.js
│
├── scripts/                        # AWS CodeDeploy shell scripts
├── .github/workflows/              # CI: AI review + PR review
├── .env / .env.development / .env.production
├── next.config.js
├── tailwind.config.js
└── CLAUDE.md
```

---

### A3. Naming Conventions

| Thing | Convention | Example |
|---|---|---|
| Page files | `page.js` | `app/classroom/home/page.js` |
| Component files | PascalCase | `ProfileCard.jsx` |
| Hook files | camelCase, `use` prefix | `useStudentProfile.js` |
| Redux slice | camelCase + `Slice` | `classesSlice.js` |
| RTK Query API | camelCase + `Api` | `classesApi.js` |
| CSS Module | same name as component | `ProfileCard.module.css` |
| Static data file | camelCase + `Data` | `hiringPartnersData.js` |
| SVG icon files | camelCase, domain-prefixed | `sidebarSvg.js` |
| Feature component folder | `[feature]Components` | `classroomComponents/` |
| Public asset folder | `[feature]_images` | `hero_sections_images/` |

---

### A4. Component Rules

1. **One file = one exported component** (default export).
2. `app/*/page.js` files are thin shells — they import from `components/` and render. No business logic.
3. All data fetching goes through **RTK Query** endpoints in `redux/features/[feature]/[feature]Api.js`.
4. Static display data lives in `*Data.js` or `.json` files beside the component — never inline.
5. Use `withPrivateAuth` HOC to guard any classroom page.
6. SVG icons → create a React component in `shared/svgIcons/[domain]Svg.js`; never inline SVG in JSX.
7. Do NOT create generic folders like `components/buttons` — use `components/UIComponents` or `components/shared` for true globals.

---

### A5. State Management Rules

1. Every Redux domain:
   - `[domain]Slice.js` → local UI state (`createSlice`)
   - `[domain]Api.js` → server state (`createApi` with `axiosBaseQuery`)
2. All reducers registered in `redux/reducers.js`.
3. Do not use `useState` for data shared across two or more components — use Redux.
4. Use `redux/services/axiosBaseQuery.js` as `baseQuery` for every `createApi` call.

---

### A6. API & Environment

- API base URL from env vars — access via `src/config.js` or `src/shared/helpers/envApi.js`. Never hardcode URLs.
- Axios instance pre-configured in `src/axios.js`. Use it everywhere; never create a raw `axios` instance.
- `.env` → defaults | `.env.development` → dev | `.env.production` → production.

---

### A7. Firebase Rules

All Firestore interactions go through helpers in `src/firebase/firestore/` only. Never call Firestore SDK methods directly from a component.

---

### A8. AI / Avatar Features (10xaischool-specific)

- Avatar config → `src/config/avatars.ts`
- AI Interview components → `src/components/aiInterview/`
  - Hooks inside `src/components/aiInterview/hooks/`
  - API calls in `aiInterviewApi.js`
- Audio worklets → `public/worklets/`
- Every new AI feature: one folder under `components/`, with its own `hooks/` sub-folder and API file.

---

### A9. Adding a New Feature — Checklist

Example: adding a "LiveSessions" feature:

```
public/liveSessions_images/
src/app/classroom/liveSessions/page.js          ← thin page
src/components/liveSessionsComponents/
    LiveSessionsDashboard.jsx
    LiveSessionCard.jsx
    LiveSessionCard.module.css
src/redux/features/liveSessions/
    liveSessionsSlice.js
    liveSessionsApi.js
src/hooks/useLiveSessions.js
src/shared/svgIcons/liveSessionsSvg.js
```

Then register the new reducer in `redux/reducers.js`.

---

### A10. What NOT to Do (Architecture)

- ❌ Do not create `pages/` directory — App Router only
- ❌ Do not fetch data with raw `fetch`/`axios` inside a component — use RTK Query
- ❌ Do not store secrets in source files — `.env.*` only
- ❌ Do not use `yarn` or `pnpm`
- ❌ Do not inline SVGs in JSX
- ❌ Do not create a Redux slice without registering it in `redux/reducers.js`
- ❌ Do not put business logic in `app/*/page.js`
- ❌ Do not dump static assets at the root of `public/`

---

## PART B — DESIGN SYSTEM & STYLING

### B1. Use Existing Tailwind Tokens — Never Hardcode Values

Always use semantic utility classes from `tailwind.config.ts` and `globals.css`:

```jsx
// ✅ Correct
<div className="text-brand bg-background text-foreground font-sans">

// ❌ Wrong — hardcoded arbitrary values
<div className="text-[#e8771e] bg-[#ffffff]">
```

Use defined tokens: `text-brand`, `bg-background`, `text-foreground`, `border-brand`, `font-sans`, `font-heading`, etc.

### B2. Match the Existing Visual Aesthetic

This project uses a **white background, orange brand accent** aesthetic. Every new component must match:

**Color Palette:**
- Background: `bg-background` → `#ffffff` (white)
- Primary text: `text-foreground` → `#171717` (near black)
- Brand / accent color: `text-brand`, `border-brand`, `fill-brand` → `#e8771e` (orange)
- Muted text: `text-muted-foreground`

```jsx
// Standard card pattern
<div className="bg-background border border-brand/20 rounded-2xl">

// Orange accent / badge pattern
<span className="border border-brand text-brand rounded-full px-4 py-1.5">

// Heading with orange underline
<span className="border-b-[3px] border-brand pb-1 text-brand">Keyword</span>

// Image card bottom gradient (dark overlay on top of photo)
<span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
```

Check how existing components style similar elements (padding, border-radius like `rounded-2xl`, transitions) and apply those exact patterns. Never introduce a new visual language (e.g., do NOT add dark backgrounds or green accents — those belong to the old theme).

### B3. CSS Modules vs. Tailwind

- **Tailwind first** — use utility classes for layout, spacing, typography, color.
- **CSS Module** only when Tailwind cannot cleanly express the style (complex keyframe animations, third-party overrides).
- Module file name must match the component: `MyWidget.jsx` → `MyWidget.module.css`.
- Never use `<style>` tags inside JSX.

---

## PART C — FRONTEND & SEO RULES

> These rules apply to **every** page, component, section, and UI element created or modified.

---

### C1. Required `<head>` Tags on Every Page

Every page must have:

```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Unique Page Title — 10xaischool</title>
  <meta name="description" content="150–160 character unique description">
  <link rel="canonical" href="https://10xaischool.com/this-page">
</head>
```

In Next.js, use the **Metadata API** — never manual meta tags:

```js
// app/courses/page.js
export const metadata = {
  title: 'AI Courses for Students — 10xaischool',
  description: '150–160 char unique description matching page content.',
  alternates: { canonical: 'https://10xaischool.com/courses' },
  openGraph: {
    title: 'AI Courses for Students — 10xaischool',
    description: 'Short description for social previews.',
    url: 'https://10xaischool.com/courses',
    images: [{ url: 'https://10xaischool.com/og/courses.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Courses for Students — 10xaischool',
    description: 'Short description.',
    images: ['https://10xaischool.com/og/courses.jpg'],
  },
};
```

---

### C2. Semantic HTML

Always prefer semantic HTML over generic `div`/`span`.

| Use | For |
|---|---|
| `<header>` | Page/site header |
| `<nav>` | Navigation |
| `<main>` | Primary page content (ONE per page) |
| `<section>` | Meaningful page section |
| `<article>` | Standalone self-contained content |
| `<aside>` | Complementary/sidebar content |
| `<footer>` | Footer |
| `<h1>` | Primary page heading (ONE per page) |
| `<h2>` | Major section heading |
| `<h3>` | Subsection heading |
| `<p>` | Paragraphs |
| `<ul/ol/li>` | Lists |
| `<a>` | Navigation / page links |
| `<button>` | Actions (click, submit, toggle) |
| `<figure/figcaption>` | Images with captions |
| `<details/summary>` | Expandable/accordion content |

- Do NOT use `<div>` or `<span>` when a semantic element exists.
- `<span>` has no semantic meaning — use only for inline CSS styling.
- `<div>` is allowed for layout containers (grid wrappers, flex rows).

---

### C3. Heading Hierarchy

Every indexable page must have **exactly ONE `<h1>`**.

```
H1
  ├── H2
  │    ├── H3
  │    └── H3
  ├── H2
  │    └── H3
  └── H2
```

- Never skip levels (H1 → H3 is invalid)
- Use CSS to control visual font size — never choose heading level based on appearance
- Headings must describe the actual content that follows

---

### C4. Links and Buttons

```jsx
// ✅ Correct
<a href="/courses">Explore AI Courses</a>         // navigation
<button type="submit">Sign Up Free</button>         // action

// ❌ Wrong
<div onClick={...}>Courses</div>                   // Google cannot crawl
<a href="#" onClick={...}>Submit</a>               // wrong element for action
```

- Use real `<a>` (Next.js `<Link>`) for ALL navigation and internal links.
- Use `<button>` for ALL actions (submit, open modal, toggle).
- Never use clickable `<div>` or `<span>` for navigation.

---

### C5. Images

```jsx
// ✅ Meaningful image
<Image src="/student.webp" alt="Student learning AI on a laptop" width={800} height={600} />

// ✅ Decorative image
<Image src="/decoration.svg" alt="" width={40} height={40} />
```

- Every meaningful image must have descriptive `alt` text.
- Decorative images use `alt=""`.
- Never keyword-stuff alt text.
- Use `next/image` (`<Image>`) for all raster images — never a bare `<img>`.
- Always set explicit `width` and `height` to prevent layout shift (CLS).
- Use WebP/AVIF format for all images.
- Lazy-load below-fold images; preload the hero/LCP image:

```js
// In metadata or layout
<link rel="preload" as="image" href="/hero.webp">
```

---

### C6. Open Graph + Twitter Cards

Every important page must include (via Next.js Metadata API):

```js
openGraph: {
  title: '...',          // unique per page
  description: '...',    // unique per page
  url: 'https://...',
  images: [{ url: '...', width: 1200, height: 630 }],  // 1200×630 minimum
  type: 'website',
},
twitter: {
  card: 'summary_large_image',
  title: '...',
  description: '...',
  images: ['...'],
},
```

- Never duplicate the same title/description across pages.
- `og:image` must be at least 1200×630 px.

---

### C7. Structured Data (JSON-LD)

Add JSON-LD in every page's `<head>` for rich search results.

**Organization (homepage):**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "10xaischool",
  "url": "https://10xaischool.com",
  "logo": "https://10xaischool.com/logo.png"
}
```

**Course pages:**
```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "AI Foundations",
  "description": "Learn the fundamentals of AI with hands-on projects.",
  "provider": { "@type": "Organization", "name": "10xaischool" }
}
```

**FAQ sections:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is 10xaischool?",
    "acceptedAnswer": { "@type": "Answer", "text": "..." }
  }]
}
```

**Breadcrumbs:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://10xaischool.com" },
    { "@type": "ListItem", "position": 2, "name": "Courses", "item": "https://10xaischool.com/courses" }
  ]
}
```

---

### C8. URL Structure

```
✅ /ai-courses
✅ /about-us
✅ /programs/ai-foundations

❌ /AI_Courses
❌ /AboutUs
❌ /page?id=123
```

- Lowercase only
- Hyphens between words (not underscores)
- No special characters or spaces
- Short and descriptive
- Include the primary keyword where natural

---

### C9. Internal Linking

```jsx
// ✅ Descriptive anchor text
<Link href="/ai-courses">AI courses for students</Link>

// ❌ Generic anchor text
<Link href="/ai-courses">Click here</Link>
```

- Every important page must have at least 2–3 internal links pointing to it.
- Never use generic anchors: "click here", "read more", "learn more".

---

### C10. Breadcrumbs

Add on all non-homepage pages:

```jsx
<nav aria-label="Breadcrumb">
  <ol>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/programs">Programs</Link></li>
    <li aria-current="page">AI Foundations</li>
  </ol>
</nav>
```

Always pair with BreadcrumbList JSON-LD (see C7).

---

### C11. Content Rules

SEO is NEVER achieved by:
- Keyword stuffing ("AI course AI training AI school AI students")
- Hidden text (display:none, white text on white, font-size:0)
- Excessive headings that don't match content
- Duplicate content across pages

Content must be written for real users first, be original and useful, and match user search intent.

---

### C12. Accessibility

Every page must have:
- Semantic HTML (gives screen readers meaning)
- Keyboard navigation (all interactive elements reachable by Tab)
- Visible focus states (never remove `outline` without replacing it)
- `<label>` always paired with `<input>`
- Meaningful `alt` text on images
- Sufficient color contrast (4.5:1 minimum for normal text)
- `<button>` for actions, `<a>` for navigation
- ARIA — only when native HTML does not provide the needed semantics (never add `role="button"` to a `<button>`)

---

### C13. Performance

- Use **Server Components** by default (Next.js) — less JS sent to browser
- Use `"use client"` only when interactivity requires it
- Use `next/image` for automatic image optimization
- Lazy-load all below-fold images
- Preload hero/LCP image
- Avoid layout shifts — always set `width`/`height` on images
- Mobile responsive at all breakpoints

**Core Web Vitals targets:**
| Metric | Target |
|---|---|
| LCP (Largest Contentful Paint) | < 2.5 seconds |
| CLS (Cumulative Layout Shift) | < 0.1 |
| INP (Interaction to Next Paint) | < 200 ms |

---

### C14. Next.js Specific Rules

- Server Components by default; `"use client"` only for interactivity
- Use **Next.js Metadata API** — never manual `<meta>` tags in JSX
- `next/image` for all images
- `next/link` (`<Link>`) for all internal navigation
- `generateStaticParams` for dynamic routes where possible
- `app/not-found.js` for 404 handling
- `app/sitemap.ts` and `app/robots.ts` for dynamic generation

---

### C15. robots.txt and sitemap.xml

```ts
// app/robots.ts
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/admin/', '/api/'] },
    sitemap: 'https://10xaischool.com/sitemap.xml',
  };
}

// app/sitemap.ts
export default function sitemap() {
  return [
    { url: 'https://10xaischool.com', lastModified: new Date() },
    { url: 'https://10xaischool.com/courses', lastModified: new Date() },
    // all public indexable pages
  ];
}
```

---

### C16. `<br>` and `<span>` Rules

- `<br>` — only for intentional line breaks within text (poems, addresses). Never for spacing — use CSS `margin`/`padding`.
- `<span>` — only for CSS styling. No semantic meaning. Never wrap important content in a `<span>`.

---

## PART D — PRE-COMPLETION CHECKLIST

Run this checklist before marking any page or component done.

### Architecture
- [ ] File placed in the correct feature folder under `components/[feature]Components/`
- [ ] No business logic in `app/*/page.js`
- [ ] RTK Query used for all data fetching (no raw axios in components)
- [ ] New Redux slice registered in `redux/reducers.js`
- [ ] New static assets in a named subfolder under `public/`
- [ ] SVGs added to `shared/svgIcons/` not inlined in JSX

### Styling
- [ ] Tailwind tokens used (no hardcoded color values)
- [ ] Matches existing white/orange aesthetic (`bg-background border-brand/20 rounded-2xl`)
- [ ] CSS Module file name matches component name
- [ ] No `<style>` tags in JSX

### HTML Structure
- [ ] Exactly ONE `<h1>` on the page
- [ ] Headings follow h1 → h2 → h3 hierarchy (no skipping)
- [ ] `<main>` wraps primary content
- [ ] `<nav>`, `<header>`, `<footer>` present where appropriate
- [ ] Semantic elements used instead of divs where meaningful
- [ ] Real `<Link>` / `<a>` for navigation (not clickable divs)
- [ ] `<button>` for all actions
- [ ] No excessive `<br>` or meaningless `<span>` tags

### Images
- [ ] Every meaningful image has descriptive `alt` text
- [ ] Decorative images have `alt=""`
- [ ] `next/image` used (not bare `<img>`)
- [ ] Explicit `width` and `height` set (prevents CLS)
- [ ] WebP/AVIF format used
- [ ] Hero/LCP image preloaded

### Metadata (via Next.js Metadata API)
- [ ] Unique `title` (50–60 chars) per page
- [ ] Unique `description` (150–160 chars) per page
- [ ] `canonical` URL set
- [ ] Open Graph tags complete (title, description, image 1200×630, url)
- [ ] Twitter Card tags complete
- [ ] `robots` directive set correctly (index/noindex)

### Structured Data
- [ ] JSON-LD added matching page type (Organization, Course, FAQ…)
- [ ] BreadcrumbList added where breadcrumbs are shown

### Links & Content
- [ ] Internal links use descriptive anchor text
- [ ] Important pages have 2+ internal links pointing to them
- [ ] No keyword stuffing
- [ ] No hidden content
- [ ] Content matches user search intent

### Accessibility
- [ ] Keyboard navigable
- [ ] Focus states visible
- [ ] All form inputs have `<label>`
- [ ] Color contrast sufficient (4.5:1 minimum)

### Performance
- [ ] Server Components used where possible (no unnecessary `"use client"`)
- [ ] Below-fold images lazy-loaded
- [ ] Images have explicit width/height
- [ ] Mobile responsive

### Technical
- [ ] Page appears in `sitemap.ts`
- [ ] `robots.ts` allows indexing
- [ ] Clean URL slug (lowercase, hyphens)
- [ ] No broken links
- [ ] `not-found.js` exists

---

## PART E — CI / DEPLOYMENT

- GitHub Actions: `.github/workflows/ai-review.yml` + `pr-review.yml`
- AWS CodeDeploy: `appspec.yml` + `scripts/` (before_install, application_start, application_stop)
- Do not modify `appspec.yml` or `scripts/` without confirming the deployment environment.