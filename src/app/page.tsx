"use client";
import React from "react";
import { PortfolioLoader } from "@/components/portfolio-loader";
import { PortfolioNavbar } from "@/components/portfolio-navbar";
import { HeroSectionNew } from "@/components/hero-section-new";
import { AboutSection } from "@/components/about-section";
import { ProjectsSectionNew } from "@/components/projects-section-new";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";
import { ContactSection } from "@/components/contact-section";
import { SocialDock } from "@/components/social-dock";

export default function Home() {
  return (
    <>
      <PortfolioLoader />
      <div className="dark min-h-screen bg-black text-white">
        <PortfolioNavbar />
        <main className="relative">
          <HeroSectionNew />
          <AboutSection />
          <ProjectsSectionNew />
          <SkillsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <SocialDock />
      </div>
    </>
  );
}
