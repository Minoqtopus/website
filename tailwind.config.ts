import type { Config } from 'tailwindcss';
import { colors, spacing, typography, breakpoints, shadows, borders, gradients, effects } from './src/lib/design-system';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        primary: colors.brand.primary,
        secondary: colors.brand.secondary,
        
        // Green color palette
        green: colors.green,
        
        // Semantic colors
        success: colors.semantic.success,
        warning: colors.semantic.warning,
        error: colors.semantic.error,
        info: colors.semantic.info,
        
        // Neutral colors
        gray: colors.neutral.gray,
      },
      fontFamily: {
        sans: typography.fonts.sans,
        mono: typography.fonts.mono,
      },
      fontSize: Object.entries(typography.sizes).reduce((acc, [key, value]) => ({
        ...acc,
        [key]: [value.size, { lineHeight: value.lineHeight }],
      }), {}),
      fontWeight: typography.weights,
      letterSpacing: typography.letterSpacing,
      spacing: spacing,
      screens: breakpoints,
      boxShadow: shadows,
      borderRadius: borders.radius,
      borderWidth: borders.width,
      backgroundImage: {
        // Primary gradients
        'gradient-primary-light': gradients.primary.light,
        'gradient-primary-medium': gradients.primary.medium,
        'gradient-primary-dark': gradients.primary.dark,
        'gradient-primary-intense': gradients.primary.intense,
        
        // Brand gradients
        'gradient-hero': gradients.brand.hero,
        'gradient-brand-primary': gradients.brand.primary,
        'gradient-brand-secondary': gradients.brand.secondary,
        'gradient-brand-accent': gradients.brand.accent,
        
        // Semantic gradients
        'gradient-success': gradients.semantic.success,
        'gradient-warning': gradients.semantic.warning,
        'gradient-error': gradients.semantic.error,
        'gradient-info': gradients.semantic.info,
        
        // Directional gradients
        'gradient-vertical-primary': gradients.vertical.primary,
        'gradient-vertical-light': gradients.vertical.light,
        'gradient-vertical-dark': gradients.vertical.dark,
        'gradient-horizontal-primary': gradients.horizontal.primary,
        'gradient-horizontal-light': gradients.horizontal.light,
        'gradient-horizontal-dark': gradients.horizontal.dark,
        
        // Radial gradients
        'gradient-radial-primary': gradients.radial.primary,
        'gradient-radial-light': gradients.radial.light,
        'gradient-radial-dark': gradients.radial.dark,
        'gradient-radial-hero': gradients.radial.hero,
        
        // Complex gradients
        'gradient-nature': gradients.complex.nature,
        'gradient-forest': gradients.complex.forest,
        'gradient-meadow': gradients.complex.meadow,
        'gradient-emerald': gradients.complex.emerald,
        
        // Overlay gradients
        'gradient-overlay-light': gradients.overlay.light,
        'gradient-overlay-medium': gradients.overlay.medium,
        'gradient-overlay-dark': gradients.overlay.dark,
        'gradient-overlay-black': gradients.overlay.black,
        
        // Mesh gradients
        'gradient-mesh-hero': gradients.mesh.hero,
        'gradient-mesh-vibrant': gradients.mesh.vibrant,
        'gradient-mesh-subtle': gradients.mesh.subtle,
        
        // Animated gradients
        'gradient-shimmer': gradients.animated.shimmer,
        'gradient-pulse': gradients.animated.pulse,
        'gradient-glow': gradients.animated.glow,
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
      backdropFilter: {
        'glass-light': 'blur(10px)',
        'glass-medium': 'blur(16px)',
        'glass-strong': 'blur(20px)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-in-out',
        'fade-out': 'fadeOut 300ms ease-in-out',
        'slide-in': 'slideIn 300ms ease-out',
        'slide-out': 'slideOut 300ms ease-in',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideOut: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-10px)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(34, 197, 94, 0.6)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;