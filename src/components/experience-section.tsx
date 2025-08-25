"use client";
import React from "react";
import { motion } from "motion/react";
import { experiences, education } from "@/data/experience";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  const ExperienceCard = ({ item, index }: { item: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
      >
        <div className="grid md:grid-cols-4 gap-6">
          {/* Left Column - Basic Info */}
          <div className="md:col-span-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-4">
              {`${item.startDate} - ${
                item.endDate === "present" ? "Present" : item.endDate
              }`}
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <h4 className="text-lg text-blue-400 mb-2">{item.company}</h4>
            <p className="text-gray-400 text-sm mb-4">{item.location}</p>

            {/* Technologies */}
            {item.technologies && (
              <div>
                <p className="text-sm font-semibold text-gray-400 mb-3">
                  Technologies:
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-neutral-500/20 text-neutral-300 rounded-md border border-neutral-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Description & Achievements */}
          <div className="md:col-span-3">
            {/* Description with Bullet Points */}
            {item.description && (
              <div className="mb-6">
                <h5 className="text-lg font-semibold text-white mb-4">
                  Key Responsibilities
                </h5>
                <ul className="space-y-3">
                  {item.description.map((desc: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-400 mr-3 mt-1.5 text-sm">
                        •
                      </span>
                      <span className="text-gray-300 leading-relaxed">
                        {desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Achievements */}
            {item.achievements && (
              <div>
                <h5 className="text-lg font-semibold text-white mb-4">
                  Key Achievements
                </h5>
                <ul className="grid md:grid-cols-2 gap-2">
                  {item.achievements.map((achievement: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-400 mr-3 mt-1.5 text-sm">
                        ✓
                      </span>
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  const EducationCard = ({ item, index }: { item: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
      >
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium mb-4">
              {item.endDate}
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{item.degree}</h3>
            <h4 className="text-base text-purple-400 mb-2">
              {item.institution}
            </h4>
            <p className="text-gray-400 text-sm">{item.location}</p>
          </div>

          <div className="md:col-span-2">
            {item.relevant_coursework && (
              <div>
                <h5 className="text-base font-semibold text-white mb-3">
                  Relevant Coursework
                </h5>
                <div className="grid md:grid-cols-2 gap-2">
                  {item.relevant_coursework.map(
                    (course: string, idx: number) => (
                      <span key={idx} className="flex items-start">
                        <span className="text-purple-400 mr-2 mt-1.5 text-sm">
                          •
                        </span>
                        <span className="text-gray-300 text-sm">{course}</span>
                      </span>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section
      id="experience"
      className="relative min-h-screen bg-black pt-32 pb-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950/10 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Experience
            </span>{" "}
            &{" "}
            <span className="bg-gradient-to-r from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neutral-50 to-neutral-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey and educational background that shaped my
            expertise.
          </p>
        </motion.div>

        {/* Experience Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Professional Experience
          </motion.h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={`exp-${index}`} item={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Education
          </motion.h3>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <EducationCard key={`edu-${index}`} item={edu} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
