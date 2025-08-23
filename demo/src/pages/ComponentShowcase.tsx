import React, { useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  Text,
  Badge,
  Icon,
  Link,
  Animation,
  Glow,
  Grid,
  GridItem,
  useTheme,
} from '@jonmatum/terminal-ui';

export function ComponentShowcase() {
  const { mode } = useTheme();
  const [inputValue, setInputValue] = useState('');
  const [soundCount, setSoundCount] = useState(0);

  const playSound = () => {
    console.log('🔊 Sound effect triggered');
    setSoundCount(prev => prev + 1);
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="mb-8">
        <Text as="h1" size="4xl" weight="bold" className="mb-4">
          <Glow intensity={mode === 'tron' ? 'high' : 'medium'}>
            Component Showcase
          </Glow>
        </Text>
        <Text variant="secondary" size="lg">
          Explore all the core components with interactive examples and theme variations.
        </Text>
      </div>

      {/* Buttons Section */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Button Components</CardTitle>
          <CardDescription>
            Interactive buttons with sound effects and hover animations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Button Variants */}
          <div>
            <Text variant="accent" weight="semibold" className="mb-3">Variants</Text>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" onSound={playSound}>
                Primary
              </Button>
              <Button variant="secondary" onSound={playSound}>
                Secondary
              </Button>
              <Button variant="ghost" onSound={playSound}>
                Ghost
              </Button>
              <Button variant="danger" onSound={playSound}>
                Danger
              </Button>
            </div>
          </div>

          {/* Button Sizes */}
          <div>
            <Text variant="accent" weight="semibold" className="mb-3">Sizes</Text>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary" size="sm" onSound={playSound}>
                Small
              </Button>
              <Button variant="primary" size="md" onSound={playSound}>
                Medium
              </Button>
              <Button variant="primary" size="lg" onSound={playSound}>
                Large
              </Button>
            </div>
          </div>

          {/* Button States */}
          <div>
            <Text variant="accent" weight="semibold" className="mb-3">States</Text>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" onSound={playSound}>
                Normal
              </Button>
              <Button variant="primary" disabled>
                Disabled
              </Button>
              <Button variant="primary" loading onSound={playSound}>
                Loading
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Text variant="muted" size="sm">
            Sound effects triggered: {soundCount} times
          </Text>
        </CardFooter>
      </Card>

      {/* Cards Section */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Card Components</CardTitle>
          <CardDescription>
            Flexible card layouts with different variants and animations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Grid cols={1} mdCols={2} xlCols={3} gap="md">
            <GridItem>
              <Animation type="slide-up" delay="short" trigger="visible">
                <Card variant="default">
                  <CardHeader>
                    <CardTitle size="md">Default Card</CardTitle>
                    <CardDescription>
                      Standard card with basic styling
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Text variant="secondary">
                      This is the default card variant with standard border and background.
                    </Text>
                  </CardContent>
                </Card>
              </Animation>
            </GridItem>

            <GridItem>
              <Animation type="slide-up" delay="medium" trigger="visible">
                <Card variant="elevated">
                  <CardHeader>
                    <CardTitle size="md">Elevated Card</CardTitle>
                    <CardDescription>
                      Enhanced card with shadow effects
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Text variant="secondary">
                      Elevated cards have enhanced shadows and visual depth.
                    </Text>
                  </CardContent>
                </Card>
              </Animation>
            </GridItem>

            <GridItem>
              <Animation type="slide-up" delay="long" trigger="visible">
                <Card variant="interactive" onSound={playSound}>
                  <CardHeader>
                    <CardTitle size="md">Interactive Card</CardTitle>
                    <CardDescription>
                      Clickable card with hover effects
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Text variant="secondary">
                      Interactive cards respond to user interactions with animations.
                    </Text>
                  </CardContent>
                </Card>
              </Animation>
            </GridItem>
          </Grid>
        </CardContent>
      </Card>

      {/* Input Components */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Input Components</CardTitle>
          <CardDescription>
            Form inputs with theme-aware styling and validation states
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Input */}
          <div>
            <Text variant="accent" weight="semibold" className="mb-3">Basic Input</Text>
            <Input
              label="Username"
              placeholder="Enter your username"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              helper="Choose a unique username"
              onSound={playSound}
            />
          </div>

          {/* Input Variants */}
          <div>
            <Text variant="accent" weight="semibold" className="mb-3">Input Variants</Text>
            <div className="space-y-4">
              <Input
                variant="default"
                placeholder="Default input"
                onSound={playSound}
              />
              <Input
                variant="search"
                placeholder="Search input with icon"
                leftIcon={<span>🔍</span>}
                onSound={playSound}
              />
              <Input
                variant="error"
                placeholder="Error state input"
                error="This field is required"
                onSound={playSound}
              />
            </div>
          </div>

          {/* Input Sizes */}
          <div>
            <Text variant="accent" weight="semibold" className="mb-3">Input Sizes</Text>
            <div className="space-y-3">
              <Input size="sm" placeholder="Small input" onSound={playSound} />
              <Input size="md" placeholder="Medium input" onSound={playSound} />
              <Input size="lg" placeholder="Large input" onSound={playSound} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Typography Section */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Typography Components</CardTitle>
          <CardDescription>
            Text components with various sizes, weights, and theme variants
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Headings */}
          <div>
            <Text variant="accent" weight="semibold" className="mb-3">Headings</Text>
            <div className="space-y-2">
              <Text as="h1" size="4xl" weight="bold">Heading 1 - 4xl</Text>
              <Text as="h2" size="3xl" weight="bold">Heading 2 - 3xl</Text>
              <Text as="h3" size="2xl" weight="semibold">Heading 3 - 2xl</Text>
              <Text as="h4" size="xl" weight="semibold">Heading 4 - xl</Text>
              <Text as="h5" size="lg" weight="medium">Heading 5 - lg</Text>
              <Text as="h6" size="base" weight="medium">Heading 6 - base</Text>
            </div>
          </div>

          {/* Text Variants */}
          <div>
            <Text variant="accent" weight="semibold" className="mb-3">Text Variants</Text>
            <div className="space-y-2">
              <Text variant="primary">Primary text - main content color</Text>
              <Text variant="secondary">Secondary text - subdued content</Text>
              <Text variant="muted">Muted text - captions and metadata</Text>
              <Text variant="accent">Accent text - highlights and emphasis</Text>
            </div>
          </div>

          {/* Special Effects */}
          <div>
            <Text variant="accent" weight="semibold" className="mb-3">Special Effects</Text>
            <div className="space-y-3">
              <Glow intensity="medium">
                <Text size="2xl" weight="bold">
                  Glowing Text Effect
                </Text>
              </Glow>
              <Text size="xl" weight="bold" className="bg-gradient-to-r from-current to-current/50 bg-clip-text text-transparent">
                Gradient Text Effect
              </Text>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Badges Section */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Badge Components</CardTitle>
          <CardDescription>
            Status indicators and labels with various styles and colors
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Badge Variants */}
          <div>
            <Text variant="accent" weight="semibold" className="mb-3">Variants</Text>
            <div className="flex flex-wrap gap-2">
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="danger">Danger</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </div>

          {/* Badge Sizes */}
          <div>
            <Text variant="accent" weight="semibold" className="mb-3">Sizes</Text>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="primary" size="sm">Small</Badge>
              <Badge variant="primary" size="md">Medium</Badge>
              <Badge variant="primary" size="lg">Large</Badge>
            </div>
          </div>

          {/* Badge with Icons */}
          <div>
            <Text variant="accent" weight="semibold" className="mb-3">With Icons</Text>
            <div className="flex flex-wrap gap-2">
              <Badge variant="success">✅ Completed</Badge>
              <Badge variant="warning">⚠️ Warning</Badge>
              <Badge variant="danger">❌ Error</Badge>
              <Badge variant="primary">🚀 New</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Links Section */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Link Components</CardTitle>
          <CardDescription>
            Themed links with hover effects and sound feedback
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Link Variants */}
          <div>
            <Text variant="accent" weight="semibold" className="mb-3">Variants</Text>
            <div className="flex flex-wrap gap-6">
              <Link variant="primary" onSound={playSound}>
                Primary Link
              </Link>
              <Link variant="secondary" onSound={playSound}>
                Secondary Link
              </Link>
              <Link variant="underline" onSound={playSound}>
                Underlined Link
              </Link>
              <Link variant="button" onSound={playSound}>
                Button-style Link
              </Link>
            </div>
          </div>

          {/* External Links */}
          <div>
            <Text variant="accent" weight="semibold" className="mb-3">External Links</Text>
            <div className="flex flex-wrap gap-6">
              <Link variant="primary" external onSound={playSound}>
                External Link ↗
              </Link>
              <Link variant="secondary" external onSound={playSound}>
                Documentation ↗
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Icon Components */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Icon Components</CardTitle>
          <CardDescription>
            Themed icons with hover effects and size variants
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Icon Variants */}
          <div>
            <Text variant="accent" weight="semibold" className="mb-3">Variants</Text>
            <div className="flex flex-wrap items-center gap-4">
              <Icon variant="primary" size="md" hover onSound={playSound}>
                <span>🎯</span>
              </Icon>
              <Icon variant="secondary" size="md" hover onSound={playSound}>
                <span>⚡</span>
              </Icon>
              <Icon variant="accent" size="md" hover onSound={playSound}>
                <span>🚀</span>
              </Icon>
              <Icon variant="muted" size="md" hover onSound={playSound}>
                <span>🔧</span>
              </Icon>
            </div>
          </div>

          {/* Icon Sizes */}
          <div>
            <Text variant="accent" weight="semibold" className="mb-3">Sizes</Text>
            <div className="flex flex-wrap items-center gap-4">
              <Icon variant="primary" size="xs" hover onSound={playSound}>
                <span>🎮</span>
              </Icon>
              <Icon variant="primary" size="sm" hover onSound={playSound}>
                <span>🎮</span>
              </Icon>
              <Icon variant="primary" size="md" hover onSound={playSound}>
                <span>🎮</span>
              </Icon>
              <Icon variant="primary" size="lg" hover onSound={playSound}>
                <span>🎮</span>
              </Icon>
              <Icon variant="primary" size="xl" hover onSound={playSound}>
                <span>🎮</span>
              </Icon>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
