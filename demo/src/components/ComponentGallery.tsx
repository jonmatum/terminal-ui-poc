import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Grid,
  GridItem,
  Text,
  Badge,
  Button,
  Input,
  Animation,
  Glow,
  Container,
  Section,
  Tabs,
  Link,
  Icon,
} from '@jonmatum/terminal-ui';
import { useFeatureFlags } from '../App';

interface ComponentExample {
  id: string;
  name: string;
  description: string;
  category: 'core' | 'layout' | 'navigation' | 'animation' | 'form';
  component: React.ReactNode;
  code: string;
  props?: Record<string, any>;
}

const COMPONENT_EXAMPLES: ComponentExample[] = [
  // Core Components
  {
    id: 'button-variants',
    name: 'Button Variants',
    description: 'All button styles and states',
    category: 'core',
    component: (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
        </div>
      </div>
    ),
    code: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>`
  },
  {
    id: 'card-variants',
    name: 'Card Variants',
    description: 'Different card styles and layouts',
    category: 'core',
    component: (
      <div className="space-y-4">
        <Card variant="default">
          <CardHeader>
            <CardTitle>Default Card</CardTitle>
            <CardDescription>Basic card with default styling</CardDescription>
          </CardHeader>
          <CardContent>
            <Text>Card content goes here</Text>
          </CardContent>
        </Card>
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Elevated Card</CardTitle>
          </CardHeader>
          <CardContent>
            <Text>Enhanced with glow effects</Text>
          </CardContent>
        </Card>
      </div>
    ),
    code: `<Card variant="elevated">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
</Card>`
  },
  {
    id: 'text-variants',
    name: 'Typography',
    description: 'Text components with different variants',
    category: 'core',
    component: (
      <div className="space-y-2">
        <Text as="h1" size="3xl" weight="bold">Heading 1</Text>
        <Text as="h2" size="2xl" weight="semibold">Heading 2</Text>
        <Text as="p" variant="primary">Primary text</Text>
        <Text as="p" variant="secondary">Secondary text</Text>
        <Text as="p" variant="muted">Muted text</Text>
        <Text as="p" variant="accent">Accent text</Text>
      </div>
    ),
    code: `<Text as="h1" size="3xl" weight="bold">Heading</Text>
<Text variant="primary">Primary text</Text>
<Text variant="secondary">Secondary text</Text>
<Text variant="accent">Accent text</Text>`
  },
  {
    id: 'badges',
    name: 'Badges',
    description: 'Status indicators and labels',
    category: 'core',
    component: (
      <div className="flex flex-wrap gap-2">
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="accent">Accent</Badge>
        <Badge size="sm">Small</Badge>
        <Badge size="lg">Large</Badge>
      </div>
    ),
    code: `<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>`
  },
  
  // Form Components
  {
    id: 'input-variants',
    name: 'Input Fields',
    description: 'Form input components',
    category: 'form',
    component: (
      <div className="space-y-4 max-w-md">
        <Input 
          label="Username" 
          placeholder="Enter username"
          helper="Your terminal username"
        />
        <Input 
          label="Password" 
          type="password"
          placeholder="Enter password"
        />
        <Input 
          label="Email" 
          type="email"
          placeholder="user@example.com"
          error="Invalid email format"
        />
        <Input 
          label="Disabled Field" 
          disabled
          value="Cannot edit"
        />
      </div>
    ),
    code: `<Input 
  label="Username" 
  placeholder="Enter username"
  helper="Your terminal username"
/>
<Input 
  label="Password" 
  type="password"
  placeholder="Enter password"
/>`
  },

  // Animation Components
  {
    id: 'glow-effects',
    name: 'Glow Effects',
    description: 'Glowing text and elements',
    category: 'animation',
    component: (
      <div className="space-y-4 text-center">
        <Glow intensity="low">
          <Text size="lg">Low Intensity Glow</Text>
        </Glow>
        <Glow intensity="medium">
          <Text size="lg">Medium Intensity Glow</Text>
        </Glow>
        <Glow intensity="high" pulse>
          <Text size="lg">High Intensity Pulsing Glow</Text>
        </Glow>
      </div>
    ),
    code: `<Glow intensity="medium">
  <Text>Glowing text</Text>
</Glow>
<Glow intensity="high" pulse>
  <Text>Pulsing glow</Text>
</Glow>`
  },
  {
    id: 'animations',
    name: 'Animations',
    description: 'Various animation effects',
    category: 'animation',
    component: (
      <div className="space-y-4">
        <Animation type="fade-in" duration="slow" trigger="immediate">
          <Card variant="ghost">
            <CardContent>
              <Text>Fade In Animation</Text>
            </CardContent>
          </Card>
        </Animation>
        <Animation type="slide-up" duration="normal" delay="short" trigger="immediate">
          <Card variant="ghost">
            <CardContent>
              <Text>Slide Up Animation</Text>
            </CardContent>
          </Card>
        </Animation>
        <Animation type="scale-in" duration="fast" delay="medium" trigger="immediate">
          <Card variant="ghost">
            <CardContent>
              <Text>Scale In Animation</Text>
            </CardContent>
          </Card>
        </Animation>
      </div>
    ),
    code: `<Animation type="fade-in" duration="slow">
  <div>Animated content</div>
</Animation>
<Animation type="slide-up" delay="short">
  <div>Delayed animation</div>
</Animation>`
  },

  // Layout Components
  {
    id: 'grid-system',
    name: 'Grid System',
    description: 'Responsive grid layouts',
    category: 'layout',
    component: (
      <div className="space-y-4">
        <Grid cols={2} gap="md">
          <GridItem>
            <Card variant="ghost">
              <CardContent>
                <Text>Grid Item 1</Text>
              </CardContent>
            </Card>
          </GridItem>
          <GridItem>
            <Card variant="ghost">
              <CardContent>
                <Text>Grid Item 2</Text>
              </CardContent>
            </Card>
          </GridItem>
        </Grid>
        <Grid cols={3} gap="sm">
          <GridItem>
            <Card variant="ghost">
              <CardContent>
                <Text size="sm">Item 1</Text>
              </CardContent>
            </Card>
          </GridItem>
          <GridItem>
            <Card variant="ghost">
              <CardContent>
                <Text size="sm">Item 2</Text>
              </CardContent>
            </Card>
          </GridItem>
          <GridItem>
            <Card variant="ghost">
              <CardContent>
                <Text size="sm">Item 3</Text>
              </CardContent>
            </Card>
          </GridItem>
        </Grid>
      </div>
    ),
    code: `<Grid cols={2} gap="md">
  <GridItem>Content 1</GridItem>
  <GridItem>Content 2</GridItem>
</Grid>
<Grid cols={3} mdCols={6} gap="sm">
  <GridItem>Responsive item</GridItem>
</Grid>`
  },

  // Navigation Components
  {
    id: 'tabs',
    name: 'Tab Navigation',
    description: 'Horizontal and vertical tabs',
    category: 'navigation',
    component: (
      <div className="space-y-6">
        <div>
          <Text weight="semibold" className="mb-2">Horizontal Tabs</Text>
          <Tabs
            items={[
              { id: 'tab1', label: 'Tab 1', badge: '3' },
              { id: 'tab2', label: 'Tab 2' },
              { id: 'tab3', label: 'Tab 3', disabled: true }
            ]}
            activeTab="tab1"
            variant="horizontal"
          />
        </div>
        <div>
          <Text weight="semibold" className="mb-2">Vertical Tabs</Text>
          <Tabs
            items={[
              { id: 'vtab1', label: 'Vertical 1' },
              { id: 'vtab2', label: 'Vertical 2' }
            ]}
            activeTab="vtab1"
            variant="vertical"
          />
        </div>
      </div>
    ),
    code: `<Tabs
  items={[
    { id: 'tab1', label: 'Tab 1', badge: '3' },
    { id: 'tab2', label: 'Tab 2' },
    { id: 'tab3', label: 'Tab 3', disabled: true }
  ]}
  activeTab="tab1"
  variant="horizontal"
/>`
  },
  {
    id: 'links',
    name: 'Links',
    description: 'Navigation and external links',
    category: 'navigation',
    component: (
      <div className="space-y-2">
        <div>
          <Link href="#" variant="primary">Primary Link</Link>
        </div>
        <div>
          <Link href="#" variant="secondary">Secondary Link</Link>
        </div>
        <div>
          <Link href="#" variant="accent">Accent Link</Link>
        </div>
        <div>
          <Link href="#" external>External Link</Link>
        </div>
      </div>
    ),
    code: `<Link href="/path" variant="primary">Primary Link</Link>
<Link href="/path" variant="secondary">Secondary Link</Link>
<Link href="https://example.com" external>External Link</Link>`
  }
];

const CATEGORIES = [
  { id: 'all', name: 'All Components', icon: '🧩' },
  { id: 'core', name: 'Core', icon: '🔷' },
  { id: 'form', name: 'Forms', icon: '📝' },
  { id: 'layout', name: 'Layout', icon: '📐' },
  { id: 'navigation', name: 'Navigation', icon: '🧭' },
  { id: 'animation', name: 'Animation', icon: '✨' }
];

export function ComponentGallery() {
  const { isEnabled } = useFeatureFlags();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [showCode, setShowCode] = useState<Record<string, boolean>>({});

  const filteredComponents = COMPONENT_EXAMPLES.filter(
    component => selectedCategory === 'all' || component.category === selectedCategory
  );

  const toggleCode = (componentId: string) => {
    setShowCode(prev => ({
      ...prev,
      [componentId]: !prev[componentId]
    }));
  };

  const tabItems = CATEGORIES.map(category => ({
    id: category.id,
    label: category.name,
    icon: category.icon,
    badge: category.id === 'all' 
      ? COMPONENT_EXAMPLES.length.toString()
      : COMPONENT_EXAMPLES.filter(c => c.category === category.id).length.toString()
  }));

  return (
    <Container size="full">
      {/* Header */}
      <Section className="mb-8">
        <div className="text-center mb-8">
          <Animation type="fade-in" duration="slow">
            <Glow intensity="high" pulse>
              <Text as="h1" size="4xl" weight="extrabold" className="mb-4">
                🧩 Component Gallery
              </Text>
            </Glow>
          </Animation>
          
          <Animation type="slide-up" delay="short">
            <Text as="p" size="lg" variant="secondary" className="max-w-3xl mx-auto">
              Comprehensive showcase of all design system components with live examples, 
              interactive controls, and copy-paste code snippets.
            </Text>
          </Animation>
        </div>

        {/* Category Tabs */}
        <Tabs
          items={tabItems}
          activeTab={selectedCategory}
          onTabChange={setSelectedCategory}
          variant="horizontal"
          className="mb-8"
        />
      </Section>

      {/* Component Grid */}
      <Section>
        <Grid cols={1} lgCols={2} gap="lg">
          {filteredComponents.map((component, index) => (
            <GridItem key={component.id}>
              <Animation 
                type="fade-in" 
                delay={index * 100}
                trigger="visible"
              >
                <Card variant="elevated" className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="primary" size="sm">
                        {CATEGORIES.find(c => c.id === component.category)?.icon} {component.category}
                      </Badge>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleCode(component.id)}
                        >
                          {showCode[component.id] ? '👁️ Preview' : '💻 Code'}
                        </Button>
                      </div>
                    </div>
                    <CardTitle>{component.name}</CardTitle>
                    <CardDescription>{component.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    {showCode[component.id] ? (
                      <div className="bg-black/50 rounded-lg p-4 border border-current/20">
                        <pre className="text-sm overflow-x-auto">
                          <code className="text-current">{component.code}</code>
                        </pre>
                      </div>
                    ) : (
                      <div className="min-h-32 flex items-center justify-center p-4 bg-black/20 rounded-lg border border-current/10">
                        {component.component}
                      </div>
                    )}
                  </CardContent>
                  
                  <CardFooter>
                    <div className="flex justify-between items-center w-full">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => navigator.clipboard.writeText(component.code)}
                      >
                        📋 Copy Code
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedComponent(
                          selectedComponent === component.id ? null : component.id
                        )}
                      >
                        {selectedComponent === component.id ? '🔽 Less' : '🔼 More'}
                      </Button>
                    </div>
                  </CardFooter>

                  {/* Expanded Details */}
                  {selectedComponent === component.id && (
                    <CardContent className="border-t border-current/20 pt-4">
                      <div className="space-y-4">
                        <div>
                          <Text weight="semibold" size="sm" className="mb-2">
                            Available Props:
                          </Text>
                          <div className="bg-black/30 rounded p-3">
                            <Text size="xs" variant="muted" className="font-mono">
                              {component.props ? 
                                Object.entries(component.props).map(([key, value]) => 
                                  `${key}: ${typeof value}`
                                ).join(', ') :
                                'variant, size, className, children, ...props'
                              }
                            </Text>
                          </div>
                        </div>
                        
                        <div>
                          <Text weight="semibold" size="sm" className="mb-2">
                            Usage Example:
                          </Text>
                          <div className="bg-black/30 rounded p-3">
                            <Text size="xs" className="font-mono">
                              import {`{ ${component.name.replace(' ', '')} }`} from '@jonmatum/terminal-ui';
                            </Text>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              </Animation>
            </GridItem>
          ))}
        </Grid>

        {filteredComponents.length === 0 && (
          <div className="text-center py-12">
            <Text variant="muted" size="lg">
              No components found in this category.
            </Text>
          </div>
        )}
      </Section>

      {/* Quick Reference */}
      <Section className="mt-12">
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Quick Reference</CardTitle>
            <CardDescription>
              Essential information for using the component library
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Grid cols={1} mdCols={2} gap="md">
              <div>
                <Text weight="semibold" className="mb-2">Installation</Text>
                <div className="bg-black/50 rounded p-3 mb-4">
                  <code className="text-sm">npm install @jonmatum/terminal-ui</code>
                </div>
              </div>
              <div>
                <Text weight="semibold" className="mb-2">Import</Text>
                <div className="bg-black/50 rounded p-3 mb-4">
                  <code className="text-sm">import {`{ Button, Card }`} from '@jonmatum/terminal-ui'</code>
                </div>
              </div>
            </Grid>
            
            <div className="flex gap-4 mt-6">
              <Link href="https://github.com/jonmatum/terminal-ui" external variant="primary">
                📚 Documentation
              </Link>
              <Link href="https://github.com/jonmatum/terminal-ui" external variant="secondary">
                🐙 GitHub
              </Link>
              <Link href="https://npmjs.com/package/@jonmatum/terminal-ui" external variant="accent">
                📦 NPM
              </Link>
            </div>
          </CardContent>
        </Card>
      </Section>
    </Container>
  );
}
