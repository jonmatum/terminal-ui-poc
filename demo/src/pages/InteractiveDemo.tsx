import React, { useState, useCallback } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
  Input,
  Text,
  Badge,
  Icon,
  Link,
  Grid,
  GridItem,
  Animation,
  Glow,
  useTheme,
} from '@jonmatum/terminal-ui';

export function InteractiveDemo() {
  const { mode } = useTheme();
  const [soundCount, setSoundCount] = useState(0);
  const [interactions, setInteractions] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''
  });

  const playSound = useCallback(() => {
    console.log('🔊 Sound effect triggered');
    setSoundCount(prev => prev + 1);
  }, []);

  const addInteraction = useCallback((action: string) => {
    setInteractions(prev => [...prev.slice(-4), `${new Date().toLocaleTimeString()}: ${action}`]);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addInteraction('Form submitted');
    playSound();
    // Reset form
    setFormData({ username: '', email: '', message: '' });
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="mb-8">
        <Text as="h1" size="4xl" weight="bold" className="mb-4">
          <Glow intensity={mode === 'tron' ? 'high' : 'medium'}>
            Interactive Features
          </Glow>
        </Text>
        <Text variant="secondary" size="lg">
          Sound effects, hover states, user interactions, and real-time feedback.
        </Text>
      </div>

      {/* Interaction Stats */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Interaction Statistics</CardTitle>
          <CardDescription>
            Real-time tracking of user interactions and sound effects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Grid cols={1} mdCols={3} gap="md">
            <GridItem>
              <Card variant="default" className="text-center py-4">
                <Text variant="primary" size="2xl" weight="bold">
                  {soundCount}
                </Text>
                <Text variant="secondary" size="sm">
                  Sound Effects Played
                </Text>
              </Card>
            </GridItem>
            
            <GridItem>
              <Card variant="default" className="text-center py-4">
                <Text variant="accent" size="2xl" weight="bold">
                  {interactions.length}
                </Text>
                <Text variant="secondary" size="sm">
                  Total Interactions
                </Text>
              </Card>
            </GridItem>
            
            <GridItem>
              <Card variant="default" className="text-center py-4">
                <Text variant="secondary" size="2xl" weight="bold">
                  {mode === 'tron' ? '🎮' : '🔋'}
                </Text>
                <Text variant="secondary" size="sm">
                  Current Theme Mode
                </Text>
              </Card>
            </GridItem>
          </Grid>
        </CardContent>
      </Card>

      {/* Interactive Buttons */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Interactive Buttons</CardTitle>
          <CardDescription>
            Buttons with sound effects, hover animations, and click feedback
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Text variant="accent" weight="semibold" className="mb-3">
              Sound Effect Buttons
            </Text>
            <div className="flex flex-wrap gap-3">
              <Button 
                variant="primary" 
                onSound={playSound}
                onClick={() => addInteraction('Primary button clicked')}
              >
                🎵 Primary Sound
              </Button>
              <Button 
                variant="secondary" 
                onSound={playSound}
                onClick={() => addInteraction('Secondary button clicked')}
              >
                🔊 Secondary Sound
              </Button>
              <Button 
                variant="ghost" 
                onSound={playSound}
                onClick={() => addInteraction('Ghost button clicked')}
              >
                👻 Ghost Sound
              </Button>
              <Button 
                variant="danger" 
                onSound={playSound}
                onClick={() => addInteraction('Danger button clicked')}
              >
                ⚠️ Danger Sound
              </Button>
            </div>
          </div>

          <div>
            <Text variant="accent" weight="semibold" className="mb-3">
              Animated Buttons
            </Text>
            <div className="flex flex-wrap gap-3">
              <Animation type="glow" trigger="hover">
                <Button 
                  variant="primary"
                  onSound={playSound}
                  onClick={() => addInteraction('Glow button hovered/clicked')}
                >
                  ✨ Hover to Glow
                </Button>
              </Animation>
              
              <Animation type="scale-in" trigger="hover">
                <Button 
                  variant="secondary"
                  onSound={playSound}
                  onClick={() => addInteraction('Scale button hovered/clicked')}
                >
                  📏 Hover to Scale
                </Button>
              </Animation>
              
              <Animation type="shake" trigger="hover">
                <Button 
                  variant="ghost"
                  onSound={playSound}
                  onClick={() => addInteraction('Shake button hovered/clicked')}
                >
                  🫨 Hover to Shake
                </Button>
              </Animation>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Form */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Interactive Form</CardTitle>
          <CardDescription>
            Form inputs with sound feedback and real-time validation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <Input
              label="Username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
              onSound={playSound}
              onFocus={() => addInteraction('Username field focused')}
              helper="Choose a unique username"
            />
            
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              onSound={playSound}
              onFocus={() => addInteraction('Email field focused')}
              helper="We'll never share your email"
            />
            
            <Input
              label="Message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              onSound={playSound}
              onFocus={() => addInteraction('Message field focused')}
              helper="Tell us what you think"
            />
            
            <div className="flex gap-3">
              <Button 
                type="submit" 
                variant="primary"
                onSound={playSound}
              >
                🚀 Submit Form
              </Button>
              <Button 
                type="button" 
                variant="secondary"
                onClick={() => {
                  setFormData({ username: '', email: '', message: '' });
                  addInteraction('Form cleared');
                  playSound();
                }}
                onSound={playSound}
              >
                🗑️ Clear Form
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Interactive Cards */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Interactive Cards</CardTitle>
          <CardDescription>
            Clickable cards with hover effects and sound feedback
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Grid cols={1} mdCols={2} xlCols={3} gap="md">
            {[
              { title: 'Sound Card', icon: '🎵', description: 'Click for sound effect' },
              { title: 'Glow Card', icon: '✨', description: 'Hover for glow effect' },
              { title: 'Scale Card', icon: '📏', description: 'Hover to scale up' },
              { title: 'Pulse Card', icon: '💓', description: 'Animated pulse effect' },
              { title: 'Shake Card', icon: '🫨', description: 'Hover to shake' },
              { title: 'Rotate Card', icon: '🔄', description: 'Hover to rotate' },
            ].map((card, index) => (
              <GridItem key={card.title}>
                <Animation 
                  type={index % 2 === 0 ? 'glow' : 'scale-in'} 
                  trigger="hover"
                >
                  <Card 
                    variant="interactive"
                    onSound={playSound}
                    onClick={() => addInteraction(`${card.title} clicked`)}
                    className="cursor-pointer text-center py-6 transition-all duration-200 hover:border-current/50"
                  >
                    <CardContent>
                      <div className="text-3xl mb-2">{card.icon}</div>
                      <Text variant="primary" weight="semibold" className="mb-1">
                        {card.title}
                      </Text>
                      <Text variant="secondary" size="sm">
                        {card.description}
                      </Text>
                    </CardContent>
                  </Card>
                </Animation>
              </GridItem>
            ))}
          </Grid>
        </CardContent>
      </Card>

      {/* Interactive Icons */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Interactive Icons</CardTitle>
          <CardDescription>
            Icons with hover effects and sound feedback
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Text variant="accent" weight="semibold" className="mb-3">
              Hover Effects
            </Text>
            <div className="flex flex-wrap items-center gap-6">
              <Icon 
                variant="primary" 
                size="lg" 
                hover 
                onSound={playSound}
                onClick={() => addInteraction('Target icon clicked')}
              >
                <span>🎯</span>
              </Icon>
              <Icon 
                variant="secondary" 
                size="lg" 
                hover 
                onSound={playSound}
                onClick={() => addInteraction('Lightning icon clicked')}
              >
                <span>⚡</span>
              </Icon>
              <Icon 
                variant="accent" 
                size="lg" 
                hover 
                onSound={playSound}
                onClick={() => addInteraction('Rocket icon clicked')}
              >
                <span>🚀</span>
              </Icon>
              <Icon 
                variant="muted" 
                size="lg" 
                hover 
                onSound={playSound}
                onClick={() => addInteraction('Gear icon clicked')}
              >
                <span>⚙️</span>
              </Icon>
            </div>
          </div>

          <div>
            <Text variant="accent" weight="semibold" className="mb-3">
              Different Sizes
            </Text>
            <div className="flex flex-wrap items-center gap-4">
              {['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
                <Icon 
                  key={size}
                  variant="primary" 
                  size={size as any} 
                  hover 
                  onSound={playSound}
                  onClick={() => addInteraction(`${size} game icon clicked`)}
                >
                  <span>🎮</span>
                </Icon>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Links */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Interactive Links</CardTitle>
          <CardDescription>
            Links with sound effects and hover animations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-6">
            <Link 
              variant="primary" 
              onSound={playSound}
              onClick={() => addInteraction('Primary link clicked')}
            >
              🔗 Primary Link
            </Link>
            <Link 
              variant="secondary" 
              onSound={playSound}
              onClick={() => addInteraction('Secondary link clicked')}
            >
              📎 Secondary Link
            </Link>
            <Link 
              variant="underline" 
              onSound={playSound}
              onClick={() => addInteraction('Underlined link clicked')}
            >
              📝 Underlined Link
            </Link>
            <Link 
              variant="button" 
              onSound={playSound}
              onClick={() => addInteraction('Button link clicked')}
            >
              🔘 Button Link
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Interaction Log */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Interaction Log</CardTitle>
          <CardDescription>
            Real-time log of user interactions (last 5 actions)
          </CardDescription>
        </CardHeader>
        <CardContent>
          {interactions.length === 0 ? (
            <Text variant="muted" className="text-center py-4">
              No interactions yet. Try clicking some buttons above!
            </Text>
          ) : (
            <div className="space-y-2">
              {interactions.slice(-5).reverse().map((interaction, index) => (
                <Animation key={interaction} type="slide-left" trigger="immediate">
                  <div className="flex items-center gap-3 p-2 rounded border border-current/10">
                    <Badge variant="outline" size="sm">
                      {interactions.length - index}
                    </Badge>
                    <Text variant="secondary" size="sm" className="font-mono">
                      {interaction}
                    </Text>
                  </div>
                </Animation>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
