export interface Skill {
  name: string;
  logo: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React", logo: "https://cdn.simpleicons.org/react/000000" },
      { name: "Next.js", logo: "https://cdn.simpleicons.org/next.js/000000" },
      { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/000000" },
      { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/000000" },
      { name: "shadcn/ui", logo: "https://cdn.simpleicons.org/shadcnui/000000" },
      { name: "Framer Motion", logo: "https://cdn.simpleicons.org/framer/000000" },
      { name: "Redux", logo: "https://cdn.simpleicons.org/redux/000000" },
      { name: "TanStack Query", logo: "https://cdn.simpleicons.org/reactquery/000000" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js", logo: "https://cdn.simpleicons.org/node.js/000000" },
      { name: "Express", logo: "https://cdn.simpleicons.org/express/000000" },
      { name: "Fastify", logo: "https://cdn.simpleicons.org/fastify/000000" },
      { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/000000" },
      { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase/000000" },
      { name: "Prisma", logo: "https://cdn.simpleicons.org/prisma/000000" },
      { name: "Redis", logo: "https://cdn.simpleicons.org/redis/000000" },
      { name: "GraphQL", logo: "https://cdn.simpleicons.org/graphql/000000" },
    ],
  },
  {
    id: "ai-ml",
    label: "AI / ML",
    skills: [
      { name: "Deepgram", logo: "https://cdn.simpleicons.org/deepgram/000000" },
      { name: "OpenAI", logo: "https://cdn.simpleicons.org/openai/000000" },
      { name: "DeepSeek", logo: "https://cdn.simpleicons.org/deepseek/000000" },
      { name: "LangChain", logo: "https://cdn.simpleicons.org/langchain/000000" },
      { name: "RAG", logo: "https://cdn.simpleicons.org/openai/000000" },
      { name: "Diarization", logo: "https://cdn.simpleicons.org/googlepodcasts/000000" },
      { name: "STT / TTS", logo: "https://cdn.simpleicons.org/googleassistant/000000" },
      { name: "Prompt Eng.", logo: "https://cdn.simpleicons.org/openai/000000" },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    skills: [
      { name: "Docker", logo: "https://cdn.simpleicons.org/docker/000000" },
      { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/000000" },
      { name: "GitHub Actions", logo: "https://cdn.simpleicons.org/githubactions/000000" },
      { name: "AWS", logo: "https://cdn.simpleicons.org/amazonaws/000000" },
      { name: "CI/CD", logo: "https://cdn.simpleicons.org/github/000000" },
      { name: "Terraform", logo: "https://cdn.simpleicons.org/terraform/000000" },
      { name: "Monitoring", logo: "https://cdn.simpleicons.org/datadog/000000" },
      { name: "Linux", logo: "https://cdn.simpleicons.org/linux/000000" },
    ],
  },
];
