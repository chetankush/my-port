"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  scale: number;
  delay: number;
}

interface SparkleTextProps {
  text: string;
  className?: string;
  sparkleCount?: number;
}

export function SparkleText({
  text,
  className,
  sparkleCount = 20,
}: SparkleTextProps) {
  const [sparkles, setSparkles] = React.useState<Sparkle[]>([]);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!mounted) return;
    
    const generateSparkles = () => {
      const newSparkles: Sparkle[] = [];
      for (let i = 0; i < sparkleCount; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          scale: Math.random() * 0.5 + 0.5,
          delay: Math.random() * 2,
        });
      }
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 3000);
    return () => clearInterval(interval);
  }, [sparkleCount, mounted]);

  return (
    <div className={cn("relative inline-block")}>
      <motion.h1
        className={cn("relative z-10 text-center", className)}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {text}
      </motion.h1>

      {/* Sparkles */}
      {mounted && sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute pointer-events-none z-20"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, sparkle.scale, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            delay: sparkle.delay,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 0L7.08 4.92L12 6L7.08 7.08L6 12L4.92 7.08L0 6L4.92 4.92L6 0Z"
              fill="url(#sparkleGradient)"
            />
            <defs>
              <linearGradient
                id="sparkleGradient"
                x1="0"
                y1="0"
                x2="12"
                y2="12"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ffffff" />
                <stop offset="0.5" stopColor="#e2e8f0" />
                <stop offset="1" stopColor="#cbd5e1" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
