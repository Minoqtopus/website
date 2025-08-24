// Component Type Definitions

// Icon Types
export interface IconProps {
  className?: string;
  width?: number;
  height?: number;
}

// Section Types
export interface SectionProps {
  className?: string;
}

// CTA Types
export interface CTAButton {
  href: string;
  label: string;
  ariaLabel: string;
  variant: 'primary' | 'secondary';
  icon?: 'calendar' | 'linkedin' | 'email' | 'phone';
  text: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

export interface CTASectionProps extends SectionProps {
  primaryButton?: CTAButton;
  secondaryButton?: CTAButton;
}

// Hero Types
export interface HeroProps extends SectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

// ScrollReveal Types
export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  duration?: number;
  threshold?: number;
}

// Trust Indicator Types
export interface TrustIndicator {
  id: string;
  text: string;
  icon?: React.ReactNode;
}

// Background Decoration Types
export interface BackgroundDecoration {
  position: string;
  color: string;
  size: string;
  animationDelay?: number;
}