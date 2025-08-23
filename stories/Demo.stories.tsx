import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src/components/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../src/components/Card';
import { Input } from '../src/components/Input';
import { Text } from '../src/components/Text';
import { useTheme } from '../src/providers/ThemeProvider';

const DemoComponent = () => {
  const { mode, toggleTheme, isKonamiMode } = useTheme();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <Text as="h1" variant="accent" className="text-4xl font-bold">
          Terminal UI Design System
        </Text>
        <Text variant="secondary">
          Matrix/TRON themed components with Konami code integration
        </Text>
        <div className="flex items-center justify-center gap-4">
          <Text variant="muted">Current theme: {mode}</Text>
          <Button variant="ghost" onClick={toggleTheme}>
            Switch to {mode === 'matrix' ? 'TRON' : 'Matrix'}
          </Button>
        </div>
        {isKonamiMode && (
          <Text variant="accent" className="animate-pulse">
            Konami Mode Active! 🎮
          </Text>
        )}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Authentication</CardTitle>
            <CardDescription>
              Enter your terminal credentials
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input 
              label="Username" 
              placeholder="user@terminal" 
              helper="Your system username"
            />
            <Input 
              label="Password" 
              type="password" 
              placeholder="••••••••" 
              helper="Secure access code"
            />
          </CardContent>
          <CardFooter>
            <Button variant="primary" className="w-full">
              Access Terminal
            </Button>
          </CardFooter>
        </Card>

        <Card variant="interactive">
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>
              Current system information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <Text variant="muted">CPU Usage:</Text>
              <Text variant="accent">23%</Text>
            </div>
            <div className="flex justify-between">
              <Text variant="muted">Memory:</Text>
              <Text variant="accent">4.2GB / 16GB</Text>
            </div>
            <div className="flex justify-between">
              <Text variant="muted">Network:</Text>
              <Text variant="accent">Connected</Text>
            </div>
            <div className="flex justify-between">
              <Text variant="muted">Theme:</Text>
              <Text variant="primary">{mode.toUpperCase()}</Text>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" className="w-full">
              Refresh Status
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Button Showcase */}
      <Card>
        <CardHeader>
          <CardTitle>Button Variants</CardTitle>
          <CardDescription>
            All available button styles and states
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="lg">Large</Button>
            <Button variant="primary" loading>Loading</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
        </CardContent>
      </Card>

      {/* Typography */}
      <Card>
        <CardHeader>
          <CardTitle>Typography</CardTitle>
          <CardDescription>
            Text variants and hierarchy
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Text as="h1" variant="accent" className="text-3xl">
            Heading 1 - Accent
          </Text>
          <Text as="h2" variant="primary" className="text-2xl">
            Heading 2 - Primary
          </Text>
          <Text as="h3" variant="secondary" className="text-xl">
            Heading 3 - Secondary
          </Text>
          <Text variant="primary">
            This is primary body text. Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </Text>
          <Text variant="secondary">
            This is secondary text with reduced emphasis but still readable.
          </Text>
          <Text variant="muted">
            This is muted text for less important information or helper text.
          </Text>
        </CardContent>
      </Card>

      {/* Konami Code Instructions */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Konami Code</CardTitle>
          <CardDescription>
            Try the classic cheat code to switch themes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Text variant="primary" className="text-center text-lg">
            ↑ ↑ ↓ ↓ ← → ← → B A
          </Text>
          <Text variant="muted" className="text-center mt-2">
            Use arrow keys, then press B and A
          </Text>
        </CardContent>
      </Card>
    </div>
  );
};

const meta: Meta = {
  title: 'Demo/Complete',
  component: DemoComponent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CompleteDemo: Story = {};
