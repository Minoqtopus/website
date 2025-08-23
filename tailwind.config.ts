import type { Config } from 'tailwindcss';
import { colors, spacing, typography, breakpoints, shadows, borders } from './src/lib/design-system';

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
      animation: {
        'fade-in': 'fadeIn 300ms ease-in-out',
        'fade-out': 'fadeOut 300ms ease-in-out',
        'slide-in': 'slideIn 300ms ease-out',
        'slide-out': 'slideOut 300ms ease-in',
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
      },
    },
  },
  plugins: [],
};

export default config;