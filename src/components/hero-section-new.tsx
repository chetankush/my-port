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
import { Vortex } from "@/components/ui/vortex";
import { SparkleText } from "@/components/sparkle-text";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion } from "motion/react";
import { personalInfo } from "@/data/personal";

export function HeroSectionNew() {
  const tagline = "Software Engineer";
  const description =
    "I love to design and create scalable web applications with React, Next.js & Node.js. Delivering seamless digital experiences.";

  return (
    <section id="home" className="h-screen w-full relative overflow-hidden">
      <Vortex
        backgroundColor="black"
        particleCount={500}
        baseSpeed={0.1}
        rangeSpeed={1.0}
        baseRadius={1}
        rangeRadius={1.5}
        baseHue={200}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
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
              className="mb-1 text-3xl md:text-5xl lg:text-6xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight tracking-wide"
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
            <h2 className="text-base md:text-2xl lg:text-2xl font-medium text-white/90 mb-3 font-['Poppins'] tracking-wider">
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
              className="text-xs md:text-xs text-white/70 max-w-4xl mx-auto font-['Poppins'] font-light leading-relaxed"
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
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-5 py-2 font-bold text-sm"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
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
      </Vortex>
    </section>
  );
}
