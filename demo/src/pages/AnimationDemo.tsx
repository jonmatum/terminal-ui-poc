import React, { useState } from 'react';
import {
  Animation,
  Typewriter,
  Glow,
  ParticleBackground,
  MatrixRain,
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
  useTheme,
} from '@jonmatum/terminal-ui';

export function AnimationDemo() {
  const { mode } = useTheme();
  const [animationTrigger, setAnimationTrigger] = useState(0);
  const [typewriterKey, setTypewriterKey] = useState(0);

  const triggerAnimations = () => {
    setAnimationTrigger(prev => prev + 1);
  };

  const restartTypewriter = () => {
    setTypewriterKey(prev => prev + 1);
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="mb-8">
        <Text as="h1" size="4xl" weight="bold" className="mb-4">
          <Glow intensity={mode === 'tron' ? 'high' : 'medium'}>
            Animation System
          </Glow>
        </Text>
        <Text variant="secondary" size="lg">
          Rich animations, typewriter effects, glows, and background animations.
        </Text>
      </div>

      {/* Animation Controls */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Animation Controls</CardTitle>
          <CardDescription>
            Trigger animations and effects to see them in action
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" onClick={triggerAnimations}>
              🎬 Trigger Animations
            </Button>
            <Button variant="secondary" onClick={restartTypewriter}>
              ⌨️ Restart Typewriter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Basic Animations */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Basic Animations</CardTitle>
          <CardDescription>
            Fundamental animation types with different triggers and durations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Grid cols={1} mdCols={2} xlCols={3} gap="md">
            <GridItem>
              <Animation 
                key={`fade-${animationTrigger}`}
                type="fade-in" 
                duration="slow"
                trigger="immediate"
              >
                <Card variant="interactive" className="text-center py-6">
                  <Text variant="primary">Fade In</Text>
                  <Badge variant="outline" size="sm" className="mt-2">
                    duration="slow"
                  </Badge>
                </Card>
              </Animation>
            </GridItem>

            <GridItem>
              <Animation 
                key={`slide-${animationTrigger}`}
                type="slide-up" 
                duration="normal"
                delay="short"
                trigger="immediate"
              >
                <Card variant="interactive" className="text-center py-6">
                  <Text variant="primary">Slide Up</Text>
                  <Badge variant="outline" size="sm" className="mt-2">
                    delay="short"
                  </Badge>
                </Card>
              </Animation>
            </GridItem>

            <GridItem>
              <Animation 
                key={`scale-${animationTrigger}`}
                type="scale-in" 
                duration="fast"
                delay="medium"
                trigger="immediate"
              >
                <Card variant="interactive" className="text-center py-6">
                  <Text variant="primary">Scale In</Text>
                  <Badge variant="outline" size="sm" className="mt-2">
                    duration="fast"
                  </Badge>
                </Card>
              </Animation>
            </GridItem>
          </Grid>
        </CardContent>
      </Card>

      {/* Typewriter Effects */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Typewriter Effects</CardTitle>
          <CardDescription>
            Dynamic typing animations with customizable speed and behavior
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Single Text */}
          <div>
            <Text variant="accent" weight="semibold" className="mb-3">
              Single Text
            </Text>
            <Card variant="default" className="p-6">
              <Text size="xl" weight="semibold">
                <Typewriter 
                  key={`single-${typewriterKey}`}
                  text="Welcome to Terminal UI Design System"
                  speed={50}
                  cursor
                />
              </Text>
            </Card>
          </div>

          {/* Multiple Texts with Loop */}
          <div>
            <Text variant="accent" weight="semibold" className="mb-3">
              Multiple Texts (Looping)
            </Text>
            <Card variant="default" className="p-6">
              <Text size="lg" weight="medium">
                <Typewriter 
                  key={`multi-${typewriterKey}`}
                  text={[
                    "Matrix Theme Active...",
                    "TRON Mode Available...",
                    "Konami Code Ready...",
                    "Terminal UI Loaded."
                  ]}
                  speed={60}
                  deleteSpeed={40}
                  delayBetween={2000}
                  loop
                  cursor
                />
              </Text>
            </Card>
          </div>

          {/* Fast Typing */}
          <div>
            <Text variant="accent" weight="semibold" className="mb-3">
              Fast Typing
            </Text>
            <Card variant="default" className="p-6">
              <Text size="md" className="font-mono">
                <Typewriter 
                  key={`fast-${typewriterKey}`}
                  text="System.initialize() -> Loading modules... -> Ready!"
                  speed={20}
                  cursor
                  cursorChar="_"
                />
              </Text>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Glow Effects */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Glow Effects</CardTitle>
          <CardDescription>
            Glowing text and elements with different intensities and colors
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Glow Intensities */}
          <div>
            <Text variant="accent" weight="semibold" className="mb-4">
              Glow Intensities
            </Text>
            <div className="space-y-4">
              <Glow intensity="low">
                <Text size="xl" weight="bold">Low Intensity Glow</Text>
              </Glow>
              <Glow intensity="medium">
                <Text size="xl" weight="bold">Medium Intensity Glow</Text>
              </Glow>
              <Glow intensity="high">
                <Text size="xl" weight="bold">High Intensity Glow</Text>
              </Glow>
            </div>
          </div>

          {/* Pulsing Glow */}
          <div>
            <Text variant="accent" weight="semibold" className="mb-4">
              Pulsing Glow
            </Text>
            <Glow intensity="high" pulse>
              <Text size="2xl" weight="bold">
                Pulsing Glow Effect
              </Text>
            </Glow>
          </div>

          {/* Glow Colors */}
          <div>
            <Text variant="accent" weight="semibold" className="mb-4">
              Glow Colors
            </Text>
            <div className="space-y-3">
              <Glow intensity="medium" color="primary">
                <Text size="lg" weight="semibold">Primary Color Glow</Text>
              </Glow>
              <Glow intensity="medium" color="secondary">
                <Text size="lg" weight="semibold">Secondary Color Glow</Text>
              </Glow>
              <Glow intensity="medium" color="accent">
                <Text size="lg" weight="semibold">Accent Color Glow</Text>
              </Glow>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Background Effects */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Background Effects</CardTitle>
          <CardDescription>
            Atmospheric background animations for immersive experiences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Matrix Rain Preview */}
          <div>
            <Text variant="accent" weight="semibold" className="mb-3">
              Matrix Rain Effect
            </Text>
            <div className="relative h-48 border border-current/20 rounded-lg overflow-hidden">
              <MatrixRain 
                density="medium" 
                speed="fast"
                characters="01アイウエオ"
                className="absolute inset-0"
              />
              <div className="relative z-10 flex items-center justify-center h-full">
                <Card variant="elevated" className="backdrop-blur-sm bg-black/50">
                  <CardContent className="py-4 px-6">
                    <Text variant="primary" weight="semibold">
                      Matrix Rain Background
                    </Text>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Particle Background Preview */}
          <div>
            <Text variant="accent" weight="semibold" className="mb-3">
              Particle Background Effect
            </Text>
            <div className="relative h-48 border border-current/20 rounded-lg overflow-hidden">
              <ParticleBackground 
                count={30} 
                speed="medium" 
                size="medium"
                className="absolute inset-0"
              />
              <div className="relative z-10 flex items-center justify-center h-full">
                <Card variant="elevated" className="backdrop-blur-sm bg-black/50">
                  <CardContent className="py-4 px-6">
                    <Text variant="primary" weight="semibold">
                      Floating Particles
                    </Text>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Animations */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Interactive Animations</CardTitle>
          <CardDescription>
            Animations triggered by user interactions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Grid cols={1} mdCols={2} gap="lg">
            <GridItem>
              <Text variant="accent" weight="semibold" className="mb-3">
                Hover Animations
              </Text>
              <div className="space-y-3">
                <Animation type="glow" trigger="hover">
                  <Card variant="interactive" className="text-center py-4 cursor-pointer">
                    <Text variant="primary">Hover for Glow</Text>
                  </Card>
                </Animation>
                <Animation type="scale-in" trigger="hover">
                  <Card variant="interactive" className="text-center py-4 cursor-pointer">
                    <Text variant="primary">Hover to Scale</Text>
                  </Card>
                </Animation>
              </div>
            </GridItem>

            <GridItem>
              <Text variant="accent" weight="semibold" className="mb-3">
                Scroll Animations
              </Text>
              <div className="space-y-3">
                <Animation type="slide-left" trigger="visible">
                  <Card variant="default" className="text-center py-4">
                    <Text variant="secondary">Slides in from left</Text>
                  </Card>
                </Animation>
                <Animation type="slide-right" trigger="visible" delay="short">
                  <Card variant="default" className="text-center py-4">
                    <Text variant="secondary">Slides in from right</Text>
                  </Card>
                </Animation>
              </div>
            </GridItem>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
