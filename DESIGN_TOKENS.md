# Design Tokens

The Terminal UI design system is built on a comprehensive set of design tokens that provide consistency, scalability, and maintainability across all components and applications.

## 🎯 **Philosophy**

Our design tokens follow these principles:

- **Semantic naming** - Tokens have meaningful names that describe their purpose
- **Scalable values** - Consistent mathematical relationships between token values
- **Theme-agnostic** - Tokens work across Matrix and TRON themes
- **Tailwind-first** - Designed to work seamlessly with Tailwind CSS utilities

## 🎨 **Color Tokens**

### Semantic Colors (Theme-Aware)
```css
/* CSS Custom Properties */
--color-primary: /* Theme-specific primary color */
--color-secondary: /* Theme-specific secondary color */
--color-accent: /* Theme-specific accent color */
--color-background: /* Theme-specific background */
--color-surface: /* Theme-specific surface */
--color-border: /* Theme-specific border */

/* Text Colors */
--color-text-primary: /* Primary text color */
--color-text-secondary: /* Secondary text color */
--color-text-muted: /* Muted text color */

/* Interactive States */
--color-hover: /* Hover state color */
--color-active: /* Active state color */
--color-focus: /* Focus state color */
--color-disabled: /* Disabled state color */

/* Effects */
--color-glow: /* Glow effect color */
--color-shadow: /* Shadow color with opacity */
```

### Tailwind Usage
```tsx
// Semantic colors (recommended)
<div className="bg-primary text-text-primary border-border">
  <Button className="hover:bg-hover focus:ring-focus">
    Semantic Button
  </Button>
</div>

// Direct palette access
<div className="bg-matrix-400 text-tron-cyan-DEFAULT">
  Direct palette colors
</div>
```

### JavaScript Usage
```tsx
import { tokens, colors } from '@jonmatum/terminal-ui';

// Access color tokens
const primaryColor = tokens.colors.matrix.primary;
const semanticColors = colors.semantic;

// Use in components
const buttonStyle = {
  backgroundColor: 'var(--color-primary)',
  color: 'var(--color-text-primary)',
};
```

## 📝 **Typography Tokens**

### Font Families
```tsx
// Terminal monospace stack
font-terminal: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace']

// Full monospace stack
font-mono: ['JetBrains Mono', 'Fira Code', 'SF Mono', 'Monaco', ...]
```

### Typography Scale
```tsx
// Display text (large headings)
text-display-2xl  // 72px, extrabold, tight spacing
text-display-xl   // 60px, extrabold, tight spacing
text-display-lg   // 48px, bold, tight spacing

// Headings
text-heading-2xl  // 30px, bold, tight spacing
text-heading-xl   // 24px, bold, snug spacing
text-heading-lg   // 20px, semibold, snug spacing

// Body text
text-body-lg      // 18px, normal, relaxed spacing
text-body-md      // 16px, normal, normal spacing
text-body-sm      // 14px, normal, normal spacing

// Code/monospace
text-code-lg      // 16px, medium, mono family
text-code-md      // 14px, normal, mono family
text-code-sm      // 12px, normal, mono family
```

### Tailwind Usage
```tsx
<h1 className="text-display-lg font-terminal text-primary">
  Large Display Heading
</h1>

<p className="text-body-md text-text-secondary">
  Body text with semantic colors
</p>

<code className="text-code-sm bg-surface p-2 rounded">
  Monospace code text
</code>
```

## 📏 **Spacing Tokens**

### Base Scale
```tsx
// Base spacing (rem-based)
0: '0rem'
1: '0.25rem'    // 4px
2: '0.5rem'     // 8px
4: '1rem'       // 16px
6: '1.5rem'     // 24px
8: '2rem'       // 32px
12: '3rem'      // 48px
16: '4rem'      // 64px
// ... continues to 96
```

### Semantic Spacing
```tsx
// Component spacing
component-xs: 4px    // Internal component padding
component-sm: 8px    // Small component spacing
component-md: 16px   // Standard component spacing
component-lg: 24px   // Large component spacing

// Layout spacing
layout-xs: 16px      // Tight layout spacing
layout-sm: 24px      // Small layout spacing
layout-md: 32px      // Standard layout spacing
layout-lg: 48px      // Large layout spacing

// Section spacing
section-xs: 32px     // Tight section spacing
section-md: 64px     // Standard section spacing
section-lg: 96px     // Large section spacing
```

### Tailwind Usage
```tsx
// Direct spacing
<div className="p-4 m-6 gap-8">
  Direct spacing values
</div>

// Semantic spacing (via custom utilities)
<div className="p-component-md gap-layout-sm">
  Semantic spacing
</div>

// Container sizes
<Container size="lg" className="px-container-md">
  <Grid gap="gap-md">
    Consistent spacing
  </Grid>
</Container>
```

## 🎭 **Animation Tokens**

### Duration & Easing
```tsx
// Duration
fast: '150ms'
normal: '300ms'
slow: '500ms'
slower: '1000ms'

// Easing
linear: 'linear'
in: 'cubic-bezier(0.4, 0, 1, 1)'
out: 'cubic-bezier(0, 0, 0.2, 1)'
in-out: 'cubic-bezier(0.4, 0, 0.2, 1)'
terminal: 'cubic-bezier(0.4, 0, 0.2, 1)'
bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
```

### Animation Classes
```tsx
// Basic animations
animate-fade-in
animate-slide-up
animate-scale-in

// Terminal-specific
animate-typewriter
animate-glow
animate-pulse-glow

// Theme-specific
animate-matrix-rain
animate-tron-pulse

// Utility animations
animate-float
animate-bounce-subtle
```

### Usage
```tsx
<Animation type="fade-in" duration="normal">
  <Card className="animate-pulse-glow hover-scale">
    Animated card
  </Card>
</Animation>
```

## 🎯 **Component Tokens**

### Size Tokens
```tsx
// Button sizes
button-sm: { height: '32px', padding: '8px 12px', fontSize: '14px' }
button-md: { height: '40px', padding: '10px 16px', fontSize: '16px' }
button-lg: { height: '48px', padding: '12px 24px', fontSize: '18px' }

// Input sizes
input-sm: { height: '32px', padding: '8px 12px' }
input-md: { height: '40px', padding: '10px 16px' }
input-lg: { height: '48px', padding: '12px 16px' }

// Container sizes
container-sm: '384px'
container-md: '448px'
container-lg: '512px'
container-xl: '576px'
container-full: '100%'
```

### Component Utilities
```tsx
// Terminal components (provided by design system)
.terminal-window    // Complete terminal window styling
.terminal-button    // Terminal-style button base
.terminal-card      // Terminal-style card base
.terminal-input     // Terminal-style input base

// Effect utilities
.text-glow         // Text glow effect
.hover-glow        // Hover glow effect
.hover-scale       // Hover scale effect
.matrix-text       // Matrix theme text
.tron-text         // TRON theme text
```

## 🚀 **Usage Patterns**

### 1. Semantic Approach (Recommended)
```tsx
import { Container, Grid, Card, Button } from '@jonmatum/terminal-ui';

function SemanticExample() {
  return (
    <Container size="lg" className="py-section-md">
      <Grid cols={3} gap="layout-md">
        <Card className="terminal-card">
          <Button className="terminal-button bg-primary text-text-primary">
            Semantic Button
          </Button>
        </Card>
      </Grid>
    </Container>
  );
}
```

### 2. Direct Token Access
```tsx
import { tokens } from '@jonmatum/terminal-ui';

function DirectTokenExample() {
  const styles = {
    backgroundColor: tokens.colors.matrix.primary,
    padding: tokens.spacing[4],
    borderRadius: tokens.borderRadius.terminal,
    fontFamily: tokens.typography.fontFamily.terminal.join(', '),
  };
  
  return <div style={styles}>Direct token usage</div>;
}
```

### 3. Tailwind Utilities
```tsx
function TailwindExample() {
  return (
    <div className="bg-primary text-text-primary p-component-md rounded-terminal font-terminal">
      <h1 className="text-display-lg text-glow">
        Terminal UI
      </h1>
      <p className="text-body-md text-text-secondary">
        Using design tokens with Tailwind
      </p>
      <Button className="terminal-button hover-glow animate-fade-in">
        Token-based Button
      </Button>
    </div>
  );
}
```

## 📦 **Integration**

### Tailwind Configuration
```js
// tailwind.config.js
import { mergeWithTailwindConfig } from '@jonmatum/terminal-ui';

export default mergeWithTailwindConfig({
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  // Your custom config here
});
```

### CSS Custom Properties
```css
/* Automatic theme switching */
.theme-matrix {
  --color-primary: #22c55e;
  --color-background: #000000;
  /* ... all Matrix theme tokens */
}

.theme-tron {
  --color-primary: #00ffff;
  --color-background: #000000;
  /* ... all TRON theme tokens */
}
```

### TypeScript Support
```tsx
import type { 
  Colors, 
  Typography, 
  Spacing, 
  Tokens 
} from '@jonmatum/terminal-ui';

// Full type safety for all design tokens
const myColors: Colors = tokens.colors;
const mySpacing: Spacing = tokens.spacing;
```

## 🎨 **Customization**

### Extending Tokens
```js
// tailwind.config.js
import { mergeWithTailwindConfig, tokens } from '@jonmatum/terminal-ui';

export default mergeWithTailwindConfig({
  theme: {
    extend: {
      colors: {
        // Add custom colors while keeping design system tokens
        'custom-purple': '#8a2be2',
      },
      spacing: {
        // Add custom spacing while keeping design system scale
        '18': '4.5rem',
      },
    },
  },
});
```

### Custom Theme
```css
/* Custom theme using design token structure */
.theme-custom {
  --color-primary: #ff6b6b;
  --color-secondary: #4ecdc4;
  --color-accent: #45b7d1;
  --color-background: #2c3e50;
  --color-surface: #34495e;
  --color-border: #7f8c8d;
  --color-text-primary: #ecf0f1;
  --color-text-secondary: #bdc3c7;
  --color-text-muted: #95a5a6;
  --color-glow: #ff6b6b;
  --color-shadow: rgba(255, 107, 107, 0.3);
}
```

## 📊 **Token Reference**

| Category | Count | Examples |
|----------|-------|----------|
| Colors | 50+ | `primary`, `matrix-400`, `semantic-success` |
| Typography | 30+ | `text-display-lg`, `font-terminal`, `text-glow` |
| Spacing | 40+ | `p-4`, `gap-layout-md`, `section-lg` |
| Animations | 20+ | `animate-fade-in`, `animate-matrix-rain` |
| Shadows | 15+ | `shadow-glow`, `shadow-matrix-glow-lg` |
| Components | 10+ | `terminal-window`, `terminal-button` |

The design token system provides **everything needed** to build consistent, scalable terminal-style interfaces with maximum Tailwind CSS leverage! 🚀
