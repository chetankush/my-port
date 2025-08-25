"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import { getFeaturedProjects } from "@/data/projects";
import { motion } from "framer-motion";

export function ProjectsSection() {
  const featuredProjects = getFeaturedProjects();

  const projectItems = featuredProjects.map((project) => ({
    title: project.title,
    description: project.description,
    link: project.demoUrl || project.githubUrl || "#",
  }));

  return (
    <section id="projects" className="min-h-screen bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
            Featured Projects
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Here are some of my favorite projects that showcase my skills in
            full-stack development, UI/UX design, and modern web technologies.
          </p>
        </motion.div>

        <HoverEffect items={projectItems} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
            View All Projects
            <svg
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
