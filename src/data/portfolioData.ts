import { SkillItem, ProjectItem, ExperienceItem, EducationItem, TestimonialItem, AchievementItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Shudhanshu Tripathi',
  title: 'Full-Stack Developer & Computer Engineering Undergrad',
  educationShort: 'B.E. Computer Engineering (2023–2027)',
  institution: 'Ajeenkya DY Patil School of Engineering, Lohegaon, Pune',
  cgpa: '9.485',
  cgpaMax: '10.0',
  location: 'Lohegaon, Pune, Maharashtra, India',
  email: 'tripathishudhanshu76@gmail.com',
  phone: '+91-8626001194',
  phoneFormatted: '+91 86260 01194',
  tagline: "Architecting high-throughput full-stack solutions with microsecond precision and editorial visual craftsmanship.",
  status: 'Open for SDE Roles & Internships',
  links: {
    linkedin: 'https://www.linkedin.com/in/shudhanshu-tripathi-07b84b2a1/',
    github: 'https://github.com/',
    leetcode: 'https://leetcode.com/u/Shudhanshu25/',
  },
  resumeFilename: 'Shudhanshu-Resume.pdf',
};

export const VERTICAL_TAGS = [
  'FULL-STACK ARCHITECTURE',
  'REACT & FASTAPI',
  'PERFORMANCE OPTIMIZATION',
  'REAL-TIME SYSTEMS',
];

export const KEY_METRICS = [
  { label: 'Academic CGPA', value: '9.485', detail: 'Ajeenkya DY Patil SOE (Top Tier)' },
  { label: 'FPS Optimization', value: '30%', detail: 'GameLoom Interactives Intern' },
  { label: 'Engineering Cohort', value: '2023–27', detail: 'Computer Engineering Undergrad' },
  { label: 'DSA & Code Focus', value: '100% SDE', detail: 'LeetCode & System Design' },
];

export const SKILLS_DATA: SkillItem[] = [
  // Frontend
  { name: 'React.js', category: 'Frontend', level: 96, highlight: 'SPA architecture, hooks, state machines, custom hooks' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 95, highlight: 'Editorial layouts, tokens, responsive micro-interactions' },
  { name: 'JavaScript (ES6+)', category: 'Frontend', level: 94, highlight: 'Async/await, DOM optimization, closures, functional design' },
  { name: 'React Native', category: 'Frontend', level: 86, highlight: 'Cross-platform mobile apps, native bridge, touch gestures' },
  { name: 'HTML5 & CSS3', category: 'Frontend', level: 95, highlight: 'Semantic accessibility, WCAG AA, SVG animation' },
  { name: 'Recharts & D3', category: 'Frontend', level: 88, highlight: 'Financial visualizers, real-time metric dashboards' },

  // Backend & Databases
  { name: 'Python', category: 'Backend', level: 95, highlight: 'Core algorithms, asynchronous tasks, Hugging Face models' },
  { name: 'FastAPI', category: 'Backend', level: 93, highlight: 'High-throughput async endpoints, Pydantic validation' },
  { name: 'REST API Design', category: 'Backend', level: 94, highlight: 'Idempotency, status codes, OpenAPI specs, versioning' },
  { name: 'JWT Auth & Security', category: 'Backend', level: 90, highlight: 'Secure cookie sessions, token refresh cycles, RBAC' },
  { name: 'WebSockets', category: 'Backend', level: 88, highlight: 'Bi-directional live sockets, broadcast rooms, heartbeat' },
  { name: 'MySQL & Databases', category: 'Backend', level: 87, highlight: 'Relational modeling, indexing, foreign keys, constraints' },
  { name: 'SQLModel / ORM', category: 'Backend', level: 89, highlight: 'Type-safe querying, schema migrations, async sessions' },

  // Tools & Concepts
  { name: 'Data Structures & Algo (DSA)', category: 'Tools & Concepts', level: 92, highlight: 'Graph algorithms, dynamic programming, complexity analysis' },
  { name: 'Git & GitHub', category: 'Tools & Concepts', level: 94, highlight: 'Trunk-based branching, PR reviews, CI workflows' },
  { name: 'Docker', category: 'Tools & Concepts', level: 86, highlight: 'Multi-stage builds, containerization, microservices' },
  { name: 'Vercel & Render', category: 'Tools & Concepts', level: 90, highlight: 'Zero-downtime deploys, environment isolation, preview builds' },
];

export const SKILL_PILLARS = [
  {
    iconName: 'Layout',
    title: 'Full-Stack Web Architecture',
    description: 'Developing high-concurrency SPAs with React, TypeScript, and fine-tuned responsive design systems.',
  },
  {
    iconName: 'Zap',
    title: 'Gameplay Systems & Optimization',
    description: 'Developing immersive gameplay loops, companion AI, and modular vehicle systems with Unreal Engine Blueprints.',
  },
  {
    iconName: 'Server',
    title: 'FastAPI & Async Backends',
    description: 'Building microsecond-responsive REST & WebSocket APIs with JWT authentication and Pydantic validation.',
  },
  {
    iconName: 'Database',
    title: 'Data Modeling & ORM Integrity',
    description: 'Architecting robust relational MySQL schemas and NoSQL Firestore collections using SQLModel & ORMs.',
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'expense-tracker',
    number: '01',
    title: 'Smart Expense Tracker',
    subtitle: 'Full-Stack Financial SPA with Real-Time Persistence',
    category: 'Full-Stack SPA / FinTech',
    description: 'A cloud-synchronized expense analytics application with responsive budget charts, categorization, and secure session management.',
    longDescription: 'Engineered a modern single-page application enabling users to log, categorize, and forecast recurring expenditures. Implemented instant cloud synchronizations with Firestore and protected endpoints using Firebase Authentication. Designed an intuitive custom state store to eliminate UI latency during rapid multi-entry transactions.',
    tags: ['React.js', 'Firebase Auth', 'Firestore', 'Tailwind CSS', 'Recharts', 'Custom State Store'],
    metrics: 'Sub-50ms State Sync • 100% Mobile Responsive • Zero Data Loss',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Firebase Authentication for individual user data sandboxing',
      'Real-time Firestore listeners for instant cross-device updates',
      'Interactive expenditure breakdown with dynamic Recharts visualizations',
      'Custom lightweight state store minimizing redundant re-renders',
      'Exportable financial statements and category budgeting threshold alerts',
    ],
    architectureNotes: [
      'Frontend: React 18 with custom memoized reducer patterns',
      'Data Layer: Cloud Firestore with indexed queries by user ID and timestamp',
      'Design: Custom typography system and mobile-first touch optimization',
    ],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://expense-tracker-dev-e9418.web.app/app.html',
  },
  {
    id: 'local-llm-assistant',
    number: '02',
    title: 'AI Assistant (Local LLM)',
    subtitle: 'Privacy-Preserving On-Device Intelligence with Speech Pipeline',
    category: 'AI / Python / Speech Systems',
    description: 'An offline-capable conversational AI assistant integrating Hugging Face open weights with real-time Speech-to-Text and Text-to-Speech.',
    longDescription: 'Architected a standalone intelligent voice and text assistant running entirely locally without external telemetry or proprietary cloud lock-in. Integrated quantized open-source models via Hugging Face Transformers, combined with low-latency audio capture and naturalistic voice synthesis.',
    tags: ['Python', 'Hugging Face', 'Transformers', 'STT / TTS', 'FastAPI', 'PyTorch'],
    metrics: '100% Local Inference • Zero External Telemetry • Sub-200ms Token Generation',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Local model inference utilizing quantized GGUF/Torch weight formats',
      'Dual pipeline: real-time microphone speech-to-text (Whisper) and TTS engine',
      'Memory-efficient contextual prompt buffering for multi-turn conversations',
      'FastAPI microservice bridge allowing frontend web control and streaming output',
      'Hardware acceleration toggle for CUDA and CPU SIMD instructions',
    ],
    architectureNotes: [
      'Core Engine: Python 3.11 with Hugging Face Transformers & Torch',
      'Speech Pipeline: Real-time audio stream buffer with silence detection',
      'Protocol: Asynchronous streaming generators via HTTP SSE and WebSockets',
    ],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://drive.google.com/drive/folders/1foi36KV36UydWmD4gjTG1KfsBtGV8Twp?usp=sharing',
    liveUrlText: 'Drive Link',
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Gameplay Systems Developer',
    company: 'Survivor’s Guilt (Survival Game Project)',
    period: '2024 – 2025',
    location: 'Pune, India',
    type: 'Game Project / Systems Dev',
    summary: 'Developed and designed gameplay systems for Survivor’s Guilt, an open-world survival game project built in Unreal Engine using Blueprint-only workflows, with a strong focus on world interactivity, gameplay immersion, and performance optimization.',
    achievements: [
      'Built core gameplay systems in Unreal Engine using Blueprint-only workflows and the Ultimate Modular Survival Pack (UMSP).',
      'Developed interactive dog companion systems, including taming, commands, inventory, breeding, and full lifecycle mechanics.',
      'Engineered modular utility vehicle systems, including forklifts and tractors with physics-driven modular functionality.',
      'Integrated dynamic environmental systems, including procedural weather, ambient temperature, and synchronized day/night cycles.',
      'Designed interactive open-world elements, including PvP zones, POIs, climbable structures, and player building systems.',
    ],
    skills: ['Unreal Engine', 'Blueprints', 'UMSP', 'Companion AI', 'Vehicle Systems', 'Environmental Systems', 'Open-World Design', 'Performance Optimization'],
    metricsHighlight: 'Unreal Engine • Blueprint Workflows',
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Bachelor of Engineering (B.E.) in Computer Engineering',
    institution: 'Ajeenkya DY Patil School of Engineering (ADYPSOE)',
    period: '2023 – 2027',
    location: 'Lohegaon, Pune, Maharashtra',
    cgpa: '9.485 / 10.0',
    highlights: [
      'Distinction Academic Honor: Ranked in the top tier of the engineering cohort with a 9.485 CGPA.',
      'Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Software Engineering.',
      'Active Contributor to student technical symposiums and competitive coding challenges.',
    ],
  },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'ach-1',
    number: '01',
    badge: 'ALGORITHMIC MASTERY',
    metric: '90+ Solved',
    title: 'LeetCode Problem Solving & Consistent Streak',
    description: 'Solved 90+ algorithmic problems spanning Easy and Medium difficulties with a consistent daily streak. Refined data structure patterns, graph traversals, and dynamic programming optimization.',
    category: 'Competitive Programming & DSA',
    tags: ['LeetCode', '90+ Solved', 'Daily Streak', 'DSA Patterns'],
    linkUrl: 'https://leetcode.com/u/Shudhanshu25/',
    linkText: 'View LeetCode Profile',
  },
  {
    id: 'ach-2',
    number: '02',
    badge: 'SELECTIVE MERIT',
    metric: 'Sole B.E. Pick',
    title: 'Sole B.E. Student Selected for 5-Month Internship',
    description: 'Completed a 5-month internship as the single undergraduate student selected from the entire college batch, architecting core gameplay systems, companion AI, and modular vehicles in Unreal Engine.',
    category: 'Industry Selection & Impact',
    tags: ['Sole College Batch Selection', '5-Month Tenure', 'Unreal Engine', 'Gameplay Engineering'],
  },
  {
    id: 'ach-3',
    number: '03',
    badge: 'PRODUCTION SYSTEMS',
    metric: '2 Live Apps',
    title: 'Built & Deployed 2 Full-Stack Web Applications',
    description: 'Engineered, containerized, and deployed two full-stack web applications with verified live URLs during final year—featuring Smart Expense Tracker with real-time Firestore persistence and an AI Assistant system.',
    category: 'Production Cloud Delivery',
    tags: ['2 Production URLs', 'React.js', 'Firebase / FastAPI', 'Zero Downtime'],
    linkUrl: 'https://expense-tracker-dev-e9418.web.app/app.html',
    linkText: 'Launch Live App',
  },
];
