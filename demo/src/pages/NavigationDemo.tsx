import React, { useState } from 'react';
import {
  Navigation,
  Tabs,
  Sidebar,
  Breadcrumb,
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
  Animation,
  Glow,
  useTheme,
} from '@jonmatum/terminal-ui';

export function NavigationDemo() {
  const { mode } = useTheme();
  const [activeNavItem, setActiveNavItem] = useState('home');
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Sample navigation items
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'projects', label: 'Projects', icon: '📁', badge: '3' },
    { 
      id: 'tools', 
      label: 'Tools', 
      icon: '🔧',
      children: [
        { id: 'editor', label: 'Code Editor' },
        { id: 'terminal', label: 'Terminal' },
        { id: 'debugger', label: 'Debugger' }
      ]
    },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
    { id: 'help', label: 'Help', icon: '❓', disabled: true }
  ];

  // Sample tab items
  const tabItems = [
    { 
      id: 'overview', 
      label: 'Overview', 
      icon: '👁️',
      content: (
        <Card variant="default">
          <CardContent className="py-6">
            <Text variant="primary" size="lg" weight="semibold" className="mb-3">
              Overview Content
            </Text>
            <Text variant="secondary">
              This is the overview tab content. It provides a general summary 
              of the current section or feature being displayed.
            </Text>
          </CardContent>
        </Card>
      )
    },
    { 
      id: 'details', 
      label: 'Details', 
      icon: '📋',
      badge: '5',
      content: (
        <Card variant="default">
          <CardContent className="py-6">
            <Text variant="primary" size="lg" weight="semibold" className="mb-3">
              Detailed Information
            </Text>
            <Text variant="secondary">
              This tab contains detailed information and specifications. 
              The badge indicates there are 5 items in this section.
            </Text>
          </CardContent>
        </Card>
      )
    },
    { 
      id: 'analytics', 
      label: 'Analytics', 
      icon: '📊',
      content: (
        <Card variant="default">
          <CardContent className="py-6">
            <Text variant="primary" size="lg" weight="semibold" className="mb-3">
              Analytics Dashboard
            </Text>
            <Text variant="secondary">
              Analytics and metrics would be displayed here with charts 
              and performance indicators.
            </Text>
          </CardContent>
        </Card>
      )
    },
    { 
      id: 'settings', 
      label: 'Settings', 
      icon: '⚙️',
      disabled: true,
      content: null
    }
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="mb-8">
        <Text as="h1" size="4xl" weight="bold" className="mb-4">
          <Glow intensity={mode === 'tron' ? 'high' : 'medium'}>
            Navigation System
          </Glow>
        </Text>
        <Text variant="secondary" size="lg">
          Comprehensive navigation components including sidebars, tabs, breadcrumbs, and menus.
        </Text>
      </div>

      {/* Horizontal Navigation */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Horizontal Navigation</CardTitle>
          <CardDescription>
            Standard horizontal navigation bar with dropdown support
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Text variant="accent" weight="semibold" className="mb-3">
              Basic Horizontal Navigation
            </Text>
            <Navigation
              items={navItems}
              variant="horizontal"
              alignment="start"
              activeId={activeNavItem}
              onItemClick={(item) => setActiveNavItem(item.id)}
            />
          </div>

          <div>
            <Text variant="accent" weight="semibold" className="mb-3">
              Centered Navigation
            </Text>
            <Navigation
              items={navItems.slice(0, 3)}
              variant="horizontal"
              alignment="center"
              activeId={activeNavItem}
              onItemClick={(item) => setActiveNavItem(item.id)}
            />
          </div>

          <div>
            <Text variant="muted" size="sm">
              Active item: <Badge variant="primary" size="sm">{activeNavItem}</Badge>
            </Text>
          </div>
        </CardContent>
      </Card>

      {/* Breadcrumb Navigation */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Breadcrumb Navigation</CardTitle>
          <CardDescription>
            Hierarchical navigation showing the current page location
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Text variant="accent" weight="semibold" className="mb-3">
              Basic Breadcrumb
            </Text>
            <Breadcrumb items={[
              { label: 'Home', onClick: () => console.log('Navigate to Home') },
              { label: 'Components', onClick: () => console.log('Navigate to Components') },
              { label: 'Navigation' }
            ]} />
          </div>

          <div>
            <Text variant="accent" weight="semibold" className="mb-3">
              Deep Navigation Path
            </Text>
            <Breadcrumb items={[
              { label: 'Terminal UI' },
              { label: 'Demo' },
              { label: 'Navigation' },
              { label: 'Components' },
              { label: 'Breadcrumb' }
            ]} />
          </div>

          <div>
            <Text variant="accent" weight="semibold" className="mb-3">
              With Custom Separator
            </Text>
            <Breadcrumb 
              items={[
                { label: 'Root' },
                { label: 'System' },
                { label: 'Navigation' }
              ]}
              separator={<span className="text-current/50 mx-2">|</span>}
            />
          </div>
        </CardContent>
      </Card>

      {/* Tab Navigation */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Tab Navigation</CardTitle>
          <CardDescription>
            Tabbed interface with content management and various styles
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Text variant="accent" weight="semibold" className="mb-3">
              Default Tabs with Content
            </Text>
            <Tabs
              items={tabItems}
              activeId={activeTab}
              onTabChange={setActiveTab}
              variant="default"
            />
          </div>

          <div>
            <Text variant="accent" weight="semibold" className="mb-3">
              Pills Style Tabs
            </Text>
            <Tabs
              items={tabItems.slice(0, 3)}
              variant="pills"
              onTabChange={(tabId) => console.log('Pills tab:', tabId)}
            />
          </div>

          <div>
            <Text variant="accent" weight="semibold" className="mb-3">
              Underline Style Tabs
            </Text>
            <Tabs
              items={tabItems.slice(0, 3)}
              variant="underline"
              onTabChange={(tabId) => console.log('Underline tab:', tabId)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Sidebar Navigation Demo */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Sidebar Navigation</CardTitle>
          <CardDescription>
            Collapsible sidebar with title, navigation items, and footer
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Text variant="accent" weight="semibold">
                Sidebar Demo
              </Text>
              <Button 
                variant="secondary" 
                size="sm"
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              >
                {sidebarCollapsed ? 'Expand' : 'Collapse'} Sidebar
              </Button>
            </div>

            <div className="border border-current/20 rounded-lg overflow-hidden">
              <div className="flex h-96">
                <Sidebar
                  items={navItems}
                  title="Terminal UI"
                  collapsible
                  defaultCollapsed={sidebarCollapsed}
                  onToggle={setSidebarCollapsed}
                  footer={
                    <div className="space-y-2">
                      <Text variant="muted" size="xs">Version 1.0.0</Text>
                      <Text variant="muted" size="xs">
                        {mode === 'tron' ? '🎮 TRON Mode' : '🔋 Matrix Mode'}
                      </Text>
                    </div>
                  }
                />
                
                <div className="flex-1 p-6 bg-current/5">
                  <Animation type="fade-in" trigger="immediate">
                    <Text variant="primary" size="lg" weight="semibold" className="mb-3">
                      Main Content Area
                    </Text>
                    <Text variant="secondary">
                      This is the main content area next to the sidebar. 
                      The sidebar can be collapsed to save space and expanded 
                      when needed.
                    </Text>
                  </Animation>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Vertical Navigation */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Vertical Navigation</CardTitle>
          <CardDescription>
            Vertical navigation layout for compact spaces
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Grid cols={1} mdCols={2} gap="lg">
            <GridItem>
              <Text variant="accent" weight="semibold" className="mb-3">
                Vertical Menu
              </Text>
              <div className="border border-current/20 rounded-lg p-4">
                <Navigation
                  items={navItems}
                  variant="vertical"
                  activeId={activeNavItem}
                  onItemClick={(item) => setActiveNavItem(item.id)}
                />
              </div>
            </GridItem>

            <GridItem>
              <Text variant="accent" weight="semibold" className="mb-3">
                Compact Vertical Menu
              </Text>
              <div className="border border-current/20 rounded-lg p-4">
                <Navigation
                  items={navItems.slice(0, 4)}
                  variant="vertical"
                  size="sm"
                  activeId={activeNavItem}
                  onItemClick={(item) => setActiveNavItem(item.id)}
                />
              </div>
            </GridItem>
          </Grid>
        </CardContent>
      </Card>

      {/* Navigation Features */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Navigation Features</CardTitle>
          <CardDescription>
            Advanced features like badges, icons, disabled states, and nested items
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Text variant="accent" weight="semibold" className="mb-3">
              Feature Showcase
            </Text>
            <Grid cols={1} mdCols={2} gap="md">
              <GridItem>
                <Card variant="default">
                  <CardHeader>
                    <CardTitle size="sm">Icons & Badges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Text variant="secondary" size="sm">
                      Navigation items can include icons and badges to show 
                      status, counts, or visual indicators.
                    </Text>
                  </CardContent>
                </Card>
              </GridItem>

              <GridItem>
                <Card variant="default">
                  <CardHeader>
                    <CardTitle size="sm">Disabled States</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Text variant="secondary" size="sm">
                      Items can be disabled to prevent interaction while 
                      maintaining visual context.
                    </Text>
                  </CardContent>
                </Card>
              </GridItem>

              <GridItem>
                <Card variant="default">
                  <CardHeader>
                    <CardTitle size="sm">Nested Menus</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Text variant="secondary" size="sm">
                      Support for dropdown menus and hierarchical navigation 
                      structures.
                    </Text>
                  </CardContent>
                </Card>
              </GridItem>

              <GridItem>
                <Card variant="default">
                  <CardHeader>
                    <CardTitle size="sm">Theme Aware</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Text variant="secondary" size="sm">
                      All navigation components automatically adapt to the 
                      current theme (Matrix/TRON).
                    </Text>
                  </CardContent>
                </Card>
              </GridItem>
            </Grid>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
