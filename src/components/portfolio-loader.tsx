"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LoaderFour } from "@/components/ui/loader";

export function PortfolioLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-neutral-600 to-neutral-800 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">CK</span>
              </div>
            </motion.div>

            <LoaderFour text="Loading Portfolio..." />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-gray-400 mt-4"
            >
              Preparing something amazing for you...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
