/**
 * Central portfolio data. EVERYTHING on the site comes from this file.
 * Replace the placeholder content below with your own details and the whole site updates.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Arjun K K',
  displayName: 'Arjun K K',
  /** Big title word on the opening sequence + hero (keep it short, UPPERCASE). */
  firstName: 'ARJUN',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'AN ARJUN ORIGINAL',
  role: 'UI/UX Designer',
  tagline: ['UI/UX Designer', 'CSE Student', 'Vibe Coder'],
  intro:
    'Aspiring UI/UX designer and CSE student at Mahendra Institute of Technology, growing through visual thinking, interaction design and technical curiosity — learning to make digital experiences clear and human.',
  /** Short degree label + 2-4 letter badge shown on the hero. */
  degreeShort: 'CSE · Mahendra Institute of Technology',
  badge: 'UI/UX',
  primaryStack: 'Python · C · C++ · UI/UX',
  location: 'Your City, Your Country',
  email: 'you@example.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/your-handle/',
    github: 'https://github.com/your-handle',
  },
  resumePdf: '/assets/Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Arjun K K',
  },
  interests: ['System Design', 'Cloud Computing', 'Machine Learning'],
};

export const education = [
  {
    school: 'Mahendra Institute of Technology',
    place: 'India',
    degree: 'Computer Science & Engineering',
    period: '2022 – Present',
    score: 'CGPA 0.00',
  },
  {
    school: 'Your College / School',
    place: 'City',
    degree: 'Intermediate / Senior Secondary',
    period: '2020 – 2022',
    score: 'Score 00%',
  },
];

export const experience = [
  {
    company: 'Company Name',
    role: 'Intern / Trainee',
    place: 'City',
    period: 'Month YYYY – Month YYYY',
    points: [
      'Describe what you built or learned here, with a number if you have one.',
      'Add a second achievement — tools used, impact, or responsibility.',
      'Add a third point about collaboration, deployment or testing.',
    ],
  },
];

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
    id: 'project-one',
    title: 'Project One',
    year: '2026',
    genre: 'AI • Web • Python',
    logline: 'One sentence describing what this project does and who it is for.',
    stack: ['Python', 'React', 'REST API'],
    build: [
      'Explain what you built and the result it achieved (users, speed, accuracy, savings).',
      'Explain the hardest technical part and how you solved it.',
    ],
    features: ['Key feature one', 'Key feature two', 'Key feature three'],
    metrics: [
      { value: '100+', label: 'users' },
      { value: '95%', label: 'accuracy' },
      { value: '2×', label: 'faster' },
    ],
    github: 'https://github.com/your-handle/project-one',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'project-two',
    title: 'Project Two',
    year: '2025',
    genre: 'Full-Stack • Backend • Docker',
    logline: 'One sentence describing this second project.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Docker'],
    build: [
      'Explain what you built and the result it achieved.',
      'Explain a technical decision you made and why.',
    ],
    features: ['Key feature one', 'Key feature two', 'Key feature three'],
    metrics: [
      { value: '1,000+', label: 'requests handled' },
      { value: '99%', label: 'uptime' },
      { value: '40%', label: 'faster response' },
    ],
    github: 'https://github.com/your-handle/project-two',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'project-three',
    title: 'Project Three',
    year: '2025',
    genre: 'SaaS • Security • DevOps',
    logline: 'One sentence describing this third project.',
    stack: ['React', 'Node.js', 'MongoDB'],
    build: [
      'Explain what you built and the result it achieved.',
      'Explain how you deployed or tested it.',
    ],
    features: ['Key feature one', 'Key feature two', 'Key feature three'],
    metrics: [
      { value: '50+', label: 'active users' },
      { value: '0', label: 'critical bugs' },
      { value: '<2m', label: 'setup time' },
    ],
    github: 'https://github.com/your-handle/project-three',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
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
  { id: 'hackathon', title: 'Hackathon Finalist', org: 'Your Hackathon', detail: 'Describe the event and what your team built.', laurel: 'Finalist' },
  { id: 'topper', title: 'Department Topper', org: 'Your University', detail: 'Mention the semester and your score.', laurel: 'Topper' },
  { id: 'coding', title: '500+ Problems Solved', org: 'LeetCode • GFG • CodeChef', detail: 'Add your platforms, counts and ratings.', laurel: 'Competitive Coding' },
  { id: 'open-source', title: 'Open Source Contributor', org: 'GitHub', detail: 'Mention projects you contributed to.', laurel: 'Contributor' },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'AWS', name: 'Cloud Practitioner', link: '#' },
  { issuer: 'Oracle', name: 'Java Foundations Associate', link: '#' },
  { issuer: 'NPTEL', name: 'Database Management System', link: '#' },
  { issuer: 'Cisco', name: 'JavaScript Essentials', link: '#' },
  { issuer: 'MongoDB', name: 'Associate Developer', link: '#' },
  { issuer: 'GitHub', name: 'GitHub Foundations', link: '#' },
];

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
    id: 'design',
    title: 'Design',
    subtitle: 'Interfaces & interaction',
    skills: [
      { name: 'UI/UX', mono: 'UX', note: 'Focus' },
      { name: 'Visual thinking', mono: 'Vt' },
      { name: 'Interaction design', mono: 'Id' },
    ],
  },
  {
    id: 'building',
    title: 'Building',
    subtitle: 'Ideas into working things',
    skills: [
      { name: 'Vibe coding', mono: 'Vc' },
    ],
  },
];

/** Shown when a skill card is hovered/tapped: where that skill appears in your work. */
export const skillEvidence: Record<string, string[]> = {
  Python: ['Project One'],
  'UI/UX': ['Project One', 'Project Two'],
  'Vibe coding': ['Project Three'],
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
    title: 'The Beginning',
    period: '2020 – 2022',
    synopsis: 'Where it started — school and the first spark of curiosity about technology.',
    episodes: [
      { code: 'S01 E01', title: 'The Foundation', description: 'Your school or college details, and what you focused on.', tags: ['Maths', 'Science'], runtime: '2020 – 2022', palette: amber },
    ],
  },
  {
    number: 2,
    title: 'Enter: Engineering',
    period: '2022 – Present',
    synopsis: 'Your degree, your branch, and the skills that began to take shape.',
    episodes: [
      { code: 'S02 E01', title: 'The Engineer', description: 'Your degree, university and current score.', tags: ['B.Tech', 'CGPA'], runtime: '2022 – Present', palette: violet },
      { code: 'S02 E02', title: 'The Topper', description: 'An academic highlight worth mentioning.', tags: ['Topper'], runtime: 'One semester', palette: crimson },
      { code: 'S02 E03', title: 'The Problem Solver', description: 'Your competitive coding journey and platforms.', tags: ['DSA', 'LeetCode'], runtime: '500+ problems', palette: jade },
    ],
  },
  {
    number: 3,
    title: 'Learning to Build',
    period: '2024 – 2025',
    synopsis: 'Internships, training and the first real things you shipped.',
    episodes: [
      { code: 'S03 E01', title: 'The Trainee', description: 'Training or internship details.', tags: ['Frontend', 'Backend'], runtime: 'Company Name', palette: ocean },
      { code: 'S03 E02', title: 'The Developer', description: 'What you built during that time.', tags: ['React', 'Node.js'], runtime: 'Company Name', palette: violet },
    ],
  },
  {
    number: 4,
    title: 'Building Real Products',
    period: '2026',
    synopsis: 'Your three Originals, plus the recognition they earned.',
    episodes: [
      { code: 'S04 E01', title: 'The Builder', description: 'Project One — a short line about the outcome.', tags: ['Python', 'React'], runtime: '2026', palette: crimson },
      { code: 'S04 E02', title: 'The Architect', description: 'Project Two and Project Three — what you designed.', tags: ['Node.js', 'Docker'], runtime: '2025', palette: amber },
      { code: 'S04 E03', title: 'The Finalist', description: 'A hackathon or national-level achievement.', tags: ['Hackathon'], runtime: 'National stage', palette: ocean },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Where the story goes from here.',
    episodes: [
      { code: 'S05 E01', title: 'The Next Chapter', description: 'Exploring System Design, Cloud and Machine Learning.', tags: ['System Design', 'Cloud', 'ML'], runtime: 'In production', palette: violet },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'Java', detail: 'Your strongest language', palette: amber },
  { label: 'The flagship Original', title: 'Project One', detail: 'Your best project in one line', palette: crimson },
  { label: 'Biggest stage', title: 'Hackathon', detail: 'Finalist', palette: ocean },
  { label: 'Recognition', title: 'Fellowship', detail: 'Selected', palette: violet },
  { label: 'Academic high', title: 'Topper', detail: 'Your best semester score', palette: jade },
  { label: 'Cloud credential', title: 'AWS', detail: 'Certified', palette: amber },
  { label: 'Problems solved', title: '500+', detail: 'LeetCode • GFG • CodeChef', palette: crimson },
  { label: 'The training arc', title: '1 Year', detail: 'Full-stack training', palette: ocean },
  { label: 'Database credential', title: 'MongoDB', detail: 'Certified Associate Developer', palette: jade },
  { label: 'Current focus', title: 'System Design', detail: 'with Cloud & Machine Learning', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  { kicker: 'Education', title: 'B.Tech · Your Branch', lines: ['Your University, City', '2022 – Present'], chips: ['CGPA 0.00'] },
  { kicker: 'Skills', title: 'Java first.', lines: ['Python, C++ · React, Node.js, Express.js', 'PostgreSQL, MongoDB · Docker, REST'], chips: ['Java', 'Python', 'React', 'Node.js', 'Docker', 'PostgreSQL'] },
  { kicker: 'Training', title: 'The Training Arc', lines: ['Your internship or training', 'Company Name · Month YYYY – Month YYYY'] },
  { kicker: 'Projects', title: 'Three Originals', lines: ['Project One — your best metric', 'Project Two — your best metric', 'Project Three — your best metric'] },
  { kicker: 'Achievements', title: 'Top Moments', lines: ['Hackathon Finalist', 'Department Topper', '500+ Problems Solved'] },
  { kicker: 'Certified', title: `${certifications.length} Certifications`, lines: ['AWS · Oracle · NPTEL · Cisco · MongoDB · GitHub'] },
  { kicker: 'Current mission', title: 'Now exploring', lines: ['System Design · Cloud Computing · Machine Learning'] },
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
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
