"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
  projects,
  projectCategories,
  getProjectsByCategory,
} from "@/data/projects";

export default function ProjectsPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : getProjectsByCategory(selectedCategory as any);

  const handleProjectClick = (projectId: string) => {
    router.push(`/projects/${projectId}`);
  };

  const backgroundImages = [
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
  ];

  return (
    <BackgroundRippleEffect
      className="min-h-screen bg-black text-white"
      rippleColor="#ffffff"
      squareSize={2}
      gridGap={30}
    >
      {/* Navigation */}
      <nav className="relative z-50 p-6">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => router.push("/")}
          className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors cursor-pointer"
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="font-medium">Back to Home</span>
        </motion.button>
      </nav>

      {/* Header */}
      <section className="relative z-10 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                All
              </span>{" "}
              <span className="bg-gradient-to-r from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-neutral-50 to-neutral-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore my complete portfolio showcasing modern web development,
              AI solutions, and innovative applications
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {projectCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer",
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-neutral-600 to-neutral-800 text-white shadow-lg"
                    : "bg-neutral-800 text-gray-300 hover:bg-neutral-700 hover:text-white"
                )}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => {
              const projectIndex =
                Math.abs(
                  project.id.split("").reduce((a, b) => a + b.charCodeAt(0), 0)
                ) % 4;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => handleProjectClick(project.id)}
                >
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl border border-neutral-800 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${backgroundImages[projectIndex]})`,
                      }}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      {/* Top badges */}
                      <div className="flex justify-between items-start">
                        <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs font-medium backdrop-blur-sm">
                          {project.category.toUpperCase()}
                        </span>
                        <span
                          className={cn(
                            "px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm",
                            project.status === "completed"
                              ? "bg-green-500/20 text-green-300"
                              : project.status === "in-progress"
                              ? "bg-yellow-500/20 text-yellow-300"
                              : "bg-blue-500/20 text-blue-300"
                          )}
                        >
                          {project.status.toUpperCase()}
                        </span>
                      </div>

                      {/* Bottom content */}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Tech stack preview */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs bg-white/10 text-white rounded backdrop-blur-sm"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-2 py-1 text-xs bg-white/10 text-white rounded backdrop-blur-sm">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>

                        <HoverBorderGradient
                          containerClassName="rounded-full"
                          as="div"
                          className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2 px-4 py-2 font-bold text-sm w-full"
                        >
                          <span>View Details</span>
                          <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                </motion.div>
              );
            })}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-400 mb-2">
                No projects found
              </h3>
              <p className="text-gray-500">
                Try selecting a different category
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </BackgroundRippleEffect>
  );
}
