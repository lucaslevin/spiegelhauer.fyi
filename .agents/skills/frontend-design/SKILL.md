---
name: frontend-design
description: "Use when building landing pages, websites, apps, prototypes, demos, or game UIs. Enforces restrained composition, image-led hierarchy, cohesive content, and tasteful motion while avoiding generic cards, weak branding, and UI clutter."
version: 1.0.0
author: OpenAI (adapted from GPT-5.4 frontend design guide)
source: https://developers.openai.com/blog/designing-delightful-frontends-with-gpt-5-4
---

# Frontend Design Skill

Use this skill when the quality of the work depends on art direction, hierarchy, restraint, imagery, and motion rather than component count.

**Goal:** Ship interfaces that feel deliberate, premium, and current. Default toward award-level composition: one big idea, strong imagery, sparse copy, rigorous spacing, and a small number of memorable motions.

## Working Model

Before building, write three things:

- **Visual thesis:** One sentence describing mood, material, and energy
- **Content plan:** Hero → Support → Detail → Final CTA
- **Interaction thesis:** 2-3 motion ideas that change the feel of the page

Each section gets one job, one dominant visual idea, and one primary takeaway or action.

## Beautiful Defaults

- Start with composition, not components
- Prefer a full-bleed hero or full-canvas visual anchor
- Make the brand or product name the loudest text
- Keep copy short enough to scan in seconds
- Use whitespace, alignment, scale, cropping, and contrast before adding chrome
- Limit the system: two typefaces max, one accent color by default
- Default to cardless layouts — use sections, columns, dividers, lists, and media blocks instead
- Treat the first viewport as a poster, not a document

## Landing Pages

Default sequence:

1. **Hero** — Brand or product, promise, CTA, and one dominant visual
2. **Support** — One concrete feature, offer, or proof point
3. **Detail** — Atmosphere, workflow, product depth, or story
4. **Final CTA** — Convert, start, visit, or contact

### Hero Rules

- One composition only
- Full-bleed image or dominant visual plane
- Canonical full-bleed: the hero runs edge-to-edge with no inherited page gutters; constrain only the inner text/action column
- Brand first, headline second, body third, CTA fourth
- No hero cards, stat strips, logo clouds, pill soup, or floating dashboards by default
- Keep headlines to roughly 2-3 lines on desktop, readable in one glance on mobile
- Keep the text column narrow and anchored to a calm area of the image
- All text over imagery must maintain strong contrast and clear tap targets

### Viewport Budget

- If the first screen includes a sticky header, the header counts against the hero. Combined header + hero content must fit within the initial viewport
- When using `100vh`/`100svh` heroes, subtract persistent UI chrome (`calc(100svh - header-height)`) or overlay the header

## Apps

Default to Linear-style restraint:

- Calm surface hierarchy
- Strong typography and spacing
- Few colors
- Dense but readable information
- Minimal chrome
- Cards only when the card IS the interaction

Organize around:

- Primary workspace
- Navigation
- Secondary context or inspector
- One clear accent for action or state

Avoid:

- Dashboard-card mosaics
- Thick borders on every region
- Decorative gradients behind routine product UI
- Multiple competing accent colors
- Ornamental icons that do not improve scanning

## Imagery

Imagery must do narrative work:

- Use at least one strong, real-looking image for brands, venues, editorial pages, and lifestyle products
- Prefer in-situ photography over abstract gradients or fake 3D objects
- Choose or crop images with a stable tonal area for text
- Do not use images with embedded signage, logos, or typographic clutter
- Do not generate images with built-in UI frames, splits, cards, or panels
- If multiple moments are needed, use multiple images, not one collage

## Copy

- Write in product language, not design commentary
- Let the headline carry the meaning
- Supporting copy should usually be one short sentence
- Cut repetition between sections
- Give every section one responsibility: explain, prove, deepen, or convert
- If deleting 30% of the copy improves the page, keep deleting

### Utility Copy for Product UI

- Prioritize orientation, status, and action over promise, mood, or brand voice
- Start with the working surface: KPIs, charts, filters, tables, status, or task context
- Section headings should say what the area is or what the user can do there
- If a sentence could appear in a homepage hero, rewrite it until it sounds like product UI
- Litmus check: if an operator scans only headings, labels, and numbers, can they understand the page immediately?

## Motion

Ship at least 2-3 intentional motions for visually led work:

- One entrance sequence in the hero
- One scroll-linked, sticky, or depth effect
- One hover, reveal, or layout transition

Prefer Framer Motion when available. Motion rules:

- Noticeable in a quick recording
- Smooth on mobile
- Fast and restrained
- Consistent across the page
- Removed if ornamental only

## Design System

Define core design tokens early:

- `background`, `surface`, `primary text`, `muted text`, `accent`
- Typography roles: `display`, `headline`, `body`, `caption`

For most web projects: React + Tailwind. Define CSS variables and avoid purple-on-white defaults.

## Hard Rules

- No cards by default
- No hero cards by default
- No boxed or center-column hero when the brief calls for full bleed
- No more than one dominant idea per section
- No headline should overpower the brand on branded pages
- No filler copy
- No split-screen hero unless text sits on a calm, unified side
- No more than two typefaces without a clear reason
- No more than one accent color unless the product already has a strong system

## Reject These Failures

- Generic SaaS card grid as the first impression
- Beautiful image with weak brand presence
- Strong headline with no clear action
- Busy imagery behind text
- Sections that repeat the same mood statement
- Carousel with no narrative purpose
- App UI made of stacked cards instead of layout

## Litmus Checks

- Is the brand or product unmistakable in the first screen?
- Is there one strong visual anchor?
- Can the page be understood by scanning headlines only?
- Does each section have one job?
- Are cards actually necessary?
- Does motion improve hierarchy or atmosphere?
- Would the design still feel premium if all decorative shadows were removed?

## Tech Stack Preference

- React + Tailwind for most projects
- Prefer modern React patterns: `useEffectEvent`, `startTransition`, `useDeferredValue`
- Do not add `useMemo`/`useCallback` by default unless already used
- For animations: Framer Motion when available
- Ensure responsive on both desktop and mobile