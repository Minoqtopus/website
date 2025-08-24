"use client";

import { useScrollReveal } from '@/hooks';
import { ScrollRevealProps } from '@/types';

export function ScrollReveal({ 
  children, 
  className = "", 
  delay = 0, 
  direction = 'up',
  duration = 800,
  threshold = 0.1
}: ScrollRevealProps) {
  const { ref, style, className: revealClassName } = useScrollReveal({
    delay,
    direction,
    duration,
    threshold
  });

  return (
    <div
      ref={ref}
      className={`${revealClassName} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}