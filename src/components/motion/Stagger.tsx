"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

interface StaggerProps {
  children: ReactNode;
  className?: string;
  /** Seconds between each child. Keep small — this runs across a whole grid. */
  gap?: number;
  as?: "div" | "ul";
}

/**
 * Reveals a group of siblings one after another.
 *
 * Pair with `StaggerItem` for each child. The container itself does not move,
 * so a grid's layout is never disturbed mid-animation.
 */
export default function Stagger({
  children,
  className,
  gap = 0.07,
  as = "div",
}: StaggerProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  const variants: Variants = {
    hidden: {},
    shown: {
      transition: { staggerChildren: reduced ? 0 : gap },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -60px 0px" }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  const variants: Variants = {
    hidden: reduced ? { opacity: 1 } : { opacity: 0, y: 16 },
    shown: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduced ? 0 : 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}
