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
  
  // Adjust offset to reveal over a more visible range
  // "start 85%" -> starts revealing when the top of element is 85% down the viewport
  // "end 15%" -> finishes revealing when the bottom of element is 15% from the top
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 65%", "end 65%"],
  })

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string")
  }

  const words = children.split(" ")

  return (
    <div ref={sectionRef} className={cn("relative z-0 min-h-[20vh]", className)}>
      <div className="bg-transparent">
        <span
          className={
            "flex flex-wrap justify-center text-[32px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] text-white pt-10"
          }
        > 
          {words.map((word, i) => {
            const start = i / words.length
            const end = start + 1 / words.length
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            )
          })}
        </span>
      </div>
    </div>
  )
}

interface WordProps {
  children: ReactNode
  progress: MotionValue<number>
  range: [number, number]
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])
  const blur = useTransform(progress, range, [5, 0])
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span
        style={{ opacity: opacity, filter: `blur(${blur}px)` }}
        className={"bg-[linear-gradient(180deg,#58b1e3_40%,#b2dbf2_70%,#ffffff_90%)] bg-clip-text text-transparent"}
      >
        {children}
      </motion.span>
    </span>
  )
}
