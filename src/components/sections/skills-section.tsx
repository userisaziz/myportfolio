"use client";

import { useState } from "react";
import { skillCategories } from "@/data/skills";
import { Monitor, Server, Brain, Wrench, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { DecorIcon } from "@/components/decor-icon";

const categoryIcons: Record<string, LucideIcon> = {
  frontend: Monitor,
  backend: Server,
  "ai-ml": Brain,
  devops: Wrench,
};

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState(skillCategories[0]?.id || "");

  const activeCategory = skillCategories.find((c) => c.id === activeTab) || skillCategories[0];

  return (
    <section id="skills" className="w-full py-20 px-6 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base">
            A comprehensive toolkit spanning frontend, backend, AI/ML, and DevOps
          </p>
        </div>

        {/* Tabs - logo-cloud-2 style */}
        <div className="mb-6 flex flex-wrap justify-center gap-px border overflow-hidden rounded-lg">
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Monitor;
            const isActive = category.id === activeTab;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-secondary dark:bg-secondary/30 text-foreground"
                    : "bg-background text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                )}
              >
                <Icon className="size-4" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid - logo-cloud-2 style */}
        <div className="grid grid-cols-2 border md:grid-cols-4">
          {activeCategory.skills.map((skill, index) => {
            // Alternate background pattern like logo-cloud-2
            const isSecondary = index % 2 === 0;
            return (
              <div
                key={skill.name}
                className={cn(
                  "relative flex flex-col items-center justify-center gap-2 border px-4 py-6 md:p-8",
                  // Border pattern
                  index % 2 === 0 && "border-r",
                  index < activeCategory.skills.length - 2 && "border-b",
                  // On md+, right border on odd indices (cols 2,4)
                  // Alternating background
                  isSecondary
                    ? "bg-secondary dark:bg-secondary/30"
                    : "bg-background"
                )}
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="pointer-events-none block size-7 select-none dark:brightness-0 dark:invert"
                  loading="lazy"
                />
                <span className="text-xs font-medium text-muted-foreground">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
