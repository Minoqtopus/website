"use client";

import { CalendarIcon, LinkedInIcon } from "@/components/icons";
import { homeCopy } from "@/lib/content";
import { APP_CONFIG } from "@/config";

import { CTAButton, CTASectionProps } from '@/types';

// Default button configurations from content and config
const defaultPrimaryButton: CTAButton = {
  href: APP_CONFIG.calendlyUrl,
  label: homeCopy.hero.cta.primary.text,
  ariaLabel: homeCopy.hero.cta.primary.ariaLabel,
  variant: 'primary',
  icon: 'calendar',
  text: homeCopy.hero.cta.primary.text
};

const defaultSecondaryButton: CTAButton = {
  href: APP_CONFIG.upworkUrl,
  label: "Hire on Upwork",
  ariaLabel: "Hire us on Upwork platform",
  variant: 'secondary',
  icon: 'upwork',
  text: "Hire on Upwork"
};

export function CTASection({ 
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
          target="_blank"
          rel="noopener noreferrer"
          className="group relative text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold hover:bg-green-800 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 overflow-hidden focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 font-display inline-flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center"
          style={{ backgroundColor: 'var(--color-primary)' }}
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
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white border-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 font-display inline-flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center"
        style={{ 
          color: 'var(--color-primary)',
          borderColor: 'var(--color-primary)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--color-primary)';
          e.currentTarget.style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'white';
          e.currentTarget.style.color = 'var(--color-primary)';
        }}
        onFocus={(e) => {
          e.currentTarget.style.outlineColor = 'var(--color-primary)';
        }}
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