# Crystal Lake Disability Pride Event — Website

> **2nd Annual Crystal Lake Disability Pride Event**
> July 25, 2026 · 10:00 AM – 1:00 PM
> McHenry County College · 8900 US-14, Crystal Lake, IL 60012
> Hosted by **Z Advocacy NFP** — a registered 501(c)(3) tax-exempt organization.

---

## 1. Project Overview & Tech Stack

This repository contains the source code for the official **Crystal Lake Disability Pride Event** website — a lightweight, fully static, and universally accessible marketing and logistics site.

The site is managed under a **GitHub Organization**, deployed automatically via **GitHub Actions**, and served on a custom domain through **GitHub Pages** at zero ongoing cost.

### Tech Stack

| Layer           | Technology                                                                 |
| --------------- | -------------------------------------------------------------------------- |
| **Framework**   | [Astro](https://astro.build/) (v6.x, static output mode)                  |
| **Styling**     | [Tailwind CSS](https://tailwindcss.com/) v4 via Vite plugin               |
| **Base Theme**  | [incluud/accessible-astro-starter](https://github.com/incluud/accessible-astro-starter) |
| **CI/CD**       | GitHub Actions (automated build on every push to `main`)                   |
| **Hosting**     | GitHub Pages (free for organization repositories)                          |
| **Newsletter**  | [Beehiiv](https://www.beehiiv.com/) (static HTML form, no client-side JS)  |
| **Email Triage**| Gmail Plus-Addressing (`sara.zadvocacy+tag@gmail.com`)                     |
| **A11Y Linting**| `eslint-plugin-jsx-a11y` with strict rules                                |

### Core Rule

> **⚠️ Digital accessibility (WCAG 2.2 AA/AAA) is baked into every layer of this build.**
> Any modifications to pages, components, or layouts **must** maintain:
>
> - Semantic HTML structure (`<main>`, `<nav>`, `<section>`, `<header>`, `<footer>`)
> - Programmatic `<label>` associations on all form inputs
> - Descriptive `alt` text on every `<Image />` component
> - Keyboard navigability on all interactive elements
> - Zero client-side JavaScript by default (static output only)

---

## 2. Directory & Folder Structure

```
disability-pride-website/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions: automated build & deploy to Pages
│
├── public/                          # Static assets served as-is (no processing)
│   ├── favicon.png                  # Site favicon (Disability Pride logo)
│   ├── fonts/                       # Atkinson Hyperlegible web fonts
│   └── ...                          # robots.txt, raw PDFs, etc.
│
├── src/
│   ├── assets/
│   │   └── img/                     # ⭐ ALL production images go here
│   │       ├── disability-pride-logo.jpg.png   # Site logo / favicon source
│   │       ├── event-flyer.jpg                 # Official event flyer
│   │       ├── qr-code.jpg                     # Zelle donation QR code
│   │       ├── image_0ce7e1.jpg                # Original event flyer (archive)
│   │       └── social-preview-image.png        # Open Graph / social sharing image
│   │
│   ├── components/                  # Global accessible UI components
│   │   ├── Header.astro             # Site header with navigation
│   │   ├── Footer.astro             # Site footer with event info & contacts
│   │   ├── Navigation.astro         # Keyboard-accessible dropdown nav
│   │   ├── Logo.astro               # Logo component (pulls from theme config)
│   │   ├── PageHeader.astro         # Page title + breadcrumbs
│   │   ├── Feature.astro            # Feature card with icon
│   │   ├── CallToAction.astro       # CTA banner section
│   │   └── ...                      # ResponsiveToggle, ColorContrast, etc.
│   │
│   ├── layouts/
│   │   ├── DefaultLayout.astro      # Base HTML wrapper (<header> <main> <footer>)
│   │   └── MarkdownLayout.astro     # Layout for .md / .mdx content pages
│   │
│   ├── pages/                       # ⭐ SITE ROUTES (file-based routing)
│   │   ├── index.astro              # Homepage: hero, schedule, flyer, newsletter
│   │   ├── accessibility.astro      # Directions, parking, word maps, sensory info
│   │   ├── vendor.astro             # Vendor rules, eligibility policy, mailto link
│   │   ├── sponsorship.astro        # Tiers ($199/$299/$399), Sara's letter, Zelle QR
│   │   ├── about.astro              # Z Advocacy NFP background, board, contact
│   │   └── 404.astro                # Custom 404 error page
│   │
│   ├── styles/
│   │   └── tailwind.css             # Global Tailwind entry point
│   │
│   └── utils/                       # Utility functions and theme config helpers
│
├── theme.config.ts                  # Site name, SEO metadata, nav items, colors
├── astro.config.mjs                 # Astro build config, Vite aliases, integrations
├── package.json                     # Dependencies and npm scripts
└── README.md                        # ← You are here
```

### Key Conventions

| Path                     | Purpose                                                                                   |
| ------------------------ | ----------------------------------------------------------------------------------------- |
| `src/assets/img/`        | **All images must go here** to leverage Astro's optimized `<Image />` processing pipeline |
| `src/pages/`             | Each `.astro` or `.md` file becomes a route (e.g., `vendor.astro` → `/vendor`)            |
| `theme.config.ts`        | Central config: site name, navigation links, brand colors, SEO defaults                   |
| `public/`                | Files served verbatim at the root URL — no optimization applied                           |

---

## 3. Future Maintainer Operations Guide

### Recipe 1: Update Event Schedule or Text Content

All page content lives in `src/pages/`. To update text:

1. Open the target file (e.g., `src/pages/index.astro`) in VS Code **or** directly on GitHub via the pencil (edit) icon.
2. Locate the text you want to change inside the HTML markup.
3. Edit the text. Save the file.
4. Commit and push to `main`. The site rebuilds and deploys automatically.

```bash
# Local workflow
git add .
git commit -m "fix: update event schedule for 2027"
git push origin main
```

> **💡 Tip:** You can also edit files directly on GitHub.com — click any file, press the pencil icon, make your changes, then click "Commit changes." The deployment pipeline triggers automatically.

---

### Recipe 2: Add a New Image or Flyer Asset

1. **Drop the image file** into `src/assets/img/`. Use lowercase filenames with hyphens (e.g., `new-flyer-2027.jpg`).

2. **Import it** at the top of your `.astro` page:

   ```astro
   ---
   import { Image } from 'astro:assets'
   import newFlyer from '@assets/img/new-flyer-2027.jpg'
   ---
   ```

3. **Render it** with the `<Image />` component. The `alt` attribute is **mandatory** — the build will fail without it:

   ```astro
   <Image
     src={newFlyer}
     alt="Descriptive text explaining what this image shows, including key details visible in the image."
     width={800}
     height={600}
     loading="lazy"
     class="rounded-lg shadow-lg"
   />
   ```

> **⚠️ Warning:** Never use an empty `alt=""` unless the image is purely decorative. For event flyers, always describe the content: event name, date, location, and key text visible on the flyer.

---

### Recipe 3: Triage Incoming Emails

The site uses **Gmail plus-addressing** to automatically sort incoming inquiries. All emails arrive in the same Gmail inbox (`sara.zadvocacy@gmail.com`) but can be filtered by the `+tag` suffix.

| Email Address                              | Purpose                | Suggested Gmail Filter Label |
| ------------------------------------------ | ---------------------- | ----------------------------- |
| `sara.zadvocacy+vendors@gmail.com`         | Vendor booth inquiries | `Vendors`                     |
| `sara.zadvocacy+sponsors@gmail.com`        | Sponsorship inquiries  | `Sponsors`                    |
| `sara.zadvocacy+info@gmail.com`            | General questions      | `General`                     |

**To set up Gmail filters:**

1. Open Gmail → Settings (gear icon) → **See all settings** → **Filters and Blocked Addresses** → **Create a new filter**.
2. In the **To** field, enter `sara.zadvocacy+vendors@gmail.com`.
3. Click **Create filter** → check **Apply the label** → select or create `Vendors`.
4. Repeat for `+sponsors` and `+info`.

All incoming mail is automatically categorized without any external tools or costs.

---

### Recipe 4: Manage the Newsletter (Beehiiv)

The homepage email signup form is powered by **Beehiiv** (free tier). The embed script loads directly from Beehiiv — no server-side code needed.

| Detail              | Value                                              |
| ------------------- | -------------------------------------------------- |
| **Account email**   | `davepinkawa+disabilitypride@gmail.com`            |
| **Login URL**       | [app.beehiiv.com](https://app.beehiiv.com)         |
| **Embed Form ID**   | `783b07b2-4065-4956-be1d-2206506560dd`             |
| **Embed location**  | `src/pages/index.astro` — "Get Event Info & Save the Date" section |

**To update the form or view subscribers:**

1. Log in at [app.beehiiv.com](https://app.beehiiv.com) with `davepinkawa+disabilitypride@gmail.com`.
2. **Subscribers** → View/export the subscriber list.
3. **Grow → Signup Forms** → Edit or regenerate the embed code if needed.
4. **Send** → Create and send newsletters/updates to subscribers.

> **💡 Tip:** If you regenerate the embed code, update the `data-beehiiv-form` ID in `src/pages/index.astro`.

---

## 4. Automated CI/CD Lifecycle & Quality Gates

### What Happens When You Push to `main`

Every commit to the `main` branch triggers the following automated pipeline:

```
Push to main
    │
    ▼
GitHub Actions Runner Starts
    │
    ├── 1. Install Node.js & dependencies (npm install)
    ├── 2. Run ESLint with strict jsx-a11y rules
    ├── 3. Build static site (npx astro build)
    ├── 4. Compress HTML, images, and SVGs
    └── 5. Deploy /dist/ to GitHub Pages
    │
    ▼
Live site updated on custom domain
```

### Accessibility Linting Safeguard

The build pipeline includes `eslint-plugin-jsx-a11y` with **strict** accessibility rules. If a contributor pushes code with:

- Missing `alt` text on an image
- A `<label>` not programmatically linked to its input
- An interactive element missing keyboard support
- Broken ARIA attributes

**The ESLint check will deliberately fail, and the deployment is blocked.** This prevents accessibility regressions from ever reaching the live site.

> **🛡️ This is intentional.** The disabled community depends on this site being accessible. The linter is the last line of defense before any change goes live.

### Cost

> **💰 $0/month.** Because this repository is hosted in a **GitHub Organization**, both the Actions CI/CD pipeline and GitHub Pages static hosting are provided **completely free** with no usage limits for public repositories. There are no servers, databases, or monthly fees. The only recurring costs are the custom domain registration (if applicable).

---

## Quick Reference

| Task                        | Command / Action                                   |
| --------------------------- | -------------------------------------------------- |
| Install dependencies        | `npm install`                                      |
| Start local dev server      | `npm run dev` (serves at `http://localhost:4321`)   |
| Build production site       | `npm run build` (outputs to `./dist/`)             |
| Preview production build    | `npm run preview`                                  |
| Deploy                      | Push to `main` — automatic via GitHub Actions      |

---

## License

MIT — Built on the [Accessible Astro Starter](https://github.com/incluud/accessible-astro-starter) by [Incluud](https://www.incluud.dev).
