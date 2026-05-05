'use client'

import {
  useRef,
  useState,
  useEffect,
  type ComponentPropsWithoutRef,
  type FC,
  type ReactNode,
} from "react"
import { cn } from "@/lib/utils"

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [scrollYProgress, setScrollYProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    
    const handleScroll = () => {
      if (!sectionRef.current) return
      
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const scrollY = window.scrollY
      const documentHeight = document.documentElement.scrollHeight
      
      // Calculate progress based on scroll position relative to the target offsets
      // Offset: ["start 90%", "end 60%"] - Using 60% instead of 45% to finish earlier
      const start = windowHeight * 0.9
      const end = windowHeight * 0.6
      
      const elementHeight = rect.height
      const totalDistance = start - end + elementHeight
      const currentDistance = start - rect.top
      
      let calculatedProgress = currentDistance / totalDistance

      // Special case: If we've scrolled to the very bottom of the page, force progress to 1
      // this is important for elements near the footer on large screens.
      const isAtBottom = windowHeight + scrollY >= documentHeight - 10
      if (isAtBottom && calculatedProgress > 0) {
        calculatedProgress = 1
      }
      
      setScrollYProgress(Math.min(Math.max(calculatedProgress, 0), 1))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string")
  }

  const words = children.split(" ")
  const totalChars = children.length
  let charIndex = 0

  return (
    <div ref={sectionRef} className={cn("relative z-0 min-h-[20vh]", className)}>
      <div className="bg-transparent relative">
        <div
          className={
            "relative z-0 text-balance text-center text-[28px] md:text-[38px] lg:text-[46px] leading-[1.1] tracking-[-0.02em] pt-10 pb-4"
          }
          style={{ 
            backgroundImage: "radial-gradient(circle at 60% 180%, #FFFFFF 50%, #58b1e3 70%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent"
          }}
        > 
          {words.map((word, i) => {
            if (isMobile) {
              const start = i / words.length
              const end = start + 1 / words.length
              return (
                <Char key={i} progress={scrollYProgress} range={[start, end]}>
                  <span className="mx-1 whitespace-nowrap">{word}</span>
                </Char>
              )
            }
            const chars = word.split("")
            const wordElement = (
              <span key={i} className="inline-block mx-1 md:mx-1.5 whitespace-nowrap">
                {chars.map((char, j) => {
                  const start = charIndex / totalChars
                  const end = start + 1 / totalChars
                  charIndex++
                  return (
                    <Char key={j} progress={scrollYProgress} range={[start, end]}>
                      {char}
                    </Char>
                  )
                })}
              </span>
            )
            charIndex++ // Add 1 for the space between words
            return wordElement
          })}
        </div>
      </div>
    </div>
  )
}

interface CharProps {
  children: ReactNode
  progress: number
  range: [number, number]
}

const Char: FC<CharProps> = ({ children, progress, range }) => {
  const [start, end] = range
  // Calculate opacity based on progress and range (equivalent to useTransform)
  const opacity = Math.min(Math.max((progress - start) / (end - start), 0), 1) * 0.85 + 0.15
  
  return (
    <span
      style={{ opacity }}
      className="inline-block transition-opacity duration-75 ease-out"
    >
      {children}
    </span>
  )
}
