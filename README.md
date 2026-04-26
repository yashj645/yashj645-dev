# yashj645.dev

Personal portfolio site for Yash Jain — Senior Full-Stack Engineer.

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## What's in here

- **Hero** with animated terminal showing the MCP server install flow
- **Featured Work** with 4 project cards — one pulls live npm download counts
- **About** with story + grouped skills grid
- **Now** showing what you're currently building
- **Contact** with mailto + socials, no spam-bait form
- **Case study pages** at `/work/fsi` and `/work/fynd-pos` for proprietary projects
- **API route** at `/api/npm-downloads` that fetches live download counts from the npm registry, cached for 1 hour

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customizing

All real content lives in three places — these are the files to touch:

| What | Where |
|---|---|
| Project cards (titles, metrics, descriptions, tech, links) | `lib/projects.ts` |
| Hero copy, stats, CTAs | `components/sections/hero.tsx` |
| About paragraph + skills grid | `components/sections/about.tsx` |
| What you're working on now | `components/sections/now.tsx` |
| Contact links | `components/sections/contact.tsx` |
| Site metadata + OG tags | `app/layout.tsx` |
| Case study content | `app/work/fsi/page.tsx`, `app/work/fynd-pos/page.tsx` |

The terminal animation script is in `components/ui/animated-terminal.tsx`. To change the commands, edit the `sequence` array.

## Color theme

Defined as Tailwind tokens in `tailwind.config.ts`:

- `bg` — page background (near-black)
- `surface` — card background
- `border` — subtle borders
- `text` — primary text
- `muted` — secondary text
- `accent` — emerald-green highlight (links, metrics, terminal cursor)

To change the accent color, edit the `accent` HSL in `tailwind.config.ts` and `app/globals.css` (the grid-mask and selection styles also reference it).

## Adding your resume

Drop a copy of your resume at `public/resume.pdf`. The hero "Resume" button already points there.

## Adding an OG image (for LinkedIn / Slack previews)

Drop `public/og.png` (1200x630) and add to `app/layout.tsx`:

```ts
openGraph: {
  // ...
  images: ["/og.png"],
}
```

You can generate one in Figma in 10 minutes — name + tagline + accent stripe is enough.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Go to https://vercel.com/new, import the repo. No env vars needed.
3. After first deploy, go to Project → Settings → Domains, add `yashj645.dev`.
4. Update DNS at your registrar to point to Vercel's nameservers (Vercel walks you through it).
5. Open the live site, eyeball mobile + desktop, and ship.

## Notes

- The npm downloads API route is cached for 1 hour. If you publish a new package, expect up to an hour before the count refreshes.
- All animations are scoped — no scroll-jacking, no parallax, no custom cursor. Keep it that way.
- Dark mode only by design. If you want light mode later, add a theme toggle and CSS variables — but don't bother for v1.

## After deploy — update these external places

- LinkedIn header + about section: add the URL
- GitHub profile bio: add the URL
- Resume `.tex`: add `website=yashj645.dev` to the `\introduction` block (this also kills the trailing-bullet rendering bug in the contact line)
- Email signature: add the URL
