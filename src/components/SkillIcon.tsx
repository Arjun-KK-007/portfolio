import { siPython, siC, siCplusplus, siGit, siGithub, siCursor, siClaude } from 'simple-icons';

type Glyph = { kind: 'fill'; path: string } | { kind: 'stroke'; path: string };

const fill = (path: string): Glyph => ({ kind: 'fill', path });
const stroke = (path: string): Glyph => ({ kind: 'stroke', path });

// Brand icons come from simple-icons; the rest are drawn here (24x24 grid).
const GLYPHS: Record<string, Glyph> = {
  Python: fill(siPython.path),
  C: fill(siC.path),
  'C++': fill(siCplusplus.path),
  Git: fill(siGit.path),
  GitHub: fill(siGithub.path),
  Cursor: fill(siCursor.path),
  Claude: fill(siClaude.path),
  'VS Code': fill(
    'M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z',
  ),
  // terminal prompt
  Codex: stroke('M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM7 10l3 2.5L7 15M12.5 15H17'),
  // arrow lifting off an orbit
  Antigravity: stroke('M12 3v12M7 8l5-5 5 5M4 19c2.5 2 5.2 3 8 3s5.5-1 8-3'),
  // sparkle + code brackets
  'Vibe coding': stroke('M8 7l-5 5 5 5M16 7l5 5-5 5M12 8.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z'),
  // pen tool
  'UI/UX': stroke('M12 3l8 3-1.5 7.5L12 17l-6.5-3.5L4 6zM12 17v4M10 21h4M12 12.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z'),
};

export function hasIcon(name: string) {
  return name in GLYPHS;
}

export default function SkillIcon({ name, fallback }: { name: string; fallback: string }) {
  const g = GLYPHS[name];
  if (!g) return <>{fallback}</>;
  return g.kind === 'fill' ? (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
      <path d={g.path} />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={g.path} />
    </svg>
  );
}
