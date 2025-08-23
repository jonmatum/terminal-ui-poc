# @jonmatum/terminal-ui

A terminal-style design system with Matrix/TRON themes and Konami code integration. Built for modern React applications with TypeScript support.

## 🚀 Live Demo

**[View Interactive Demo →](https://jonmatum.github.io/terminal-ui)**

Experience all components, themes, and the Konami code integration in action!

## Features

- **Dual Theme System**: Matrix (green) and TRON (cyan) themes
- **Konami Code Integration**: `↑ ↑ ↓ ↓ ← → ← → B A` to toggle themes
- **Terminal Aesthetics**: Monospace fonts, glowing effects, and retro styling
- **TypeScript First**: Full type safety and IntelliSense support
- **Tailwind CSS**: Utility-first styling with custom theme integration
- **Micro-Frontend Ready**: Perfect for app shell architectures
- **Fast Builds**: Powered by tsup and esbuild for lightning-fast compilation

## Installation

```bash
npm install @jonmatum/terminal-ui
# or
yarn add @jonmatum/terminal-ui
# or
pnpm add @jonmatum/terminal-ui
```

## Quick Start

```tsx
import { ThemeProvider, Button, Card, CardHeader, CardTitle, CardContent } from '@jonmatum/terminal-ui';

function App() {
  return (
    <ThemeProvider defaultTheme="matrix" enableKonami>
      <div className="min-h-screen bg-black text-current p-8">
        <Card>
          <CardHeader>
            <CardTitle>Terminal UI Demo</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Try the Konami code: ↑ ↑ ↓ ↓ ← → ← → B A</p>
            <Button variant="primary">Matrix Style Button</Button>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
}
```

## Demo Development

The demo application showcases all components and features:

```bash
# Start demo development server
npm run demo:dev

# Build demo for production
npm run demo:build

# Preview demo build
npm run demo:preview

# Deploy demo to GitHub Pages
npm run demo:deploy
```

## Components

### ThemeProvider

Wrap your app with the ThemeProvider to enable theme switching and Konami code functionality.

```tsx
<ThemeProvider 
  defaultTheme="matrix" 
  enableKonami={true}
  onThemeChange={(theme) => console.log('Theme changed to:', theme)}
>
  {/* Your app */}
</ThemeProvider>
```

### Button

Terminal-style button with multiple variants.

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
```

### Card

Container component with terminal styling.

```tsx
<Card variant="elevated">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Input

Terminal-style input field.

```tsx
<Input 
  label="Username"
  placeholder="Enter username"
  helper="Your terminal username"
/>
```

### Text

Typography component with theme variants.

```tsx
<Text variant="primary">Primary text</Text>
<Text variant="accent" as="h1">Accent heading</Text>
<Text variant="muted">Muted text</Text>
```

## Hooks

### useTheme

Access theme state and controls.

```tsx
import { useTheme } from '@jonmatum/terminal-ui';

function MyComponent() {
  const { mode, toggleTheme, isKonamiMode } = useTheme();
  
  return (
    <div>
      <p>Current theme: {mode}</p>
      <p>Konami mode: {isKonamiMode ? 'Active' : 'Inactive'}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
```

### useKonami

Implement custom Konami code functionality.

```tsx
import { useKonami } from '@jonmatum/terminal-ui';

function MyComponent() {
  const { isActive, progress } = useKonami({
    onActivate: () => console.log('Konami activated!'),
    onDeactivate: () => console.log('Konami deactivated!'),
  });
  
  return (
    <div>
      <p>Progress: {Math.round(progress * 100)}%</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
}
```

## Development

```bash
# Install dependencies
npm install

# Build the package (fast with tsup + esbuild)
npm run build

# Watch mode for development
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint

# Testing
npm run test

# Full quality check
npm run quality
```

## Build System

This package uses **tsup** for blazing-fast builds:

- **Zero Configuration**: Works out of the box
- **esbuild Powered**: Extremely fast compilation
- **Multiple Formats**: Automatic CJS and ESM outputs
- **Type Definitions**: Automatic .d.ts generation
- **CSS Injection**: Styles bundled automatically

## Styling

The package includes Tailwind CSS configuration. Add the following to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    // ... your content
    './node_modules/@jonmatum/terminal-ui/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        border: 'var(--color-border)',
      },
    },
  },
};
```

## Themes

### Matrix Theme
- Primary: `#00ff41` (Matrix green)
- Background: `#000000` (Black)
- Effects: Glow, scanlines

### TRON Theme  
- Primary: `#00ffff` (Cyan)
- Accent: `#ff8000` (Orange)
- Background: `#0a0a0a` (Dark gray)
- Effects: Glow, particles

## TypeScript

Full TypeScript support with exported types:

```tsx
import type { 
  ThemeMode, 
  ThemeConfig, 
  ButtonProps, 
  CardProps 
} from '@jonmatum/terminal-ui';
```

## License

MIT © Jonmatum
