export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
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
  };
}

export const projects: Project[] = [
  {
    slug: "samaa-ai",
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
      github: "https://github.com/userisaziz",
      live: "#",
    },
  },
  {
    slug: "rover-dashboard",
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
];
