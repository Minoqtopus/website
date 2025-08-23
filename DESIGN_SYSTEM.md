# Minoqtopus Design System

## Overview
This design system provides a comprehensive foundation for building consistent, scalable, and maintainable UI components for the Minoqtopus website and future applications.

## Structure

```
src/lib/design-system/
├── tokens/           # Design tokens (primitive values)
│   ├── colors.ts     # Color palette
│   ├── typography.ts # Font styles
│   ├── spacing.ts    # Spacing scale
│   ├── breakpoints.ts # Responsive breakpoints
│   ├── shadows.ts    # Shadow definitions
│   └── borders.ts    # Border styles
├── themes/           # Theme configurations
│   └── default.ts    # Default theme
└── utils/           # Utility functions
    └── cn.ts        # Class name utility

src/components/ui/    # Reusable UI components
├── Button.tsx       # Button component
├── Card.tsx        # Card component
├── Input.tsx       # Input field
├── Select.tsx      # Select dropdown
└── Textarea.tsx    # Textarea component
```

## Design Tokens

### Colors
- **Brand Colors**: Primary (blue) and Secondary (gray) palettes
- **Semantic Colors**: Success, Warning, Error, Info
- **Neutral Colors**: White, Black, Gray scale

### Typography
- **Font Families**: Sans (Geist Sans) and Mono (Geist Mono)
- **Font Sizes**: xs to 6xl with corresponding line heights
- **Font Weights**: thin to black (100-900)

### Spacing
- Scale from 0 to 96 (0px to 384px)
- Consistent 4px base unit

### Breakpoints
- xs: 475px
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

## Usage Examples

### Using Design Tokens

```typescript
import { colors, typography, spacing } from '@/lib/design-system';

// Access colors
const primaryColor = colors.brand.primary[600];
const errorColor = colors.semantic.error.DEFAULT;

// Access typography
const headingSize = typography.sizes['3xl'];
const fontWeight = typography.weights.bold;

// Access spacing
const padding = spacing[4]; // 1rem
```

### Using the Theme

```typescript
import { defaultTheme } from '@/lib/design-system';

// Access theme values
const buttonStyles = defaultTheme.components.button;
const headingStyles = defaultTheme.typography.heading.h1;
```

### Using UI Components

```tsx
import { Button, Card, Input, Select, Textarea } from '@/components/ui';

// Button examples
<Button variant="primary" size="md">Click me</Button>
<Button variant="secondary" isLoading>Loading...</Button>
<Button variant="danger" leftIcon={<TrashIcon />}>Delete</Button>

// Card example
<Card variant="elevated" padding="lg">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>

// Form components
<Input 
  label="Email" 
  type="email" 
  error="Invalid email"
  helperText="We'll never share your email"
/>

<Select 
  label="Project Type"
  options={[
    { value: 'mvp', label: 'MVP Development' },
    { value: 'webapp', label: 'Web Application' }
  ]}
  placeholder="Select a type"
/>

<Textarea 
  label="Message"
  rows={5}
  placeholder="Tell us about your project"
/>
```

### Using the cn() Utility

```tsx
import { cn } from '@/lib/design-system';

// Combine classes with conflict resolution
<div className={cn(
  'text-gray-500', // base style
  isActive && 'text-blue-600', // conditional style
  className // external className prop
)} />
```

## Tailwind Integration

The design system is fully integrated with Tailwind CSS. All tokens are available as Tailwind utilities:

```jsx
// Using color tokens
<div className="bg-primary-600 text-secondary-100">

// Using semantic colors
<div className="bg-error-DEFAULT text-success-light">

// Using custom animations
<div className="animate-fade-in">
```

## Best Practices

1. **Always use design tokens** instead of hardcoded values
2. **Use semantic colors** for UI states (success, error, warning)
3. **Leverage the theme** for consistent component styling
4. **Use the cn() utility** for combining classes
5. **Follow the spacing scale** for consistent layouts
6. **Use responsive breakpoints** from the design system

## Extending the Design System

### Adding New Tokens
1. Add the token to the appropriate file in `/tokens`
2. Export it from the index file
3. Update Tailwind config if needed

### Creating New Components
1. Create component in `/components/ui`
2. Use design tokens and theme values
3. Include TypeScript interfaces
4. Export from index file
5. Document usage examples

### Adding New Themes
1. Create new theme file in `/themes`
2. Extend or override the default theme
3. Export from the main index

## Accessibility Considerations

All components include:
- Proper ARIA attributes
- Keyboard navigation support
- Focus management
- Error state handling
- Helper text associations

## Migration Guide

When refactoring existing components:
1. Replace hardcoded colors with design tokens
2. Replace inline styles with theme values
3. Use UI components instead of native elements
4. Apply cn() utility for class combinations