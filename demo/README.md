# Terminal UI Demo Application

A comprehensive showcase application demonstrating the **@jonmatum/terminal-ui** design system with 100% package leverage and DRY (Don't Repeat Yourself) principles.

## 🎯 Design Principles

### 100% Package Leverage
- **Zero custom components** - Everything uses the design system package
- **CSS inheritance** - Leverages package CSS variables and utilities
- **Theme integration** - Full Matrix/TRON theme support via package
- **Component composition** - Built entirely with package primitives

### DRY Architecture
- **Shared interfaces** - Reusable TypeScript interfaces across components
- **Configuration-driven** - Feature flags and sections defined as constants
- **Memoized calculations** - Performance-optimized with React.useMemo
- **Shared components** - Reusable UI patterns extracted as components
- **Context-based state** - Centralized feature flag management

## 🏗️ Architecture

```
src/
├── App.tsx                 # Main app - 100% package components
├── index.css              # Minimal CSS - leverages package styles
├── components/            # Showcase components
│   ├── FeatureShowcase.tsx    # DRY feature flag management
│   ├── ComponentGallery.tsx   # Component demonstrations
│   ├── ThemePlayground.tsx    # Theme switching showcase
│   ├── AnimationStudio.tsx    # Animation controls
│   ├── LayoutBuilder.tsx      # Layout system demo
│   ├── NavigationDemo.tsx     # Navigation patterns
│   ├── InteractiveFeatures.tsx # Interaction showcase
│   └── CodeExamples.tsx       # Implementation examples
```

## 🎛️ Features Demonstrated

### Layout System (100% Package)
- ✅ `Container` - Responsive containers with size variants
- ✅ `Grid` / `GridItem` - 12-column responsive grid system
- ✅ `Section` / `HeroSection` / `FeatureSection` - Semantic sections

### Navigation (100% Package)
- ✅ `Sidebar` - Collapsible navigation with icons and badges
- ✅ `Tabs` - Horizontal and vertical tab navigation
- ✅ `Breadcrumb` - Hierarchical navigation trails

### Animation (100% Package)
- ✅ `Animation` - Fade, slide, scale, bounce effects
- ✅ `Typewriter` - Animated text typing with cursor
- ✅ `Glow` - Pulsing glow effects with intensity control
- ✅ `MatrixRain` / `ParticleBackground` - Dynamic backgrounds

### Core Components (100% Package)
- ✅ `Button` - All variants, sizes, and states
- ✅ `Card` - Elevated, ghost, and interactive variants
- ✅ `Text` - Typography with theme-aware variants
- ✅ `Badge` - Status indicators with semantic colors
- ✅ `Input` - Form inputs with validation states
- ✅ `Link` - Internal and external link handling

### Theme System (100% Package)
- ✅ `ThemeProvider` - Matrix/TRON theme switching
- ✅ `useTheme` - Theme state and controls
- ✅ `useKonami` - Konami code integration (↑↑↓↓←→←→BA)

## 🔧 Development

### Package Integration
The demo automatically rebuilds the package before starting:

```bash
npm run dev          # Builds package + starts demo
npm run build        # Builds demo for production
npm run preview      # Preview production build
```

### CSS Architecture
```css
/* Leverages package CSS variables */
:root {
  --color-primary: #00ff41;      /* Matrix green */
  --color-secondary: #008f11;
  --color-background: #000000;
  /* ... all theme variables from package */
}

/* Demo uses package utilities */
.demo-element {
  background-color: var(--color-background);
  color: var(--color-text-primary);
  border-color: var(--color-border);
}
```

### Component Pattern
```tsx
// 100% package leverage example
import { 
  Container, 
  Grid, 
  GridItem, 
  Card, 
  CardHeader, 
  CardTitle,
  Animation 
} from '@jonmatum/terminal-ui';

function DemoComponent() {
  return (
    <Container size="lg">
      <Grid cols={3} gap="md">
        <GridItem>
          <Animation type="fade-in" trigger="visible">
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>100% Package Component</CardTitle>
              </CardHeader>
            </Card>
          </Animation>
        </GridItem>
      </Grid>
    </Container>
  );
}
```

## 🎮 Interactive Features

### Feature Flags
- **22 configurable features** with real-time toggling
- **Category-based organization** (Layout, Animation, Theme, etc.)
- **Live impact preview** showing feature effects
- **Performance monitoring** with enable/disable statistics

### Konami Code Integration
- **Sequence**: ↑ ↑ ↓ ↓ ← → ← → B A
- **Progress indicator** showing completion percentage
- **Theme switching** when activated
- **Audio/visual feedback** (when enabled)

### Responsive Design
- **Mobile-first** approach using package breakpoints
- **Collapsible sidebar** for mobile navigation
- **Adaptive layouts** using package grid system
- **Touch-friendly** interactions

## 📊 Performance

### Bundle Analysis
- **Package size**: ~78KB ESM, ~84KB CJS
- **CSS injection**: Automatic via tsup configuration
- **Tree shaking**: Optimized imports
- **Code splitting**: Component-level lazy loading

### Optimization Techniques
- **React.useMemo** for expensive calculations
- **Context optimization** for state management
- **Animation performance** with CSS transforms
- **Reduced motion** support for accessibility

## 🚀 Deployment

The demo is configured for GitHub Pages deployment:

```bash
npm run demo:deploy    # Builds and deploys to GitHub Pages
```

## 📚 Learning Resources

- **Live Demo**: [https://jonmatum.github.io/terminal-ui](https://jonmatum.github.io/terminal-ui)
- **Package Documentation**: See main README.md
- **Component Examples**: Interactive code snippets in demo
- **Best Practices**: Implementation patterns throughout codebase

---

This demo serves as both a **showcase** and **documentation** for the Terminal UI design system, demonstrating how to build applications that leverage the package 100% while maintaining clean, DRY architecture.
