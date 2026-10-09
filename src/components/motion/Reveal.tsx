"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  /** Seconds to wait before this element starts. */
  delay?: number;
  direction?: Direction;
  className?: string;
  /** Render as a different element where the parent's layout needs it. */
  as?: "div" | "section" | "li" | "span";
}

const OFFSET = 18;

function offsetFor(direction: Direction) {
  switch (direction) {
    case "up":
      return { y: OFFSET };
    case "left":
      return { x: -OFFSET };
    case "right":
      return { x: OFFSET };
    default:
      return {};
  }
}

/**
 * Reveals its children once they scroll into view.
 *
 * The element is visible at rest and only animates the last few pixels of
 * travel, so a reader who lands mid-page — or who has reduced motion on, or
 * whose JS has not hydrated — still sees fully rendered content.
 */
export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
  as = "div",
}: RevealProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  const variants: Variants = {
    hidden: reduced ? { opacity: 1 } : { opacity: 0, ...offsetFor(direction) },
    shown: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: reduced ? 0 : 0.55,
        delay: reduced ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.25, margin: "0px 0px -80px 0px" }}
    >
      {children}
    </MotionTag>
  );
}
