import React, { useState, useMemo } from 'react';
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
} from '@jonmatum/terminal-ui';
import { useFeatureFlags } from '../App';

// DRY approach - shared interfaces and constants
interface FeatureCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger';
}

const FEATURE_CATEGORIES: FeatureCategory[] = [
  { id: 'layout', name: 'Layout System', description: 'Responsive grids, containers, and sections', icon: '📐', color: 'primary' },
  { id: 'animation', name: 'Animations', description: 'Rich effects and transitions', icon: '✨', color: 'accent' },
  { id: 'theme', name: 'Theming', description: 'Matrix/TRON dual theme system', icon: '🎨', color: 'secondary' },
  { id: 'navigation', name: 'Navigation', description: 'Sidebars, tabs, and breadcrumbs', icon: '🧭', color: 'success' },
  { id: 'interaction', name: 'Interactions', description: 'User feedback and controls', icon: '🎮', color: 'warning' },
  { id: 'core', name: 'Core Features', description: 'TypeScript, accessibility, performance', icon: '🔷', color: 'danger' }
];

// Shared Components - DRY approach
const FeatureCard: React.FC<{
  flag: any;
  category: FeatureCategory;
  onToggle: (id: string) => void;
  index: number;
}> = ({ flag, category, onToggle, index }) => (
  <Animation type="fade-in" delay={index * 50} trigger="visible">
    <Card variant={flag.enabled ? 'elevated' : 'ghost'} className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant={flag.enabled ? 'success' : 'muted'} size="sm">
            {flag.enabled ? '✅ Enabled' : '⏸️ Disabled'}
          </Badge>
          <Badge variant={category.color} size="xs">
            {flag.category}
          </Badge>
        </div>
        <CardTitle size="md">{flag.name}</CardTitle>
        <CardDescription>{flag.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          variant={flag.enabled ? 'danger' : 'primary'}
          size="sm"
          onClick={() => onToggle(flag.id)}
          className="w-full"
        >
          {flag.enabled ? '🔴 Disable' : '🟢 Enable'}
        </Button>
      </CardContent>
    </Card>
  </Animation>
);

const CategoryOverview: React.FC<{
  categories: Array<FeatureCategory & { total: number; enabled: number }>;
  selectedCategory: string;
  onCategorySelect: (id: string) => void;
}> = ({ categories, selectedCategory, onCategorySelect }) => (
  <Section className="mb-8">
    <Text as="h2" size="2xl" weight="bold" className="mb-6 text-center">
      <Glow intensity="medium">Feature Categories</Glow>
    </Text>
    
    <Grid cols={1} mdCols={2} xlCols={3} gap="lg">
      {categories.map((category, index) => (
        <GridItem key={category.id}>
          <Animation type="slide-up" delay={index * 100} trigger="visible">
            <Card 
              variant="interactive"
              className={`h-full cursor-pointer transition-all duration-200 ${
                selectedCategory === category.id ? 'ring-2 ring-current' : ''
              }`}
              onClick={() => onCategorySelect(category.id)}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-3xl">{category.icon}</div>
                  <Badge variant={category.color} size="sm">
                    {category.enabled}/{category.total}
                  </Badge>
                </div>
                <CardTitle>{category.name}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full bg-current/20 rounded-full h-2">
                  <div 
                    className="bg-current h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(category.enabled / category.total) * 100}%` }}
                  />
                </div>
              </CardContent>
            </Card>
          </Animation>
        </GridItem>
      ))}
    </Grid>
  </Section>
);

const FeatureStats: React.FC<{
  totalFlags: number;
  enabledFlags: number;
  onEnableAll: () => void;
  onDisableAll: () => void;
  showOnlyEnabled: boolean;
  onToggleFilter: () => void;
}> = ({ totalFlags, enabledFlags, onEnableAll, onDisableAll, showOnlyEnabled, onToggleFilter }) => (
  <div className="text-center mb-8">
    <Animation type="scale-in" delay="medium">
      <div className="flex justify-center gap-4 mb-6">
        <Badge variant="primary" size="lg">
          {enabledFlags}/{totalFlags} Features Active
        </Badge>
        <Badge variant="success" size="lg">
          {Math.round((enabledFlags / totalFlags) * 100)}% Coverage
        </Badge>
        <Badge variant="accent" size="lg">
          {FEATURE_CATEGORIES.length} Categories
        </Badge>
      </div>
    </Animation>

    <div className="flex justify-center gap-4">
      <Button
        variant={showOnlyEnabled ? 'primary' : 'secondary'}
        onClick={onToggleFilter}
      >
        {showOnlyEnabled ? '✅ Showing Enabled' : '👁️ Show All'}
      </Button>
      
      <Button variant="secondary" onClick={onEnableAll}>
        🚀 Enable All
      </Button>
      
      <Button variant="ghost" onClick={onDisableAll}>
        🔄 Disable All
      </Button>
    </div>
  </div>
);

export function FeatureShowcase() {
  const { flags, toggleFlag, isEnabled, getStats } = useFeatureFlags();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showOnlyEnabled, setShowOnlyEnabled] = useState(false);

  // Memoized calculations - performance optimization
  const { filteredFlags, categoryStats, tabItems, stats } = useMemo(() => {
    const stats = getStats();
    
    const filteredFlags = flags.filter(flag => {
      const categoryMatch = selectedCategory === 'all' || flag.category === selectedCategory;
      const enabledMatch = !showOnlyEnabled || flag.enabled;
      return categoryMatch && enabledMatch;
    });

    const categoryStats = FEATURE_CATEGORIES.map(category => ({
      ...category,
      total: flags.filter(f => f.category === category.id).length,
      enabled: flags.filter(f => f.category === category.id && f.enabled).length
    }));

    const tabItems = [
      { id: 'all', label: 'All Features', badge: stats.total.toString() },
      ...FEATURE_CATEGORIES.map(category => ({
        id: category.id,
        label: category.name,
        badge: categoryStats.find(s => s.id === category.id)?.enabled.toString() || '0'
      }))
    ];

    return { filteredFlags, categoryStats, tabItems, stats };
  }, [flags, selectedCategory, showOnlyEnabled, getStats]);

  // Event handlers - DRY approach
  const handleEnableAll = () => {
    flags.forEach(flag => !flag.enabled && toggleFlag(flag.id));
  };

  const handleDisableAll = () => {
    flags.forEach(flag => flag.enabled && toggleFlag(flag.id));
  };

  return (
    <Container size="full">
      {/* Header Section - using package components 100% */}
      <Section className="mb-8">
        <div className="text-center mb-8">
          <Animation type="fade-in" duration="slow">
            <Glow intensity="high" pulse>
              <Text as="h1" size="4xl" weight="extrabold" className="mb-4">
                🎛️ Feature Showcase
              </Text>
            </Glow>
          </Animation>
          
          <Animation type="slide-up" delay="short">
            <Text as="p" size="lg" variant="secondary" className="max-w-3xl mx-auto mb-6">
              Interactive demonstration of all design system capabilities. Toggle features 
              on/off to see their impact in real-time across the entire showcase.
            </Text>
          </Animation>

          {/* Feature Stats - using shared component */}
          <FeatureStats
            totalFlags={stats.total}
            enabledFlags={stats.enabled}
            onEnableAll={handleEnableAll}
            onDisableAll={handleDisableAll}
            showOnlyEnabled={showOnlyEnabled}
            onToggleFilter={() => setShowOnlyEnabled(!showOnlyEnabled)}
          />
        </div>
      </Section>

      {/* Category Overview - using shared component */}
      <CategoryOverview
        categories={categoryStats}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />

      {/* Feature Tabs - using package component 100% */}
      <Section>
        <Tabs
          items={tabItems}
          activeTab={selectedCategory}
          onTabChange={setSelectedCategory}
          variant="horizontal"
          className="mb-6"
        />

        {/* Feature Grid - using shared component */}
        <Grid cols={1} mdCols={2} xlCols={3} gap="md">
          {filteredFlags.map((flag, index) => (
            <GridItem key={flag.id}>
              <FeatureCard
                flag={flag}
                category={FEATURE_CATEGORIES.find(c => c.id === flag.category)!}
                onToggle={toggleFlag}
                index={index}
              />
            </GridItem>
          ))}
        </Grid>

        {/* Empty State - using package components 100% */}
        {filteredFlags.length === 0 && (
          <div className="text-center py-12">
            <Text variant="muted" size="lg">
              No features found for the selected filters.
            </Text>
            <Button 
              variant="secondary" 
              className="mt-4"
              onClick={() => {
                setSelectedCategory('all');
                setShowOnlyEnabled(false);
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </Section>

      {/* Live Preview Section - using package components 100% */}
      <Section className="mt-12">
        <Text as="h2" size="2xl" weight="bold" className="mb-6 text-center">
          <Glow intensity="medium">Live Feature Preview</Glow>
        </Text>
        
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Real-time Feature Impact</CardTitle>
            <CardDescription>
              See how enabled features affect the showcase in real-time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Grid cols={2} mdCols={4} gap="md">
              {[
                { name: 'Background Effects', enabled: isEnabled('matrix-rain') || isEnabled('particle-system') },
                { name: 'Animations', enabled: isEnabled('typewriter-effect') },
                { name: 'Navigation', enabled: isEnabled('sidebar-nav') },
                { name: 'Konami Code', enabled: isEnabled('konami-switching') }
              ].map(feature => (
                <div key={feature.name} className="text-center">
                  <Text variant="muted" size="sm">{feature.name}</Text>
                  <Text weight="bold">
                    {feature.enabled ? '✅ Active' : '❌ Inactive'}
                  </Text>
                </div>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Section>
    </Container>
  );
}
