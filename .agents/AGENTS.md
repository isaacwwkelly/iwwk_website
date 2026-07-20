# AI Development & Repository Guidelines (Gemini / AntiGravity)

This repository contains Isaac Kelly's personal portfolio website ([isaacwwkelly.dev](https://isaacwwkelly.dev)).

## Tech Stack & Architecture

- **Framework**: Next.js 15 (App Router with Turbopack), React 19
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`), custom CSS variables in `src/app/globals.css`
- **Animations**: Framer Motion (`framer-motion` v12)
- **UI Components & Icons**: Radix UI (`@radix-ui/react-icons`, `@radix-ui/react-dropdown-menu`)
- **Form Handling & API**: React Hook Form (`react-hook-form`) + Web3Forms (`@web3forms/react`)
- **Hosting & Telemetry**: Vercel (`@vercel/analytics`, `@vercel/speed-insights`)

## Directory Structure

```
iwwk_website/
├── public/
│   └── images/              # SVGs and images (tech icons, personal icons, company logos)
├── src/
│   └── app/
│       ├── components/      # Main page sections (landing, about, career, contact, header, footer)
│       │   ├── framerMotion/# Framer Motion wrappers (fadeInEffect, typewriterEffect)
│       │   └── iconStuff/   # Tech icons, theme toggle menu, social links menu
│       ├── globals.css      # Design tokens & Light/Dark mode CSS variables
│       ├── layout.js        # Root layout with Vercel analytics & speed insights
│       └── page.js          # Main SPA container & Light/Dark theme state manager
└── .agents/
    └── AGENTS.md            # AI agent guidelines (this file)
```

## Key Development Conventions

1. **Theme System (Light/Dark Mode)**:
   - Managed via client-side state in `page.js`.
   - Theme mode toggles `.light` or `.dark` class on `document.body`.
   - Style tokens are defined using CSS variables in `globals.css` (`var(--background)`, `var(--foreground)`, `var(--border-color)`, `var(--button-c)`, etc.).
   - SVGs and icons support conditional `invert` prop in `techIcon.js` based on theme.

2. **Navigation & SPA Layout**:
   - Navigation uses smooth scrolling (`element.scrollIntoView({ behavior: 'smooth' })`) with section element IDs (`#landing page`, `#aboutMe`, `#career`, `#contact`).
   - Sticky header monitors window scroll position to transition from relative to fixed top position past the hero section.

3. **Asset & Icon Management**:
   - All tech and personal SVGs reside in `public/images/`.
   - Any new tech icon or company logo should be imported in `src/app/components/iconStuff/techIcon.js` and mapped in `srcDict`.

4. **AI Workflow & Agentic Best Practices**:
   - When modifying components, preserve existing framer-motion animations and responsive Tailwind classes (`sm:`, `md:`, `xl:`).
   - Test build validity locally (`npm run build`) before publishing.

5. **Git & Version Control Preference**:
   - Do NOT run `git add`, `git commit`, or `git push` automatically.
   - The user prefers to review modified/created files personally and manually run `git add` (stage files) before instructing the AI to commit or push to remote.
