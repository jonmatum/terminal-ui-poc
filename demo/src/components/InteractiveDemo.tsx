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
  useTheme,
} from '@jonmatum/terminal-ui';

interface FormData {
  username: string;
  email: string;
  message: string;
}

export function InteractiveDemo() {
  const { mode, variants } = useTheme();
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleInputChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const isFormValid = formData.username && formData.email && formData.message;

  return (
    <div className="space-y-8">
      {/* Interactive Form */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Interactive Form Demo</CardTitle>
          <CardDescription>
            A fully functional form showcasing all input components and states
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            label="Username"
            placeholder="Enter your username"
            helper="Choose a unique identifier"
            value={formData.username}
            onChange={handleInputChange('username')}
          />
          
          <Input
            label="Email Address"
            type="email"
            placeholder="user@terminal.com"
            helper="We'll never share your email"
            value={formData.email}
            onChange={handleInputChange('email')}
          />
          
          <div className="space-y-2">
            <Text variant="primary" className="text-sm font-medium">
              Message
            </Text>
            <textarea
              className={`
                w-full min-h-[100px] px-3 py-2 rounded-md resize-none
                ${variants.input.default}
                focus:${variants.input.focused.replace('shadow-[0_0_10px_currentColor]', '')}
              `}
              placeholder="Enter your message here..."
              value={formData.message}
              onChange={handleInputChange('message')}
            />
            <Text variant="muted" className="text-sm">
              Tell us what you think about the design system
            </Text>
          </div>
        </CardContent>
        <CardFooter className="flex gap-3">
          <Button
            variant="primary"
            loading={isSubmitting}
            disabled={!isFormValid}
            onClick={handleSubmit}
            className="flex-1"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Form'}
          </Button>
          <Button
            variant="secondary"
            onClick={() => setFormData({ username: '', email: '', message: '' })}
          >
            Clear
          </Button>
        </CardFooter>
      </Card>

      {/* Success Message */}
      {submitted && (
        <Card variant="elevated" className="border-accent">
          <CardContent className="py-6">
            <Text variant="accent" className="text-center text-lg">
              ✅ Form submitted successfully! Thank you for your feedback.
            </Text>
          </CardContent>
        </Card>
      )}

      {/* Counter Demo */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive Counter</CardTitle>
          <CardDescription>
            Button interactions with state management
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div>
            <Text variant="accent" className="text-6xl font-bold block mb-2">
              {counter}
            </Text>
            <Text variant="muted">
              Current count value
            </Text>
          </div>
          
          <div className="flex justify-center gap-3">
            <Button
              variant="danger"
              onClick={() => setCounter(prev => Math.max(0, prev - 1))}
              disabled={counter === 0}
            >
              Decrease
            </Button>
            <Button
              variant="secondary"
              onClick={() => setCounter(0)}
            >
              Reset
            </Button>
            <Button
              variant="primary"
              onClick={() => setCounter(prev => prev + 1)}
            >
              Increase
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Theme-Aware Components */}
      <Card>
        <CardHeader>
          <CardTitle>Theme-Aware Styling</CardTitle>
          <CardDescription>
            Components that adapt to the current theme automatically
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Text variant="accent" className="mb-3 block">
              Current Theme: {mode.toUpperCase()}
            </Text>
            <Text variant="secondary">
              All components automatically adapt their styling based on the active theme.
              Switch themes using the Konami code or the theme toggle to see the changes.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card variant="interactive">
              <CardContent className="py-4">
                <Text variant="primary" className="font-bold mb-2">
                  Dynamic Colors
                </Text>
                <Text variant="secondary" className="text-sm">
                  Border, text, and glow colors change automatically
                </Text>
              </CardContent>
            </Card>
            
            <Card variant="interactive">
              <CardContent className="py-4">
                <Text variant="primary" className="font-bold mb-2">
                  Consistent Styling
                </Text>
                <Text variant="secondary" className="text-sm">
                  All components maintain visual harmony
                </Text>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button variant="primary" size="sm">Primary</Button>
            <Button variant="secondary" size="sm">Secondary</Button>
            <Button variant="ghost" size="sm">Ghost</Button>
            <Button variant="danger" size="sm">Danger</Button>
          </div>
        </CardContent>
      </Card>

      {/* Component Composition */}
      <Card>
        <CardHeader>
          <CardTitle>Component Composition</CardTitle>
          <CardDescription>
            Complex layouts built from simple, reusable components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} variant="default">
                <CardHeader>
                  <CardTitle className="text-lg">Item {item}</CardTitle>
                  <CardDescription>
                    Composed card component
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Text variant="primary" className="text-sm">
                    This card demonstrates how components can be composed together
                    to create complex layouts while maintaining consistency.
                  </Text>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full">
                    Action {item}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
