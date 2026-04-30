'use client'

import {
  useRef,
  type ComponentPropsWithoutRef,
  type FC,
  type ReactNode,
} from "react"
import { motion, MotionValue, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "end 45%"],
  })

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
            "relative z-0 flex flex-wrap justify-center text-[28px] md:text-[38px] lg:text-[46px] leading-[1.1] tracking-[-0.02em] pt-10 pb-4"
          }
          style={{ 
            backgroundImage: "radial-gradient(circle at 60% 180%, #FFFFFF 50%, #58b1e3 70%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent"
          }}
        > 
          {words.map((word, i) => {
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
  progress: MotionValue<number>
  range: [number, number]
}

const Char: FC<CharProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1])
  return (
    <motion.span
      style={{ opacity }}
      className="inline-block"
    >
      {children}
    </motion.span>
  )
}
