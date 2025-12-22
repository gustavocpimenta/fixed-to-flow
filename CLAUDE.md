# CLAUDE.md - Fixed to Flow Website

## Project Overview

**Purpose:** Fixed to Flow company website - helping leaders and teams adapt to AI with humanity intact.

**Current Phase:** Redesign 2026 (branch: `redesign_2026`)
- Modernizing service pages and homepage
- Prototypes available at `/drafts/` route
- Production React app unchanged until merge

**Owner:** Gus (Gustavo Pimenta)
**Repository:** https://github.com/gustavocpimenta/fixedtoflow

---

## Directory Structure

```
fixedtoflow/
├── CLAUDE.md                    # This file
├── client/
│   ├── public/
│   │   └── drafts/              # Prototype pages (served at /drafts/)
│   │       ├── index.html       # Homepage prototype
│   │       ├── ai-amplifier-v3.html
│   │       ├── ai-activation-sprint-v3.html
│   │       ├── ai-acceleration-v3.html
│   │       ├── strategic-sparring-v3.html
│   │       └── *.png, *.jpg     # Assets (logos, photos)
│   └── src/                     # Production React app
│       ├── components/          # React components
│       ├── pages/               # Page components
│       └── assets/              # Production assets
├── server/                      # Express backend
│   ├── index.ts                 # Server entry point
│   ├── vite.ts                  # Vite middleware + drafts serving
│   └── email.ts                 # Resend email integration
└── vercel.json                  # Deployment configuration
```

---

## Agent Guidelines

Use these specialized agents when their craft is needed. These are **recommendations**, not requirements - use judgment for quick fixes.

### Frontend-Design Skill (Primary)

**When:** Any UI/visual changes - new pages, styling, layouts, responsive fixes, animations.

**How:** Invoke via `Skill(frontend-design)`

**Why:** Ensures design rigor and avoids generic AI aesthetics. Emphasizes bold, intentional choices in typography, color, motion, and spatial composition.

### Bard Agent

**When:** Writing or editing visitor-facing copy - headlines, service descriptions, CTAs, testimonials, any text that speaks to visitors.

**How:** Invoke via Task tool with `subagent_type: "bard"`

**Requires:** Agent reads these files from main claude repo:
- `/docs/business/gus_voice.md` - Voice and tone guidelines
- `/docs/business/gus.md` - Personal context
- `/docs/business/fixed_to_flow_strategy.md` - Business positioning

**Why:** Ensures authentic voice consistency. Gus's writing has specific patterns, banned words, and personality that must be preserved.

### Alex Agent

**When:** Offer structure decisions - pricing display, value propositions, guarantees, service packaging, CTA strategy.

**How:** Invoke via Task tool with `subagent_type: "alex"`

**Why:** Applies Hormozi value equation framework: (Dream Outcome × Perceived Likelihood) ÷ (Time Delay × Effort). Creates irresistible offers.

---

## Workflow Patterns

| Task Type | Workflow |
|-----------|----------|
| **New page** | frontend-design (structure) → bard (copy) → frontend-design (polish) |
| **Copy update** | bard only |
| **Offer change** | alex (strategy) → bard (copy) → frontend-design (visual) |
| **Visual tweak** | frontend-design only |
| **Quick fix** | Direct edit (typos, small adjustments - no agents needed) |

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
--dark-gray: #1A1A1A;    /* Secondary text */
--gray: #555555;         /* Body text */
--light-gray: #999999;   /* Muted text */
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
npm run dev              # Start dev server (port 3000)
```

### Key URLs
- **Production app:** http://localhost:3000/
- **Drafts prototype:** http://localhost:3000/drafts/

### Environment Variables
Required in `.env`:
- `DATABASE_URL` - PostgreSQL connection string
- `RESEND_API_KEY` - Email service (optional for dev)

---

## File Boundaries

### Safe to Edit
- `/client/public/drafts/` - Prototype HTML files
- `/client/src/` - React components and pages
- `/server/` - Backend code
- `CLAUDE.md` - This file

### Read-Only References (in main claude repo)
- `/docs/business/gus_voice.md` - Voice guidelines
- `/docs/business/gus.md` - Personal context
- `/docs/business/fixed_to_flow_strategy.md` - Business strategy
- `/docs/business/fixed_to_flow_services.md` - Service details

---

## Migration Notes

**Current state:** Prototypes in `/drafts/`, production app unchanged.

**When redesign is complete:**
1. Move approved designs from drafts to React components
2. Update this CLAUDE.md (remove redesign-specific sections)
3. Merge `redesign_2026` branch to `main`
4. Deploy via Vercel

---

*Last updated: 2025-12-22*
