import { Project, Service } from '../types/portfolio';
import aiFinderImg from '../assets/images/ai_finder_app_1790591209495.jpg';
import lumenStudioImg from '../assets/images/lumen_studio_web_1790591222353.jpg';
import promptOsImg from '../assets/images/prompt_os_saas_1790591234830.jpg';
import kineticFieldImg from '../assets/images/kinetic_web_exp_1790591246398.jpg';

export const PERSONAL_INFO = {
  name: 'Francis Oluwasegun',
  title: 'Founder & Vibe Coder / AI-Assisted Developer',
  role: 'Founder & Lead Developer',
  avatar: 'https://res.cloudinary.com/bqokwnwq/image/upload/f_auto,q_auto/WhatsApp_Image_2026-09-28_at_11.39.28_AM',
  location: 'Lagos, Nigeria & Remote Worldwide',
  email: 'oluwasegunayoola91@gmail.com',
  whatsapp: 'https://wa.me/2348104320603',
  github: 'https://github.com',
  twitter: 'https://twitter.com',
  linkedin: 'https://linkedin.com',
  status: 'AVAILABLE FOR NEW PROJECTS',
  statusPeriod: 'Open for Q3/Q4 builds',
  coreStatement: 'I turn ideas into polished digital experiences — fast.',
  heroBio:
    'I’m a vibe coder focused on websites, AI-powered products, rapid prototypes, and creative digital experiences. I combine AI-assisted development with design thinking to turn rough ideas into something people can actually use.',
  aboutBio:
    'I’m Francis Oluwasegun, a vibe coder focused on turning ideas into real digital products. I use AI-assisted development, modern web technologies, and design thinking to move quickly from concept to working experience.',
  aboutPhilosophy:
    'Most software projects die in protracted planning or endless boilerplate setup. Vibe coding isn’t about cutting corners — it is about working at the speed of thought. By pairing human taste, user empathy, and architectural judgment with AI acceleration, I collapse months of dev time into focused days of rapid execution.',
};

export const CAPABILITIES = [
  {
    name: 'AI-assisted development',
    detail: 'Harnessing modern LLM workflows to code complex systems 10x faster without compromising quality.',
  },
  {
    name: 'Web design',
    detail: 'Crafting editorial, modern interfaces with high typographic confidence and tactile responsiveness.',
  },
  {
    name: 'Rapid prototyping',
    detail: 'Transforming back-of-napkin sketches into functional, testable MVPs in as little as 48 hours.',
  },
  {
    name: 'AI products',
    detail: 'Building user-facing generative tools, smart retrieval engines, and context-aware interfaces.',
  },
  {
    name: 'Automation',
    detail: 'Connecting APIs, webhooks, and data pipelines to eliminate friction and mundane manual loops.',
  },
  {
    name: 'Creative development',
    detail: 'Experimenting with generative visuals, canvas shaders, sound reactive elements, and micro-interactions.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'ai-finder',
    title: 'AI FINDER',
    subtitle: 'Intelligent AI tools discovery & workflow matching platform',
    category: 'ai-products',
    categoryLabel: 'AI Product / Discovery Engine',
    description:
      'An AI tools discovery platform helping users find the right AI tool for different tasks with natural language intent matching.',
    longDescription:
      'AI Finder solves tool fatigue for creators, founders, and engineers. Instead of scrolling through endless static directories, users state their goal in plain English (e.g. "I need an audio denoiser for podcast stems under $15"), and the system semantically maps and ranks 1,200+ vetted tools with real pricing, benchmarks, and direct launch links.',
    image: aiFinderImg,
    tags: ['Vector Search', 'AI Semantic Match', 'React', 'Tailwind', 'Edge APIs'],
    year: '2026',
    metrics: '< 180ms semantic query latency',
    highlight: 'Mapped 1,200+ models with real-time token pricing',
    features: [
      'Natural language query parser for vague workflow prompts',
      'Multi-parameter filter: license, model latency, cost per 1M tokens',
      'Instant side-by-side capability comparisons with verified user notes',
      'Curated collections for designers, video editors, and indie founders',
    ],
    challenge:
      'Directories become outdated quickly and force users to guess precise technical keywords rather than searching by their intended task.',
    solution:
      'Engineered an embedded vector search index that understands intent and context, paired with a blazing dark-mode interface with zero layout shift.',
    liveDemoNote: 'Working prototype available for demonstration upon request.',
  },
  {
    id: 'lumen-studio',
    title: 'LUMEN DIGITAL',
    subtitle: 'High-conversion agency landing page with kinetic typography',
    category: 'websites',
    categoryLabel: 'Website / Digital Studio',
    description:
      'A high-end digital design studio website built for maximum conversion, featuring bespoke scroll physics and editorial layout.',
    longDescription:
      'Commissioned to replace a slow, generic WordPress template with an uncompromising modern brand flag. Lumen Digital communicates authority within seconds through massive brutalist typography, responsive hairline grid architecture, and lightning-fast page transitions.',
    image: lumenStudioImg,
    tags: ['React', 'Custom Motion', 'Vite', 'Modern Layout', 'SEO Architecture'],
    year: '2026',
    metrics: '99/100 Google Lighthouse Performance',
    highlight: '+84% inbound inquiry conversion rate',
    features: [
      'Precision fluid type scaling adapted from 320px mobile to 2560px ultra-wide',
      'Zero-jank scroll transitions built with hardware-accelerated transforms',
      'Embedded interactive project reel with instant lightbox playback',
      'Integrated qualification questionnaire filtering high-value client leads',
    ],
    challenge:
      'The client needed a digital presence that instantly justified premium project retainers while loading under 1 second on mobile networks.',
    solution:
      'Rebuilt from the ground up without bloated third-party page builders, using modular component architecture and targeted CSS micro-interactions.',
    liveDemoNote: 'Live client release in active production.',
  },
  {
    id: 'synapse-prompt-os',
    title: 'SYNAPSE PROMPT OS',
    subtitle: 'AI prompt workspace & multi-model evaluation workbench',
    category: 'ai-products',
    categoryLabel: 'AI SaaS / Developer Tool',
    description:
      'A fast developer workspace for testing, iterating, and comparing prompts across different LLM backends side-by-side.',
    longDescription:
      'Prompt engineers and product builders often lose track of prompt versions in scattered text files and messy spreadsheets. Synapse Prompt OS provides an IDE-grade workbench with variable interpolation, token heatmaps, automated regression test runs, and instant cost estimations before shipping to production.',
    image: promptOsImg,
    tags: ['Gemini API', 'TypeScript', 'Web Workers', 'Split Workspace', 'State Persistence'],
    year: '2026',
    metrics: 'Compare up to 4 models simultaneously',
    highlight: 'Saved 12+ dev hours per week during prompt validation',
    features: [
      'Synchronous dual-column prompt execution across distinct model temperatures',
      'Token consumption breakdown with cost calculations in real time',
      'One-click export to TypeScript SDK snippet or raw curl payload',
      'Prompt version branching with instant diff view',
    ],
    challenge:
      'Testing prompts across varying models previously required swapping tabs, re-pasting schemas, and manually timing response intervals.',
    solution:
      'Architected a unified streaming client that broadcasts inputs across parallel model endpoints with live token throughput visualization.',
    liveDemoNote: 'Functional alpha used daily for internal prototyping.',
  },
  {
    id: 'kinetic-field',
    title: 'KINETIC FIELD',
    subtitle: 'Spatial audio-visual canvas experiment & interactive physics',
    category: 'creative',
    categoryLabel: 'Creative Build / Digital Experiment',
    description:
      'An interactive generative web experiment simulating fluid particle waves and responsive mathematical turbulence in the browser.',
    longDescription:
      'An exploratory study into lightweight creative code that runs at a silky 60fps on mobile without draining device battery. Users manipulate gravity vectors, frequency thresholds, and color spectrums using pointer velocity and ambient microphone input.',
    image: kineticFieldImg,
    tags: ['WebGL / Canvas 2D', 'Web Audio API', 'Vector Physics', 'Math Algorithms'],
    year: '2026',
    metrics: 'Solid 60fps across mobile and desktop',
    highlight: 'Zero heavy 3D engine bundles — under 25KB footprint',
    features: [
      '5,000 autonomous particles driven by custom Verlet integration',
      'Real-time cursor repulsion and magnetic vortex attractors',
      'Audio frequency analyzer visualizing browser sound input',
      'Direct screenshot generator exporting high-res wallpaper assets',
    ],
    challenge:
      'Most generative experiments rely on massive 3D library bundles that take seconds to download and choke low-power mobile GPUs.',
    solution:
      'Authored raw math routines and optimized 2D canvas buffer rendering, achieving desktop-grade particle count with near-zero bundle weight.',
    liveDemoNote: 'Interactive demo directly accessible in the browser.',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'websites',
    number: '01',
    title: 'Websites',
    tagline: 'High-impact digital presences that convert visitors into believers.',
    description:
      'Modern landing pages, portfolio websites, business websites, and conversion-focused experiences designed to make an unforgettable first impression.',
    deliverables: [
      'Custom responsive architecture (no bloated page builders)',
      'High-impact typographic identity & aesthetic direction',
      'Speed optimization & Google Core Web Vitals compliance',
      'Seamless CMS or static deployment with zero maintenance',
    ],
    idealFor: 'Founders, agencies, creators, and brands wanting to stand out from generic templates.',
    turnaround: '3–7 days from brief to live URL',
  },
  {
    id: 'ai-products',
    number: '02',
    title: 'AI Products',
    tagline: 'Intelligent interfaces that turn complex AI models into seamless tools.',
    description:
      'AI-powered tools, interfaces, assistants, and useful web applications that solve tangible problems without technical friction.',
    deliverables: [
      'LLM integration (Gemini, OpenAI, Anthropic, open-source)',
      'Prompt pipeline engineering & structured JSON outputs',
      'Vector search, RAG, and document parsing interfaces',
      'Real-time streaming responses & contextual memory',
    ],
    idealFor: 'Startups and operators seeking an intuitive AI product or internal workflow accelerator.',
    turnaround: '1–2 weeks for functional version',
  },
  {
    id: 'rapid-prototypes',
    number: '03',
    title: 'Rapid Prototypes',
    tagline: 'Testable MVPs shipped in days so you can validate before investing.',
    description:
      'Turn an idea into a working MVP quickly so it can be tested, put in front of users, shown to investors, and iterated with real feedback.',
    deliverables: [
      'Clickable, fully functional cloud-hosted application',
      'Working authentication, database, and core user flow',
      'Clear, production-ready TypeScript codebase you own',
      'Fast feedback loop with live preview environments',
    ],
    idealFor: 'Entrepreneurs testing market appetite or pitching investors with a working product.',
    turnaround: '48 to 72 hours for first working build',
  },
  {
    id: 'creative-builds',
    number: '04',
    title: 'Creative Builds',
    tagline: 'Unconventional digital experiences that people talk about and share.',
    description:
      'Experimental websites, interactive experiences, unusual concepts, and visually interesting digital products that push creative boundaries.',
    deliverables: [
      'Bespoke generative canvas animations and spatial visuals',
      'Interactive product reveals & gamified micro-tools',
      'Audio-reactive soundscapes and kinetic typography',
      'Distinctive visual branding engineered for viral recall',
    ],
    idealFor: 'Product drops, cultural brands, festivals, and forward-thinking creative ventures.',
    turnaround: '5–10 days based on scope',
  },
];
