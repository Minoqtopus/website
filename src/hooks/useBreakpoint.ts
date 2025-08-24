"use client";

import { useEffect, useState } from 'react';

// Breakpoint definitions matching Tailwind CSS defaults
const breakpoints = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

type Breakpoint = keyof typeof breakpoints;

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('xs');
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setWindowSize({ width, height });

      // Determine current breakpoint
      if (width >= breakpoints['2xl']) {
        setBreakpoint('2xl');
      } else if (width >= breakpoints.xl) {
        setBreakpoint('xl');
      } else if (width >= breakpoints.lg) {
        setBreakpoint('lg');
      } else if (width >= breakpoints.md) {
        setBreakpoint('md');
      } else if (width >= breakpoints.sm) {
        setBreakpoint('sm');
      } else {
        setBreakpoint('xs');
      }
    }

    // Set initial size
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Helper functions for common checks
  const isAbove = (bp: Breakpoint) => windowSize.width >= breakpoints[bp];
  const isBelow = (bp: Breakpoint) => windowSize.width < breakpoints[bp];
  const isBetween = (min: Breakpoint, max: Breakpoint) => 
    windowSize.width >= breakpoints[min] && windowSize.width < breakpoints[max];

  return {
    breakpoint,
    windowSize,
    isAbove,
    isBelow,
    isBetween,
    // Convenience booleans
    isXs: breakpoint === 'xs',
    isSm: breakpoint === 'sm',
    isMd: breakpoint === 'md',
    isLg: breakpoint === 'lg',
    isXl: breakpoint === 'xl',
    is2Xl: breakpoint === '2xl',
    // Common responsive checks
    isMobile: isBelow('md'),
    isTablet: isBetween('md', 'lg'),
    isDesktop: isAbove('lg'),
  };
}