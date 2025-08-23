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
  Typewriter,
  Tabs,
} from '@jonmatum/terminal-ui';

const ANIMATION_TYPES = [
  { id: 'fade-in', name: 'Fade In', description: 'Smooth opacity transition' },
  { id: 'slide-up', name: 'Slide Up', description: 'Upward movement with fade' },
  { id: 'slide-down', name: 'Slide Down', description: 'Downward movement with fade' },
  { id: 'slide-left', name: 'Slide Left', description: 'Left movement with fade' },
  { id: 'slide-right', name: 'Slide Right', description: 'Right movement with fade' },
  { id: 'scale-in', name: 'Scale In', description: 'Growing scale effect' },
  { id: 'bounce-in', name: 'Bounce In', description: 'Bouncy entrance effect' },
  { id: 'glow-pulse', name: 'Glow Pulse', description: 'Pulsing glow animation' }
];

const DURATIONS = ['fast', 'normal', 'slow'];
const DELAYS = ['none', 'short', 'medium', 'long'];

export function AnimationStudio() {
  const [selectedAnimation, setSelectedAnimation] = useState('fade-in');
  const [selectedDuration, setSelectedDuration] = useState('normal');
  const [selectedDelay, setSelectedDelay] = useState('none');
  const [triggerKey, setTriggerKey] = useState(0);

  const playAnimation = () => {
    setTriggerKey(prev => prev + 1);
  };

  return (
    <Container size="full">
      <Section className="mb-8">
        <div className="text-center mb-8">
          <Animation type="fade-in" duration="slow">
            <Glow intensity="high" pulse>
              <Text as="h1" size="4xl" weight="extrabold" className="mb-4">
                ✨ Animation Studio
              </Text>
            </Glow>
          </Animation>
          
          <Animation type="slide-up" delay="short">
            <Text as="p" size="lg" variant="secondary" className="max-w-3xl mx-auto">
              Explore and customize animation effects. Test different combinations 
              of animations, durations, and delays.
            </Text>
          </Animation>
        </div>
      </Section>

      <Grid cols={1} lgCols={3} gap="lg">
        {/* Controls */}
        <GridItem>
          <Card variant="elevated" className="sticky top-4">
            <CardHeader>
              <CardTitle>Animation Controls</CardTitle>
              <CardDescription>Customize animation parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Animation Type */}
              <div>
                <Text weight="semibold" className="mb-3">Animation Type</Text>
                <div className="space-y-2">
                  {ANIMATION_TYPES.map(animation => (
                    <Button
                      key={animation.id}
                      variant={selectedAnimation === animation.id ? 'primary' : 'ghost'}
                      size="sm"
                      onClick={() => setSelectedAnimation(animation.id)}
                      className="w-full justify-start"
                    >
                      {animation.name}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div>
                <Text weight="semibold" className="mb-3">Duration</Text>
                <div className="flex gap-2">
                  {DURATIONS.map(duration => (
                    <Button
                      key={duration}
                      variant={selectedDuration === duration ? 'primary' : 'secondary'}
                      size="sm"
                      onClick={() => setSelectedDuration(duration)}
                      className="flex-1"
                    >
                      {duration}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Delay */}
              <div>
                <Text weight="semibold" className="mb-3">Delay</Text>
                <div className="grid grid-cols-2 gap-2">
                  {DELAYS.map(delay => (
                    <Button
                      key={delay}
                      variant={selectedDelay === delay ? 'primary' : 'secondary'}
                      size="sm"
                      onClick={() => setSelectedDelay(delay)}
                    >
                      {delay}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Play Button */}
              <Button
                variant="accent"
                onClick={playAnimation}
                className="w-full"
              >
                🎬 Play Animation
              </Button>
            </CardContent>
          </Card>
        </GridItem>

        {/* Preview */}
        <GridItem lgSpan={2}>
          <div className="space-y-6">
            {/* Main Preview */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Live Preview</CardTitle>
                <CardDescription>
                  {ANIMATION_TYPES.find(a => a.id === selectedAnimation)?.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="min-h-64 flex items-center justify-center bg-black/20 rounded-lg border border-current/10">
                  <Animation
                    key={triggerKey}
                    type={selectedAnimation as any}
                    duration={selectedDuration as any}
                    delay={selectedDelay === 'none' ? undefined : selectedDelay as any}
                    trigger="immediate"
                  >
                    <Card variant="ghost" className="max-w-sm">
                      <CardContent className="text-center p-8">
                        <div className="text-4xl mb-4">🎯</div>
                        <Text size="lg" weight="bold">Animated Element</Text>
                        <Text variant="secondary" className="mt-2">
                          {selectedAnimation} • {selectedDuration} • {selectedDelay}
                        </Text>
                      </CardContent>
                    </Card>
                  </Animation>
                </div>
              </CardContent>
            </Card>

            {/* Code Example */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Code Example</CardTitle>
                <CardDescription>Copy and paste this code</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-black/50 rounded-lg p-4 border border-current/20">
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-current">
{`<Animation
  type="${selectedAnimation}"
  duration="${selectedDuration}"${selectedDelay !== 'none' ? `\n  delay="${selectedDelay}"` : ''}
  trigger="immediate"
>
  <div>Your content here</div>
</Animation>`}
                    </code>
                  </pre>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  className="mt-4"
                  onClick={() => navigator.clipboard.writeText(
                    `<Animation type="${selectedAnimation}" duration="${selectedDuration}"${selectedDelay !== 'none' ? ` delay="${selectedDelay}"` : ''} trigger="immediate">\n  <div>Your content here</div>\n</Animation>`
                  )}
                >
                  📋 Copy Code
                </Button>
              </CardContent>
            </Card>

            {/* Special Effects */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Special Effects</CardTitle>
                <CardDescription>Advanced animation components</CardDescription>
              </CardHeader>
              <CardContent>
                <Grid cols={1} mdCols={2} gap="md">
                  {/* Typewriter Effect */}
                  <div className="text-center p-4 bg-black/20 rounded-lg">
                    <Text weight="semibold" className="mb-2">Typewriter Effect</Text>
                    <Typewriter 
                      text="Hello, Terminal UI!"
                      speed={100}
                      cursor
                      key={triggerKey}
                    />
                  </div>

                  {/* Glow Effect */}
                  <div className="text-center p-4 bg-black/20 rounded-lg">
                    <Text weight="semibold" className="mb-2">Glow Effect</Text>
                    <Glow intensity="high" pulse>
                      <Text size="lg">Glowing Text</Text>
                    </Glow>
                  </div>
                </Grid>
              </CardContent>
            </Card>
          </div>
        </GridItem>
      </Grid>
    </Container>
  );
}
