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

import { SparkleText } from "@/components/sparkle-text";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion } from "motion/react";
import { personalInfo } from "@/data/personal";

import Hyperspeed from "./Hyperspeed";

export function HeroSectionNew() {
  const tagline = "Software Engineer";
  const description =
    "I love to design and create scalable web applications with React, Next.js & Node.js. Delivering seamless digital experiences.";
  const mobileDescription =
    "Building scalable web apps with React, Next.js & Node.js.";

  return (
    <section id="home" className="h-screen w-full relative overflow-hidden">
      {/* Hyperspeed only on desktop */}
      <div className="hidden md:block relative h-full">
        <div className="absolute inset-0 z-0 h-screen flex items-center justify-center overflow-hidden">
          <Hyperspeed
            effectOptions={{
              onSpeedUp: () => {},
              onSlowDown: () => {},
              distortion: "turbulentDistortion",
              length: 500,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 4,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [400 * 0.03, 400 * 0.2],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0xffffff,
                brokenLines: 0xffffff,
                leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
                rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
                sticks: 0x03b3c3,
              },
            }}
          />
        </div>
        <div className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full relative z-10">
          <div className="max-w-5xl mx-auto text-center z-20 relative pt-14 md:pt-16">
            {/* Main Name with Sparkles */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-3 md:mb-3"
            >
              <SparkleText
                text="Chetan Kushwah"
                className="mb-1 text-3xl md:text-5xl lg:text-6xl font-medium bg-clip-text text-transparent bg-white leading-tight tracking-wide"
                sparkleCount={10}
              />
            </motion.div>

            {/* Professional Title */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-3"
            >
              <h2 className="text-2xl md:text-2xl lg:text-3xl font-medium text-white/90 mb-3 font-['Poppins'] tracking-wider">
                {tagline}
              </h2>
            </motion.div>

            {/* Animated Description */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-7 md:mb-7"
            >
              <TextGenerateEffect
                words={description}
                className="text-xs lg:text-xl text-white/70 max-w-4xl mx-auto font-['Poppins'] font-light leading-relaxed"
              />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-1 justify-center items-center"
            >
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-white/10 backdrop-blur-lg border border-white/30 text-white flex items-center space-x-2 px-5 py-2 font-bold text-sm hover:bg-white/20 hover:border-white/40 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 rounded-full relative before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/20 before:via-white/10 before:to-transparent before:opacity-50"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <span>View My Work</span>
              </HoverBorderGradient>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="absolute bottom-[-54px] left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-white/80 cursor-pointer hover:text-white transition-colors duration-300"
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-7 h-7"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile version with Hyperspeed */}
      <div className="md:hidden relative h-full">
        <div className="absolute inset-0 z-0 h-screen w-full flex items-center justify-center overflow-hidden">
          <Hyperspeed
            effectOptions={{
              onSpeedUp: () => {},
              onSlowDown: () => {},
              distortion: "turbulentDistortion",
              length: 500,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 4,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [400 * 0.03, 400 * 0.2],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0xffffff,
                brokenLines: 0xffffff,
                leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
                rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
                sticks: 0x03b3c3,
              },
            }}
          />
        </div>
        <div className="bg-black/20 flex items-center flex-col justify-center px-2 py-4 w-full h-full relative z-10">
          <div className="max-w-5xl mx-auto text-center z-20 relative pt-14">
            {/* Main Name with Sparkles */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-3"
            >
              <SparkleText
                text="Chetan Kushwah"
                className="mb-1 text-3xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight tracking-wide"
                sparkleCount={30}
              />
            </motion.div>

            {/* Professional Title */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-3"
            >
              <h2 className="text-base font-medium text-white/90 mb-3 font-['Poppins'] tracking-wider">
                {tagline}
              </h2>
            </motion.div>

            {/* Animated Description */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-7"
            >
              <TextGenerateEffect
                words={mobileDescription}
                className="text-xs text-white/70 max-w-3xl mx-auto font-['Poppins'] font-light leading-relaxed px-4"
              />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-1 justify-center items-center"
            >
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-white/10 backdrop-blur-lg border border-white/30 text-white flex items-center space-x-2 px-5 py-2 font-bold text-sm hover:bg-white/20 hover:border-white/40 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 rounded-full relative before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/20 before:via-white/10 before:to-transparent before:opacity-50"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <span>View My Work</span>
              </HoverBorderGradient>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="absolute bottom-[-54px] left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-white/80 cursor-pointer hover:text-white transition-colors duration-300"
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-7 h-7"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
