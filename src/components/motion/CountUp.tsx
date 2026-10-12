"use client";

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
  return {
    prefix,
    target: parseFloat(digits),
    suffix,
    decimals: (digits.split(".")[1] || "").length,
  };
}

/**
 * Counts up to the value when it scrolls into view.
 *
 * Uses requestAnimationFrame rather than an animation library: this ran on
 * Motion's `animate()`, which cost far more than the effect is worth.
 *
 * The real value renders on the server and whenever motion is reduced, so the
 * figure never depends on the animation having run.
 */
export default function CountUp({ value }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const parsed = parse(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || !parsed) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    let frame = 0;
    const DURATION = 900;

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / DURATION);
          // Same easing curve the rest of the site uses.
          const eased = 1 - Math.pow(1 - t, 3);
          const current = parsed.target * eased;
          setDisplay(
            `${parsed.prefix}${current.toFixed(parsed.decimals)}${parsed.suffix}`
          );
          if (t < 1) frame = requestAnimationFrame(tick);
          else setDisplay(value);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, parsed?.target, parsed?.prefix, parsed?.suffix, parsed?.decimals]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  );
}
