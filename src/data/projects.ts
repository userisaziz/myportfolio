export type ProjectCategory = "voice-ai" | "ai-pipelines" | "fullstack";

export interface ProjectCategoryMeta {
  id: ProjectCategory;
  label: string;
  blurb: string;
}

export const projectCategories: ProjectCategoryMeta[] = [
  {
    id: "voice-ai",
    label: "Voice & Conversational AI",
    blurb: "Speech pipelines, speaker diarization and real-time voice agents.",
  },
  {
    id: "ai-pipelines",
    label: "AI Pipelines & RAG",
    blurb: "Agentic workflows, retrieval-grounded drafting and LLM ops in production.",
  },
  {
    id: "fullstack",
    label: "Full-Stack Platforms",
    blurb: "Booking, fleet telemetry and practice-management products.",
  },
];

export interface Project {
  slug: string;
  category: ProjectCategory;
  title: string;
  tagline: string;
  description: string;
  image?: string;
  images?: string[];
  videoUrl?: string;
  problem: string;
  approach: string;
  outcome: string;
  techStack: string[];
  hasWorkflow: boolean;
  workflowDescription?: string;
  links: {
    github?: string;
    live?: string;
    extra?: { label: string; url: string }[];
  };
}

export function projectsInCategory(id: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === id);
}

export const projects: Project[] = [
  {
    slug: "samaa-ai",
    category: "voice-ai",
    title: "CXSAMAA",
    tagline: "In-store conversation AI for retail intelligence",
    description:
      "CXSAMAA captures in-store customer conversations, processes them through a proprietary AI pipeline, and delivers actionable insights that improve store performance, employee coaching, and business outcomes.",
    image:
      "https://raw.githubusercontent.com/userisaziz/cxsamaa.store/main/screenshots/dashboard-view/interaction-recording-details.png",
    images: [
      "https://raw.githubusercontent.com/userisaziz/cxsamaa.store/main/screenshots/auth-view/auth.png",
      "https://raw.githubusercontent.com/userisaziz/cxsamaa.store/main/screenshots/dashboard-view/interaction-recording-details.png",
      "https://raw.githubusercontent.com/userisaziz/cxsamaa.store/main/screenshots/dashboard-view/interaction-details-1.png",
      "https://raw.githubusercontent.com/userisaziz/cxsamaa.store/main/screenshots/dashboard-view/interaction-details-2.png",
      "https://raw.githubusercontent.com/userisaziz/cxsamaa.store/main/screenshots/dashboard-view/recording-list.png",
      "https://raw.githubusercontent.com/userisaziz/cxsamaa.store/main/screenshots/dashboard-view/conversation-list.png",
      "https://raw.githubusercontent.com/userisaziz/cxsamaa.store/main/screenshots/dashboard-view/coaching.png",
      "https://raw.githubusercontent.com/userisaziz/cxsamaa.store/main/screenshots/ops-view/ops-page.png",
    ],
    videoUrl: "https://flonnect.com/video/5767d219690c-4854-b71b-fefeb93a86b7",
    problem:
      "Retail stores lack visibility into in-store customer conversations. Managers have no data-driven way to evaluate sales interactions, coach employees, or measure conversation quality across multiple locations.",
    approach:
      "Built a full-stack monorepo with a Celery-based 6-stage AI pipeline: Preprocessing → Transcription (NVIDIA Parakeet STT) → Segmentation → Diarization (Streusand) → Analysis (Llama 3.3 70B) → Scoring. FastAPI backend with SQLAlchemy async ORM, PostgreSQL + pgvector for embeddings, and a Next.js 16 frontend with TanStack Query and Zustand for state management.",
    outcome:
      "Delivered end-to-end conversation intelligence for retail: automated transcription, speaker diarization, AI-powered coaching insights, and scoring metrics. Multi-tenant architecture supports multiple brands and store locations with role-based access control.",
    techStack: [
      "FastAPI",
      "Next.js 16",
      "React 19",
      "Celery",
      "PostgreSQL",
      "NVIDIA NIM",
      "Redis",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "Docker",
      "Turborepo",
    ],
    hasWorkflow: true,
    workflowDescription:
      "6-Stage Pipeline: Preprocessing → Transcription (Parakeet) → Segmentation → Diarization (Streusand) → Analysis (Llama 3.3 70B) → Scoring",
    links: {
      github: "https://github.com/userisaziz/cxsamaa.store",
      live: "https://dashboard.cxsamaa.store/",
    },
  },
  {
    slug: "turf-buddy",
    category: "fullstack",
    title: "TurfBuddy",
    tagline: "Smart sports turf booking & management platform",
    description:
      "A full-stack platform connecting sports enthusiasts with turf owners. Three-module architecture: user booking app (web + Android), owner management dashboard, and robust backend API.",
    image: "/project/turf-buddy/turf-buddy-1.png",
    images: [
      "/project/turf-buddy/turf-buddy-1.png",
    ],
    problem:
      "Sports enthusiasts struggle to find and book turfs, while turf owners lack efficient tools to manage facilities, track bookings, and analyze revenue across multiple locations.",
    approach:
      "Built a three-module platform: React + Vite user app with Redux Toolkit for state, Capacitor for Android deployment, Razorpay payments, and QR-code tickets. Owner dashboard with Recharts analytics, dynamic slot pricing, and multi-turf management. Express backend with MongoDB, Argon2 hashing, JWT auth, and role-based access control.",
    outcome:
      "Unified booking experience across web and Android. Owners manage multiple turfs with real-time analytics. Secure payments via Razorpay with automated email confirmations and QR-code tickets.",
    techStack: [
      "React",
      "Vite",
      "Redux Toolkit",
      "Tailwind CSS",
      "Capacitor",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
      "Cloudinary",
      "JWT",
      "Argon2",
    ],
    hasWorkflow: false,
    links: {
      github: "https://github.com/userisaziz/turf_buddy",
      live: "#",
    },
  },
  {
    slug: "voice-agent-saas",
    category: "voice-ai",
    title: "Voice Agent SaaS",
    tagline: "Multi-tenant voice AI platform with eval pipeline",
    description:
      "A SaaS platform for deploying and evaluating AI voice agents at scale, featuring a 4-phase evaluation pipeline and multi-tenant architecture.",
    image: "/project/voice-agent/voice-agent-1.png",
    images: [
      "/project/voice-agent/voice-agent-1.png",
      "/project/voice-agent/voice-agent-2.png",
      "/project/voice-agent/voice-agent-3.png",
      "/project/voice-agent/voice-agent-4.png",
      "/project/voice-agent/voice-agent-5.png",
      "/project/voice-agent/voice-agent-6.png",
      "/project/voice-agent/voice-agent-7.png",
    ],
    problem:
      "Enterprises deploying voice agents need systematic evaluation to ensure quality. Manual QA doesn't scale, and there's no standard framework for benchmarking conversational AI.",
    approach:
      "Designed a 4-phase evaluation pipeline: Transcription Accuracy -> Semantic Relevance -> Conversation Flow -> Task Completion. Built multi-tenant infrastructure with isolated audio pipelines per customer.",
    outcome:
      "Reduced voice agent QA time by 80% through automated evaluation. Platform serves multiple enterprise clients with isolated, compliant audio processing.",
    techStack: [
      "Next.js",
      "DeepSeek",
      "Deepgram",
      "PostgreSQL",
      "Docker",
      "TypeScript",
    ],
    hasWorkflow: true,
    workflowDescription:
      "4-Phase Eval Pipeline: STT -> Semantic Analysis -> Flow Scoring -> Task Completion Check",
    links: {
      github: "https://github.com/userisaziz/ai-voice-agents",
      live: "#",
    },
  },
  {
    slug: "rover-dashboard",
    category: "fullstack",
    title: "Rover Dashboard",
    tagline: "Real-time fleet management and analytics dashboard",
    description:
      "A comprehensive dashboard for managing IoT device fleets with real-time telemetry, alerting, and historical analytics.",
    image: "/project/rover-dashboard/rover-1.png",
    images: [
      "/project/rover-dashboard/rover-1.png",
      "/project/rover-dashboard/rover-2.png",
      "/project/rover-dashboard/rover-3.png",
      "/project/rover-dashboard/rover-4.png",
    ],
    problem:
      "Operations teams managing hundreds of IoT devices lack a unified view for monitoring, alerting, and historical trend analysis.",
    approach:
      "Built a real-time dashboard with WebSocket-powered live telemetry, configurable alert rules, and time-series analytics. Used TanStack Query for efficient data fetching and caching.",
    outcome:
      "Unified monitoring for 500+ devices with sub-second telemetry updates. Reduced mean-time-to-detection for anomalies by 60%.",
    techStack: [
      "React",
      "TanStack Query",
      "WebSocket",
      "PostgreSQL",
      "Tailwind CSS",
      "Node.js",
    ],
    hasWorkflow: false,
    links: {
      github: "https://github.com/userisaziz/rover-dashboard-ui",
      live: "https://rover-dashboard-ui.vercel.app/",
    },
  },
  {
    slug: "legal-cms",
    category: "fullstack",
    title: "LAW COMPANION",
    tagline: "Legal case management platform for Indian law firms",
    description:
      "A comprehensive legal practice management platform tailored for Indian law firms. Centralizes case records, client profiles, calendars, billing, and legal research with eCourts integration for automated case data retrieval and hearing synchronization.",
    image: "/project/legal-cms/law-companion-1.png",
    images: [
      "/project/legal-cms/law-companion-1.png",
      "/project/legal-cms/law-companion-2.png",
      "/project/legal-cms/law-companion-3.png",
      "/project/legal-cms/law-companion-4.png",
    ],
    problem:
      "Law firms managing multiple cases across various courts lack a unified system for case lifecycle management, hearing calendars, client communication, and billing — leading to missed deadlines and inefficient workflows.",
    approach:
      "Built a full-stack platform with React 18 frontend, Supabase backend for auth and data, and serverless Edge Functions for eCourts integration. Features include case management, client CRM, hearing calendars with reminders, billing/invoicing, team management, and analytics with judge-specific insights.",
    outcome:
      "Unified legal practice management with automated eCourts data sync, real-time hearing calendars, compliance-ready audit trails, and smart analytics for firm performance tracking.",
    techStack: [
      "React",
      "Vite",
      "TypeScript",
      "Supabase",
      "shadcn/ui",
      "Tailwind CSS",
      "TanStack Query",
      "TanStack Table",
      "FullCalendar",
      "Recharts",
      "Zod",
      "Framer Motion",
    ],
    hasWorkflow: false,
    links: {
      github: "https://github.com/userisaziz/legal-cms",
      live: "https://law-companion.vercel.app/",
    },
  },
  {
    slug: "marsa-tijarah",
    category: "ai-pipelines",
    title: "Marsa Tijarah",
    tagline: "Seven workflows. One pipeline. AI for B2B trade.",
    description:
      "Marsa Tijarah is a live Saudi B2B marketplace whose intelligence layer runs seven end-to-end AI workflows — from raw input to human-reviewed output — with bilingual Arabic/English processing and automatic LLM failover.",
    image: "https://marsatijarah.com/og-image.png",
    images: ["https://marsatijarah.com/og-image.png"],
    problem:
      "B2B catalogues arrive unstructured and multilingual. Enrichment, categorization, SEO and RFQ handling done by hand do not scale, and depending on a single LLM provider risks outages while client-side keys risk exposure.",
    approach:
      "Built seven production workflows — catalogue enrichment, category mapping, SEO optimization, RFQ sourcing, RFQ screening and bilingual processing — over an LLM inference layer with automatic cross-model failover and server-side keys, executed as Supabase Edge Functions with human review before anything publishes.",
    outcome:
      "Every AI task runs end to end from raw input to human-reviewed output. RFQ sourcing reaches 200+ vendors per request with bilingual outreach, and cross-model failover keeps inference available through provider outages.",
    techStack: [
      "Next.js",
      "Supabase",
      "Edge Functions",
      "PostgreSQL",
      "LLM Failover",
      "Bilingual AR/EN",
      "TypeScript",
    ],
    hasWorkflow: true,
    workflowDescription:
      "Seven workflows: catalogue enrichment, category mapping, SEO optimization, RFQ sourcing, RFQ screening, bilingual processing, LLM inference with automatic failover",
    links: {
      live: "https://marsatijarah.com",
      extra: [
        {
          label: "Intelligence · seven workflows",
          url: "https://marsatijarah.com/intelligence",
        },
      ],
    },
  },
  {
    slug: "ai-quotation-generator",
    category: "ai-pipelines",
    title: "AI Quotation Generator",
    tagline: "RAG-grounded client proposals with deterministic pricing",
    description:
      "A freelance quotation tool that retrieves over product catalogues and past quotations to draft scope, while pricing stays deterministic from catalogue data — hallucination-safe, client-ready HTML/PDF output.",
    problem:
      "Manual quotations mix guessed scope with guessed prices. LLM-only drafting hallucinates line items and totals, which is unacceptable in client-facing pricing documents.",
    approach:
      "RAG over catalogues and past quotations grounds scope drafting in real precedent; a deterministic pricing pass then computes every line from catalogue data so totals always reconcile; output renders as client-ready HTML/PDF.",
    outcome:
      "Proposals draft in minutes with every price traceable to catalogue data — no invented line items or totals reach the client.",
    techStack: [
      "RAG",
      "Vector Search",
      "LLM",
      "Deterministic Pricing",
      "HTML/PDF",
    ],
    hasWorkflow: false,
    links: {},
  },
];
