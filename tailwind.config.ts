import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
        'gentleFloat': 'gentleFloat 6s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'scaleIn': 'scaleIn 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slideInLeft': 'slideInLeft 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slideInRight': 'slideInRight 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
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
        gentleFloat: {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px) rotate(0deg)' 
          },
          '50%': { 
            transform: 'translateY(-20px) translateX(8px) rotate(1deg)' 
          }
        },
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        scaleIn: {
          'from': {
            opacity: '0',
            transform: 'scale(0.95)'
          },
          'to': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        slideInLeft: {
          'from': {
            opacity: '0',
            transform: 'translateX(-30px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        slideInRight: {
          'from': {
            opacity: '0',
            transform: 'translateX(30px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        }
      },
    }
  },
  plugins: [],
};

export default config;