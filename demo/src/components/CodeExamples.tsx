import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Grid,
  GridItem,
  Text,
  Badge,
  Button,
  Animation,
  Glow,
  Container,
  Section,
  Tabs,
} from '@jonmatum/terminal-ui';

const CODE_EXAMPLES = {
  installation: {
    title: 'Installation & Setup',
    examples: [
      {
        title: 'NPM Installation',
        code: `npm install @jonmatum/terminal-ui
# or
yarn add @jonmatum/terminal-ui
# or
pnpm add @jonmatum/terminal-ui`
      },
      {
        title: 'Basic Setup',
        code: `import { ThemeProvider } from '@jonmatum/terminal-ui';

function App() {
  return (
    <ThemeProvider defaultTheme="matrix" enableKonami>
      {/* Your app content */}
    </ThemeProvider>
  );
}`
      },
      {
        title: 'Tailwind Configuration',
        code: `// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@jonmatum/terminal-ui/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
      },
    },
  },
};`
      }
    ]
  },
  components: {
    title: 'Component Usage',
    examples: [
      {
        title: 'Button Component',
        code: `import { Button } from '@jonmatum/terminal-ui';

<Button variant="primary" size="lg">
  Primary Button
</Button>
<Button variant="secondary" loading>
  Loading Button
</Button>
<Button variant="danger" disabled>
  Disabled Button
</Button>`
      },
      {
        title: 'Card Component',
        code: `import { Card, CardHeader, CardTitle, CardContent } from '@jonmatum/terminal-ui';

<Card variant="elevated">
  <CardHeader>
    <CardTitle>Terminal Card</CardTitle>
    <CardDescription>A card with terminal styling</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Your content goes here</p>
  </CardContent>
</Card>`
      },
      {
        title: 'Grid Layout',
        code: `import { Grid, GridItem, Container } from '@jonmatum/terminal-ui';

<Container size="lg">
  <Grid cols={3} mdCols={6} gap="md">
    <GridItem>Item 1</GridItem>
    <GridItem>Item 2</GridItem>
    <GridItem>Item 3</GridItem>
  </Grid>
</Container>`
      }
    ]
  },
  animations: {
    title: 'Animations & Effects',
    examples: [
      {
        title: 'Animation Component',
        code: `import { Animation } from '@jonmatum/terminal-ui';

<Animation type="fade-in" duration="slow" delay="short">
  <div>Animated content</div>
</Animation>

<Animation type="slide-up" trigger="visible">
  <div>Scroll-triggered animation</div>
</Animation>`
      },
      {
        title: 'Typewriter Effect',
        code: `import { Typewriter } from '@jonmatum/terminal-ui';

<Typewriter 
  text="Hello, Terminal UI!"
  speed={100}
  cursor
  onComplete={() => console.log('Done!')}
/>`
      },
      {
        title: 'Glow Effects',
        code: `import { Glow } from '@jonmatum/terminal-ui';

<Glow intensity="high" pulse>
  <h1>Glowing Title</h1>
</Glow>

<Glow intensity="medium">
  <Button>Glowing Button</Button>
</Glow>`
      },
      {
        title: 'Background Effects',
        code: `import { MatrixRain, ParticleBackground } from '@jonmatum/terminal-ui';

{/* Matrix theme background */}
<MatrixRain density="medium" speed="slow" />

{/* TRON theme background */}
<ParticleBackground count={50} speed="medium" size="small" />`
      }
    ]
  },
  theming: {
    title: 'Theming & Customization',
    examples: [
      {
        title: 'Theme Hook',
        code: `import { useTheme } from '@jonmatum/terminal-ui';

function ThemeToggle() {
  const { mode, toggleTheme, isKonamiMode } = useTheme();
  
  return (
    <div>
      <p>Current theme: {mode}</p>
      <button onClick={toggleTheme}>
        Switch to {mode === 'matrix' ? 'TRON' : 'Matrix'}
      </button>
      {isKonamiMode && <p>🎮 Konami mode active!</p>}
    </div>
  );
}`
      },
      {
        title: 'Konami Code Hook',
        code: `import { useKonami } from '@jonmatum/terminal-ui';

function KonamiDemo() {
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
}`
      },
      {
        title: 'Custom CSS Variables',
        code: `:root {
  --color-primary: #00ff41;
  --color-secondary: #008f11;
  --color-accent: #00ff41;
  --color-background: #000000;
  --color-surface: #0a0a0a;
  --color-border: #00ff41;
}

.theme-tron {
  --color-primary: #00ffff;
  --color-accent: #ff8000;
}`
      }
    ]
  },
  advanced: {
    title: 'Advanced Usage',
    examples: [
      {
        title: 'Custom Component with Variants',
        code: `import { createComponentVariants } from '@jonmatum/terminal-ui';

const customVariants = createComponentVariants({
  base: 'px-4 py-2 rounded font-mono',
  variants: {
    variant: {
      terminal: 'bg-black text-green-400 border border-green-400',
      retro: 'bg-purple-900 text-cyan-400 border border-cyan-400',
    },
    size: {
      sm: 'text-sm px-2 py-1',
      lg: 'text-lg px-6 py-3',
    },
  },
});

function CustomComponent({ variant, size, ...props }) {
  return (
    <div className={customVariants({ variant, size })} {...props} />
  );
}`
      },
      {
        title: 'Section Presets',
        code: `import { HeroSection, FeatureSection, ContentSection } from '@jonmatum/terminal-ui';

<HeroSection>
  <Container size="xl">
    <h1>Hero Content</h1>
  </Container>
</HeroSection>

<FeatureSection background="elevated">
  <Container size="lg">
    <Grid cols={3}>
      <GridItem>Feature 1</GridItem>
      <GridItem>Feature 2</GridItem>
      <GridItem>Feature 3</GridItem>
    </Grid>
  </Container>
</FeatureSection>`
      },
      {
        title: 'Navigation Components',
        code: `import { Sidebar, Tabs, Breadcrumb } from '@jonmatum/terminal-ui';

<Sidebar
  items={[
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: 'ℹ️' },
  ]}
  title="Navigation"
  collapsible
/>

<Tabs
  items={[
    { id: 'tab1', label: 'Tab 1', badge: '3' },
    { id: 'tab2', label: 'Tab 2' },
  ]}
  activeTab="tab1"
  variant="horizontal"
/>

<Breadcrumb
  items={[
    { label: 'Home', onClick: () => navigate('/') },
    { label: 'Products', onClick: () => navigate('/products') },
    { label: 'Current Page' },
  ]}
/>`
      }
    ]
  }
};

export function CodeExamples() {
  const [selectedCategory, setSelectedCategory] = useState('installation');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (code: string, title: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(title);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const categories = Object.keys(CODE_EXAMPLES);
  const currentCategory = CODE_EXAMPLES[selectedCategory as keyof typeof CODE_EXAMPLES];

  const tabItems = categories.map(category => ({
    id: category,
    label: CODE_EXAMPLES[category as keyof typeof CODE_EXAMPLES].title,
    badge: CODE_EXAMPLES[category as keyof typeof CODE_EXAMPLES].examples.length.toString()
  }));

  return (
    <Container size="full">
      <Section className="mb-8">
        <div className="text-center mb-8">
          <Animation type="fade-in" duration="slow">
            <Glow intensity="high" pulse>
              <Text as="h1" size="4xl" weight="extrabold" className="mb-4">
                💻 Code Examples
              </Text>
            </Glow>
          </Animation>
          
          <Animation type="slide-up" delay="short">
            <Text as="p" size="lg" variant="secondary" className="max-w-3xl mx-auto">
              Complete implementation examples, best practices, and integration guides 
              for the Terminal UI design system.
            </Text>
          </Animation>
        </div>

        {/* Category Tabs */}
        <Tabs
          items={tabItems}
          activeTab={selectedCategory}
          onTabChange={setSelectedCategory}
          variant="horizontal"
          className="mb-8"
        />
      </Section>

      {/* Code Examples Grid */}
      <Section>
        <Grid cols={1} lgCols={2} gap="lg">
          {currentCategory.examples.map((example, index) => (
            <GridItem key={example.title}>
              <Animation 
                type="fade-in" 
                delay={index * 100}
                trigger="visible"
              >
                <Card variant="elevated" className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="primary" size="sm">
                        {selectedCategory}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyCode(example.code, example.title)}
                      >
                        {copiedCode === example.title ? '✅ Copied!' : '📋 Copy'}
                      </Button>
                    </div>
                    <CardTitle>{example.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="bg-black/50 rounded-lg p-4 border border-current/20">
                      <pre className="text-sm overflow-x-auto">
                        <code className="text-current whitespace-pre-wrap">
                          {example.code}
                        </code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </Animation>
            </GridItem>
          ))}
        </Grid>
      </Section>

      {/* Quick Reference */}
      <Section className="mt-12">
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Quick Reference</CardTitle>
            <CardDescription>
              Essential links and resources for development
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Grid cols={1} mdCols={3} gap="md">
              <div className="text-center p-4 bg-current/10 rounded-lg">
                <Text weight="semibold" className="mb-2">📚 Documentation</Text>
                <Text size="sm" variant="muted" className="mb-3">
                  Complete API reference and guides
                </Text>
                <Button variant="primary" size="sm">
                  View Docs
                </Button>
              </div>
              
              <div className="text-center p-4 bg-current/10 rounded-lg">
                <Text weight="semibold" className="mb-2">🐙 GitHub</Text>
                <Text size="sm" variant="muted" className="mb-3">
                  Source code and issue tracking
                </Text>
                <Button variant="secondary" size="sm">
                  View Source
                </Button>
              </div>
              
              <div className="text-center p-4 bg-current/10 rounded-lg">
                <Text weight="semibold" className="mb-2">📦 NPM</Text>
                <Text size="sm" variant="muted" className="mb-3">
                  Package information and versions
                </Text>
                <Button variant="accent" size="sm">
                  View Package
                </Button>
              </div>
            </Grid>
            
            <div className="mt-6 p-4 bg-black/30 rounded-lg">
              <Text weight="semibold" className="mb-2">Installation Command</Text>
              <div className="flex items-center gap-2">
                <code className="flex-1 text-sm bg-black/50 p-2 rounded">
                  npm install @jonmatum/terminal-ui
                </code>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyCode('npm install @jonmatum/terminal-ui', 'install')}
                >
                  {copiedCode === 'install' ? '✅' : '📋'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>
    </Container>
  );
}
