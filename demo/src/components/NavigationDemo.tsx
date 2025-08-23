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
  Tabs,
  Sidebar,
  Breadcrumb,
  Navigation,
} from '@jonmatum/terminal-ui';

export function NavigationDemo() {
  const [activeTab, setActiveTab] = useState('horizontal');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const tabItems = [
    { id: 'horizontal', label: 'Horizontal Tabs', icon: '↔️' },
    { id: 'vertical', label: 'Vertical Tabs', icon: '↕️' },
    { id: 'sidebar', label: 'Sidebar Navigation', icon: '📋' },
    { id: 'breadcrumbs', label: 'Breadcrumbs', icon: '🍞' }
  ];

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊', active: true },
    { id: 'users', label: 'Users', icon: '👥', badge: '12' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
    { id: 'help', label: 'Help', icon: '❓', disabled: true }
  ];

  const breadcrumbItems = [
    { label: 'Home', onClick: () => console.log('Navigate to Home') },
    { label: 'Products', onClick: () => console.log('Navigate to Products') },
    { label: 'Electronics', onClick: () => console.log('Navigate to Electronics') },
    { label: 'Current Page' }
  ];

  return (
    <Container size="full">
      <Section className="mb-8">
        <div className="text-center mb-8">
          <Animation type="fade-in" duration="slow">
            <Glow intensity="high" pulse>
              <Text as="h1" size="4xl" weight="extrabold" className="mb-4">
                🧭 Navigation Patterns
              </Text>
            </Glow>
          </Animation>
          
          <Animation type="slide-up" delay="short">
            <Text as="p" size="lg" variant="secondary" className="max-w-3xl mx-auto">
              Comprehensive navigation components including tabs, sidebars, breadcrumbs, 
              and menu systems for building intuitive user interfaces.
            </Text>
          </Animation>
        </div>

        {/* Navigation Type Selector */}
        <Tabs
          items={tabItems}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          variant="horizontal"
          className="mb-8"
        />
      </Section>

      {/* Content based on selected navigation type */}
      {activeTab === 'horizontal' && (
        <Section>
          <Grid cols={1} lgCols={2} gap="lg">
            <GridItem>
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>Horizontal Tabs</CardTitle>
                  <CardDescription>Standard horizontal tab navigation</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs
                    items={[
                      { id: 'tab1', label: 'Overview', badge: '5' },
                      { id: 'tab2', label: 'Details' },
                      { id: 'tab3', label: 'Settings', disabled: true },
                      { id: 'tab4', label: 'Advanced' }
                    ]}
                    activeTab="tab1"
                    variant="horizontal"
                  />
                  <div className="mt-4 p-4 bg-current/10 rounded">
                    <Text>Tab content would appear here</Text>
                  </div>
                </CardContent>
              </Card>
            </GridItem>

            <GridItem>
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>Code Example</CardTitle>
                  <CardDescription>Implementation code</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-black/50 rounded-lg p-4 border border-current/20">
                    <pre className="text-sm overflow-x-auto">
                      <code className="text-current">
{`<Tabs
  items={[
    { id: 'tab1', label: 'Overview', badge: '5' },
    { id: 'tab2', label: 'Details' },
    { id: 'tab3', label: 'Settings', disabled: true }
  ]}
  activeTab="tab1"
  variant="horizontal"
  onTabChange={setActiveTab}
/>`}
                      </code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </GridItem>
          </Grid>
        </Section>
      )}

      {activeTab === 'vertical' && (
        <Section>
          <Grid cols={1} lgCols={2} gap="lg">
            <GridItem>
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>Vertical Tabs</CardTitle>
                  <CardDescription>Vertical tab layout for side navigation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <div className="w-48">
                      <Tabs
                        items={[
                          { id: 'vtab1', label: 'Profile', icon: '👤' },
                          { id: 'vtab2', label: 'Security', icon: '🔒' },
                          { id: 'vtab3', label: 'Notifications', icon: '🔔', badge: '3' },
                          { id: 'vtab4', label: 'Billing', icon: '💳' }
                        ]}
                        activeTab="vtab1"
                        variant="vertical"
                      />
                    </div>
                    <div className="flex-1 p-4 bg-current/10 rounded">
                      <Text>Vertical tab content area</Text>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </GridItem>

            <GridItem>
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>Code Example</CardTitle>
                  <CardDescription>Vertical tabs implementation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-black/50 rounded-lg p-4 border border-current/20">
                    <pre className="text-sm overflow-x-auto">
                      <code className="text-current">
{`<Tabs
  items={[
    { id: 'vtab1', label: 'Profile', icon: '👤' },
    { id: 'vtab2', label: 'Security', icon: '🔒' },
    { id: 'vtab3', label: 'Notifications', 
      icon: '🔔', badge: '3' }
  ]}
  activeTab="vtab1"
  variant="vertical"
/>`}
                      </code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </GridItem>
          </Grid>
        </Section>
      )}

      {activeTab === 'sidebar' && (
        <Section>
          <Grid cols={1} lgCols={2} gap="lg">
            <GridItem>
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>Sidebar Navigation</CardTitle>
                  <CardDescription>Collapsible sidebar with icons and badges</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border border-current/20 rounded-lg overflow-hidden" style={{ height: '400px' }}>
                    <div className="flex h-full">
                      <Sidebar
                        items={sidebarItems}
                        title="Demo Sidebar"
                        collapsible
                        defaultCollapsed={sidebarCollapsed}
                        onToggle={setSidebarCollapsed}
                        header={
                          <div className="p-4 border-b border-current/20">
                            <Badge variant="primary" size="sm">v1.0.0</Badge>
                          </div>
                        }
                        footer={
                          <div className="p-4 border-t border-current/20">
                            <Text size="xs" variant="muted">Footer content</Text>
                          </div>
                        }
                        className="border-r border-current/20"
                      />
                      <div className="flex-1 p-4 bg-current/5">
                        <Text>Main content area</Text>
                        <Text size="sm" variant="muted" className="mt-2">
                          Sidebar is {sidebarCollapsed ? 'collapsed' : 'expanded'}
                        </Text>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </GridItem>

            <GridItem>
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>Code Example</CardTitle>
                  <CardDescription>Sidebar implementation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-black/50 rounded-lg p-4 border border-current/20">
                    <pre className="text-sm overflow-x-auto">
                      <code className="text-current">
{`<Sidebar
  items={[
    { id: 'dashboard', label: 'Dashboard', 
      icon: '📊', active: true },
    { id: 'users', label: 'Users', 
      icon: '👥', badge: '12' },
    { id: 'settings', label: 'Settings', 
      icon: '⚙️' }
  ]}
  title="Navigation"
  collapsible
  onToggle={setCollapsed}
/>`}
                      </code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </GridItem>
          </Grid>
        </Section>
      )}

      {activeTab === 'breadcrumbs' && (
        <Section>
          <Grid cols={1} lgCols={2} gap="lg">
            <GridItem>
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>Breadcrumb Navigation</CardTitle>
                  <CardDescription>Hierarchical navigation trail</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Text weight="semibold" className="mb-2">Standard Breadcrumbs</Text>
                    <Breadcrumb items={breadcrumbItems} />
                  </div>
                  
                  <div>
                    <Text weight="semibold" className="mb-2">Simple Breadcrumbs</Text>
                    <Breadcrumb 
                      items={[
                        { label: 'Home' },
                        { label: 'Category' },
                        { label: 'Current' }
                      ]} 
                    />
                  </div>
                  
                  <div>
                    <Text weight="semibold" className="mb-2">Long Path Example</Text>
                    <Breadcrumb 
                      items={[
                        { label: 'Root', onClick: () => {} },
                        { label: 'Level 1', onClick: () => {} },
                        { label: 'Level 2', onClick: () => {} },
                        { label: 'Level 3', onClick: () => {} },
                        { label: 'Current Page' }
                      ]} 
                    />
                  </div>
                </CardContent>
              </Card>
            </GridItem>

            <GridItem>
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>Code Example</CardTitle>
                  <CardDescription>Breadcrumb implementation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-black/50 rounded-lg p-4 border border-current/20">
                    <pre className="text-sm overflow-x-auto">
                      <code className="text-current">
{`<Breadcrumb
  items={[
    { 
      label: 'Home', 
      onClick: () => navigate('/') 
    },
    { 
      label: 'Products', 
      onClick: () => navigate('/products') 
    },
    { 
      label: 'Current Page' 
    }
  ]}
/>`}
                      </code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </GridItem>
          </Grid>
        </Section>
      )}

      {/* Navigation Best Practices */}
      <Section className="mt-12">
        <Text as="h2" size="2xl" weight="bold" className="mb-6 text-center">
          <Glow intensity="medium">Navigation Best Practices</Glow>
        </Text>
        
        <Grid cols={1} mdCols={2} lgCols={3} gap="md">
          <GridItem>
            <Card variant="ghost">
              <CardHeader>
                <CardTitle size="md">🎯 Clear Hierarchy</CardTitle>
              </CardHeader>
              <CardContent>
                <Text size="sm" variant="muted">
                  Use consistent navigation patterns and clear visual hierarchy 
                  to help users understand their location and available actions.
                </Text>
              </CardContent>
            </Card>
          </GridItem>

          <GridItem>
            <Card variant="ghost">
              <CardHeader>
                <CardTitle size="md">📱 Responsive Design</CardTitle>
              </CardHeader>
              <CardContent>
                <Text size="sm" variant="muted">
                  Adapt navigation patterns for different screen sizes. 
                  Use collapsible sidebars and mobile-friendly tab layouts.
                </Text>
              </CardContent>
            </Card>
          </GridItem>

          <GridItem>
            <Card variant="ghost">
              <CardHeader>
                <CardTitle size="md">♿ Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <Text size="sm" variant="muted">
                  Ensure keyboard navigation, proper ARIA labels, and 
                  screen reader compatibility for all navigation components.
                </Text>
              </CardContent>
            </Card>
          </GridItem>
        </Grid>
      </Section>
    </Container>
  );
}
