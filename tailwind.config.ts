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
      screens: {
        'nav': '786px', // Custom breakpoint for navigation
      },
      fontFamily: {
        'sans': ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        'display': ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        'text': ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
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
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    }
  },
  plugins: [],
};

export default config;