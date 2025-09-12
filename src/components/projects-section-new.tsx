"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { getFeaturedProjects } from "@/data/projects";
import { useRouter } from "next/navigation";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: string;
  status: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectsSectionNew() {
  const router = useRouter();
  const featuredProjects = getFeaturedProjects();

  const handleProjectClick = (projectId: string) => {
    router.push(`/projects/${projectId}`);
  };

  return (
    <section
      id="projects"
      className="relative bg-black py-16 md:py-32"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950/20 to-black -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Featured
            </span>{" "}
            <span className="bg-gradient-to-r from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neutral-50 to-neutral-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore my featured projects showcasing modern web development and
            innovative solutions
          </p>
        </motion.div>

        {/* 2x2 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-16">
          {featuredProjects.slice(0, 4).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <ProjectCard
                project={project}
                onClick={() => handleProjectClick(project.id)}
              />
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center items-center w-full"
        >
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-8 py-3 font-bold text-base"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              router.push("/projects");
            }}
          >
            <span>View All Projects</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </HoverBorderGradient>
        </motion.div>
      </div>
    </section>
  );
}

// Project Card Component (Based on Background Overlay Card)
function ProjectCard({ project, onClick }: ProjectCardProps) {
  const backgroundImages = [
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
  ];

  const hoverImages = [
    "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3",
  ];

  const projectIndex =
    Math.abs(project.id.split("").reduce((a, b) => a + b.charCodeAt(0), 0)) % 4;

  return (
    <div 
      className="w-full cursor-pointer" 
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
    >
      <div
        className={cn(
          "group w-full overflow-hidden relative card h-80 md:h-96 lg:h-[450px] rounded-2xl shadow-xl mx-auto flex flex-col justify-end p-4 md:p-6 border border-transparent dark:border-neutral-800",
          `bg-[url(${backgroundImages[projectIndex]})] bg-cover bg-center`,
          `before:bg-[url(${hoverImages[projectIndex]})] before:fixed before:inset-0 before:opacity-0 before:z-[-1]`,
          `hover:bg-[url(${hoverImages[projectIndex]})]`,
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500 hover:scale-105"
        )}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-gray-50 relative mb-3 md:mb-4">
            {project.title}
          </h1>
          <p className="font-normal text-sm md:text-base text-gray-50 relative mb-4 md:mb-6 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack Preview */}
          <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs bg-white/20 text-white rounded-full backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-3 py-1 text-xs bg-white/20 text-white rounded-full backdrop-blur-sm">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>

          <HoverBorderGradient
            containerClassName="rounded-full"
            as="div"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-2 font-bold text-sm"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <span>View Project</span>
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
}
