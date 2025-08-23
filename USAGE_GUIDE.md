# Terminal UI Design System - Usage Guide

## Quick Start

### Installation
```bash
npm install @jonmatum/terminal-ui
# or
yarn add @jonmatum/terminal-ui
# or
pnpm add @jonmatum/terminal-ui
```

### Basic Setup
```tsx
import { ThemeProvider } from '@jonmatum/terminal-ui';

function App() {
  return (
    <ThemeProvider defaultTheme="matrix" enableKonami>
      <div className="min-h-screen bg-black text-current">
        {/* Your app content */}
      </div>
    </ThemeProvider>
  );
}
```

### Tailwind Configuration
```js
// tailwind.config.js
import { mergeWithTailwindConfig } from '@jonmatum/terminal-ui';

export default mergeWithTailwindConfig({
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  // Your existing configuration
});
```

## Component Categories

### 1. Core Components

#### Button
```tsx
import { Button } from '@jonmatum/terminal-ui';

<Button variant="primary" size="lg">
  Execute Command
</Button>

<Button variant="secondary" size="md" disabled>
  Processing...
</Button>

<Button variant="ghost" size="sm">
  Cancel
</Button>
```

#### Card
```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@jonmatum/terminal-ui';

<Card variant="elevated">
  <CardHeader>
    <CardTitle>System Status</CardTitle>
  </CardHeader>
  <CardContent>
    <p>All systems operational</p>
  </CardContent>
</Card>
```

#### Input
```tsx
import { Input } from '@jonmatum/terminal-ui';

<Input 
  label="Username"
  placeholder="Enter username"
  helper="Your terminal username"
  required
/>
```

#### Text
```tsx
import { Text } from '@jonmatum/terminal-ui';

<Text variant="primary" size="2xl" as="h1">
  Terminal Interface
</Text>

<Text variant="muted" size="sm">
  System initialized successfully
</Text>
```

### 2. Layout Components

#### Container & Grid System
```tsx
import { Container, Grid, GridItem, Section } from '@jonmatum/terminal-ui';

<Section variant="hero">
  <Container size="4xl">
    <Grid cols={1} mdCols={2} xlCols={3} gap="lg">
      <GridItem span={2}>
        <h1>Main Content</h1>
      </GridItem>
      <GridItem>
        <aside>Sidebar</aside>
      </GridItem>
    </Grid>
  </Container>
</Section>
```

#### Pre-built Layouts
```tsx
import { 
  HeroSection, 
  FeatureSection, 
  ContentSection,
  CardGrid 
} from '@jonmatum/terminal-ui';

// Hero section with centered content
<HeroSection>
  <h1>Welcome to Terminal UI</h1>
</HeroSection>

// Feature showcase
<FeatureSection>
  <CardGrid>
    {features.map(feature => (
      <Card key={feature.id}>{feature.content}</Card>
    ))}
  </CardGrid>
</FeatureSection>

// Main content area
<ContentSection>
  <article>Your content here</article>
</ContentSection>
```

### 3. Navigation Components

#### Horizontal Navigation
```tsx
import { Navigation } from '@jonmatum/terminal-ui';

const navItems = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'projects', label: 'Projects', icon: 'folder', badge: '3' },
  { id: 'about', label: 'About', icon: 'user' }
];

<Navigation 
  items={navItems}
  variant="horizontal"
  alignment="center"
  onItemClick={(item) => console.log('Clicked:', item.label)}
/>
```

#### Sidebar Navigation
```tsx
import { Sidebar } from '@jonmatum/terminal-ui';

<Sidebar
  items={navItems}
  title="Terminal UI"
  collapsible
  defaultCollapsed={false}
  footer={<div>Version 1.0.0</div>}
/>
```

#### Tabs
```tsx
import { Tabs } from '@jonmatum/terminal-ui';

const tabItems = [
  { 
    id: 'overview', 
    label: 'Overview', 
    icon: 'eye',
    content: <div>Overview content</div>
  },
  { 
    id: 'settings', 
    label: 'Settings', 
    icon: 'settings',
    content: <div>Settings content</div>
  }
];

<Tabs 
  items={tabItems}
  variant="underline"
  onTabChange={(tabId) => console.log('Active tab:', tabId)}
/>
```

#### Breadcrumbs
```tsx
import { Breadcrumb } from '@jonmatum/terminal-ui';

<Breadcrumb items={[
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Terminal UI' }
]} />
```

### 4. Animation Components

#### Basic Animations
```tsx
import { Animation } from '@jonmatum/terminal-ui';

<Animation 
  type="fade-in" 
  duration="slow" 
  delay="short"
  trigger="visible"
>
  <Card>Content appears when scrolled into view</Card>
</Animation>

<Animation 
  type="glow" 
  repeat={true}
  trigger="hover"
>
  <Button>Hover to glow</Button>
</Animation>
```

#### Typewriter Effect
```tsx
import { Typewriter } from '@jonmatum/terminal-ui';

<Typewriter 
  text={["System initializing...", "Loading modules...", "Ready."]}
  speed={50}
  deleteSpeed={30}
  delayBetween={2000}
  loop={true}
  cursor={true}
  onComplete={() => console.log('Typing complete')}
/>
```

#### Glow Effects
```tsx
import { Glow } from '@jonmatum/terminal-ui';

<Glow intensity="high" pulse>
  <h1>Glowing Title</h1>
</Glow>

<Glow color="accent" intensity="medium">
  <Button>Glowing Button</Button>
</Glow>
```

#### Background Effects
```tsx
import { ParticleBackground, MatrixRain } from '@jonmatum/terminal-ui';

// Floating particles
<div className="relative">
  <ParticleBackground 
    count={50} 
    speed="medium" 
    size="small" 
  />
  <div>Your content here</div>
</div>

// Matrix rain effect
<div className="relative">
  <MatrixRain 
    density="medium" 
    speed="slow"
    characters="01アイウエオ"
  />
  <div>Your content here</div>
</div>
```

## Theme System

### Using Themes
```tsx
import { useTheme } from '@jonmatum/terminal-ui';

const MyComponent = () => {
  const { mode, toggleTheme, isKonamiMode } = useTheme();
  
  return (
    <div>
      <p>Current theme: {mode}</p>
      <p>Konami mode: {isKonamiMode ? 'Active' : 'Inactive'}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
```

### Custom Themes
```tsx
import { ThemeProvider, matrixTheme } from '@jonmatum/terminal-ui';

const customTheme = {
  ...matrixTheme,
  primary: '#FF6B35',
  secondary: '#F7931E',
  gradients: {
    ...matrixTheme.gradients,
    primary: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)'
  }
};

<ThemeProvider customTheme={customTheme}>
  <App />
</ThemeProvider>
```

### Theme-Aware Styling
```tsx
import { createThemeAwareClass, useTheme } from '@jonmatum/terminal-ui';

const ThemedComponent = () => {
  const { mode } = useTheme();
  
  const className = createThemeAwareClass(
    'bg-green-900 text-green-300', // Matrix
    'bg-blue-900 text-cyan-300',   // TRON
    mode
  );
  
  return <div className={className}>Themed content</div>;
};
```

## Advanced Usage

### Component Variants
```tsx
import { buttonVariants, cardVariants } from '@jonmatum/terminal-ui';

// Use pre-configured variants
const Button = ({ variant = 'primary', size = 'md', ...props }) => (
  <button className={buttonVariants(variant, size)} {...props} />
);

// Create custom variants
import { createComponentVariants } from '@jonmatum/terminal-ui';

const alertVariants = createComponentVariants({
  base: 'p-4 rounded border font-mono',
  variants: {
    success: {
      matrix: 'bg-green-900 border-green-600 text-green-300',
      tron: 'bg-cyan-900 border-cyan-600 text-cyan-300'
    },
    error: {
      matrix: 'bg-red-900 border-red-600 text-red-300',
      tron: 'bg-magenta-900 border-magenta-600 text-magenta-300'
    }
  }
});
```

### CSS-in-JS Integration
```tsx
import { generateThemeStyles, useTheme } from '@jonmatum/terminal-ui';

const StyledComponent = () => {
  const { currentTheme } = useTheme();
  const themeStyles = generateThemeStyles(currentTheme);
  
  return (
    <div style={themeStyles}>
      <div style={{ color: 'var(--color-primary)' }}>
        Themed with CSS variables
      </div>
    </div>
  );
};
```

### Konami Code Integration
```tsx
import { useKonami } from '@jonmatum/terminal-ui';

const KonamiComponent = () => {
  const { isActive, progress } = useKonami({
    onActivate: () => {
      console.log('Konami code activated!');
      // Trigger special effects
    },
    onDeactivate: () => {
      console.log('Konami code deactivated');
    }
  });
  
  return (
    <div>
      <div>Progress: {Math.round(progress * 100)}%</div>
      <div>Status: {isActive ? 'Active' : 'Inactive'}</div>
    </div>
  );
};
```

## Application Examples

### Dashboard Application
```tsx
import { 
  ThemeProvider,
  Sidebar,
  Navigation,
  Grid,
  Card,
  Animation,
  ParticleBackground 
} from '@jonmatum/terminal-ui';

const Dashboard = () => {
  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: 'dashboard' },
    { id: 'analytics', label: 'Analytics', icon: 'chart', badge: 'New' },
    { id: 'settings', label: 'Settings', icon: 'settings' }
  ];

  return (
    <ThemeProvider defaultTheme="tron" enableKonami>
      <div className="flex min-h-screen relative">
        <ParticleBackground count={30} speed="slow" />
        
        <Sidebar 
          items={sidebarItems}
          title="Control Panel"
          collapsible
        />
        
        <main className="flex-1 p-6">
          <Grid cols={1} mdCols={2} xlCols={4} gap="lg">
            {metrics.map((metric, index) => (
              <Animation 
                key={metric.id}
                type="slide-up" 
                delay={index * 100}
                trigger="visible"
              >
                <Card variant="elevated">
                  <h3>{metric.title}</h3>
                  <p className="text-2xl font-bold">{metric.value}</p>
                </Card>
              </Animation>
            ))}
          </Grid>
        </main>
      </div>
    </ThemeProvider>
  );
};
```

### Landing Page
```tsx
import { 
  ThemeProvider,
  HeroSection,
  FeatureSection,
  ContentSection,
  Typewriter,
  Glow,
  MatrixRain,
  CardGrid,
  Button
} from '@jonmatum/terminal-ui';

const LandingPage = () => (
  <ThemeProvider defaultTheme="matrix" enableKonami>
    <div className="relative">
      <MatrixRain density="low" speed="slow" />
      
      <HeroSection>
        <div className="text-center">
          <Glow intensity="high" pulse>
            <h1 className="text-6xl font-bold mb-4">
              <Typewriter 
                text="Terminal UI Design System"
                speed={100}
              />
            </h1>
          </Glow>
          
          <p className="text-xl mb-8 opacity-80">
            Build terminal-style interfaces with Matrix and TRON themes
          </p>
          
          <div className="space-x-4">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button variant="ghost" size="lg">
              View Docs
            </Button>
          </div>
        </div>
      </HeroSection>
      
      <FeatureSection background="elevated">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <CardGrid>
          {features.map(feature => (
            <Card key={feature.id} variant="ghost">
              <Glow intensity="low">
                <Icon name={feature.icon} size="2xl" className="mb-4" />
              </Glow>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="opacity-80">{feature.description}</p>
            </Card>
          ))}
        </CardGrid>
      </FeatureSection>
    </div>
  </ThemeProvider>
);
```

## Best Practices

### 1. Performance
- Import only the components you need
- Use lazy loading for heavy components
- Optimize animations for 60fps
- Use CSS variables for theme switching

### 2. Accessibility
- All components include proper ARIA attributes
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support

### 3. Responsive Design
- Mobile-first approach
- Flexible grid system
- Responsive typography
- Touch-friendly interactions

### 4. Theme Consistency
- Use theme-aware components
- Leverage CSS variables
- Maintain color contrast ratios
- Test both themes thoroughly

## Troubleshooting

### Common Issues

#### Styles not applying
```tsx
// Make sure Tailwind config includes the package
import { mergeWithTailwindConfig } from '@jonmatum/terminal-ui';

export default mergeWithTailwindConfig({
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // This is automatically included by mergeWithTailwindConfig
  ],
});
```

#### Theme not switching
```tsx
// Ensure ThemeProvider wraps your app
<ThemeProvider defaultTheme="matrix" enableKonami>
  <App />
</ThemeProvider>
```

#### Animations not working
```tsx
// Check if the animation classes are included in your build
// Use the provided Tailwind config or add custom keyframes
```

### Getting Help

- Check the [GitHub Issues](https://github.com/jonmatum/terminal-ui/issues)
- Review the [API Documentation](https://jonmatum.github.io/terminal-ui)
- Join our [Discord Community](https://discord.gg/terminal-ui)

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on:

- Setting up the development environment
- Running tests
- Submitting pull requests
- Code style guidelines

## License

MIT © Jonmatum
