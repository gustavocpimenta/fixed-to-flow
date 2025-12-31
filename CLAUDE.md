# CLAUDE.md - Fixed to Flow Website

## Project Overview

**Purpose:** Fixed to Flow company website - helping leaders and teams adapt to AI with humanity intact.

**Architecture:** Static HTML site with Express backend (local dev) and Vercel serverless functions (production)

**Owner:** Gus (Gustavo Pimenta)
**Repository:** https://github.com/gustavocpimenta/fixedtoflow

---

## Directory Structure

```
fixedtoflow/
├── CLAUDE.md                    # This file
├── client/
│   └── public/                  # Static HTML pages (production source)
│       ├── index.html           # Homepage
│       ├── ai-amplifier.html    # AI Amplifier service page
│       ├── ai-activation.html   # AI Activation service page
│       ├── ai-acceleration.html # AI Acceleration service page
│       ├── strategic-sparring.html # Strategic Sparring service page
│       ├── about.html           # About page
│       ├── privacy.html         # Privacy policy
│       ├── js/                  # JavaScript files
│       │   ├── cookie-consent.js # GDPR cookie consent + GA loading
│       │   └── contact-form.js  # (legacy, replaced by inline JS)
│       └── *.png, *.jpg, *.svg  # Assets (logos, photos)
├── api/                         # Vercel serverless functions (PRODUCTION)
│   ├── contact.ts               # POST /api/contact endpoint
│   ├── _lib/                    # Shared serverless utilities
│   └── tsconfig.json
├── server/                      # Express backend (LOCAL DEV ONLY)
│   ├── index.ts                 # Server entry point
│   ├── vite.ts                  # Static file serving
│   ├── routes.ts                # API routes
│   ├── email.ts                 # Resend email integration
│   └── storage.ts               # Database storage
├── dist/                        # Build output (deployed to Vercel)
│   └── public/                  # Copied from client/public/
└── vercel.json                  # Vercel deployment configuration
```

---

## Git Workflow

- **ALWAYS ask before committing** - never commit without explicit user approval
- **ALWAYS ask before pushing** - never push without explicit user approval

---

## Agent Guidelines

Use these specialized agents when their craft is needed. These are **recommendations**, not requirements - use judgment for quick fixes.

### Frontend-Design Skill (Primary)

**When:** Any UI/visual changes - new pages, styling, layouts, responsive fixes, animations.

**How:** Invoke via `Skill(frontend-design)`

**Why:** Ensures design rigor and avoids generic AI aesthetics.

### Bard Agent

**When:** Writing or editing visitor-facing copy - headlines, service descriptions, CTAs, testimonials.

**How:** Invoke via Task tool with `subagent_type: "bard"`

**Requires:** Agent reads these files from main claude repo:
- `/docs/business/gus_voice.md` - Voice and tone guidelines
- `/docs/business/gus.md` - Personal context
- `/docs/business/fixed_to_flow_strategy.md` - Business positioning

### Alex Agent

**When:** Offer structure decisions - pricing, value propositions, guarantees, CTA strategy.

**How:** Invoke via Task tool with `subagent_type: "alex"`

---

## Critical Voice Rules

- **NEVER use em dashes (—) in any copy** - use colons, periods, or rewrite instead
- **ALWAYS invoke bard agent for any visitor-facing text changes** - no exceptions
- **Read gus_voice.md before writing content**

---

## Design System

### Typography
- **Font Family:** Outfit (Google Fonts)
- **Weights:** 300, 400, 500, 600, 700

### Colors
```css
--red: #E63B2E;          /* Primary brand */
--red-dark: #C42B1C;     /* Hover states */
--burgundy: #8B1E1E;     /* Accents */
--cream: #FAF7F2;        /* Background */
--black: #111111;        /* Text */
--gray-dark: #1A1A1A;    /* Secondary text */
--gray: #555555;         /* Body text */
--gray-light: #999999;   /* Muted text */
--white: #FFFFFF;
```

### Visual Patterns
- Client logos: Grayscale by default, color on hover
- Sections: Generous padding (80-120px vertical)
- Cards: Subtle shadows, rounded corners
- Animations: Fade-in on scroll (reveal class)

---

## Development

### Local Development
```bash
npm run dev              # Start Express server (port 3000)
```

### Build & Deploy
```bash
npm run build            # Copy client/public to dist/public, bundle server
```

Vercel automatically deploys on push to main:
- Static files served from `dist/public/`
- Serverless functions from `/api/`

### Key URLs
- **Local:** http://localhost:3000/
- **Production:** https://fixedtoflow.com/

### Environment Variables
Required in `.env`:
- `DATABASE_URL` - Neon PostgreSQL connection string
- `RESEND_API_KEY` - Email service for contact form

---

## File Boundaries

### Safe to Edit
- `/client/public/` - All HTML, CSS, JS files
- `/server/` - Local development backend
- `/api/` - Vercel serverless functions
- `CLAUDE.md` - This file

### Read-Only References (in main claude repo)
- `/docs/business/gus_voice.md` - Voice guidelines
- `/docs/business/gus.md` - Personal context
- `/docs/business/fixed_to_flow_strategy.md` - Business strategy

### Never Touch
- `node_modules/`
- `.git/`
- `dist/` (auto-generated)

---

## Features Implemented

- [x] Static HTML pages for all services
- [x] Contact form with confetti confirmation
- [x] Cookie consent banner (GDPR compliant)
- [x] Google Analytics (GA4: G-98G900VJBV) - loads only after consent
- [x] Responsive mobile navigation
- [x] Calendly integration for booking

---

*Last updated: 2025-12-31*
