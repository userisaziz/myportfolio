"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { DecorIcon } from "@/components/decor-icon";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-20 px-6 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            Featured Projects
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Real-world applications built with modern technologies
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <Link href={`/projects/${project.slug}`} transitionTypes={['nav-forward']}>
      <figure
        className={cn(
          "group relative flex flex-col overflow-hidden",
          "rounded-lg border border-border bg-card",
          "transition-all duration-300 hover:border-primary/40 hover:shadow-lg",
          "dark:bg-[radial-gradient(50%_80%_at_25%_0%,--theme(--color-foreground/.06),transparent)]"
        )}
      >
        {/* Corner decorations */}
        <DecorIcon className="size-3" position="top-left" />
        <DecorIcon className="size-3" position="top-right" />

        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
          <div className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-background/80 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
            <ArrowUpRight className="size-4 text-foreground" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-3 p-6">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-[10px] uppercase tracking-wider">
              {project.hasWorkflow ? "AI" : "Full Stack"}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {project.techStack.length} technologies
            </span>
          </div>

          <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
            {project.title}
          </h3>

          <p className="line-clamp-2 text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-muted/50 px-2 py-0.5 text-[11px] text-muted-foreground"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="rounded-md border border-border bg-muted/50 px-2 py-0.5 text-[11px] text-muted-foreground">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
        </div>
      </figure>
    </Link>
  );
}
