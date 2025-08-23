export const colors = {
  // Brand colors - Green-focused design system
  brand: {
    primary: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
      950: '#052e16',
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
  
  // Green color palette variants
  green: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  },

  // Semantic colors - Green-based system
  semantic: {
    success: {
      light: '#4ade80',
      DEFAULT: '#22c55e',
      dark: '#15803d',
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
      light: '#86efac',
      DEFAULT: '#16a34a',
      dark: '#15803d',
    }
  },
  
  // Neutral colors - Light mode optimized
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
    }
  }
} as const;

export type Colors = typeof colors;