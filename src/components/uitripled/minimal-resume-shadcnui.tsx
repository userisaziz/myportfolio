"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion, Variants } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

const RESUME_DATA = {
  profile: {
    name: "Abdul Aziz",
    role: "Full-Stack & AI Engineer",
    avatarGradient:
      "from-gray-100 to-gray-200 dark:from-zinc-800 dark:to-zinc-700",
    socials: [
      { name: "GitHub", icon: Code2, url: "https://github.com/userisaziz" },
      { name: "LinkedIn", icon: Globe, url: "https://linkedin.com/in/userisaziz" },
      { name: "Email", icon: Mail, url: "mailto:azizadnan370@gmail.com" },
    ],
  },
  contact: {
    website: "github.com/userisaziz",
    location: "Bangalore, India",
  },
  stack: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "FastAPI",
    "Python",
    "LangChain",
    "AWS",
    "PostgreSQL",
    "Docker",
    "Redis",
    "Tailwind",
  ],
  education: {
    degree: "B.Tech",
    school: "Vishweshwariyah Technical University (V.T.U)",
    period: "2017 - 2021",
  },
  about: {
    text: "Full-stack engineer with 3.6+ years building scalable applications using React, Next.js, Node.js, FastAPI, and AWS. Hands-on delivering agentic AI/GenAI systems — RAG pipelines, multi-agent workflows, LLM-integrated voice platforms — for ed-tech and GCC retail products.",
    company: "",
    suffix: "",
  },
  experience: [
    {
      role: "AI Fullstack Engineer",
      company: "AlmaBetter",
      period: "April 2026 - Present",
      description: [
        "Built and shipped client platforms including AlmaBetter's ed-tech LMS, using Next.js, Strapi, and AWS-backed infrastructure.",
        "Designed an AI-powered automated evaluation pipeline combining DeepSeek, Gitingest, in-memory RAG with NumPy, and pgvector-based plagiarism detection.",
      ],
    },
    {
      role: "Software Developer",
      company: "Antino Labs",
      period: "Jan 2024 - April 2026",
      description: [
        "Delivered Trimpixel client work using React and micro-frontend architecture, containerized with Docker.",
        "Implemented analytics tooling for product and engagement reporting.",
      ],
    },
    {
      role: "Associate Software Developer",
      company: "Antino Labs",
      period: "May 2023 - Jan 2024",
      description: [
        "Built backend services with Node.js and Express, deployed via Jenkins CI/CD pipelines.",
        "Contributed to PWA features for improved mobile reliability and offline support.",
      ],
    },
   
  ],
  projects: [
    {
      title: "CXSAMAA",
      desc: "In-store conversation AI for retail intelligence. 6-stage AI pipeline with NVIDIA Parakeet STT, speaker diarization, and Llama 3.3 analysis.",
      stars: "FastAPI + Next.js 16",
    },
    {
      title: "Voice Agent SaaS",
      desc: "Multi-tenant voice AI platform with 4-phase evaluation pipeline. Deepgram WebRTC, DeepSeek LLM, Arabic + English support.",
      stars: "FastAPI + WebSockets",
    },
  ],
};

export function MinimalResume() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-lg overflow-hidden transition-colors duration-300"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[800px]">
          {/* Sidebar */}
          <div className="md:col-span-4 bg-gray-50/50 dark:bg-zinc-900/50 border-r border-gray-200 dark:border-zinc-800 p-8 flex flex-col gap-8 transition-colors duration-300">
            {/* Profile Header */}
            <motion.div variants={item} className="space-y-4">
              <div
                className={`h-16 w-16 rounded-full bg-gradient-to-tr ${RESUME_DATA.profile.avatarGradient} border border-gray-200 dark:border-zinc-700`}
              />
              <div>
                <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-zinc-100">
                  {RESUME_DATA.profile.name}
                </h1>
                <p className="text-sm text-gray-500 dark:text-zinc-400 font-mono mt-1">
                  {RESUME_DATA.profile.role}
                </p>
              </div>
              <div className="flex gap-2">
                {RESUME_DATA.profile.socials.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-md border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700 hover:bg-white dark:hover:bg-zinc-800 text-gray-500 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-100 transition-all"
                  >
                    <social.icon className="h-4 w-4" />
                  </Button>
                ))}
              </div>
            </motion.div>

            <Separator className="bg-gray-200 dark:bg-zinc-800" />

            {/* Contact */}
            <motion.div variants={item} className="space-y-3">
              <h2 className="text-xs font-mono font-medium uppercase tracking-wider text-gray-500 dark:text-zinc-500">
                Contact
              </h2>
              <div className="space-y-2 text-sm">
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-200 transition-colors group"
                >
                  <Globe className="h-3.5 w-3.5 text-gray-400 dark:text-zinc-500 group-hover:text-gray-600 dark:group-hover:text-zinc-300" />
                  <span>{RESUME_DATA.contact.website}</span>
                </a>
                <div className="flex items-center gap-2 text-gray-600 dark:text-zinc-400">
                  <MapPin className="h-3.5 w-3.5 text-gray-400 dark:text-zinc-500" />
                  <span>{RESUME_DATA.contact.location}</span>
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div variants={item} className="space-y-3">
              <h2 className="text-xs font-mono font-medium uppercase tracking-wider text-gray-500 dark:text-zinc-500">
                Stack
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {RESUME_DATA.stack.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded text-[11px] font-medium text-gray-600 dark:text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={item} className="space-y-3">
              <h2 className="text-xs font-mono font-medium uppercase tracking-wider text-gray-500 dark:text-zinc-500">
                Education
              </h2>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-zinc-100 text-sm">
                  {RESUME_DATA.education.degree}
                </h3>
                <p className="text-xs text-gray-500 dark:text-zinc-400 mt-0.5">
                  {RESUME_DATA.education.school}
                </p>
                <p className="text-[10px] text-gray-400 dark:text-zinc-500 mt-1 font-mono">
                  {RESUME_DATA.education.period}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-8 p-8 md:p-10 space-y-10 bg-white dark:bg-zinc-950 transition-colors duration-300">
            {/* About */}
            <motion.div variants={item} className="space-y-3">
              <h2 className="text-xs font-mono font-medium uppercase tracking-wider text-gray-500 dark:text-zinc-500">
                About
              </h2>
              <p className="text-sm text-gray-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                {RESUME_DATA.about.text}{" "}
                <span className="font-medium text-gray-900 dark:text-zinc-100">
                  {RESUME_DATA.about.company}
                </span>
                {RESUME_DATA.about.suffix}
              </p>
            </motion.div>

            {/* Experience */}
            <motion.div variants={item} className="space-y-6">
              <h2 className="text-xs font-mono font-medium uppercase tracking-wider text-gray-500 dark:text-zinc-500">
                Experience
              </h2>

              <div className="space-y-8">
                {RESUME_DATA.experience.map((job, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-medium text-gray-900 dark:text-zinc-100 text-sm">
                        {job.role}
                      </h3>
                      <span className="text-xs font-mono text-gray-400 dark:text-zinc-500">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-zinc-400 mb-3">
                      {job.company}
                    </p>
                    <ul className="text-sm text-gray-600 dark:text-zinc-400 space-y-1.5 list-disc list-outside ml-3 marker:text-gray-300 dark:marker:text-zinc-700">
                      {job.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Projects */}
            <motion.div variants={item} className="space-y-4">
              <h2 className="text-xs font-mono font-medium uppercase tracking-wider text-gray-500 dark:text-zinc-500">
                Projects
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {RESUME_DATA.projects.map((project, i) => (
                  <div
                    key={i}
                    className="group p-3 rounded-md border border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700 hover:bg-gray-50/50 dark:hover:bg-zinc-900/50 transition-all cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-1.5">
                      <h3 className="font-medium text-sm text-gray-900 dark:text-zinc-100">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="h-3.5 w-3.5 text-gray-400 dark:text-zinc-500 group-hover:text-gray-600 dark:group-hover:text-zinc-300 transition-colors" />
                    </div>
                    <p className="text-xs text-gray-500 dark:text-zinc-400 line-clamp-2 mb-2">
                      {project.desc}
                    </p>
                    <div className="flex items-center gap-1 text-[10px] text-gray-400 dark:text-zinc-500 font-mono">
                      <span>★ {project.stars}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
