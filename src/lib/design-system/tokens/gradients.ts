export const gradients = {
  // Primary green gradients
  primary: {
    light: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
    medium: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
    dark: 'linear-gradient(135deg, #22c55e 0%, #15803d 100%)',
    intense: 'linear-gradient(135deg, #16a34a 0%, #14532d 100%)',
  },

  // Brand gradients
  brand: {
    hero: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)',
    primary: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
    secondary: 'linear-gradient(135deg, #86efac 0%, #4ade80 100%)',
    accent: 'linear-gradient(135deg, #15803d 0%, #166534 100%)',
  },

  // Semantic gradients
  semantic: {
    success: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
    warning: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    error: 'linear-gradient(135deg, #f87171 0%, #ef4444 100%)',
    info: 'linear-gradient(135deg, #86efac 0%, #16a34a 100%)',
  },

  // Directional variants
  vertical: {
    primary: 'linear-gradient(to bottom, #22c55e 0%, #16a34a 100%)',
    light: 'linear-gradient(to bottom, #dcfce7 0%, #bbf7d0 100%)',
    dark: 'linear-gradient(to bottom, #15803d 0%, #14532d 100%)',
  },

  horizontal: {
    primary: 'linear-gradient(to right, #22c55e 0%, #16a34a 100%)',
    light: 'linear-gradient(to right, #dcfce7 0%, #bbf7d0 100%)',
    dark: 'linear-gradient(to right, #15803d 0%, #14532d 100%)',
  },

  // Radial gradients
  radial: {
    primary: 'radial-gradient(circle, #22c55e 0%, #16a34a 100%)',
    light: 'radial-gradient(circle, #f0fdf4 0%, #dcfce7 100%)',
    dark: 'radial-gradient(circle, #15803d 0%, #052e16 100%)',
    hero: 'radial-gradient(ellipse at center, #dcfce7 0%, #bbf7d0 50%, #86efac 100%)',
  },

  // Complex multi-stop gradients
  complex: {
    nature: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 25%, #86efac 50%, #22c55e 75%, #15803d 100%)',
    forest: 'linear-gradient(135deg, #dcfce7 0%, #4ade80 30%, #16a34a 60%, #14532d 100%)',
    meadow: 'linear-gradient(135deg, #bbf7d0 0%, #86efac 33%, #4ade80 66%, #22c55e 100%)',
    emerald: 'linear-gradient(135deg, #86efac 0%, #22c55e 25%, #16a34a 50%, #15803d 75%, #052e16 100%)',
  },

  // Mesh gradients for modern hero backgrounds
  mesh: {
    hero: 'radial-gradient(ellipse 80% 50% at 20% 40%, rgba(34, 197, 94, 0.1) 0%, transparent 100%), radial-gradient(ellipse 60% 40% at 80% 20%, rgba(22, 163, 74, 0.15) 0%, transparent 100%), radial-gradient(ellipse 50% 60% at 40% 80%, rgba(134, 239, 172, 0.2) 0%, transparent 100%), linear-gradient(135deg, rgba(240, 253, 244, 0.8) 0%, rgba(220, 252, 231, 0.6) 100%)',
    
    vibrant: 'radial-gradient(ellipse 70% 40% at 30% 30%, rgba(34, 197, 94, 0.2) 0%, transparent 100%), radial-gradient(ellipse 50% 70% at 70% 60%, rgba(74, 222, 128, 0.25) 0%, transparent 100%), radial-gradient(ellipse 60% 50% at 20% 70%, rgba(134, 239, 172, 0.3) 0%, transparent 100%)',
    
    subtle: 'radial-gradient(ellipse 90% 60% at 40% 30%, rgba(240, 253, 244, 0.4) 0%, transparent 100%), radial-gradient(ellipse 60% 80% at 60% 70%, rgba(220, 252, 231, 0.3) 0%, transparent 100%), radial-gradient(ellipse 50% 50% at 80% 20%, rgba(187, 247, 208, 0.2) 0%, transparent 100%)',
  },

  // Animated gradients for interactive elements
  animated: {
    shimmer: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)',
    pulse: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.3) 50%, rgba(34, 197, 94, 0.1) 100%)',
    glow: 'radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, rgba(34, 197, 94, 0.1) 50%, transparent 100%)',
  },

  // Overlay gradients (useful for text overlays on images)
  overlay: {
    light: 'linear-gradient(180deg, rgba(240, 253, 244, 0.9) 0%, rgba(220, 252, 231, 0.9) 100%)',
    medium: 'linear-gradient(180deg, rgba(34, 197, 94, 0.8) 0%, rgba(21, 128, 61, 0.8) 100%)',
    dark: 'linear-gradient(180deg, rgba(21, 128, 61, 0.9) 0%, rgba(20, 83, 45, 0.9) 100%)',
    black: 'linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%)',
  },

  // Animated gradients (for hover effects)
  hover: {
    primary: 'linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #15803d 100%)',
    secondary: 'linear-gradient(135deg, #86efac 0%, #4ade80 50%, #22c55e 100%)',
    light: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 50%, #86efac 100%)',
  },
} as const;

// CSS custom properties for gradients
export const gradientVars = {
  '--gradient-primary-light': gradients.primary.light,
  '--gradient-primary-medium': gradients.primary.medium,
  '--gradient-primary-dark': gradients.primary.dark,
  '--gradient-brand-hero': gradients.brand.hero,
  '--gradient-brand-primary': gradients.brand.primary,
  '--gradient-success': gradients.semantic.success,
  '--gradient-overlay-light': gradients.overlay.light,
  '--gradient-overlay-dark': gradients.overlay.dark,
} as const;

export type Gradients = typeof gradients;
export type GradientVars = typeof gradientVars;