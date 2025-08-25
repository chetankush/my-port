"use client";
import React from "react";
import { motion } from "motion/react";
import { personalInfo, stats } from "@/data/personal";

export function AboutSection() {
  return (
    <section id="about" className="relative bg-white dark:bg-black pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              About
            </span>{" "}
            <span className="bg-gradient-to-r from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neutral-50 to-neutral-400 mx-auto mb-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white">
              Passionate Developer & Problem Solver
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {personalInfo.bio}
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Location
                </p>
                <p className="text-black dark:text-white font-medium">
                  {personalInfo.location}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Availability
                </p>
                <p className="text-green-500 font-medium">Available for work</p>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-neutral-50 to-neutral-400 bg-clip-text text-transparent"
              >
                {stats.yearsOfExperience}+
              </motion.p>
              <p className="text-gray-600 dark:text-gray-300 font-medium">
                Years Experience
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
              >
                {stats.projectsCompleted}+
              </motion.p>
              <p className="text-gray-600 dark:text-gray-300 font-medium">
                Projects Completed
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"
              >
                {stats.clientsSatisfied}+
              </motion.p>
              <p className="text-gray-600 dark:text-gray-300 font-medium">
                Happy Clients
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
              >
                {Math.floor(stats.linesOfCode / 1000)}K+
              </motion.p>
              <p className="text-gray-600 dark:text-gray-300 font-medium">
                Lines of Code
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
