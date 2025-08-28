"use client";
{
  /* eslint-disable react/no-unescaped-entities */
}
{
  /* eslint-disable @typescript-eslint/no-unused-vars */
}
{
  /* eslint-disable @typescript-eslint/no-explicit-any */
}
import React from "react";
import { motion } from "motion/react";
import {
  Code,
  Database,
  Palette,
  Settings,
  Smartphone,
  Cloud,
  GitBranch,
  Terminal,
  Sparkles,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { BackgroundLines } from "@/components/ui/background-lines";

export function SkillsSection() {
  return (
    <section id="skills" className="relative min-h-screen bg-black pt-32 pb-16">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-5">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                Skills
              </span>{" "}
              &{" "}
              <span className="bg-gradient-to-r from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-neutral-50 to-neutral-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and the tools I
              use to bring ideas to life.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SkillsGrid />
          </motion.div>
        </div>
      </BackgroundLines>
    </section>
  );
}

function SkillsGrid() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Code className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Programming Languages"
        description={
          <div className="space-y-1">
            <p className="font-semibold">JavaScript, TypeScript, C++, Python</p>
            <p>
              Core programming languages with strong expertise in modern web
              development and system programming.
            </p>
          </div>
        }
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Frameworks & Libraries"
        description={
          <div className="space-y-1">
            <p className="font-semibold">
              HTML, CSS, ReactJS, Redux, NextJS, Node, LangChain, LangGraph,
              Docker
            </p>
            <p>
              Building scalable applications with modern frameworks and emerging
              AI technologies.
            </p>
          </div>
        }
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Database className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Databases & Tools"
        description={
          <div className="space-y-1">
            <p className="font-semibold">
              MongoDB, Supabase, SQL, Zod, Postman, Netlify
            </p>
            <p>
              Database design and management with modern development tools.
              Experience in data validation and API testing for robust
              applications.
            </p>
          </div>
        }
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={
          <GitBranch className="h-4 w-4 text-black dark:text-neutral-400" />
        }
        title="Version Control"
        description={
          <div className="space-y-1">
            <p className="font-semibold">Git, Github</p>
            <p>
              Professional version control workflows and collaboration in team
              environments.
            </p>
          </div>
        }
      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Other Skills"
        description={
          <div className="space-y-1">
            <p className="font-semibold">
              Prompt Engineering, Cursor, AI Tools, Figma, UI/UX
            </p>
            <p>
              Proficient in modern AI tools and design thinking with expertise
              in prompt engineering and user experience design.
            </p>
          </div>
        }
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-white/10 p-2 md:rounded-3xl md:p-3 bg-black/20 backdrop-blur-sm">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2 bg-white/10 backdrop-blur-sm">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <div className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
