"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { LoadingContext } from "@/src/lib/LoadingContext";
import { cn } from "@/src/lib/utils";
import Aurora  from "@/components/ui/aurora";

export const LoadingScreen = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [colorRevealed, setColorRevealed] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

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
        // Remove from DOM after exit animation finishes
        setTimeout(() => {
          setIsMounted(false);
        }, 800);
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
      {isMounted && (
        <div
          className={cn(
            "fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#0a0a0c] transition-opacity duration-600 ease-[cubic-bezier(0.76,0,0.24,1)]",
            !isLoading ? "opacity-0 pointer-events-none" : "opacity-100"
          )}
        >
          {/* Background image */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Aurora
              colorStops={["#787878","#2b2b2b","#cdcdcd"]}
              blend={1}
              speed={1}
              amplitude={1}
          />
          </div>

          {/* Logo: grayscale → color transition */}
          <div
            className={cn(
              "relative z-10"
            )}
          >
            <Image
              src="/Logo.png"
              alt="Ignis Hypersonics"
              width={160}
              height={60}
              priority
              className="w-32.5 md:w-40 h-auto transition-all duration-1000 ease-out"
              style={{
                filter: colorRevealed ? "grayscale(0.5) brightness(1)" : "grayscale(1) brightness(0)",
              }}
            />
          </div>
        </div>
      )}

      {/* Page content - always rendered but hidden behind loading screen */}
      <LoadingContext.Provider value={isLoading}>
        <div
          className={cn(
            "transition-opacity duration-500 delay-100",
            isLoading ? "opacity-0" : "opacity-100"
          )}
        >
          {children}
        </div>
      </LoadingContext.Provider>
    </>
  );
};
