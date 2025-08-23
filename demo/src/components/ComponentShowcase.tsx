import { useState } from 'react';
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
} from '@jonmatum/terminal-ui';

export function ComponentShowcase() {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingDemo = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Buttons Section */}
      <Card>
        <CardHeader>
          <CardTitle>Button Components</CardTitle>
          <CardDescription>
            All button variants with different sizes and states
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Button Variants */}
          <div>
            <Text variant="accent" className="mb-3 block">
              Variants
            </Text>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
            </div>
          </div>

          {/* Button Sizes */}
          <div>
            <Text variant="accent" className="mb-3 block">
              Sizes
            </Text>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          {/* Button States */}
          <div>
            <Text variant="accent" className="mb-3 block">
              States
            </Text>
            <div className="flex flex-wrap gap-3">
              <Button loading={isLoading} onClick={handleLoadingDemo}>
                {isLoading ? 'Loading...' : 'Click for Loading'}
              </Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cards Section */}
      <Card>
        <CardHeader>
          <CardTitle>Card Components</CardTitle>
          <CardDescription>
            Different card variants and compositions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card variant="default">
              <CardHeader>
                <CardTitle className="text-lg">Default Card</CardTitle>
                <CardDescription>Standard card styling</CardDescription>
              </CardHeader>
              <CardContent>
                <Text variant="primary">
                  This is a default card with standard border and shadow.
                </Text>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="text-lg">Elevated Card</CardTitle>
                <CardDescription>Enhanced with stronger border</CardDescription>
              </CardHeader>
              <CardContent>
                <Text variant="primary">
                  This card has elevated styling with enhanced glow effects.
                </Text>
              </CardContent>
            </Card>

            <Card variant="interactive">
              <CardHeader>
                <CardTitle className="text-lg">Interactive Card</CardTitle>
                <CardDescription>Hover effects enabled</CardDescription>
              </CardHeader>
              <CardContent>
                <Text variant="primary">
                  This card responds to hover with enhanced effects.
                </Text>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Input Section */}
      <Card>
        <CardHeader>
          <CardTitle>Input Components</CardTitle>
          <CardDescription>
            Form inputs with terminal styling
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            label="Username"
            placeholder="Enter your terminal username"
            helper="Your system identifier"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter secure password"
            helper="Use a strong password for security"
          />
          <Input
            label="Error Example"
            placeholder="This field has an error"
            helper="This field is required"
            error
          />
        </CardContent>
        <CardFooter>
          <Button variant="primary" className="w-full">
            Submit Form
          </Button>
        </CardFooter>
      </Card>

      {/* Typography Section */}
      <Card>
        <CardHeader>
          <CardTitle>Typography Components</CardTitle>
          <CardDescription>
            Text variants and semantic elements
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Text variant="accent" className="mb-2 block">
              Headings
            </Text>
            <div className="space-y-2">
              <Text as="h1" variant="accent" className="text-3xl">
                Heading 1 - Main Title
              </Text>
              <Text as="h2" variant="primary" className="text-2xl">
                Heading 2 - Section Title
              </Text>
              <Text as="h3" variant="secondary" className="text-xl">
                Heading 3 - Subsection
              </Text>
            </div>
          </div>

          <div>
            <Text variant="accent" className="mb-2 block">
              Body Text
            </Text>
            <div className="space-y-2">
              <Text variant="primary">
                Primary text: This is the main body text with full opacity and prominence.
              </Text>
              <Text variant="secondary">
                Secondary text: Used for supporting information with reduced emphasis.
              </Text>
              <Text variant="muted">
                Muted text: For less important details, captions, and helper text.
              </Text>
              <Text variant="accent">
                Accent text: For highlighting important information and calls to action.
              </Text>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
