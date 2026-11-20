// Generates a neutral placeholder portrait + share image so the site runs before you add your photo.
// Replace later with your own photo using `npm run images` (see README).
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });
const svg = `<svg width="1100" height="1400" viewBox="0 0 1100 1400" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9d4cc"/><stop offset="1" stop-color="#8d8780"/></linearGradient></defs>
  <circle cx="550" cy="470" r="215" fill="url(#g)"/>
  <path d="M120 1400 C120 1010 330 820 550 820 C770 820 980 1010 980 1400 Z" fill="url(#g)"/>
</svg>`;
const base = await sharp(Buffer.from(svg)).png().toBuffer();
for (const w of [1100, 720, 420]) await sharp(base).resize({ width: w }).webp({ quality: 86, alphaQuality: 90 }).toFile(`${OUT}/portrait-${w}.webp`);
const portrait = await sharp(base).resize({ height: 600 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([
    { input: portrait, gravity: 'southeast' },
    { input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><text x="72" y="300" font-family="Impact, 'Arial Narrow', sans-serif" font-size="120" fill="#f4f1ec" letter-spacing="4">ARJUN K K</text><text x="76" y="360" font-family="Arial, sans-serif" font-size="30" fill="#e5132b" letter-spacing="10">THE SERIES</text></svg>`) },
  ]).jpeg({ quality: 88 }).toFile(`${OUT}/og-image.jpg`);
console.log('placeholder images written');
