export const colors = {
  // Brand colors - Sophisticated green palette based on logo rgb(46, 99, 82)
  brand: {
    primary: {
      50: '#f2f7f5',
      100: '#e6efeb',
      200: '#cce0d8',
      300: '#b3d1c5',
      400: '#99c2b2',
      500: '#80b39f',
      600: '#66a48c',
      700: '#4d9579',
      800: '#338666',
      900: '#1a7753',
      950: '#006840',
    },
    secondary: {
      50: '#f8fafb',
      100: '#f1f5f4',
      200: '#e2e8e5',
      300: '#cbd5d1',
      400: '#94a3a0',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
    }
  },
  
  // Green color palette - Muted, sophisticated greens based on logo
  green: {
    50: '#f2f7f5',
    100: '#e6efeb',
    200: '#cce0d8',
    300: '#b3d1c5',
    400: '#99c2b2',
    500: '#80b39f',
    600: '#66a48c',
    700: '#4d9579',
    800: '#338666',
    900: '#1a7753',
    950: '#006840',
  },

  // Logo-specific color
  logo: {
    primary: '#2e6352', // rgb(46, 99, 82)
    light: '#4a7a6b',
    dark: '#1a4a3a',
    muted: '#5a8a7a',
  },

  // Semantic colors - Updated to work with new palette
  semantic: {
    success: {
      light: '#80b39f',
      DEFAULT: '#4d9579',
      dark: '#338666',
    },
    warning: {
      light: '#fbbf24',
      DEFAULT: '#f59e0b',
      dark: '#d97706',
    },
    error: {
      light: '#f87171',
      DEFAULT: '#ef4444',
      dark: '#dc2626',
    },
    info: {
      light: '#b3d1c5',
      DEFAULT: '#66a48c',
      dark: '#4d9579',
    }
  },
  
  // Neutral colors - Enhanced for better contrast with new greens
  neutral: {
    white: '#ffffff',
    gray: {
      25: '#fcfcfd',
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    }
  }
} as const;

export type Colors = typeof colors;