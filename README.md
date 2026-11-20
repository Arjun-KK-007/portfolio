# YOUR NAME — THE SERIES

A cinematic, streaming-inspired portfolio. Every section is an episode, every project is an Original.

> A fictional streaming-platform look. Not affiliated with any streaming service and uses none of their logos.

## Run it

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Production build: `npm run build` (output in `dist/`, deployable to Vercel / Netlify / GitHub Pages).

## Make it yours

**All content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts).** Replace the placeholders:

| To change... | Edit |
| --- | --- |
| Name, intro, email, links | `profile` (also change `firstName` and `originalLabel`) |
| Projects | `projects` |
| Achievements / certifications | `achievements`, `certifications` |
| Skills | `skillCategories`, `skillEvidence` |
| Journey (seasons and episodes) | `seasons` |
| Top 10 row / Play Intro reel | `topPicks`, `introSlides` |

Also update the title and description in `index.html`.

**Resume:** replace `public/assets/Resume.pdf`.

**Photo:** put a high-res photo `pic1.jpeg` and a background-removed cutout `pic.png` (same framing) in the project root, then run `npm run images`. Until then a placeholder silhouette is used (`npm run placeholder` regenerates it).
