"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useParams, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { getProjectById } from "@/data/projects";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const project = getProjectById(projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Project Not Found
          </h1>
          <button
            onClick={() => router.back()}
            className="px-6 py-3 bg-white text-black rounded-full font-medium"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const backgroundImages = [
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
  ];

  const projectIndex =
    Math.abs(project.id.split("").reduce((a, b) => a + b.charCodeAt(0), 0)) % 4;

  return (
    <BackgroundRippleEffect
      className="min-h-screen bg-black text-white"
      rippleColor="#ffffff"
      squareSize={2}
      gridGap={30}
    >
      {/* Navigation */}
      <nav className="relative z-50 p-4">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => router.push("/projects")}
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
          <span className="font-medium">Back to Projects</span>
        </motion.button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-8 pb-14">
        <div className="max-w-5xl mx-auto px-4">
          {/* Project Image Hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative mb-11"
          >
            <div
              className="relative h-[280px] lg:h-[350px] rounded-2xl overflow-hidden shadow-xl border border-neutral-800 cursor-pointer group"
              onClick={() => setSelectedImage(backgroundImages[projectIndex])}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${backgroundImages[projectIndex]})`,
                }}
              />
              <div className="absolute top-6 right-4 bg-black/60 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-2xl md:text-4xl font-bold text-white mb-3"
                >
                  {project.title}
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="flex items-center space-x-3"
                >
                  <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs font-medium backdrop-blur-sm">
                    {project.category.toUpperCase()}
                  </span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium backdrop-blur-sm">
                    {project.status.toUpperCase()}
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-11 items-start">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">
                  Project Overview
                </h2>
                <p className="text-base text-gray-300 leading-relaxed mb-6">
                  {project.longDescription || project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-base font-semibold text-white mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      className="px-3 py-1 bg-gradient-to-r from-neutral-800 to-neutral-700 text-neutral-200 rounded-full text-xs font-medium border border-neutral-600"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                {project.liveUrl && (
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2 px-6 py-2 font-bold text-sm"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <span>Live Demo</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </HoverBorderGradient>
                )}

                {project.githubUrl && (
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2 px-6 py-2 font-bold text-sm"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <span>View Code</span>
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </HoverBorderGradient>
                )}
              </motion.div>
            </motion.div>

            {/* Project Features */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Key Features
                </h3>
                <div className="space-y-3">
                  {project.features?.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-start space-x-2"
                    >
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </motion.div>
                  )) ||
                    [
                      "Modern and responsive design",
                      "Performance optimized",
                      "Cross-platform compatibility",
                      "Scalable architecture",
                    ].map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        className="flex items-start space-x-2"
                      >
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Project Images */}
      <section className="relative z-10 py-14">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-11"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Project Gallery
            </h2>
            <div className="w-14 h-0.5 bg-gray-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-11">
            {backgroundImages.slice(0, 2).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative h-56 rounded-xl overflow-hidden shadow-xl border border-neutral-800 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-6 right-4 bg-black/60 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs font-medium backdrop-blur-sm">
                    Screenshot {index + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Big Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-11"
          >
            <div
              className="relative h-64 lg:h-[350px] rounded-2xl overflow-hidden shadow-xl border border-neutral-800 cursor-pointer group"
              onClick={() =>
                setSelectedImage(backgroundImages[(projectIndex + 2) % 4])
              }
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${
                    backgroundImages[(projectIndex + 2) % 4]
                  })`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Detailed Project Information */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-6"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Development Approach */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Development Approach
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  This project was built with a focus on modern development
                  practices, emphasizing clean code architecture, performance
                  optimization, and user experience. The implementation follows
                  industry best practices with comprehensive testing and
                  documentation.
                </p>

                <h4 className="text-base font-semibold text-white mb-3">
                  Key Technical Highlights
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2 mt-1 text-xs">•</span>
                    <span className="text-sm text-gray-300">
                      Component-based architecture for scalability
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2 mt-1 text-xs">•</span>
                    <span className="text-sm text-gray-300">
                      Responsive design with mobile-first approach
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2 mt-1 text-xs">•</span>
                    <span className="text-sm text-gray-300">
                      Performance optimization and lazy loading
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2 mt-1 text-xs">•</span>
                    <span className="text-sm text-gray-300">
                      Cross-browser compatibility and accessibility
                    </span>
                  </li>
                </ul>
              </div>

              {/* Impact & Results */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Impact & Results
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  The successful implementation of this project resulted in
                  significant improvements in user engagement, performance
                  metrics, and overall user satisfaction. The solution
                  effectively addresses the core requirements while providing a
                  solid foundation for future enhancements.
                </p>

                <h4 className="text-base font-semibold text-white mb-3">
                  Project Outcomes
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-neutral-800/50 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold text-white mb-1">98%</div>
                    <div className="text-xs text-gray-400">
                      Performance Score
                    </div>
                  </div>
                  <div className="bg-neutral-800/50 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold text-white mb-1">
                      100%
                    </div>
                    <div className="text-xs text-gray-400">
                      Mobile Responsive
                    </div>
                  </div>
                  <div className="bg-neutral-800/50 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold text-white mb-1">A+</div>
                    <div className="text-xs text-gray-400">Security Grade</div>
                  </div>
                  <div className="bg-neutral-800/50 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold text-white mb-1">5★</div>
                    <div className="text-xs text-gray-400">User Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Screen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-0 -right-12 bg-black/60 backdrop-blur-sm rounded-full p-2 text-white hover:text-gray-300 hover:bg-black/80 transition-all duration-200 z-10 cursor-pointer"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <img
                src={selectedImage}
                alt="Project Screenshot"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </BackgroundRippleEffect>
  );
}
