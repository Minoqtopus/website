"use client";

import {
  animate,
  useInView,
  useReducedMotion,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** The finished string, e.g. "15+", "$5M+", "100%". */
  value: string;
}

/** Splits "$5M+" into "$", 5, "M+". */
function parse(value: string) {
  const match = value.match(/^(\D*)([\d.]+)(.*)$/);
  if (!match) return null;
  const [, prefix, digits, suffix] = match;
  return { prefix, target: parseFloat(digits), suffix, decimals: (digits.split(".")[1] || "").length };
}

/**
 * Counts up to the value when it scrolls into view.
 *
 * Renders the final value immediately when motion is reduced, when the string
 * has no number to animate, or before hydration — the figure is content, so it
 * must never depend on the animation having run.
 */
export default function CountUp({ value }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduced = useReducedMotion();
  const parsed = parse(value);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!parsed || reduced || !inView) return;

    const controls = animate(0, parsed.target, {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        setDisplay(
          `${parsed.prefix}${latest.toFixed(parsed.decimals)}${parsed.suffix}`
        );
      },
    });

    return () => controls.stop();
  }, [inView, reduced, parsed?.target, parsed?.prefix, parsed?.suffix, parsed?.decimals]);

  // Start from the real value so SSR and the pre-hydration frame are correct.
  return (
    <span ref={ref} className="tabular-nums">
      {parsed && inView && !reduced ? display : value}
    </span>
  );
}
