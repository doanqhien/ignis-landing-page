"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { LoadingContext } from "@/src/lib/LoadingContext";

export const LoadingScreen = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [colorRevealed, setColorRevealed] = useState(false);

  useEffect(() => {
    // Wait for the page to be fully loaded, then show exit animation
    const handleLoad = () => {
      // First: reveal color on the logo
      setTimeout(() => {
        setColorRevealed(true);
      }, 1200);

      // Then: dismiss the loading screen
      setTimeout(() => {
        setIsLoading(false);
      }, 2200);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  // Prevent scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      // Delay to let exit animation finish
      const timer = setTimeout(() => {
        document.body.style.overflow = "unset";
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loading-screen"
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0c]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Background image */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <Image
                src="/background.png"
                alt="Background"
                fill
                priority
                className="object-cover opacity-40"
              />
            </div>

            {/* Logo: grayscale → color transition */}
            <motion.div
              initial={{ opacity: .8, scale: .99 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <Image
                src="/Logo.png"
                alt="Ignis Hypersonics"
                width={160}
                height={60}
                priority
                className="w-[130px] md:w-[160px] h-auto transition-all duration-1000 ease-out"
                style={{
                  filter: colorRevealed ? "grayscale(0.5) brightness(1)" : "grayscale(1) brightness(0)",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page content - always rendered but hidden behind loading screen */}
      <LoadingContext.Provider value={isLoading}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {children}
        </motion.div>
      </LoadingContext.Provider>
    </>
  );
};
