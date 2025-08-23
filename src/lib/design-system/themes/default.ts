import { colors, typography, spacing, breakpoints, shadows, borders } from '../tokens';

export const defaultTheme = {
  name: 'default',
  
  // Color palette
  colors: {
    background: colors.neutral.white,
    foreground: colors.neutral.gray[900],
    
    primary: colors.brand.primary[600],
    primaryHover: colors.brand.primary[700],
    primaryLight: colors.brand.primary[100],
    
    secondary: colors.brand.secondary[600],
    secondaryHover: colors.brand.secondary[700],
    secondaryLight: colors.brand.secondary[100],
    
    border: colors.neutral.gray[200],
    muted: colors.neutral.gray[100],
    mutedForeground: colors.neutral.gray[600],
    
    ...colors.semantic,
  },
  
  // Typography styles
  typography: {
    heading: {
      h1: {
        fontSize: typography.sizes['5xl'].size,
        lineHeight: typography.sizes['5xl'].lineHeight,
        fontWeight: typography.weights.bold,
        letterSpacing: typography.letterSpacing.tight,
      },
      h2: {
        fontSize: typography.sizes['4xl'].size,
        lineHeight: typography.sizes['4xl'].lineHeight,
        fontWeight: typography.weights.bold,
        letterSpacing: typography.letterSpacing.tight,
      },
      h3: {
        fontSize: typography.sizes['3xl'].size,
        lineHeight: typography.sizes['3xl'].lineHeight,
        fontWeight: typography.weights.semibold,
      },
      h4: {
        fontSize: typography.sizes['2xl'].size,
        lineHeight: typography.sizes['2xl'].lineHeight,
        fontWeight: typography.weights.semibold,
      },
      h5: {
        fontSize: typography.sizes.xl.size,
        lineHeight: typography.sizes.xl.lineHeight,
        fontWeight: typography.weights.medium,
      },
      h6: {
        fontSize: typography.sizes.lg.size,
        lineHeight: typography.sizes.lg.lineHeight,
        fontWeight: typography.weights.medium,
      },
    },
    body: {
      large: {
        fontSize: typography.sizes.lg.size,
        lineHeight: typography.sizes.lg.lineHeight,
      },
      base: {
        fontSize: typography.sizes.base.size,
        lineHeight: typography.sizes.base.lineHeight,
      },
      small: {
        fontSize: typography.sizes.sm.size,
        lineHeight: typography.sizes.sm.lineHeight,
      },
    },
  },
  
  // Component styles
  components: {
    button: {
      base: 'font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
      sizes: {
        sm: 'px-3 py-1.5 text-sm rounded-md',
        md: 'px-4 py-2 text-base rounded-lg',
        lg: 'px-6 py-3 text-lg rounded-lg',
      },
      variants: {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
        secondary: 'border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
        ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
      },
    },
    card: {
      base: 'bg-white rounded-lg shadow-md border border-gray-200',
      padding: 'p-6',
    },
    input: {
      base: 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
      error: 'border-red-500 focus:ring-red-500',
    },
  },
  
  // Layout
  layout: {
    container: {
      base: 'container mx-auto px-4',
      maxWidth: '1280px',
    },
    section: {
      padding: {
        sm: 'py-8',
        md: 'py-12',
        lg: 'py-16',
        xl: 'py-20',
      },
    },
  },
  
  // Animations
  animations: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: {
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
  
  spacing,
  breakpoints,
  shadows,
  borders,
} as const;

export type Theme = typeof defaultTheme;