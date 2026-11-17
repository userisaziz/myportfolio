"use client";

import { useRouter } from "next/navigation";
import GlassFolder, {
  type ArtPreset,
  type FolderFile,
  type FolderMenuItem,
} from "@/components/ui/glass-folder-cards";
import {
  projectCategories,
  projectsInCategory,
  type Project,
  type ProjectCategory,
} from "@/data/projects";

/** Each category is a physical folder on the desk; its projects are the files inside. */
const FOLDER_LOOK: Record<
  ProjectCategory,
  { art: ArtPreset; tone: "light" | "dark"; place: "bottom-left" | "top-left" | "top-right"; seed: number }
> = {
  "voice-ai": { art: "ember", tone: "light", place: "bottom-left", seed: 5 },
  "ai-pipelines": { art: "aurora", tone: "dark", place: "top-right", seed: 11 },
  fullstack: { art: "verdant", tone: "light", place: "top-left", seed: 7 },
};

/** Short mono second line on each file sheet — status/domain, never invented dates. */
const SHEET_META: Record<string, string> = {
  "samaa-ai": "Live · retail",
  "voice-agent-saas": "Multi-tenant",
  "marsa-tijarah": "Live production",
  "ai-quotation-generator": "Freelance",
  "turf-buddy": "Web + Android",
  "rover-dashboard": "Real-time IoT",
  "legal-cms": "eCourts sync",
};

const SHEET_ART: Record<string, ArtPreset> = {
  "samaa-ai": "dusk",
  "voice-agent-saas": "ember",
  "marsa-tijarah": "aurora",
  "ai-quotation-generator": "glacier",
  "turf-buddy": "verdant",
  "rover-dashboard": "glacier",
  "legal-cms": "dusk",
};

const openExternal = (url: string) => () => {
  window.open(url, "_blank", "noopener,noreferrer");
};

/** ··· menu: the real live/source links of everything in the folder. */
function menuFor(list: Project[]): FolderMenuItem[] {
  const items: FolderMenuItem[] = [];
  for (const p of list) {
    if (p.links.live && p.links.live !== "#") {
      items.push({ label: `${p.title} · live`, onSelect: openExternal(p.links.live) });
    }
    for (const x of p.links.extra ?? []) {
      items.push({ label: x.label, onSelect: openExternal(x.url) });
    }
    if (p.links.github && p.links.github !== "https://github.com/userisaziz") {
      items.push({ label: `${p.title} · source`, onSelect: openExternal(p.links.github) });
    }
  }
  return items;
}

function filesFor(list: Project[]): FolderFile[] {
  return list.map((p) => ({
    name: p.title,
    meta: SHEET_META[p.slug] ?? "Case study",
    art: SHEET_ART[p.slug] ?? "glacier",
    href: `/projects/${p.slug}`,
  }));
}

export function ProjectsSection() {
  const router = useRouter();

  return (
    <section id="projects" className="relative w-full scroll-mt-20 overflow-hidden py-20 px-6 sm:px-8">
      {/* the dotted desk */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 text-foreground opacity-[0.13]"
        style={{
          backgroundImage: "radial-gradient(currentColor 1.1px, transparent 1.4px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            Featured Projects
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Seven builds in three folders — hover to lean, click to open, pick a file for its case study.
          </p>
        </div>

        <div className="grid grid-cols-1 items-end justify-items-center gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          {projectCategories.map((cat, i) => {
            const list = projectsInCategory(cat.id);
            const look = FOLDER_LOOK[cat.id];
            return (
              <div key={cat.id} className="flex flex-col items-center gap-5">
                <GlassFolder
                  label={cat.label}
                  meta={`${list.length} case ${list.length === 1 ? "study" : "studies"}`}
                  art={look.art}
                  seed={look.seed}
                  tone={look.tone}
                  labelPlacement={look.place}
                  width={320}
                  appearDelay={i * 140}
                  action="more"
                  files={filesFor(list)}
                  menu={menuFor(list)}
                  onFileSelect={(file) => {
                    const project = list.find((p) => p.title === file.name);
                    if (project) router.push(`/projects/${project.slug}`);
                  }}
                />
                <p className="max-w-[320px] text-center text-xs leading-relaxed text-muted-foreground">
                  {cat.blurb}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mt-14 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Hover to lean · Click to open · File → case study · ··· → live &amp; source
        </p>
      </div>
    </section>
  );
}