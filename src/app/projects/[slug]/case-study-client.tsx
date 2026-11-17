"use client";

import type { Project } from "@/data/projects";
import { WorkflowDiagram } from "@/components/sections/workflow-diagram";

const workflowSteps: Record<string, { title: string; variant?: "flow" | "grid"; steps: { label: string; description: string; color: string }[] }> = {
  "samaa-ai": {
    title: "Speaker Diarization Pipeline",
    steps: [
      { label: "Audio In", description: "WebRTC stream from browser", color: "emerald" },
      { label: "VAD", description: "Voice activity detection", color: "blue" },
      { label: "Speaker Embedding", description: "Extract speaker vectors", color: "amber" },
      { label: "State Machine", description: "Track active speaker", color: "purple" },
      { label: "Response Router", description: "Route to correct handler", color: "indigo" },
    ],
  },
  "voice-agent-saas": {
    title: "4-Phase Evaluation Pipeline",
    steps: [
      { label: "STT", description: "Speech-to-text transcription", color: "emerald" },
      { label: "Semantic Analysis", description: "LLM relevance scoring", color: "blue" },
      { label: "Flow Scoring", description: "Conversation coherence", color: "amber" },
      { label: "Task Completion", description: "Goal achievement check", color: "purple" },
    ],
  },
  "marsa-tijarah": {
    title: "Seven Workflows. One Pipeline.",
    variant: "grid",
    steps: [
      { label: "Catalogue Enrichment", description: "Raw listings to structured attributes", color: "emerald" },
      { label: "Category Mapping", description: "Taxonomy alignment across the marketplace", color: "blue" },
      { label: "SEO Optimization", description: "Bilingual titles, descriptions, keywords", color: "amber" },
      { label: "RFQ Sourcing", description: "200+ vendor discovery and outreach", color: "purple" },
      { label: "RFQ Screening", description: "Relevance and fraud checks on replies", color: "rose" },
      { label: "Bilingual Processing", description: "Arabic/English writing and review", color: "indigo" },
      { label: "LLM Inference", description: "Cross-model failover, server-side keys", color: "cyan" },
    ],
  },
};

export function CaseStudyClient({ project }: { project: Project }) {
  const workflow = workflowSteps[project.slug];

  if (!project.hasWorkflow || !workflow) {
    return null;
  }

  return (
    <WorkflowDiagram
      title={workflow.title}
      steps={workflow.steps}
      variant={workflow.variant}
    />
  );
}
