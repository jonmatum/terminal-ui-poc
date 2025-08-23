import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Grid,
  GridItem,
  Container,
  Section,
  HeroSection,
  FeatureSection,
  ContentSection,
  Text,
  Badge,
  Button,
  Animation,
  Glow,
} from '@jonmatum/terminal-ui';

const GRID_CONFIGS = [
  { cols: 1, name: '1 Column', description: 'Single column layout' },
  { cols: 2, name: '2 Columns', description: 'Two column layout' },
  { cols: 3, name: '3 Columns', description: 'Three column layout' },
  { cols: 4, name: '4 Columns', description: 'Four column layout' },
  { cols: 6, name: '6 Columns', description: 'Six column layout' },
  { cols: 12, name: '12 Columns', description: 'Full grid system' }
];

const CONTAINER_SIZES = [
  { size: 'sm', name: 'Small', description: '24rem max width' },
  { size: 'md', name: 'Medium', description: '28rem max width' },
  { size: 'lg', name: 'Large', description: '32rem max width' },
  { size: 'xl', name: 'Extra Large', description: '36rem max width' },
  { size: '2xl', name: '2X Large', description: '42rem max width' },
  { size: 'full', name: 'Full Width', description: '100% width' }
];

export function LayoutBuilder() {
  const [selectedGrid, setSelectedGrid] = useState(3);
  const [selectedContainer, setSelectedContainer] = useState('lg');
  const [selectedSection, setSelectedSection] = useState('content');

  return (
    <Container size="full">
      <Section className="mb-8">
        <div className="text-center mb-8">
          <Animation type="fade-in" duration="slow">
            <Glow intensity="high" pulse>
              <Text as="h1" size="4xl" weight="extrabold" className="mb-4">
                📐 Layout Builder
              </Text>
            </Glow>
          </Animation>
          
          <Animation type="slide-up" delay="short">
            <Text as="p" size="lg" variant="secondary" className="max-w-3xl mx-auto">
              Build responsive layouts with our grid system, containers, and section presets. 
              Test different configurations and see the results in real-time.
            </Text>
          </Animation>
        </div>
      </Section>

      <Grid cols={1} lgCols={4} gap="lg">
        {/* Controls */}
        <GridItem>
          <div className="space-y-6">
            {/* Grid Controls */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Grid System</CardTitle>
                <CardDescription>Choose column configuration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {GRID_CONFIGS.map(config => (
                    <Button
                      key={config.cols}
                      variant={selectedGrid === config.cols ? 'primary' : 'ghost'}
                      size="sm"
                      onClick={() => setSelectedGrid(config.cols)}
                      className="w-full justify-start"
                    >
                      <div className="flex items-center justify-between w-full">
                        <span>{config.name}</span>
                        <Badge variant="muted" size="xs">{config.cols}</Badge>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Container Controls */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Container Size</CardTitle>
                <CardDescription>Choose container width</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {CONTAINER_SIZES.map(container => (
                    <Button
                      key={container.size}
                      variant={selectedContainer === container.size ? 'primary' : 'ghost'}
                      size="sm"
                      onClick={() => setSelectedContainer(container.size)}
                      className="w-full justify-start"
                    >
                      <div className="flex flex-col items-start">
                        <span>{container.name}</span>
                        <Text size="xs" variant="muted">{container.description}</Text>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Section Presets */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Section Presets</CardTitle>
                <CardDescription>Choose section type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button
                    variant={selectedSection === 'hero' ? 'primary' : 'ghost'}
                    size="sm"
                    onClick={() => setSelectedSection('hero')}
                    className="w-full justify-start"
                  >
                    Hero Section
                  </Button>
                  <Button
                    variant={selectedSection === 'feature' ? 'primary' : 'ghost'}
                    size="sm"
                    onClick={() => setSelectedSection('feature')}
                    className="w-full justify-start"
                  >
                    Feature Section
                  </Button>
                  <Button
                    variant={selectedSection === 'content' ? 'primary' : 'ghost'}
                    size="sm"
                    onClick={() => setSelectedSection('content')}
                    className="w-full justify-start"
                  >
                    Content Section
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </GridItem>

        {/* Preview */}
        <GridItem lgSpan={3}>
          <div className="space-y-6">
            {/* Live Preview */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Live Preview</CardTitle>
                <CardDescription>
                  {selectedGrid} columns • {selectedContainer} container • {selectedSection} section
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border border-current/20 rounded-lg overflow-hidden">
                  {/* Section Wrapper */}
                  {selectedSection === 'hero' && (
                    <HeroSection>
                      <Container size={selectedContainer as any}>
                        <Grid cols={selectedGrid as any} gap="md">
                          {Array.from({ length: selectedGrid }, (_, i) => (
                            <GridItem key={i}>
                              <div className="bg-current/10 rounded p-4 text-center min-h-24 flex items-center justify-center">
                                <Text size="sm">Item {i + 1}</Text>
                              </div>
                            </GridItem>
                          ))}
                        </Grid>
                      </Container>
                    </HeroSection>
                  )}

                  {selectedSection === 'feature' && (
                    <FeatureSection>
                      <Container size={selectedContainer as any}>
                        <Grid cols={selectedGrid as any} gap="md">
                          {Array.from({ length: selectedGrid }, (_, i) => (
                            <GridItem key={i}>
                              <div className="bg-current/10 rounded p-4 text-center min-h-24 flex items-center justify-center">
                                <Text size="sm">Feature {i + 1}</Text>
                              </div>
                            </GridItem>
                          ))}
                        </Grid>
                      </Container>
                    </FeatureSection>
                  )}

                  {selectedSection === 'content' && (
                    <ContentSection>
                      <Container size={selectedContainer as any}>
                        <Grid cols={selectedGrid as any} gap="md">
                          {Array.from({ length: selectedGrid }, (_, i) => (
                            <GridItem key={i}>
                              <div className="bg-current/10 rounded p-4 text-center min-h-24 flex items-center justify-center">
                                <Text size="sm">Content {i + 1}</Text>
                              </div>
                            </GridItem>
                          ))}
                        </Grid>
                      </Container>
                    </ContentSection>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Code Example */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Generated Code</CardTitle>
                <CardDescription>Copy this layout code</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-black/50 rounded-lg p-4 border border-current/20">
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-current">
{`<${selectedSection === 'hero' ? 'HeroSection' : selectedSection === 'feature' ? 'FeatureSection' : 'ContentSection'}>
  <Container size="${selectedContainer}">
    <Grid cols={${selectedGrid}} gap="md">
      ${Array.from({ length: Math.min(selectedGrid, 3) }, (_, i) => 
        `<GridItem>\n        {/* Content ${i + 1} */}\n      </GridItem>`
      ).join('\n      ')}${selectedGrid > 3 ? '\n      {/* ... more items */}' : ''}
    </Grid>
  </Container>
</${selectedSection === 'hero' ? 'HeroSection' : selectedSection === 'feature' ? 'FeatureSection' : 'ContentSection'}>`}
                    </code>
                  </pre>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  className="mt-4"
                  onClick={() => navigator.clipboard.writeText(
                    `<${selectedSection === 'hero' ? 'HeroSection' : selectedSection === 'feature' ? 'FeatureSection' : 'ContentSection'}>\n  <Container size="${selectedContainer}">\n    <Grid cols={${selectedGrid}} gap="md">\n      <GridItem>\n        {/* Your content */}\n      </GridItem>\n    </Grid>\n  </Container>\n</${selectedSection === 'hero' ? 'HeroSection' : selectedSection === 'feature' ? 'FeatureSection' : 'ContentSection'}>`
                  )}
                >
                  📋 Copy Code
                </Button>
              </CardContent>
            </Card>

            {/* Responsive Preview */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Responsive Behavior</CardTitle>
                <CardDescription>How the layout adapts to different screen sizes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <Text size="sm" weight="semibold">Mobile</Text>
                      <div className="bg-current/10 rounded p-2 mt-2">
                        <div className="space-y-1">
                          {Array.from({ length: Math.min(selectedGrid, 2) }, (_, i) => (
                            <div key={i} className="bg-current/20 rounded h-4"></div>
                          ))}
                        </div>
                      </div>
                      <Text size="xs" variant="muted">1-2 columns</Text>
                    </div>
                    <div className="text-center">
                      <Text size="sm" weight="semibold">Tablet</Text>
                      <div className="bg-current/10 rounded p-2 mt-2">
                        <div className="grid grid-cols-2 gap-1">
                          {Array.from({ length: Math.min(selectedGrid, 4) }, (_, i) => (
                            <div key={i} className="bg-current/20 rounded h-4"></div>
                          ))}
                        </div>
                      </div>
                      <Text size="xs" variant="muted">2-4 columns</Text>
                    </div>
                    <div className="text-center">
                      <Text size="sm" weight="semibold">Desktop</Text>
                      <div className="bg-current/10 rounded p-2 mt-2">
                        <div className={`grid grid-cols-${Math.min(selectedGrid, 6)} gap-1`}>
                          {Array.from({ length: selectedGrid }, (_, i) => (
                            <div key={i} className="bg-current/20 rounded h-4"></div>
                          ))}
                        </div>
                      </div>
                      <Text size="xs" variant="muted">{selectedGrid} columns</Text>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </GridItem>
      </Grid>
    </Container>
  );
}
