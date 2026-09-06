# nuukquant.com

Marketing site for NUUK, rebuilt on the EXANTE prime-broker layout system.
Next.js 16 (App Router, static export) + Tailwind CSS v4, deployed to GitHub Pages.

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm lint
pnpm build      # static export into ./out
```

## Structure

```
src/
├── app/                 # routes (static export, trailing slashes)
│   ├── page.tsx         # home: hero → audiences → core → servicing → network → platforms → exchanges → broker → pulse
│   ├── clients/         # /clients and /clients/[slug] (6 audience pages)
│   ├── markets/         # /markets and /markets/pricing-overview
│   ├── technology/      # /technology (#api, #ai, #white-label)
│   ├── company/         # /company
│   └── contact-us/      # /contact-us (mailto-backed form)
├── components/
│   ├── layout/          # Header (dropdowns, shrink-on-scroll, mobile sheet), Footer
│   ├── home/            # home sections
│   ├── sections/        # PageIntro, CtaBand (shared by sub-pages)
│   └── ui/              # Button (text-swap hover), Logo, Icon, Reveal
├── content/site.ts      # ALL copy, navigation and data live here
└── app/globals.css      # design tokens (@theme) and component CSS
legacy/                  # previous single-file site (index.html + i18n.js)
```

## Design tokens

Brand colours (NUUK) applied to the EXANTE layout rhythm. Edit `@theme` in `src/app/globals.css`:

| Token | Value | Use |
|---|---|---|
| `--color-primary` | `#12a37f` | buttons, hover, links |
| `--color-mint` | `#7fe8c8` | accents on dark sections |
| `--color-navy` | `#1d242c` | dark section backgrounds |
| `--color-hero` | `#0d1117` | hero / page intros |
| `--color-body` | `#4a5661` | body text |
| `--color-fog` | `#f2f4f5` | footer, light bands |

Fonts: Inter (body) and IBM Plex Sans ExtraLight/Light (display headings), loaded via `next/font`.

## Before going live

- Replace the regulatory placeholders in `src/content/site.ts` (`home.broker.body`) and `Footer.tsx`.
- Fill in real social links and legal-page routes (`legalLinks`, `socials`).
- Point the contact form at a real endpoint if you do not want the mailto flow.
- Enable GitHub Pages → "GitHub Actions" as the source; `.github/workflows/deploy.yml` builds `out/` on every push to `main`.
