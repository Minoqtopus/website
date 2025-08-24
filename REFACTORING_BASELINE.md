# Refactoring Baseline Documentation

## Current UI State Documentation
**Created**: 2025-08-24
**Purpose**: Document exact current state before refactoring to ensure no visual regressions

## Visual Elements to Preserve

### Hero Section
- **Background**: Gradient from green-50 via white to green-100
- **Logo**: 
  - Width: w-80 sm:w-64 md:w-72 lg:w-80
  - Centered horizontally
  - ScrollReveal animation with 0.15s delay
  
- **Main Heading**:
  - Font sizes: text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
  - Font weight: font-black
  - Line height: leading-[1.1] sm:leading-[0.9]
  - "MVP" text: Gradient from green-700 via green-600 to green-700
  - ScrollReveal animation with 0.2s delay

- **Subheading**:
  - Font sizes: text-lg sm:text-xl lg:text-2xl
  - Color: text-gray-600
  - "28 days" emphasized in green-700 font-bold
  - ScrollReveal animation with 0.3s delay

### CTA Buttons
- **Schedule a Call Button**:
  - Background: #1a7753 (custom green)
  - Hover: bg-green-800 with scale(1.05)
  - Shadow: shadow-lg hover:shadow-2xl
  - Icon: Calendar SVG 20x20
  - ScrollReveal animation with 0.4s delay

- **LinkedIn Button**:
  - Background: white with #0077B5 border
  - Hover: bg-#0077B5 with white text
  - Icon: LinkedIn SVG 20x20
  - Same animation timing as Schedule button

### Background Decorations
- Three floating circular elements:
  - Top-left: green-200, 48x48 (sm:72x72)
  - Top-right: green-300, 48x48 (sm:72x72)
  - Bottom-left: green-400, 48x48 (sm:72x72)
  - All with blur-xl, opacity-20, animate-float
  - Staggered animation delays (0, 2000ms, 4000ms)

### Trust Indicators
- Two items with green-600 dots
- Text: "Enterprise-Grade Security" and "Scalable Architecture"
- Color: text-gray-500
- ScrollReveal animation with 0.5s delay

## Animation Specifications

### ScrollReveal Settings
- Direction: 'up' (default)
- Initial transform: translateY(40px)
- Duration: 800ms
- Easing: cubic-bezier(0.25, 0.46, 0.45, 0.94)
- Threshold: 0.1
- Root margin: 50px

### Float Animation
- Duration: 3s
- Easing: ease-in-out
- Movement: Y-axis 0 to -20px, X-axis 0 to 8px, Rotation 0 to 1deg
- Infinite loop

## Responsive Breakpoints
- xs: 475px
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

## Color Palette (Exact Values)
- Primary Green: #1a7753
- Green-50: rgb(240 253 244)
- Green-100: rgb(220 252 231)
- Green-200: rgb(187 247 208)
- Green-300: rgb(134 239 172)
- Green-400: rgb(74 222 128)
- Green-600: rgb(22 163 74)
- Green-700: rgb(21 128 61)
- Green-800: rgb(22 101 52)
- Gray-500: rgb(107 114 128)
- Gray-600: rgb(75 85 99)
- Gray-900: rgb(17 24 39)
- LinkedIn Blue: #0077B5

## Typography
- Font Family: Lato (weights: 100, 300, 400, 700, 900)
- Display font: Same as text (Lato)
- Antialiased rendering
- Font features: kern, liga, calt

## Critical Measurements
- Container max-width: max-w-6xl (1152px)
- Content max-width: max-w-4xl (896px)
- Hero section: min-h-screen
- Button padding: px-6 sm:px-8 py-3 sm:py-4
- Border radius: rounded-xl (0.75rem)

## SEO/Meta Elements
- Title: "Minoqtopus - Build Your MVP in 4 Weeks | Rapid Software Development"
- Logo path: /images/brand/logo.png
- Favicon: Multiple sizes (16x16, 32x32, 180x180)
- Structured data: Organization schema with ContactPoint

## Accessibility Features
- Focus rings: 4px with color-specific opacity
- ARIA labels on buttons
- Semantic HTML structure
- Reduced motion support

## Performance Optimizations
- Next.js Turbopack enabled
- Image priority loading for logo
- Font swap display mode
- Scroll-smooth CSS

## Notes for Refactoring
1. The ScrollReveal component has a bug with dynamic Tailwind classes (duration-[${duration}ms])
2. Animation keyframes are duplicated between globals.css and tailwind.config.ts
3. The green gradient on "MVP" uses !important in CSS (needs investigation)
4. Mobile responsiveness uses both Tailwind and CSS media queries
5. Background decoration divs use mix-blend-multiply