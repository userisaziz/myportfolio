"use client";

import { ViewTransition } from "react";
import { HeroBlock } from "@/components/uitripled/hero-block-shadcnui";
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
  return (
    <ViewTransition
      enter={{ "nav-back": "nav-back", default: "none" }}
      exit={{ "nav-forward": "nav-forward", default: "none" }}
      default="none"
    >
      <main className="flex min-h-screen flex-col">
        <Header />
        <HeroBlock />
        <ScrollReveal>
          <section id="about" className="w-full py-20 px-6 sm:px-8">
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
          <section id="testimonials" className="w-full py-20 px-6 sm:px-8">
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
