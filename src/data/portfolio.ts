/**
 * Central portfolio data. EVERYTHING on the site comes from this file.
 * Replace the placeholder content below with your own details and the whole site updates.
 */

const BASE = import.meta.env.BASE_URL;

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Arjun K K',
  displayName: 'Arjun K K',
  /** Big title word on the opening sequence + hero (keep it short, UPPERCASE). */
  firstName: 'ARJUN K K',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'AN ARJUN K K ORIGINAL',
  role: 'UI/UX Designer',
  tagline: ['UI/UX Designer', 'CSE Student', 'Vibe Coder'],
  intro:
    'Aspiring UI/UX designer and CSE student at Mahendra Institute of Technology, growing through visual thinking, interaction design and technical curiosity — learning to make digital experiences clear and human.',
  /** Short degree label + 2-4 letter badge shown on the hero. */
  degreeShort: 'B.E. CSE · Mahendra Institute of Technology',
  badge: 'UI/UX',
  primaryStack: 'Python · C · C++',
  location: 'India',
  email: 'kkva1980@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/arjun-k-k-540171429/',
    github: 'https://github.com/Arjun-KK-007',
  },
  resumePdf: `${BASE}assets/Resume.pdf`,
  portrait: {
    src: `${BASE}assets/portrait-720.webp`,
    small: `${BASE}assets/portrait-420.webp`,
    srcSet: `${BASE}assets/portrait-420.webp 420w, ${BASE}assets/portrait-720.webp 720w, ${BASE}assets/portrait-1100.webp 1100w`,
    alt: 'Portrait of Arjun K K',
  },
  interests: ['UI/UX Design', 'Vibe Coding', 'Hackathons', 'AI Tools'],
};

export const education = [
  {
    school: 'Mahendra Institute of Technology',
    place: 'India',
    degree: 'B.E. — Computer Science & Engineering',
    period: '2025 – 2029',
    score: 'CGPA 8.9',
  },
];

export const experience: { company: string; role: string; place: string; period: string; points: string[] }[] = [];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'college-blood-bank',
    title: 'College Blood Bank',
    year: '2026',
    genre: 'Web • Community • Healthcare',
    logline: 'Connect with blood — find nearby donors on campus, fast.',
    stack: ['Lovable', 'ChatGPT'],
    build: [
      'Built College Blood Bank, a web app that connects people who need blood with willing donors nearby.',
      'Created with vibe coding — using Lovable and ChatGPT to go from idea to a working product.',
    ],
    features: ['Shows nearby donors', 'Gives donor contact details', 'Shows who has donated blood'],
    metrics: [
      { value: '3', label: 'core features' },
      { value: '2', label: 'AI tools used' },
    ],
    github: 'https://github.com/Arjun-KK-007/College-Blood-Bank',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  { id: 'hacknova', title: 'Runner-Up', org: 'HackNova\'26', detail: 'Hackathon organised by Knowledge Institute of Technology — our team built a project on the topic of transport.', laurel: 'Hackathon' },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'What I think in',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'C', mono: 'C' },
      { name: 'C++', mono: 'C+' },
    ],
  },
  {
    id: 'building',
    title: 'Building',
    subtitle: 'Ideas into working things',
    skills: [
      { name: 'Vibe coding', mono: 'Vc' },
      { name: 'UI/UX', mono: 'UX' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    subtitle: 'Editors, version control & AI',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'VS Code', mono: 'Vs' },
      { name: 'Cursor', mono: 'Cu' },
      { name: 'Claude', mono: 'Cl' },
      { name: 'Codex', mono: 'Cx' },
      { name: 'Antigravity', mono: 'Ag' },
    ],
  },
];

/** Shown when a skill card is hovered/tapped: where that skill appears in your work. */
export const skillEvidence: Record<string, string[]> = {
  'Vibe coding': ['College Blood Bank'],
  Cursor: ['Vibe coding workflow'],
  Claude: ['Vibe coding workflow'],
  Codex: ['Vibe coding workflow'],
  Antigravity: ['Vibe coding workflow'],
  Git: ['College Blood Bank'],
  GitHub: ['College Blood Bank'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Enter: Engineering',
    period: '2025 – Present',
    synopsis: 'B.E. in Computer Science & Engineering at Mahendra Institute of Technology.',
    episodes: [
      { code: 'S01 E01', title: 'The Engineer', description: 'B.E. in Computer Science & Engineering, 2025–2029, with a CGPA of 8.9.', tags: ['B.E. CSE', 'CGPA 8.9'], runtime: '2025 – 2029', palette: violet },
      { code: 'S01 E02', title: 'The Coder', description: 'Learning to think in code with Python, C and C++.', tags: ['Python', 'C', 'C++'], runtime: 'Languages', palette: jade },
      { code: 'S01 E03', title: 'The Toolkit', description: 'Git, GitHub and VS Code, plus AI tools — Cursor, Claude, Codex and Antigravity.', tags: ['Git', 'GitHub', 'VS Code', 'Cursor', 'Claude'], runtime: 'Tools', palette: ocean },
    ],
  },
  {
    number: 2,
    title: 'Building Real Products',
    period: '2026',
    synopsis: 'Vibe coding turns ideas into working products — and a place on the podium.',
    episodes: [
      { code: 'S02 E01', title: 'The Vibe Coder', description: 'Building with Lovable and ChatGPT — from idea to a working app.', tags: ['Vibe coding', 'Lovable', 'ChatGPT'], runtime: '2026', palette: amber },
      { code: 'S02 E02', title: 'The Builder', description: 'College Blood Bank — find nearby donors, see their contact details and who has donated.', tags: ['College Blood Bank'], runtime: '2026', palette: crimson },
      { code: 'S02 E03', title: 'The Runner-Up', description: 'Runner-up at HackNova\'26, hosted by Knowledge Institute of Technology — a team project on transport.', tags: ['HackNova\'26', 'Transport'], runtime: 'Hackathon', palette: ocean },
    ],
  },
  {
    number: 3,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Growing as a UI/UX designer and builder.',
    episodes: [
      { code: 'S03 E01', title: 'The Next Chapter', description: 'Designing clearer, more human digital experiences and building more Originals.', tags: ['UI/UX', 'Vibe coding'], runtime: 'In production', palette: violet },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'Python', detail: 'With C and C++', palette: amber },
  { label: 'The flagship Original', title: 'College Blood Bank', detail: 'Connect with blood', palette: crimson },
  { label: 'Podium finish', title: 'HackNova\'26', detail: 'Runner-Up • Transport', palette: ocean },
  { label: 'Academic standing', title: 'CGPA 8.9', detail: 'B.E. CSE', palette: jade },
  { label: 'The toolkit', title: 'Cursor · Claude', detail: 'Codex, Antigravity, VS Code', palette: violet },
  { label: 'How I build', title: 'Vibe Coding', detail: 'Lovable & ChatGPT', palette: amber },
  { label: 'Current focus', title: 'UI/UX', detail: 'Clear and human experiences', palette: crimson },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  { kicker: 'Education', title: 'B.E. · CSE', lines: ['Mahendra Institute of Technology', '2025 – 2029'], chips: ['CGPA 8.9'] },
  { kicker: 'Skills', title: 'Python first.', lines: ['Python, C, C++ · Vibe coding', 'Git, GitHub, VS Code · Cursor, Claude, Codex, Antigravity'], chips: ['Python', 'C', 'C++', 'Vibe coding', 'Cursor', 'Claude'] },
  { kicker: 'Projects', title: 'The Original', lines: ['College Blood Bank — connect with blood', 'Built with Lovable & ChatGPT'] },
  { kicker: 'Achievements', title: 'Top Moment', lines: ["Runner-Up · HackNova'26", 'Knowledge Institute of Technology · Transport'] },
  { kicker: 'Current mission', title: 'Now exploring', lines: ['UI/UX design · Vibe coding · Building more Originals'] },
];

export type ProfileId = 'main' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'main',
    name: 'Me',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Original${projects.length === 1 ? '' : 's'} • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moment${achievements.length === 1 ? '' : 's'}`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
