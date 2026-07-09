import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Header } from "@/components/sections/header";
import { CaseStudyClient } from "./case-study-client";
import { CaseStudyTransition } from "./case-study-transition";
import { ProjectMedia } from "@/components/sections/project-media";

const SITE_URL = "https://abdulazizadnan.dev";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  const url = `${SITE_URL}/projects/${project.slug}`;

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
      type: "article",
      url,
      images: [
        {
          url: project.image.startsWith("http")
            ? project.image
            : `${SITE_URL}${project.image}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.tagline,
      images: [
        project.image.startsWith("http")
          ? project.image
          : `${SITE_URL}${project.image}`,
      ],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <CaseStudyTransition>
      <Header />
      <main className="min-h-screen pt-20">
        <article className="mx-auto max-w-4xl px-6 py-12 sm:px-8">
          {/* Back link */}
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          {/* Hero */}
          <div className="mb-12">
            <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {project.title}
            </h1>
            <p className="mb-6 text-lg text-muted-foreground">
              {project.tagline}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Media: Image Carousel + Video */}
          <ProjectMedia
            images={project.images}
            videoUrl={project.videoUrl}
            title={project.title}
          />

          {/* Problem */}
          <section className="mb-12">
            <h2 className="mb-4 text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground">
              The Problem
            </h2>
            <p className="text-base leading-relaxed text-foreground/80">
              {project.problem}
            </p>
          </section>

          {/* Approach */}
          <section className="mb-12">
            <h2 className="mb-4 text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground">
              The Approach
            </h2>
            <p className="text-base leading-relaxed text-foreground/80">
              {project.approach}
            </p>
          </section>

          {/* Workflow Diagram (only for AI projects) */}
          <CaseStudyClient project={project} />

          {/* Outcome */}
          <section className="mb-12">
            <h2 className="mb-4 text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground">
              The Outcome
            </h2>
            <p className="text-base leading-relaxed text-foreground/80">
              {project.outcome}
            </p>
          </section>

          {/* Links */}
          <div className="flex gap-4 border-t border-border pt-8">
            {project.links.github && (
              <Link
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  GitHub
                </Button>
              </Link>
            )}
            {project.links.live && project.links.live !== "#" && (
              <Link
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </Button>
              </Link>
            )}
          </div>
        </article>
      </main>
    </CaseStudyTransition>
  );
}
