# MasjidFinder USA

Find masjids across all 50 states, view prayer times, and locate Islamic centers near you.

## Features

- 135+ masjids across every US state, organized by state and city
- Live salah times (Fajr → Isha) calculated per location via the Aladhan API
- "Near Me" with GPS + radius filter and interactive map
- Prayer times calculator for any US city
- Per-masjid detail pages with map embed and nearby masjids
- Fully static-generated — fast, no database needed

## Deploy to Vercel (one click)

1. Push this repo to GitHub (if not already there)
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repository
4. Leave all settings as defaults — Vercel auto-detects Next.js
5. Click **Deploy**

Your site will be live at `your-project.vercel.app` in ~60 seconds.

### Adding a custom domain later

In the Vercel dashboard → your project → **Settings → Domains** → add your domain and follow the DNS instructions.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech stack

- **Next.js 16** (App Router, static generation)
- **Tailwind CSS**
- **Leaflet** (OpenStreetMap) for maps
- **Aladhan API** — free, no key required, proxied through `/api/` routes
- **Lucide React** for icons
