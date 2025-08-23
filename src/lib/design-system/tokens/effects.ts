export const effects = {
  // Glassmorphism effects - Light mode optimized
  glass: {
    // Pure white glass effects
    light: {
      background: 'rgba(255, 255, 255, 0.7)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255, 255, 255, 0.8)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.05)',
    },
    medium: {
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(255, 255, 255, 0.9)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
    },
    strong: {
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.95)',
      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.06)',
    },
    // Green-tinted light glass effects
    green: {
      light: {
        background: 'rgba(240, 253, 244, 0.8)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(34, 197, 94, 0.1)',
        boxShadow: '0 4px 20px rgba(34, 197, 94, 0.08), 0 1px 4px rgba(34, 197, 94, 0.04)',
      },
      medium: {
        background: 'rgba(240, 253, 244, 0.9)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(34, 197, 94, 0.15)',
        boxShadow: '0 8px 32px rgba(34, 197, 94, 0.1), 0 2px 8px rgba(34, 197, 94, 0.05)',
      },
    },
  },

  // Advanced shadows
  shadows: {
    glow: {
      green: {
        sm: '0 0 10px rgba(34, 197, 94, 0.3)',
        md: '0 0 20px rgba(34, 197, 94, 0.4)',
        lg: '0 0 40px rgba(34, 197, 94, 0.5)',
      },
      white: {
        sm: '0 0 10px rgba(255, 255, 255, 0.3)',
        md: '0 0 20px rgba(255, 255, 255, 0.4)',
        lg: '0 0 40px rgba(255, 255, 255, 0.5)',
      },
    },
    elevated: {
      sm: '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 4px rgba(0, 0, 0, 0.02)',
      md: '0 4px 16px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.03)',
      lg: '0 8px 32px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.04)',
      xl: '0 16px 64px rgba(0, 0, 0, 0.1), 0 8px 32px rgba(0, 0, 0, 0.05)',
    },
    inner: {
      sm: 'inset 0 1px 2px rgba(0, 0, 0, 0.02)',
      md: 'inset 0 2px 4px rgba(0, 0, 0, 0.03)',
      lg: 'inset 0 4px 8px rgba(0, 0, 0, 0.04)',
    },
  },

  // Mesh gradients for modern backgrounds
  meshGradients: {
    hero: 'radial-gradient(at 40% 20%, hsla(120, 60%, 95%, 1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(140, 50%, 90%, 1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(125, 70%, 85%, 1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(135, 40%, 92%, 1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(115, 65%, 88%, 1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(130, 55%, 90%, 1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(145, 45%, 95%, 1) 0px, transparent 50%)',
    
    subtle: 'radial-gradient(at 20% 80%, hsla(120, 30%, 98%, 1) 0px, transparent 50%), radial-gradient(at 80% 20%, hsla(130, 25%, 96%, 1) 0px, transparent 50%), radial-gradient(at 40% 40%, hsla(125, 35%, 94%, 1) 0px, transparent 50%)',
    
    vibrant: 'radial-gradient(at 40% 20%, hsla(120, 70%, 80%, 0.8) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(140, 60%, 85%, 0.6) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(125, 80%, 75%, 0.7) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(135, 50%, 90%, 0.5) 0px, transparent 50%)',
    
    bright: 'radial-gradient(at 40% 20%, hsla(120, 50%, 97%, 0.9) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(140, 40%, 95%, 0.8) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(125, 60%, 98%, 0.7) 0px, transparent 50%)',
  },

  // Animated background patterns
  patterns: {
    dots: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 1px, transparent 1px)',
    grid: 'linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)',
    waves: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(34, 197, 94, 0.05) 2px, rgba(34, 197, 94, 0.05) 4px)',
  },

  // Blur effects
  blur: {
    xs: 'blur(2px)',
    sm: 'blur(4px)',
    md: 'blur(8px)',
    lg: 'blur(16px)',
    xl: 'blur(24px)',
    '2xl': 'blur(40px)',
    '3xl': 'blur(64px)',
  },

  // Transform effects
  transforms: {
    float: 'translateY(-2px)',
    hover: 'translateY(-4px) scale(1.02)',
    press: 'translateY(1px) scale(0.98)',
    rotate: 'rotate(1deg)',
    tilt: 'perspective(1000px) rotateY(5deg)',
  },
} as const;

export type Effects = typeof effects;