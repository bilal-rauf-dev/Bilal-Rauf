export type Project = {
  name: string;
  description: string;
  tags: string[];
  href?: string;
  repository?: string;
  featured?: boolean;
};

export const featuredProjects: Project[] = [
  {
    name: '9Nine Solutions',
    description:
      'A 51-page production marketing platform for a US performance-marketing agency. Built end-to-end in Next.js, from information architecture and reusable templates to technical SEO and deployment.',
    tags: ['Next.js', 'React', 'Technical SEO', '51 pages'],
    href: 'https://www.9ninesolutions.com/',
    featured: true,
  },
  {
    name: 'HostelHub',
    description:
      'A full-stack hostel management platform with ten modules, 37 REST endpoints, JWT authentication, and a 15-table PostgreSQL schema with business logic in raw SQL.',
    tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'TypeScript'],
    href: 'https://hostel-hub-ten.vercel.app/',
    repository: 'https://github.com/bilal-rauf-dev/hostel-hub',
    featured: true,
  },
  {
    name: 'Winfolio',
    description:
      'A portfolio that boots like an operating system, complete with a lock screen, boot sequence, draggable apps, terminal, file explorer, games, command palette, and themes.',
    tags: ['HTML', 'JavaScript', 'UI systems', 'Zero dependencies'],
    featured: true,
  },
];

export const projectGroups: Array<{ label: string; projects: Project[] }> = [
  {
    label: 'Full-stack engineering',
    projects: [
      ...featuredProjects.slice(0, 2),
      {
        name: 'Two Brain Theory',
        description: 'A design-system exercise: a four-route neo-brutalist technology-studio site, statically exported to Cloudflare Workers.',
        tags: ['Next.js', 'React', 'TailwindCSS', 'Cloudflare Workers'],
        href: 'https://website.twobraintheory.workers.dev/',
      },
      {
        name: 'TaskFlow',
        description: 'A production-ready MERN task platform with RBAC, request validation, rate limiting, and Swagger-documented endpoints.',
        tags: ['Node.js', 'Express', 'MongoDB', 'JWT / RBAC'],
        repository: 'https://github.com/bilal-rauf-dev/taskflow-api',
      },
      {
        name: 'Tidyline',
        description: 'A deadline-first task manager that sorts tasks into Today, This Week, This Month, or Later.',
        tags: ['React', 'Vite', 'JavaScript'],
        href: 'https://tidyline-web.vercel.app/',
        repository: 'https://github.com/bilal-rauf-dev/tidyline-web',
      },
      {
        name: 'Jarurat Care',
        description: 'A cancer-support web app with a Gemini-powered patient and caregiver FAQ assistant.',
        tags: ['JavaScript', 'TailwindCSS', 'Gemini API'],
        repository: 'https://github.com/bilal-rauf-dev/jarurat-care-app',
      },
    ],
  },
  {
    label: 'AI & applied LLM',
    projects: [
      {
        name: 'StackSense',
        description: 'An AI dashboard that scans a live tech stack for pricing changes, deprecations, and savings ranked by impact.',
        tags: ['React', 'Gemini API', 'Streaming SSE'],
        href: 'https://stack-sense.web.app/',
        repository: 'https://github.com/Build-with-AI-FAST-CFD-26/ai-hackathon-submission-bz-force',
      },
      {
        name: 'News Aggregator',
        description: 'An n8n pipeline for RSS ingestion, URL-level deduplication, Gemini digests, and a Next.js delivery layer.',
        tags: ['n8n', 'Gemini API', 'PostgreSQL', 'Next.js'],
        repository: 'https://github.com/bilal-rauf-dev/news-aggregator',
      },
      {
        name: 'Lumina Impact AI',
        description: 'An animated MERN social-good concept with a Gemini chat assistant and seeded MongoDB datastore.',
        tags: ['MERN', 'Gemini API', 'Framer Motion'],
        repository: 'https://github.com/bilal-rauf-dev/lumina-impact-ai',
      },
      {
        name: 'Wumpus World',
        description: 'A knowledge-based agent using propositional logic, CNF conversion, and resolution-refutation to prove cells safe.',
        tags: ['Python', 'Flask', 'CNF / Resolution'],
        repository: 'https://github.com/bilal-rauf-cfd/wumpus-logic-agent',
      },
    ],
  },
  {
    label: 'Classical AI & search',
    projects: [
      { name: 'Sudoku CSP Solver', description: 'Backtracking, forward checking, AC-3 consistency, and solver performance metrics.', tags: ['Python', 'CSP', 'AC-3'], repository: 'https://github.com/bilal-rauf-cfd/Sudoku-CSP' },
      { name: 'Minimax + Alpha-Beta', description: 'A Pygame visualisation of adversarial search, alpha/beta values, and pruning cutoffs.', tags: ['Python', 'Pygame', 'Search'], repository: 'https://github.com/bilal-rauf-cfd/TicTacToe-AlphaBetaPruning' },
      { name: 'Dynamic Pathfinding Agent', description: 'A* and Greedy Best-First search with dynamic obstacles and automatic replanning.', tags: ['Python', 'A*', 'Heuristics'], repository: 'https://github.com/bilal-rauf-cfd/Dynamic-Pathfinding-Agent' },
      { name: 'AI Pathfinder', description: 'An interactive visualiser for BFS, DFS, UCS, DLS, IDDFS, and bidirectional search.', tags: ['Python', 'Algorithms', 'Visualisation'], repository: 'https://github.com/bilal-rauf-cfd/AI-Pathfinder' },
    ],
  },
  {
    label: 'Games & low-level systems',
    projects: [
      { name: 'Simply Sharp', description: 'An HTML5 arcade shooter with an economy, level progression, and offline support.', tags: ['Construct 2', 'HTML5', 'Game design'], href: 'https://simply-sharp.vercel.app/', repository: 'https://github.com/bilal-rauf-dev/simply-sharp-legacy' },
      { name: 'Block Breaker ASM', description: 'Atari Breakout written in 16-bit x86 assembly with BIOS rendering, keyboard input, and PC-speaker audio.', tags: ['x86 Assembly', 'NASM', 'DOS'], repository: 'https://github.com/bilal-rauf-dev/block-breaker-asm' },
      { name: 'Bomberman C++', description: 'A complete Bomberman clone with custom rendering, staged progression, and local leaderboards.', tags: ['C++', 'Systems', 'Game design'], repository: 'https://github.com/bilal-rauf-dev/bomberman-cpp' },
    ],
  },
];

export const experience = [
  { period: '2025 — present', role: 'Full-Stack Developer Intern', organisation: '9Nine Solutions', detail: 'Built the entire 51-page production website for a US performance-marketing agency: architecture, page templates, routing, content structure, technical SEO, and deployment.' },
  { period: 'Jun 2026 — present', role: 'Cybersecurity Intern', organisation: 'Cyberster', detail: 'Structured Blue Team training with network traffic capture, protocol analysis in Wireshark, teamwork, and professional-practice exercises.' },
  { period: 'Summer 2025', role: 'Web Developer Intern', organisation: 'InAmigos Foundation', detail: 'Built and deployed a full-stack MERN site for a social-good organisation, including a secure Gemini-backed chat assistant.' },
  { period: '2025', role: 'Intern', organisation: 'Solutionsloft', detail: 'Wrote SQL against relational databases with senior-developer mentorship in a professional, team-based workflow.' },
];

export const education = [
  { period: '2023 — 2028', title: 'BS Computer Science', institution: 'FAST National University of Computer & Emerging Sciences', detail: 'CGPA 3.53 · Bronze Medal — Fall 2025' },
  { period: '2024 — 2028', title: 'Intermediate Computer Science', institution: 'Forman Christian College', detail: 'Pre-engineering / computer science track' },
];
