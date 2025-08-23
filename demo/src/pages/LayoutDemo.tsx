import React, { useState } from 'react';
import {
  Container,
  Grid,
  GridItem,
  Section,
  HeroSection,
  FeatureSection,
  ContentSection,
  CardGrid,
  FeatureGrid,
  TwoColumnGrid,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
  Text,
  Badge,
  Animation,
  Glow,
  useTheme,
} from '@jonmatum/terminal-ui';

export function LayoutDemo() {
  const { mode } = useTheme();
  const [selectedLayout, setSelectedLayout] = useState<string>('grid');

  const layoutExamples = [
    { id: 'grid', label: 'Grid System', icon: '📐' },
    { id: 'containers', label: 'Containers', icon: '📦' },
    { id: 'sections', label: 'Sections', icon: '📄' },
    { id: 'presets', label: 'Layout Presets', icon: '🎨' },
    { id: 'responsive', label: 'Responsive Design', icon: '📱' },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="mb-8">
        <Text as="h1" size="4xl" weight="bold" className="mb-4">
          <Glow intensity={mode === 'tron' ? 'high' : 'medium'}>
            Layout System
          </Glow>
        </Text>
        <Text variant="secondary" size="lg">
          Responsive grids, containers, and semantic sections for building modern layouts.
        </Text>
      </div>

      {/* Layout Navigation */}
      <Card variant="elevated">
        <CardContent className="py-4">
          <div className="flex flex-wrap gap-2">
            {layoutExamples.map((example) => (
              <Button
                key={example.id}
                variant={selectedLayout === example.id ? 'primary' : 'ghost'}
                onClick={() => setSelectedLayout(example.id)}
                className="flex items-center gap-2"
              >
                <span>{example.icon}</span>
                {example.label}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Grid System Demo */}
      {selectedLayout === 'grid' && (
        <div className="space-y-6">
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Grid System</CardTitle>
              <CardDescription>
                Flexible grid system with responsive breakpoints and customizable gaps
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Basic Grid */}
              <div>
                <Text variant="accent" weight="semibold" className="mb-4">
                  Basic Grid (3 columns)
                </Text>
                <Grid cols={3} gap="md">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <GridItem key={i}>
                      <Animation type="scale-in" delay={i * 100} trigger="visible">
                        <Card variant="interactive" className="text-center py-6">
                          <Text variant="primary">Item {i + 1}</Text>
                        </Card>
                      </Animation>
                    </GridItem>
                  ))}
                </Grid>
              </div>

              {/* Responsive Grid */}
              <div>
                <Text variant="accent" weight="semibold" className="mb-4">
                  Responsive Grid (1 → 2 → 4 columns)
                </Text>
                <Grid cols={1} mdCols={2} xlCols={4} gap="lg">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <GridItem key={i}>
                      <Animation type="slide-up" delay={i * 50} trigger="visible">
                        <Card variant="default" className="text-center py-4">
                          <Text variant="secondary" size="sm">
                            Responsive Item {i + 1}
                          </Text>
                        </Card>
                      </Animation>
                    </GridItem>
                  ))}
                </Grid>
              </div>

              {/* Grid with Spans */}
              <div>
                <Text variant="accent" weight="semibold" className="mb-4">
                  Grid with Column Spans
                </Text>
                <Grid cols={4} gap="md">
                  <GridItem span={2}>
                    <Animation type="fade-in" trigger="visible">
                      <Card variant="elevated" className="text-center py-8">
                        <Text variant="primary">Span 2 Columns</Text>
                      </Card>
                    </Animation>
                  </GridItem>
                  <GridItem>
                    <Animation type="fade-in" delay="short" trigger="visible">
                      <Card variant="default" className="text-center py-8">
                        <Text variant="secondary">Col 1</Text>
                      </Card>
                    </Animation>
                  </GridItem>
                  <GridItem>
                    <Animation type="fade-in" delay="medium" trigger="visible">
                      <Card variant="default" className="text-center py-8">
                        <Text variant="secondary">Col 1</Text>
                      </Card>
                    </Animation>
                  </GridItem>
                  <GridItem span={3}>
                    <Animation type="fade-in" delay="long" trigger="visible">
                      <Card variant="interactive" className="text-center py-6">
                        <Text variant="accent">Span 3 Columns</Text>
                      </Card>
                    </Animation>
                  </GridItem>
                  <GridItem>
                    <Animation type="fade-in" delay="long" trigger="visible">
                      <Card variant="default" className="text-center py-6">
                        <Text variant="secondary">Col 1</Text>
                      </Card>
                    </Animation>
                  </GridItem>
                </Grid>
              </div>

              {/* Different Gap Sizes */}
              <div>
                <Text variant="accent" weight="semibold" className="mb-4">
                  Gap Variations
                </Text>
                <div className="space-y-6">
                  {[
                    { gap: 'xs', label: 'Extra Small Gap' },
                    { gap: 'sm', label: 'Small Gap' },
                    { gap: 'md', label: 'Medium Gap' },
                    { gap: 'lg', label: 'Large Gap' },
                    { gap: 'xl', label: 'Extra Large Gap' },
                  ].map((example, index) => (
                    <div key={example.gap}>
                      <Text variant="muted" size="sm" className="mb-2">
                        {example.label}
                      </Text>
                      <Grid cols={3} gap={example.gap as any}>
                        {Array.from({ length: 3 }).map((_, i) => (
                          <GridItem key={i}>
                            <Card variant="default" className="text-center py-3">
                              <Text variant="secondary" size="sm">
                                Gap: {example.gap}
                              </Text>
                            </Card>
                          </GridItem>
                        ))}
                      </Grid>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Container Demo */}
      {selectedLayout === 'containers' && (
        <div className="space-y-6">
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Container System</CardTitle>
              <CardDescription>
                Responsive containers with various size constraints and padding options
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Container Sizes */}
              <div>
                <Text variant="accent" weight="semibold" className="mb-4">
                  Container Sizes
                </Text>
                <div className="space-y-4">
                  {[
                    { size: 'sm', label: 'Small (24rem)' },
                    { size: 'md', label: 'Medium (28rem)' },
                    { size: 'lg', label: 'Large (32rem)' },
                    { size: 'xl', label: 'Extra Large (36rem)' },
                    { size: '2xl', label: '2X Large (42rem)' },
                    { size: '4xl', label: '4X Large (56rem)' },
                  ].map((example) => (
                    <div key={example.size}>
                      <Text variant="muted" size="sm" className="mb-2">
                        {example.label}
                      </Text>
                      <Container size={example.size as any} className="border border-current/20 rounded">
                        <Card variant="default" className="text-center py-4">
                          <Text variant="secondary">
                            Container: {example.size}
                          </Text>
                        </Card>
                      </Container>
                    </div>
                  ))}
                </div>
              </div>

              {/* Container Padding */}
              <div>
                <Text variant="accent" weight="semibold" className="mb-4">
                  Container Padding
                </Text>
                <div className="space-y-4">
                  {[
                    { padding: 'sm', label: 'Small Padding' },
                    { padding: 'md', label: 'Medium Padding' },
                    { padding: 'lg', label: 'Large Padding' },
                    { padding: 'xl', label: 'Extra Large Padding' },
                  ].map((example) => (
                    <div key={example.padding}>
                      <Text variant="muted" size="sm" className="mb-2">
                        {example.label}
                      </Text>
                      <Container 
                        size="2xl" 
                        padding={example.padding as any}
                        className="border border-current/20 rounded"
                      >
                        <Card variant="default" className="text-center py-2">
                          <Text variant="secondary" size="sm">
                            Padding: {example.padding}
                          </Text>
                        </Card>
                      </Container>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Sections Demo */}
      {selectedLayout === 'sections' && (
        <div className="space-y-6">
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Section Components</CardTitle>
              <CardDescription>
                Semantic sections with different variants and background styles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Text variant="muted" className="mb-6">
                Sections are displayed below this card to show their full-width behavior:
              </Text>
            </CardContent>
          </Card>

          {/* Hero Section Example */}
          <Section variant="hero" background="elevated" className="border border-current/20 rounded-lg">
            <Animation type="fade-in" trigger="visible">
              <div className="text-center space-y-4">
                <Text as="h2" size="3xl" weight="bold">
                  Hero Section
                </Text>
                <Text variant="secondary" size="lg">
                  Large padding, perfect for landing page heroes and main content areas
                </Text>
                <Badge variant="primary">variant="hero"</Badge>
              </div>
            </Animation>
          </Section>

          {/* Feature Section Example */}
          <Section variant="feature" background="subtle" className="border border-current/20 rounded-lg">
            <Animation type="slide-up" trigger="visible">
              <div className="text-center space-y-4">
                <Text as="h2" size="2xl" weight="semibold">
                  Feature Section
                </Text>
                <Text variant="secondary">
                  Medium padding, ideal for showcasing features and content blocks
                </Text>
                <Badge variant="secondary">variant="feature"</Badge>
              </div>
            </Animation>
          </Section>

          {/* Content Section Example */}
          <Section variant="content" className="border border-current/20 rounded-lg">
            <Animation type="slide-up" trigger="visible">
              <div className="text-center space-y-4">
                <Text as="h2" size="xl" weight="semibold">
                  Content Section
                </Text>
                <Text variant="secondary">
                  Standard padding for regular content areas and articles
                </Text>
                <Badge variant="accent">variant="content"</Badge>
              </div>
            </Animation>
          </Section>

          {/* Compact Section Example */}
          <Section variant="compact" className="border border-current/20 rounded-lg">
            <Animation type="slide-up" trigger="visible">
              <div className="text-center space-y-2">
                <Text as="h2" size="lg" weight="medium">
                  Compact Section
                </Text>
                <Text variant="secondary" size="sm">
                  Minimal padding for tight layouts and sidebars
                </Text>
                <Badge variant="outline" size="sm">variant="compact"</Badge>
              </div>
            </Animation>
          </Section>
        </div>
      )}

      {/* Layout Presets Demo */}
      {selectedLayout === 'presets' && (
        <div className="space-y-6">
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Layout Presets</CardTitle>
              <CardDescription>
                Pre-configured layout combinations for common use cases
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Hero Section Preset */}
          <HeroSection>
            <Animation type="fade-in" trigger="visible">
              <div className="text-center space-y-6">
                <Glow intensity="high">
                  <Text as="h1" size="4xl" weight="bold">
                    HeroSection Preset
                  </Text>
                </Glow>
                <Text variant="secondary" size="xl">
                  Combines Section variant="hero" with Container size="4xl"
                </Text>
                <div className="flex justify-center gap-4">
                  <Button variant="primary">Get Started</Button>
                  <Button variant="secondary">Learn More</Button>
                </div>
              </div>
            </Animation>
          </HeroSection>

          {/* Feature Section Preset */}
          <FeatureSection>
            <Animation type="slide-up" trigger="visible">
              <Text as="h2" size="3xl" weight="bold" className="text-center mb-8">
                FeatureSection with FeatureGrid
              </Text>
            </Animation>
            
            <FeatureGrid>
              {Array.from({ length: 6 }).map((_, i) => (
                <Animation key={i} type="scale-in" delay={i * 100} trigger="visible">
                  <Card variant="interactive" className="text-center">
                    <CardHeader>
                      <div className="text-3xl mb-2">
                        {['🚀', '⚡', '🎯', '🔧', '💎', '🌟'][i]}
                      </div>
                      <CardTitle size="md">Feature {i + 1}</CardTitle>
                      <CardDescription>
                        Description of feature {i + 1} with benefits and details
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Animation>
              ))}
            </FeatureGrid>
          </FeatureSection>

          {/* Content Section with Card Grid */}
          <ContentSection>
            <Animation type="slide-up" trigger="visible">
              <Text as="h2" size="2xl" weight="semibold" className="text-center mb-6">
                ContentSection with CardGrid
              </Text>
            </Animation>
            
            <CardGrid>
              {Array.from({ length: 3 }).map((_, i) => (
                <Animation key={i} type="slide-up" delay={i * 150} trigger="visible">
                  <Card variant="elevated">
                    <CardHeader>
                      <CardTitle>Card {i + 1}</CardTitle>
                      <CardDescription>
                        Example card in a responsive grid layout
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Text variant="secondary">
                        This demonstrates the CardGrid preset which creates a 
                        responsive grid that adapts from 1 column on mobile to 
                        3 columns on desktop.
                      </Text>
                    </CardContent>
                  </Card>
                </Animation>
              ))}
            </CardGrid>
          </ContentSection>

          {/* Two Column Grid */}
          <ContentSection>
            <Animation type="slide-up" trigger="visible">
              <Text as="h2" size="2xl" weight="semibold" className="text-center mb-6">
                TwoColumnGrid Preset
              </Text>
            </Animation>
            
            <TwoColumnGrid>
              <Animation type="slide-left" trigger="visible">
                <Card variant="elevated">
                  <CardHeader>
                    <CardTitle>Left Column</CardTitle>
                    <CardDescription>
                      Perfect for content and sidebar layouts
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Text variant="secondary">
                      The TwoColumnGrid preset creates a responsive layout that 
                      stacks on mobile and displays side-by-side on desktop.
                    </Text>
                  </CardContent>
                </Card>
              </Animation>
              
              <Animation type="slide-right" trigger="visible">
                <Card variant="interactive">
                  <CardHeader>
                    <CardTitle>Right Column</CardTitle>
                    <CardDescription>
                      Ideal for sidebars and complementary content
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Text variant="secondary">
                      Both columns have equal width on desktop, making it perfect 
                      for balanced content layouts.
                    </Text>
                  </CardContent>
                </Card>
              </Animation>
            </TwoColumnGrid>
          </ContentSection>
        </div>
      )}

      {/* Responsive Design Demo */}
      {selectedLayout === 'responsive' && (
        <div className="space-y-6">
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Responsive Design</CardTitle>
              <CardDescription>
                How the layout system adapts to different screen sizes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Breakpoint Information */}
              <div>
                <Text variant="accent" weight="semibold" className="mb-4">
                  Responsive Breakpoints
                </Text>
                <Grid cols={1} mdCols={2} xlCols={4} gap="md">
                  {[
                    { name: 'Mobile', size: '< 768px', cols: '1 column' },
                    { name: 'Tablet', size: '768px+', cols: '2 columns' },
                    { name: 'Desktop', size: '1024px+', cols: '3 columns' },
                    { name: 'Large', size: '1280px+', cols: '4 columns' },
                  ].map((breakpoint, i) => (
                    <GridItem key={breakpoint.name}>
                      <Animation type="scale-in" delay={i * 100} trigger="visible">
                        <Card variant="default" className="text-center">
                          <CardHeader>
                            <CardTitle size="sm">{breakpoint.name}</CardTitle>
                            <CardDescription>
                              {breakpoint.size}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <Badge variant="outline" size="sm">
                              {breakpoint.cols}
                            </Badge>
                          </CardContent>
                        </Card>
                      </Animation>
                    </GridItem>
                  ))}
                </Grid>
              </div>

              {/* Responsive Grid Example */}
              <div>
                <Text variant="accent" weight="semibold" className="mb-4">
                  Responsive Grid Example
                </Text>
                <Text variant="muted" size="sm" className="mb-4">
                  Resize your browser to see how this grid adapts: 1 → 2 → 3 → 4 columns
                </Text>
                <Grid cols={1} smCols={2} mdCols={3} xlCols={4} gap="md">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <GridItem key={i}>
                      <Animation type="fade-in" delay={i * 50} trigger="visible">
                        <Card variant="interactive" className="text-center py-6">
                          <Text variant="primary">Item {i + 1}</Text>
                          <Text variant="muted" size="sm" className="mt-1">
                            Responsive
                          </Text>
                        </Card>
                      </Animation>
                    </GridItem>
                  ))}
                </Grid>
              </div>

              {/* Container Responsiveness */}
              <div>
                <Text variant="accent" weight="semibold" className="mb-4">
                  Responsive Containers
                </Text>
                <div className="space-y-4">
                  {[
                    { size: 'screen-sm', label: 'Screen Small (640px)' },
                    { size: 'screen-md', label: 'Screen Medium (768px)' },
                    { size: 'screen-lg', label: 'Screen Large (1024px)' },
                    { size: 'screen-xl', label: 'Screen XL (1280px)' },
                  ].map((example) => (
                    <div key={example.size}>
                      <Text variant="muted" size="sm" className="mb-2">
                        {example.label}
                      </Text>
                      <Container 
                        size={example.size as any} 
                        className="border border-current/20 rounded"
                      >
                        <Card variant="default" className="text-center py-3">
                          <Text variant="secondary" size="sm">
                            Max-width: {example.size}
                          </Text>
                        </Card>
                      </Container>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
