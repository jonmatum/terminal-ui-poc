import React, { useState } from 'react';
import {
  useTheme,
  useKonami,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
  Text,
  Badge,
  Grid,
  GridItem,
  Animation,
  Glow,
  Typewriter,
  ParticleBackground,
  MatrixRain,
} from '@jonmatum/terminal-ui';

export function ThemeDemo() {
  const { mode, toggleTheme, isKonamiMode } = useTheme();
  const { isActive: konamiActive, progress } = useKonami();
  const [showEffects, setShowEffects] = useState(true);

  const themeColors = {
    matrix: {
      primary: '#22C55E',
      secondary: '#86EFAC',
      accent: '#16A34A',
      background: '#000000',
      surface: '#14532D',
    },
    tron: {
      primary: '#00FFFF',
      secondary: '#8A2BE2',
      accent: '#FF8000',
      background: '#0A0A0A',
      surface: '#111111',
    }
  };

  return (
    <div className="space-y-8 relative">
      {/* Background Effects */}
      {showEffects && (
        <>
          {mode === 'matrix' && (
            <MatrixRain 
              density="low" 
              speed="slow" 
              className="fixed inset-0 z-0 opacity-20 pointer-events-none" 
            />
          )}
          {mode === 'tron' && (
            <ParticleBackground 
              count={25} 
              speed="medium" 
              size="small"
              className="fixed inset-0 z-0 opacity-15 pointer-events-none"
            />
          )}
        </>
      )}

      <div className="relative z-10">
        {/* Page Header */}
        <div className="mb-8">
          <Text as="h1" size="4xl" weight="bold" className="mb-4">
            <Glow intensity={mode === 'tron' ? 'high' : 'medium'}>
              Theme System
            </Glow>
          </Text>
          <Text variant="secondary" size="lg">
            Matrix and TRON themes with Konami code integration and dynamic switching.
          </Text>
        </div>

        {/* Theme Controls */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Theme Controls</CardTitle>
            <CardDescription>
              Switch between themes and control visual effects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Text variant="muted" size="sm">Current Theme:</Text>
                <Badge variant={mode === 'tron' ? 'success' : 'primary'} size="lg">
                  {mode === 'tron' ? '🎮 TRON' : '🔋 Matrix'}
                </Badge>
              </div>
              
              <Button variant="secondary" onClick={toggleTheme}>
                Switch to {mode === 'matrix' ? 'TRON' : 'Matrix'}
              </Button>
              
              <Button 
                variant="ghost" 
                onClick={() => setShowEffects(!showEffects)}
              >
                {showEffects ? 'Hide' : 'Show'} Background Effects
              </Button>

              {konamiActive && (
                <Badge variant="warning" className="animate-pulse">
                  🎮 Konami Mode Active
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Konami Code Status */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Konami Code Integration</CardTitle>
            <CardDescription>
              Enter the famous cheat code to toggle between themes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2 items-center">
              <Text variant="muted" size="sm">Sequence:</Text>
              {['↑', '↑', '↓', '↓', '←', '→', '←', '→', 'B', 'A'].map((key, index) => {
                const isCompleted = Math.floor(progress * 10) > index;
                return (
                  <Badge 
                    key={index} 
                    variant={isCompleted ? 'success' : 'outline'} 
                    size="sm"
                  >
                    {key}
                  </Badge>
                );
              })}
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Text variant="muted" size="sm">Progress:</Text>
                <div className="flex-1 max-w-xs bg-current/20 rounded-full h-2">
                  <div 
                    className="bg-current h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress * 100}%` }}
                  />
                </div>
                <Text variant="accent" size="sm" weight="semibold">
                  {Math.round(progress * 100)}%
                </Text>
              </div>
              
              <Text variant={konamiActive ? 'accent' : 'secondary'} size="sm">
                {konamiActive 
                  ? '🎉 Konami code activated! Theme switching enabled.'
                  : 'Enter the sequence above to activate theme switching.'
                }
              </Text>
            </div>
          </CardContent>
        </Card>

        {/* Current Theme Showcase */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Current Theme: {mode.toUpperCase()}</CardTitle>
            <CardDescription>
              Visual demonstration of the active theme's colors and effects
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Theme Colors */}
            <div>
              <Text variant="accent" weight="semibold" className="mb-4">
                Color Palette
              </Text>
              <Grid cols={2} mdCols={3} xlCols={5} gap="md">
                {Object.entries(themeColors[mode]).map(([name, color]) => (
                  <GridItem key={name}>
                    <Animation type="scale-in" trigger="visible">
                      <Card variant="default" className="text-center">
                        <CardContent className="py-4">
                          <div 
                            className="w-12 h-12 rounded-lg mx-auto mb-2 border border-current/20"
                            style={{ backgroundColor: color }}
                          />
                          <Text variant="secondary" size="sm" weight="medium">
                            {name}
                          </Text>
                          <Text variant="muted" size="xs" className="font-mono">
                            {color}
                          </Text>
                        </CardContent>
                      </Card>
                    </Animation>
                  </GridItem>
                ))}
              </Grid>
            </div>

            {/* Typography Showcase */}
            <div>
              <Text variant="accent" weight="semibold" className="mb-4">
                Typography in {mode.toUpperCase()} Theme
              </Text>
              <div className="space-y-3">
                <Glow intensity={mode === 'tron' ? 'high' : 'medium'}>
                  <Text as="h1" size="3xl" weight="bold">
                    Large Heading with Glow
                  </Text>
                </Glow>
                <Text as="h2" size="2xl" weight="semibold" variant="primary">
                  Primary Text Heading
                </Text>
                <Text size="lg" variant="secondary">
                  Secondary text for descriptions and subtitles
                </Text>
                <Text variant="accent">
                  Accent text for highlights and important information
                </Text>
                <Text variant="muted" size="sm">
                  Muted text for captions and less important details
                </Text>
              </div>
            </div>

            {/* Interactive Elements */}
            <div>
              <Text variant="accent" weight="semibold" className="mb-4">
                Interactive Elements
              </Text>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                  <Button variant="danger">Danger Button</Button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Badge variant="primary">Primary Badge</Badge>
                  <Badge variant="secondary">Secondary Badge</Badge>
                  <Badge variant="success">Success Badge</Badge>
                  <Badge variant="warning">Warning Badge</Badge>
                  <Badge variant="danger">Danger Badge</Badge>
                  <Badge variant="outline">Outline Badge</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Theme Comparison */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Theme Comparison</CardTitle>
            <CardDescription>
              Side-by-side comparison of Matrix and TRON themes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Grid cols={1} mdCols={2} gap="lg">
              <GridItem>
                <Animation type="slide-left" trigger="visible">
                  <Card variant="default" className="border-green-700">
                    <CardHeader>
                      <CardTitle className="text-green-400">
                        🔋 Matrix Theme
                      </CardTitle>
                      <CardDescription className="text-green-300">
                        Classic terminal aesthetic inspired by The Matrix
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-400 rounded" />
                        <Text className="text-green-400" size="sm">Primary: Matrix Green</Text>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-300 rounded" />
                        <Text className="text-green-300" size="sm">Secondary: Light Green</Text>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-600 rounded" />
                        <Text className="text-green-600" size="sm">Accent: Dark Green</Text>
                      </div>
                      <Text className="text-green-400" size="sm">
                        Features: Matrix rain, green glow effects, terminal aesthetics
                      </Text>
                    </CardContent>
                  </Card>
                </Animation>
              </GridItem>

              <GridItem>
                <Animation type="slide-right" trigger="visible">
                  <Card variant="default" className="border-cyan-700">
                    <CardHeader>
                      <CardTitle className="text-cyan-400">
                        🎮 TRON Theme
                      </CardTitle>
                      <CardDescription className="text-cyan-300">
                        Futuristic cyberpunk aesthetic inspired by TRON
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-cyan-400 rounded" />
                        <Text className="text-cyan-400" size="sm">Primary: Cyan Blue</Text>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-purple-500 rounded" />
                        <Text className="text-purple-400" size="sm">Secondary: Purple</Text>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-orange-500 rounded" />
                        <Text className="text-orange-400" size="sm">Accent: Orange</Text>
                      </div>
                      <Text className="text-cyan-400" size="sm">
                        Features: Particle effects, cyan glow, cyberpunk aesthetics
                      </Text>
                    </CardContent>
                  </Card>
                </Animation>
              </GridItem>
            </Grid>
          </CardContent>
        </Card>

        {/* Dynamic Theme Demo */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Dynamic Theme Effects</CardTitle>
            <CardDescription>
              See how components adapt to theme changes in real-time
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <Glow intensity="high" pulse>
                <Text size="2xl" weight="bold">
                  <Typewriter 
                    text={mode === 'tron' 
                      ? "TRON SYSTEM ACTIVATED" 
                      : "MATRIX PROTOCOL LOADED"
                    }
                    speed={80}
                    cursor
                  />
                </Text>
              </Glow>
              
              <Text variant="secondary">
                {mode === 'tron' 
                  ? "Entering the digital frontier with cyberpunk aesthetics"
                  : "Welcome to the Matrix - reality is what you make it"
                }
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Animation type="fade-in" delay="short" trigger="visible">
                <Card variant="interactive" className="text-center py-6">
                  <Text variant="primary" weight="semibold">
                    {mode === 'tron' ? '⚡ Power Grid' : '🔋 Energy Core'}
                  </Text>
                </Card>
              </Animation>
              
              <Animation type="fade-in" delay="medium" trigger="visible">
                <Card variant="interactive" className="text-center py-6">
                  <Text variant="accent" weight="semibold">
                    {mode === 'tron' ? '🎮 Game Mode' : '💊 Red Pill'}
                  </Text>
                </Card>
              </Animation>
              
              <Animation type="fade-in" delay="long" trigger="visible">
                <Card variant="interactive" className="text-center py-6">
                  <Text variant="secondary" weight="semibold">
                    {mode === 'tron' ? '🌐 Network' : '🔍 The One'}
                  </Text>
                </Card>
              </Animation>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
