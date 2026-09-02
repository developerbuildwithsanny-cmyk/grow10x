# Feature-Driven Architecture Rules

You must strictly adhere to the following **Feature-Driven Architecture** for all file creations, modifications, and imports. Do not deviate from this folder structure:

1. **`src/app/`**: strictly for Next.js routing (pages, layouts, error, loading states). 
   - Group private or nested routes under logical route groups like `(routes)`.
   - Keep page components clean; delegate heavy UI logic to `src/components`.

2. **`src/components/`**: All UI components must live here, grouped strictly by their **Feature Name**.
   - Do NOT create generic folders like `src/components/buttons` unless it is a global shared UI widget (which should go in `src/components/UIComponents` or `src/components/shared`).
   - E.g., if we are building a "Jobs" feature, create `src/components/jobs/` and place `JobCard.jsx`, `JobsList.jsx`, etc., inside it.

3. **`src/redux/`**: All global state and API logic belongs here.
   - Put individual reducers/slices in `src/redux/features/<featureName>/`.
   - Separate API logic (e.g., RTK Query endpoints) into their own files like `<featureName>Api.js`.

4. **`src/hooks/`**: All custom React hooks (e.g., `useWindowTracking.js`, `useFormData.js`) go here.

5. **`src/utils/`**: All pure JavaScript helper functions (e.g., `authValidation.js`, `timeSync.js`) go here.

6. **`src/services/`**: Generic API clients (like `axiosBaseQuery.js`) go here.

7. **`public/`**: When adding static assets (images, icons, videos), create a specific subfolder based on the feature (e.g., `public/home_page_images/`, `public/login_icons/`) rather than dumping them at the root of `public/`.

8. **`src/firebase/`** (or relevant backend config): Put database queries, auth, and external API setups here (e.g., `src/firebase/firestore/getData.js`).

**Your Constraints:**
- Every time you create a new file, explicitly ask yourself which feature folder it belongs in.
- Do not create flat structures. Always group related files into a feature folder.
- Always use the `src/` directory pattern for everything except `public/` and config files (like `tailwind.config.js`).

# Design System & Styling Rules

To ensure visual consistency with the current web application aesthetic (dark mode, glassmorphism, dynamic animations), you must strictly adhere to these design constraints:

1. **Leverage Existing Tailwind Configurations**: 
   Always use semantic utility classes from `tailwind.config.ts` and `globals.css` (e.g., `text-accent-emerald`, `bg-card-dark`, `font-heading`, `font-outfit`, `font-figtree`) instead of arbitrary hardcoded values (e.g., `text-[#123456]`).

2. **Match Existing Aesthetics**:
   Mimic the combinations of utility classes used in the project's existing components (e.g., glowing accents, blurred backgrounds, subtle borders like `bg-white/5 border border-white/10`) to maintain a seamless, premium, modern vibe.

3. **Reuse Existing Tokens**:
   When building a new UI widget, check how existing components style similar elements (padding, border radii like `rounded-xl`, transitions, etc.) and apply those exact patterns.

# Frontend & SEO Development Rules

These rules MUST be followed whenever creating or modifying any page,
component, section, or UI in this project.

---

## 0. Required <head> tags on EVERY page

Every HTML page must have these in <head>:

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Unique Page Title — Brand Name</title>
<meta name="description" content="150-160 character unique description">
<link rel="canonical" href="https://yourdomain.com/this-page">
<html lang="en">  ← on the root <html> element

Without these, Google cannot correctly index, render, or rank the page.

---

## 1. Semantic HTML

Always prefer semantic HTML over generic div/span.

Use:
- <header>    → page/site header
- <nav>       → navigation
- <main>      → primary page content (ONE per page)
- <section>   → meaningful page section
- <article>   → standalone self-contained content
- <aside>     → complementary/sidebar content
- <footer>    → footer
- <h1>        → primary page heading (ONE per page)
- <h2>        → major section heading
- <h3>        → subsection heading
- <p>         → paragraphs
- <ul/ol/li>  → lists
- <a>         → navigation/page links
- <button>    → actions (click, submit, toggle)
- <form>      → forms
- <label>     → form labels (always paired with input)
- <input/textarea/select> → form controls
- <figure/figcaption> → images with captions
- <details/summary>   → expandable/accordion content

Do NOT use <div> or <span> when a semantic element exists.
<span> has NO meaning to Google — use only for CSS styling.
<div> is allowed for layout containers (grid wrappers, flex rows).

---

## 2. Heading hierarchy

Every indexable page must have ONE clear <h1>.

Follow strict hierarchy — never skip levels:

H1
  ├── H2
  │    ├── H3
  │    └── H3
  ├── H2
  │    └── H3
  └── H2

Rules:
- Do NOT choose heading levels based on visual font size
- Do NOT jump from H1 to H3 — always H1 → H2 → H3
- Do NOT add headings just to stuff keywords
- Use CSS to control visual size, not heading levels
- Headings must describe the actual content that follows

---

## 3. Page structure

Standard page structure:

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>...</title>
  <meta name="description" content="...">
  <link rel="canonical" href="...">
</head>
<body>
  <header>
    <nav>...</nav>
  </header>

  <main>
    <section>
      <h1>Main Keyword Title</h1>
      <p>...</p>
    </section>

    <section>
      <h2>Section Title</h2>
      <p>...</p>
    </section>
  </main>

  <footer>...</footer>
</body>
</html>

Adapt structure to the actual page — do not blindly copy this template.

---

## 4. Links and buttons

Use real <a> elements for ALL navigation and internal links.
Use <button> for ALL actions (submit, open modal, toggle).

Good:
<a href="/courses">Explore Courses</a>
<button type="submit">Sign Up</button>

Bad:
<div onClick={...}>Courses</div>  ← Google cannot crawl this
<a href="#" onClick={...}>Submit</a>  ← wrong element for action

Never use clickable divs for navigation.

---

## 5. Images

Every meaningful image MUST have descriptive alt text.

Good:
<img src="/student.webp" alt="Student learning AI on a laptop">

Decorative images (icons, backgrounds):
<img src="/decoration.svg" alt="">

Rules:
- Do NOT leave alt empty on meaningful images
- Do NOT keyword-stuff alt text
- Do NOT write: alt="best AI course AI training AI students"
- Use <figure> and <figcaption> for images with visible captions
- Use next/image (Next.js) for automatic optimization

---

## 6. SEO metadata — full set

Every important page must have:

<!-- Basic -->
<title>Unique Title — Brand (50-60 chars)</title>
<meta name="description" content="Unique description (150-160 chars)">
<link rel="canonical" href="https://yourdomain.com/page">

<!-- Robots (only add when needed) -->
<meta name="robots" content="index, follow">  ← default, can omit
<meta name="robots" content="noindex">        ← for private/duplicate pages
<meta name="robots" content="nofollow">       ← for untrusted links

<!-- Open Graph (Facebook, LinkedIn, WhatsApp previews) -->
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Short description">
<meta property="og:image" content="https://yourdomain.com/og-image.jpg">
<meta property="og:url" content="https://yourdomain.com/page">
<meta property="og:type" content="website">

<!-- Twitter/X Cards -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Page Title">
<meta name="twitter:description" content="Short description">
<meta name="twitter:image" content="https://yourdomain.com/og-image.jpg">

Rules:
- Do NOT duplicate the same title/description across pages
- og:image should be 1200x630px minimum
- Metadata must accurately describe the actual page

---

## 7. Structured Data (JSON-LD Schema)

Add JSON-LD structured data for rich results in Google.

For the homepage / organization:
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Brand",
  "url": "https://yourdomain.com",
  "logo": "https://yourdomain.com/logo.png"
}
</script>

For course/program pages:
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "AI Foundations",
  "description": "Learn the fundamentals of AI",
  "provider": {
    "@type": "Organization",
    "name": "Your Brand"
  }
}
</script>

For FAQ sections:
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is AI?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "AI stands for Artificial Intelligence..."
    }
  }]
}
</script>

For breadcrumbs:
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://yourdomain.com"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Courses",
    "item": "https://yourdomain.com/courses"
  }]
}
</script>

---

## 8. URL structure

Use clean, lowercase, hyphenated URLs.

Good:
/ai-courses
/about-us
/programs/ai-foundations

Bad:
/AI_Courses
/AboutUs
/programs/aifoundations
/page?id=123

Rules:
- Lowercase only
- Hyphens between words (not underscores)
- No special characters or spaces
- Short and descriptive
- Include the primary keyword where natural

---

## 9. Internal linking

Connect important pages through relevant internal links.

Use descriptive anchor text:
Good: <a href="/ai-courses">AI courses for students</a>
Bad:  <a href="/ai-courses">Click here</a>

Rules:
- Link to important pages from multiple relevant places
- Use the keyword naturally in anchor text
- Do not use generic anchors (click here, read more, learn more)
- Every important page should have at least 2-3 internal links pointing to it

---

## 10. Breadcrumbs

Add semantic breadcrumb navigation on all non-homepage pages:

<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/programs">Programs</a></li>
    <li aria-current="page">AI Foundations</li>
  </ol>
</nav>

Always pair with BreadcrumbList JSON-LD (see Section 7).

---

## 11. Content rules

SEO is NEVER achieved by:
- Keyword stuffing ("AI course AI training AI school AI students")
- Hidden text (display:none, font-size:0, white text on white)
- Excessive headings that don't match content
- Fake or irrelevant links
- Invisible or off-screen content
- Duplicate content across pages

Content must be:
- Written for real users first
- Original and useful
- In natural language
- Matching what the user is actually searching for (search intent)

---

## 12. Accessibility

Every page must consider:
- Semantic HTML (gives screen readers meaning)
- Keyboard navigation (tab through all interactive elements)
- Visible focus states (never remove outline without replacing it)
- Accessible form labels (<label> always paired with <input>)
- Meaningful alt text on images
- Sufficient color contrast (4.5:1 for normal text minimum)
- Correct button/link semantics (button for action, a for navigation)
- ARIA — only when native HTML does not provide the needed semantics

Do NOT use ARIA when native HTML already handles it.
Example: <button> already has role="button" — don't add it manually.

---

## 13. Performance

When building pages:
- Optimize images — use WebP/AVIF formats
- Use next/image for automatic optimization (Next.js)
- Lazy-load images below the fold
- Preload the hero/LCP image:
  <link rel="preload" as="image" href="/hero.webp">
- Avoid unnecessary JavaScript
- Use Server Components by default (Next.js) — less JS sent to browser
- Use Client Components only when interactivity requires them
- Avoid layout shifts (always set width/height on images)
- Keep pages mobile responsive
- Target Core Web Vitals:
  - LCP (Largest Contentful Paint): under 2.5 seconds
  - CLS (Cumulative Layout Shift): under 0.1
  - INP (Interaction to Next Paint): under 200ms

---

## 14. Next.js specific rules

- Use Server Components by default
- Use Client Components ("use client") only for interactivity
- Use Next.js Metadata API instead of manual meta tags:

  export const metadata = {
    title: 'Page Title',
    description: 'Page description',
    openGraph: { ... },
    twitter: { ... },
  }

- Use next/image for all images
- Use next/link for all internal navigation
- Use generateStaticParams for dynamic routes where possible
- Handle 404 with app/not-found.tsx
- Add robots.txt and sitemap.xml

---

## 15. robots.txt and sitemap.xml

robots.txt (at root):
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Sitemap: https://yourdomain.com/sitemap.xml

sitemap.xml should include:
- All public, indexable pages
- Last modified date
- Priority hints

In Next.js, generate dynamically:
app/sitemap.ts
app/robots.ts

---

## 16. <br> and <span> rules

<br> — only for intentional line breaks within text (poems, addresses).
Never use multiple <br> tags for spacing. Use CSS margin/padding instead.

<span> — only for CSS styling. Has NO semantic meaning to Google.
Never use <span> to wrap important content or headings.

---

## 17. Before completing any page — full checklist

HTML STRUCTURE
[ ] Exactly ONE <h1> on the page
[ ] Headings follow logical h1→h2→h3 hierarchy (no skipping)
[ ] <main> wraps primary content
[ ] <nav> wraps navigation links
[ ] <header> and <footer> present
[ ] Semantic elements used instead of divs where meaningful
[ ] Real <a> elements for all navigation (not clickable divs)
[ ] <button> for all actions
[ ] No excessive <br> or meaningless <span> tags

IMAGES
[ ] Every meaningful image has descriptive alt text
[ ] Decorative images have alt=""
[ ] Images use WebP/AVIF format
[ ] Hero/LCP image is preloaded

HEAD / METADATA
[ ] <meta charset="UTF-8"> present
[ ] <meta name="viewport"> present
[ ] <html lang="en"> on root element
[ ] Unique <title> (50-60 chars) with keyword
[ ] Unique <meta name="description"> (150-160 chars)
[ ] <link rel="canonical"> present
[ ] Open Graph tags present (og:title, og:description, og:image, og:url)
[ ] Twitter Card tags present
[ ] robots meta tag set correctly (index/noindex)

STRUCTURED DATA
[ ] JSON-LD added for page type (Organization, Course, FAQ, Article...)
[ ] BreadcrumbList added where breadcrumbs shown

LINKS & CONTENT
[ ] Internal links use descriptive anchor text
[ ] Important pages have 2+ internal links pointing to them
[ ] No keyword stuffing
[ ] No hidden content
[ ] Content matches user search intent

ACCESSIBILITY
[ ] Keyboard navigable
[ ] Focus states visible
[ ] All form inputs have <label>
[ ] Color contrast sufficient

PERFORMANCE
[ ] Images lazy-loaded (below fold)
[ ] Hero image preloaded
[ ] Server Components used where possible
[ ] No unnecessary client JS
[ ] Images have explicit width/height (prevents CLS)
[ ] Mobile responsive

TECHNICAL
[ ] robots.txt allows indexing
[ ] Page appears in sitemap.xml
[ ] No broken links
[ ] 404 page exists (not-found.tsx)
[ ] Clean URL slug (lowercase, hyphens)
