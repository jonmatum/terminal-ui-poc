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
  useTheme,
  MatrixRain,
  ParticleBackground,
} from '@jonmatum/terminal-ui';
import { useFeatureFlags } from '../App';

const THEME_COLORS = {
  matrix: {
    primary: '#00ff41',
    secondary: '#008f11',
    accent: '#00ff41',
    background: '#000000',
    surface: '#0a0a0a',
    border: '#00ff41',
    text: '#00ff41'
  },
  tron: {
    primary: '#00ffff',
    secondary: '#0080ff',
    accent: '#ff8000',
    background: '#000000',
    surface: '#0a0a0a',
    border: '#00ffff',
    text: '#00ffff'
  }
};

export function ThemePlayground() {
  const { mode, toggleTheme, isKonamiMode } = useTheme();
  const { isEnabled } = useFeatureFlags();
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const currentTheme = THEME_COLORS[mode as keyof typeof THEME_COLORS];

  return (
    <Container size="full">
      {/* Header */}
      <Section className="mb-8">
        <div className="text-center mb-8">
          <Animation type="fade-in" duration="slow">
            <Glow intensity="high" pulse>
              <Text as="h1" size="4xl" weight="extrabold" className="mb-4">
                🎨 Theme Playground
              </Text>
            </Glow>
          </Animation>
          
          <Animation type="slide-up" delay="short">
            <Text as="p" size="lg" variant="secondary" className="max-w-3xl mx-auto">
              Explore the dual theme system with Matrix and TRON aesthetics. 
              Test Konami code integration and see real-time theme switching.
            </Text>
          </Animation>
        </div>

        {/* Theme Controls */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={mode === 'matrix' ? 'primary' : 'secondary'}
            onClick={() => mode !== 'matrix' && toggleTheme()}
            size="lg"
          >
            🔋 Matrix Theme
          </Button>
          <Button
            variant={mode === 'tron' ? 'primary' : 'secondary'}
            onClick={() => mode !== 'tron' && toggleTheme()}
            size="lg"
          >
            🎮 TRON Theme
          </Button>
        </div>

        {/* Konami Status */}
        {isEnabled('konami-switching') && (
          <div className="text-center">
            <Badge 
              variant={isKonamiMode ? 'success' : 'muted'} 
              size="lg"
            >
              {isKonamiMode ? '🎮 Konami Mode Active' : '🎯 Try Konami Code: ↑↑↓↓←→←→BA'}
            </Badge>
          </div>
        )}
      </Section>

      {/* Current Theme Overview */}
      <Section className="mb-8">
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Current Theme: {mode === 'matrix' ? 'Matrix' : 'TRON'}</CardTitle>
            <CardDescription>
              {mode === 'matrix' 
                ? 'Green terminal aesthetic inspired by The Matrix'
                : 'Cyan and orange aesthetic inspired by TRON Legacy'
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Grid cols={2} mdCols={4} gap="md">
              {Object.entries(currentTheme).map(([colorName, colorValue]) => (
                <GridItem key={colorName}>
                  <div 
                    className="cursor-pointer transition-all duration-200 hover:scale-105"
                    onClick={() => setSelectedColor(selectedColor === colorName ? null : colorName)}
                  >
                    <div 
                      className="w-full h-16 rounded-lg border-2 border-current/20 mb-2"
                      style={{ backgroundColor: colorValue }}
                    />
                    <Text size="sm" weight="semibold" className="capitalize">
                      {colorName}
                    </Text>
                    <Text size="xs" variant="muted" className="font-mono">
                      {colorValue}
                    </Text>
                  </div>
                </GridItem>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Section>

      {/* Theme Comparison */}
      <Section className="mb-8">
        <Text as="h2" size="2xl" weight="bold" className="mb-6 text-center">
          <Glow intensity="medium">Theme Comparison</Glow>
        </Text>
        
        <Grid cols={1} lgCols={2} gap="lg">
          {/* Matrix Theme Preview */}
          <GridItem>
            <Card variant={mode === 'matrix' ? 'elevated' : 'ghost'}>
              <CardHeader>
                <CardTitle>🔋 Matrix Theme</CardTitle>
                <CardDescription>Terminal green aesthetic</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 p-4 bg-black rounded-lg border border-green-400/20">
                  <div className="flex gap-2">
                    <div className="w-4 h-4 bg-green-400 rounded"></div>
                    <Text style={{ color: '#00ff41' }}>Primary: #00ff41</Text>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-4 h-4 bg-green-600 rounded"></div>
                    <Text style={{ color: '#008f11' }}>Secondary: #008f11</Text>
                  </div>
                  <div className="text-center py-4">
                    <Text style={{ color: '#00ff41' }} className="font-mono">
                      &gt; SYSTEM ONLINE_
                    </Text>
                  </div>
                </div>
              </CardContent>
            </Card>
          </GridItem>

          {/* TRON Theme Preview */}
          <GridItem>
            <Card variant={mode === 'tron' ? 'elevated' : 'ghost'}>
              <CardHeader>
                <CardTitle>🎮 TRON Theme</CardTitle>
                <CardDescription>Futuristic cyan and orange</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 p-4 bg-black rounded-lg border border-cyan-400/20">
                  <div className="flex gap-2">
                    <div className="w-4 h-4 bg-cyan-400 rounded"></div>
                    <Text style={{ color: '#00ffff' }}>Primary: #00ffff</Text>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-4 h-4 bg-orange-400 rounded"></div>
                    <Text style={{ color: '#ff8000' }}>Accent: #ff8000</Text>
                  </div>
                  <div className="text-center py-4">
                    <Text style={{ color: '#00ffff' }} className="font-mono">
                      GRID ACTIVATED
                    </Text>
                  </div>
                </div>
              </CardContent>
            </Card>
          </GridItem>
        </Grid>
      </Section>

      {/* Interactive Theme Demo */}
      <Section className="mb-8">
        <Text as="h2" size="2xl" weight="bold" className="mb-6 text-center">
          <Glow intensity="medium">Interactive Demo</Glow>
        </Text>
        
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Live Theme Preview</CardTitle>
            <CardDescription>
              See how components look in the current theme
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Grid cols={1} mdCols={2} lgCols={3} gap="md">
              {/* Buttons */}
              <div className="space-y-2">
                <Text weight="semibold" size="sm">Buttons</Text>
                <div className="space-y-2">
                  <Button variant="primary" size="sm" className="w-full">Primary</Button>
                  <Button variant="secondary" size="sm" className="w-full">Secondary</Button>
                  <Button variant="accent" size="sm" className="w-full">Accent</Button>
                </div>
              </div>

              {/* Badges */}
              <div className="space-y-2">
                <Text weight="semibold" size="sm">Badges</Text>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="primary" size="sm">Primary</Badge>
                  <Badge variant="secondary" size="sm">Secondary</Badge>
                  <Badge variant="accent" size="sm">Accent</Badge>
                  <Badge variant="success" size="sm">Success</Badge>
                </div>
              </div>

              {/* Text Variants */}
              <div className="space-y-2">
                <Text weight="semibold" size="sm">Typography</Text>
                <div className="space-y-1">
                  <Text variant="primary" size="sm">Primary text</Text>
                  <Text variant="secondary" size="sm">Secondary text</Text>
                  <Text variant="accent" size="sm">Accent text</Text>
                  <Text variant="muted" size="sm">Muted text</Text>
                </div>
              </div>
            </Grid>
          </CardContent>
        </Card>
      </Section>

      {/* Background Effects Demo */}
      {(isEnabled('matrix-rain') || isEnabled('particle-system')) && (
        <Section className="mb-8">
          <Text as="h2" size="2xl" weight="bold" className="mb-6 text-center">
            <Glow intensity="medium">Background Effects</Glow>
          </Text>
          
          <Grid cols={1} lgCols={2} gap="lg">
            {/* Matrix Rain Demo */}
            {isEnabled('matrix-rain') && (
              <GridItem>
                <Card variant="elevated">
                  <CardHeader>
                    <CardTitle>Matrix Rain Effect</CardTitle>
                    <CardDescription>Falling character animation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-32 bg-black rounded-lg border border-current/20 overflow-hidden">
                      <MatrixRain 
                        density="medium" 
                        speed="medium" 
                        className="absolute inset-0 opacity-60" 
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Text className="font-mono">MATRIX RAIN</Text>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </GridItem>
            )}

            {/* Particle Background Demo */}
            {isEnabled('particle-system') && (
              <GridItem>
                <Card variant="elevated">
                  <CardHeader>
                    <CardTitle>Particle System</CardTitle>
                    <CardDescription>Floating particle effects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-32 bg-black rounded-lg border border-current/20 overflow-hidden">
                      <ParticleBackground 
                        count={20} 
                        speed="medium" 
                        size="small"
                        className="absolute inset-0 opacity-60"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Text className="font-mono">PARTICLES</Text>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </GridItem>
            )}
          </Grid>
        </Section>
      )}

      {/* CSS Variables Reference */}
      <Section>
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>CSS Variables Reference</CardTitle>
            <CardDescription>
              Custom properties available for theme customization
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-black/50 rounded-lg p-4 border border-current/20">
              <pre className="text-sm overflow-x-auto">
                <code className="text-current">
{`:root {
  --color-primary: ${currentTheme.primary};
  --color-secondary: ${currentTheme.secondary};
  --color-accent: ${currentTheme.accent};
  --color-background: ${currentTheme.background};
  --color-surface: ${currentTheme.surface};
  --color-border: ${currentTheme.border};
  --color-text: ${currentTheme.text};
}`}
                </code>
              </pre>
            </div>
            
            <div className="mt-4 flex gap-4">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => navigator.clipboard.writeText(
                  Object.entries(currentTheme)
                    .map(([key, value]) => `--color-${key}: ${value};`)
                    .join('\n')
                )}
              >
                📋 Copy CSS Variables
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigator.clipboard.writeText(JSON.stringify(currentTheme, null, 2))}
              >
                📋 Copy JSON
              </Button>
            </div>
          </CardContent>
        </Card>
      </Section>
    </Container>
  );
}
