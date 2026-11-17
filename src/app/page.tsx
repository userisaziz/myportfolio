"use client";

import { useEffect, useState, ViewTransition } from "react";
import MeadowRiseFooter, {
  type MeadowPaletteOverrides,
} from "@/components/ui/meadow-rise-footer";
import { useTheme } from "next-themes";

// Neutral palette mirroring the site's shadcn "neutral" tokens, replacing the
// component's green meadow. Dark variant renders as a starry night range.
const BRAND_LIGHT: MeadowPaletteOverrides = {
  sky: ["#f7f7f7", "#ebebeb"],
  haze: "#e6e6e6",
  glow: "#ffffff",
  hills: [
    ["#cdcdcd", "#bcbcbc"],
    ["#a8a8a8", "#969696"],
    ["#868686", "#737373"],
    ["#626262", "#515151"],
    ["#474747", "#383838"],
    ["#2c2c2c", "#1b1b1b"],
  ],
  ground: "#1c1c1c",
  ink: "#171717",
  sub: "#454545",
  pill: "#ffffff",
  pillInk: "#171717",
  text: "#f2f2f2",
  muted: "#a3a3a3",
  line: "rgba(242, 242, 242, 0.16)",
};

const BRAND_DARK: MeadowPaletteOverrides = {
  sky: ["#141414", "#262626"],
  haze: "#2a2a2a",
  glow: "#d6d6d6",
  hills: [
    ["#3f3f3f", "#333333"],
    ["#373737", "#2b2b2b"],
    ["#303030", "#252525"],
    ["#292929", "#1f1f1f"],
    ["#222222", "#181818"],
    ["#1b1b1b", "#111111"],
  ],
  ground: "#121212",
  ink: "#f2f2f2",
  sub: "#b5b5b5",
  pill: "#f2f2f2",
  pillInk: "#121212",
  text: "#e8e8e8",
  muted: "#8c8c8c",
  line: "rgba(232, 232, 232, 0.13)",
  night: true,
};
import { MinimalResume } from "@/components/uitripled/minimal-resume-shadcnui";
import { ContactFormSection } from "@/components/uitripled/contact-form-section-shadcnui";
import { FeatureSection } from "@/components/feature-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/sections/header";
import { MapSection } from "@/components/sections/map-section";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  const { resolvedTheme } = useTheme();
  // Theme-dependent footer palettes must not differ between server HTML and
  // the first client render — resolve only after mount (hydration-safe).
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const footerDark = mounted && resolvedTheme === "dark";
  return (
    <ViewTransition
      enter={{ "nav-back": "nav-back", default: "none" }}
      exit={{ "nav-forward": "nav-forward", default: "none" }}
      default="none"
    >
      <main className="flex min-h-screen flex-col">
        <Header />
        <div className="relative w-full">
          <MeadowRiseFooter
            name="AbdulAziz Adnan"
            heading={"Full Stack Developer\n& *AI Engineer*"}
            subheading="I design and build end-to-end AI systems — from real-time voice agents with speaker diarization and multilingual STT/TTS, to production SaaS platforms with scalable backend architectures."
            cta={{ label: "View Projects", href: "#projects" }}
            newsletter={false}
            columns={[]}
            socials={[]}
            tagline=""
            legal={[]}
            copyright=""
            className="mrf-hero-only"
            palette={footerDark ? BRAND_DARK : BRAND_LIGHT}
            heroHeight="clamp(620px, 88svh, 860px)"
            height="clamp(620px, 88svh, 860px)"
            fontFamily="var(--font-geist-sans), system-ui, sans-serif"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-background sm:h-20 md:h-24" />
        </div>
        <ScrollReveal>
          <section id="about" className="w-full scroll-mt-20 py-20 px-6 sm:px-8">
            <div className="mx-auto max-w-6xl">
              <div className="mb-8 text-center">
                <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
                  About Me
                </h2>
              </div>
              <MinimalResume />
            </div>
          </section>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <section className="w-full py-20 px-6 sm:px-8">
            <FeatureSection />
          </section>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <SkillsSection />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <ProjectsSection />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <section id="testimonials" className="w-full scroll-mt-20 py-20 px-6 sm:px-8">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 text-center">
                <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
                  Testimonials
                </h2>
                <p className="text-sm text-muted-foreground">
                  What people say about working with me
                </p>
              </div>
              <TestimonialsSection />
            </div>
          </section>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <ContactFormSection />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <MapSection />
        </ScrollReveal>
        <Footer />
      </main>
    </ViewTransition>
  );
}
