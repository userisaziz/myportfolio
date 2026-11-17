"use client";

import { skillCategories, type Skill } from "@/data/skills";
import { DecorIcon } from "@/components/decor-icon";
import { Marquee } from "@/components/ui/marquee";

const [frontend, backend, aiMl, devops] = skillCategories;

const topRow = [...frontend.skills, ...backend.skills];
const bottomRow = [...aiMl.skills, ...devops.skills];

function SkillCell({ skill }: { skill: Skill }) {
  return (
    <div className="mx-12 flex shrink-0 flex-col items-center justify-center gap-2">
      <img
        src={skill.logo}
        alt={skill.name}
        className="pointer-events-none block size-7 select-none dark:brightness-0 dark:invert"
        loading="lazy"
      />
      <span className="text-xs font-medium text-muted-foreground">{skill.name}</span>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="w-full scroll-mt-20 py-20 px-6 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base">
            A comprehensive toolkit spanning frontend, backend, AI/ML, and DevOps
          </p>
        </div>

        {/* Skills Marquees - logo-cloud-2 style */}
        <div className="overflow-hidden rounded-lg border">
          <Marquee pauseOnHover speed={75}>
            {topRow.map((skill) => (
              <SkillCell key={skill.name} skill={skill} />
            ))}
          </Marquee>

          <div className="border-t" />

          <Marquee pauseOnHover speed={75} direction="right">
            {bottomRow.map((skill) => (
              <SkillCell key={skill.name} skill={skill} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
