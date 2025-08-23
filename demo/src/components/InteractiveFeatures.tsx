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
  useKonami,
} from '@jonmatum/terminal-ui';
import { useFeatureFlags } from '../App';

export function InteractiveFeatures() {
  const { isEnabled } = useFeatureFlags();
  const [clickCount, setClickCount] = useState(0);
  const [hoverState, setHoverState] = useState<string | null>(null);
  
  const { isActive: konamiActive, progress } = useKonami({
    onActivate: () => console.log('Konami activated in Interactive Features!'),
  });

  return (
    <Container size="full">
      <Section className="mb-8">
        <div className="text-center mb-8">
          <Animation type="fade-in" duration="slow">
            <Glow intensity="high" pulse>
              <Text as="h1" size="4xl" weight="extrabold" className="mb-4">
                🎮 Interactive Features
              </Text>
            </Glow>
          </Animation>
          
          <Animation type="slide-up" delay="short">
            <Text as="p" size="lg" variant="secondary" className="max-w-3xl mx-auto">
              Explore user interactions, feedback systems, and accessibility features 
              built into the design system.
            </Text>
          </Animation>
        </div>
      </Section>

      <Grid cols={1} mdCols={2} gap="lg">
        {/* Hover Effects */}
        <GridItem>
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Hover Effects</CardTitle>
              <CardDescription>Interactive hover states and transitions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {['Button', 'Card', 'Badge', 'Link'].map(component => (
                  <div
                    key={component}
                    className="p-4 bg-current/10 rounded-lg border border-current/20 cursor-pointer transition-all duration-200 hover:bg-current/20 hover:scale-105"
                    onMouseEnter={() => setHoverState(component)}
                    onMouseLeave={() => setHoverState(null)}
                  >
                    <Text size="sm" weight="semibold">{component}</Text>
                    <Text size="xs" variant="muted">
                      {hoverState === component ? 'Hovering!' : 'Hover me'}
                    </Text>
                  </div>
                ))}
              </div>
              <Badge variant={hoverState ? 'success' : 'muted'}>
                {hoverState ? `Hovering: ${hoverState}` : 'No hover detected'}
              </Badge>
            </CardContent>
          </Card>
        </GridItem>

        {/* Click Interactions */}
        <GridItem>
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Click Interactions</CardTitle>
              <CardDescription>Button states and click feedback</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setClickCount(prev => prev + 1)}
                  className="mb-4"
                >
                  Click Me! ({clickCount})
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <Button variant="secondary" size="sm">Secondary</Button>
                <Button variant="ghost" size="sm">Ghost</Button>
                <Button variant="danger" size="sm">Danger</Button>
                <Button variant="accent" size="sm">Accent</Button>
              </div>
              
              <div className="text-center">
                <Badge variant="primary">
                  Total Clicks: {clickCount}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </GridItem>

        {/* Konami Code Integration */}
        <GridItem>
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Konami Code</CardTitle>
              <CardDescription>↑ ↑ ↓ ↓ ← → ← → B A sequence detection</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="mb-4">
                  <Badge variant={konamiActive ? 'success' : 'muted'} size="lg">
                    {konamiActive ? '🎮 KONAMI ACTIVE!' : '🎯 Try the sequence'}
                  </Badge>
                </div>
                
                <div className="mb-4">
                  <Text size="sm" variant="muted" className="mb-2">Progress:</Text>
                  <div className="w-full bg-current/20 rounded-full h-3">
                    <div 
                      className="bg-current h-3 rounded-full transition-all duration-200"
                      style={{ width: `${progress * 100}%` }}
                    />
                  </div>
                  <Text size="xs" variant="muted" className="mt-1">
                    {Math.round(progress * 100)}%
                  </Text>
                </div>
                
                <div className="text-center">
                  <Text size="sm" className="font-mono">
                    ↑ ↑ ↓ ↓ ← → ← → B A
                  </Text>
                </div>
              </div>
            </CardContent>
          </Card>
        </GridItem>

        {/* Keyboard Navigation */}
        <GridItem>
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Keyboard Navigation</CardTitle>
              <CardDescription>Accessibility and keyboard shortcuts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-current/10 rounded">
                  <Text size="sm">Tab Navigation</Text>
                  <Badge variant="secondary" size="sm">Tab</Badge>
                </div>
                <div className="flex justify-between items-center p-2 bg-current/10 rounded">
                  <Text size="sm">Enter to Activate</Text>
                  <Badge variant="secondary" size="sm">Enter</Badge>
                </div>
                <div className="flex justify-between items-center p-2 bg-current/10 rounded">
                  <Text size="sm">Escape to Close</Text>
                  <Badge variant="secondary" size="sm">Esc</Badge>
                </div>
                <div className="flex justify-between items-center p-2 bg-current/10 rounded">
                  <Text size="sm">Arrow Keys</Text>
                  <Badge variant="secondary" size="sm">↑↓←→</Badge>
                </div>
              </div>
              
              <div className="text-center">
                <Text size="xs" variant="muted">
                  All components support keyboard navigation
                </Text>
              </div>
            </CardContent>
          </Card>
        </GridItem>

        {/* Loading States */}
        <GridItem>
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Loading States</CardTitle>
              <CardDescription>Feedback during async operations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Button loading size="sm" className="w-full">
                  Loading Button
                </Button>
                <Button disabled size="sm" className="w-full">
                  Disabled Button
                </Button>
              </div>
              
              <div className="text-center p-4 bg-current/10 rounded">
                <div className="animate-spin w-6 h-6 border-2 border-current border-t-transparent rounded-full mx-auto mb-2"></div>
                <Text size="sm">Loading Spinner</Text>
              </div>
            </CardContent>
          </Card>
        </GridItem>

        {/* Accessibility Features */}
        <GridItem>
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Accessibility</CardTitle>
              <CardDescription>WCAG compliance and screen reader support</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="success" size="sm">✓</Badge>
                  <Text size="sm">ARIA Labels</Text>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="success" size="sm">✓</Badge>
                  <Text size="sm">Focus Management</Text>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="success" size="sm">✓</Badge>
                  <Text size="sm">Color Contrast</Text>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="success" size="sm">✓</Badge>
                  <Text size="sm">Screen Reader Support</Text>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="success" size="sm">✓</Badge>
                  <Text size="sm">Semantic HTML</Text>
                </div>
              </div>
              
              <div className="text-center">
                <Badge variant="success">WCAG 2.1 AA Compliant</Badge>
              </div>
            </CardContent>
          </Card>
        </GridItem>
      </Grid>

      {/* Feature Status */}
      <Section className="mt-8">
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Interactive Feature Status</CardTitle>
            <CardDescription>Current state of interactive features</CardDescription>
          </CardHeader>
          <CardContent>
            <Grid cols={2} mdCols={4} gap="md">
              <div className="text-center">
                <Badge variant={isEnabled('hover-effects') ? 'success' : 'muted'}>
                  Hover Effects
                </Badge>
                <Text size="xs" variant="muted" className="mt-1">
                  {isEnabled('hover-effects') ? 'Active' : 'Disabled'}
                </Text>
              </div>
              <div className="text-center">
                <Badge variant={isEnabled('keyboard-shortcuts') ? 'success' : 'muted'}>
                  Keyboard Nav
                </Badge>
                <Text size="xs" variant="muted" className="mt-1">
                  {isEnabled('keyboard-shortcuts') ? 'Active' : 'Disabled'}
                </Text>
              </div>
              <div className="text-center">
                <Badge variant={isEnabled('konami-switching') ? 'success' : 'muted'}>
                  Konami Code
                </Badge>
                <Text size="xs" variant="muted" className="mt-1">
                  {isEnabled('konami-switching') ? 'Active' : 'Disabled'}
                </Text>
              </div>
              <div className="text-center">
                <Badge variant={isEnabled('accessibility') ? 'success' : 'muted'}>
                  Accessibility
                </Badge>
                <Text size="xs" variant="muted" className="mt-1">
                  {isEnabled('accessibility') ? 'Active' : 'Disabled'}
                </Text>
              </div>
            </Grid>
          </CardContent>
        </Card>
      </Section>
    </Container>
  );
}
