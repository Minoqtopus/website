"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  duration?: number;
  threshold?: number;
}

export function ScrollReveal({ 
  children, 
  className = "", 
  delay = 0, 
  direction = 'up',
  duration = 800,
  threshold = 0.1
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { 
        threshold,
        rootMargin: '50px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translateY(40px)';
      case 'down':
        return 'translateY(-40px)';
      case 'left':
        return 'translateX(-40px)';
      case 'right':
        return 'translateX(40px)';
      case 'scale':
        return 'scale(0.95)';
      case 'fade':
        return 'translateY(20px)';
      default:
        return 'translateY(40px)';
    }
  };

  const getFinalTransform = () => {
    switch (direction) {
      case 'scale':
        return 'scale(1)';
      default:
        return 'translateY(0) translateX(0)';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all ${
        isVisible
          ? "opacity-100 transform"
          : "opacity-0"
      } ${className}`}
      style={{
        transform: isVisible ? getFinalTransform() : getInitialTransform(),
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
    >
      {children}
    </div>
  );
}