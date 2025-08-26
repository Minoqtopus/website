"use client";

import { CalendarIcon, LinkedInIcon } from "@/components/icons";
import { homeCopy } from "@/lib/content";

import { CTAButton, CTASectionProps } from '@/types';

// Default button configurations from content and config
const defaultPrimaryButton: CTAButton = {
  href: homeCopy.hero.cta.primary.href,
  label: homeCopy.hero.cta.primary.text,
  ariaLabel: homeCopy.hero.cta.primary.ariaLabel,
  variant: 'primary',
  icon: undefined,
  text: homeCopy.hero.cta.primary.text
};

const defaultSecondaryButton: CTAButton = {
  href: homeCopy.hero.cta.secondary.href,
  label: homeCopy.hero.cta.secondary.text,
  ariaLabel: homeCopy.hero.cta.secondary.ariaLabel,
  variant: 'secondary',
  icon: 'calendar',
  text: homeCopy.hero.cta.secondary.text
};

export function LandingCTA({ 
  primaryButton = defaultPrimaryButton,
  secondaryButton = defaultSecondaryButton,
  className = ""
}: CTASectionProps) {
  
  const renderIcon = (icon?: string) => {
    switch(icon) {
      case 'calendar':
        return <CalendarIcon />;
      case 'linkedin':
        return <LinkedInIcon />;
      case 'upwork':
        return null; // No icon for now, could add Upwork icon later
      default:
        return null;
    }
  };

  const renderButton = (button: CTAButton) => {
    if (button.variant === 'primary') {
      return (
        <a
          href={button.href}
          target={button.href?.startsWith('http') ? "_blank" : undefined}
          rel={button.href?.startsWith('http') ? "noopener noreferrer" : undefined}
          className="group relative bg-green-700 hover:bg-green-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 overflow-hidden focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 font-display inline-flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center"
          aria-label={button.ariaLabel}
        >
          {renderIcon(button.icon)}
          <span className="relative z-10">{button.text}</span>
        </a>
      );
    }

    // Secondary button (LinkedIn style)
    return (
      <a
        href={button.href}
        target={button.href?.startsWith('http') ? "_blank" : undefined}
        rel={button.href?.startsWith('http') ? "noopener noreferrer" : undefined}
        className="bg-white border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 font-display inline-flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center"
        aria-label={button.ariaLabel}
      >
        {renderIcon(button.icon)}
        <span>{button.text}</span>
      </a>
    );
  };

  return (
    <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 px-4 sm:px-0 ${className}`}>
      {renderButton(primaryButton)}
      {renderButton(secondaryButton)}
    </div>
  );
}