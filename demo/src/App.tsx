import React, { useState, useMemo } from 'react';
import {
  ThemeProvider,
  useTheme,
  useKonami,
  // Layout Components - using 100% from package
  Container,
  Grid,
  GridItem,
  Section,
  HeroSection,
  FeatureSection,
  ContentSection,
  // Navigation Components - using 100% from package
  Tabs,
  Sidebar,
  Breadcrumb,
  // Animation Components - using 100% from package
  Animation,
  Typewriter,
  Glow,
  ParticleBackground,
  MatrixRain,
  // Core Components - using 100% from package
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  Text,
  Badge,
  Link,
} from '@jonmatum/terminal-ui';

// Showcase Components - DRY approach with shared interfaces
import { FeatureShowcase } from './components/FeatureShowcase';
import { ComponentGallery } from './components/ComponentGallery';
import { ThemePlayground } from './components/ThemePlayground';
import { AnimationStudio } from './components/AnimationStudio';
import { LayoutBuilder } from './components/LayoutBuilder';
import { NavigationDemo } from './components/NavigationDemo';
import { InteractiveFeatures } from './components/InteractiveFeatures';
import { CodeExamples } from './components/CodeExamples';

// Shared Types and Interfaces - DRY approach
interface FeatureFlag {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  category: 'layout' | 'animation' | 'theme' | 'navigation' | 'interaction' | 'core';
  impact: 'visual' | 'functional' | 'performance';
}

interface ShowcaseSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  component: React.ComponentType;
  features: string[];
  category: 'overview' | 'components' | 'theming' | 'layout' | 'interaction';
}

// Configuration - DRY approach using constants
const FEATURE_FLAGS: FeatureFlag[] = [
  // Layout Features
  { id: 'responsive-grid', name: 'Responsive Grid System', description: '12-column responsive grid with breakpoints', enabled: true, category: 'layout', impact: 'visual' },
  { id: 'container-system', name: 'Container System', description: 'Responsive containers with size variants', enabled: true, category: 'layout', impact: 'visual' },
  { id: 'section-presets', name: 'Section Presets', description: 'Hero, Feature, Content section templates', enabled: true, category: 'layout', impact: 'visual' },
  
  // Animation Features
  { id: 'typewriter-effect', name: 'Typewriter Effect', description: 'Animated text typing with cursor', enabled: true, category: 'animation', impact: 'visual' },
  { id: 'matrix-rain', name: 'Matrix Rain', description: 'Falling character animation background', enabled: true, category: 'animation', impact: 'performance' },
  { id: 'particle-system', name: 'Particle System', description: 'Floating particle background effects', enabled: true, category: 'animation', impact: 'performance' },
  { id: 'glow-effects', name: 'Glow Effects', description: 'Pulsing glow animations', enabled: true, category: 'animation', impact: 'visual' },
  { id: 'transition-animations', name: 'Transition Animations', description: 'Fade, slide, scale, and bounce effects', enabled: true, category: 'animation', impact: 'visual' },
  
  // Theme Features
  { id: 'dual-themes', name: 'Dual Theme System', description: 'Matrix (green) and TRON (cyan) themes', enabled: true, category: 'theme', impact: 'visual' },
  { id: 'konami-switching', name: 'Konami Code Switching', description: 'Theme switching via Konami code', enabled: true, category: 'theme', impact: 'functional' },
  { id: 'css-variables', name: 'CSS Variables', description: 'Dynamic theme variables', enabled: true, category: 'theme', impact: 'functional' },
  { id: 'theme-gradients', name: 'Theme Gradients', description: 'Gradient color schemes', enabled: true, category: 'theme', impact: 'visual' },
  
  // Navigation Features
  { id: 'sidebar-nav', name: 'Sidebar Navigation', description: 'Collapsible sidebar with icons', enabled: true, category: 'navigation', impact: 'functional' },
  { id: 'tab-system', name: 'Tab System', description: 'Horizontal and vertical tabs', enabled: true, category: 'navigation', impact: 'functional' },
  { id: 'breadcrumbs', name: 'Breadcrumbs', description: 'Navigation breadcrumb trails', enabled: true, category: 'navigation', impact: 'functional' },
  
  // Interaction Features
  { id: 'hover-effects', name: 'Hover Effects', description: 'Interactive hover states', enabled: true, category: 'interaction', impact: 'visual' },
  { id: 'keyboard-shortcuts', name: 'Keyboard Shortcuts', description: 'Keyboard navigation support', enabled: true, category: 'interaction', impact: 'functional' },
  
  // Core Features
  { id: 'typescript-support', name: 'TypeScript Support', description: 'Full type definitions and IntelliSense', enabled: true, category: 'core', impact: 'functional' },
  { id: 'accessibility', name: 'Accessibility', description: 'WCAG compliant components', enabled: true, category: 'core', impact: 'functional' },
  { id: 'tree-shaking', name: 'Tree Shaking', description: 'Optimized bundle size', enabled: true, category: 'core', impact: 'performance' },
];

const SHOWCASE_SECTIONS: ShowcaseSection[] = [
  {
    id: 'overview',
    title: 'Feature Overview',
    description: 'Interactive feature flags and capabilities showcase',
    icon: '🎛️',
    component: FeatureShowcase,
    features: ['feature-flags', 'live-preview', 'interactive-controls'],
    category: 'overview'
  },
  {
    id: 'components',
    title: 'Component Gallery',
    description: 'All components with live examples and code',
    icon: '🧩',
    component: ComponentGallery,
    features: ['all-components', 'live-examples', 'code-snippets'],
    category: 'components'
  },
  {
    id: 'themes',
    title: 'Theme Playground',
    description: 'Theme switching and customization',
    icon: '🎨',
    component: ThemePlayground,
    features: ['theme-switching', 'konami-code', 'color-palettes'],
    category: 'theming'
  },
  {
    id: 'animations',
    title: 'Animation Studio',
    description: 'Animation effects and configurations',
    icon: '✨',
    component: AnimationStudio,
    features: ['animation-presets', 'timing-controls', 'effect-combinations'],
    category: 'interaction'
  },
  {
    id: 'layouts',
    title: 'Layout Builder',
    description: 'Grid system and layout components',
    icon: '📐',
    component: LayoutBuilder,
    features: ['responsive-grid', 'container-system', 'section-presets'],
    category: 'layout'
  },
  {
    id: 'navigation',
    title: 'Navigation Patterns',
    description: 'Navigation components and patterns',
    icon: '🧭',
    component: NavigationDemo,
    features: ['sidebar-nav', 'tab-system', 'breadcrumbs'],
    category: 'interaction'
  },
  {
    id: 'interactions',
    title: 'Interactive Features',
    description: 'User interactions and feedback',
    icon: '🎮',
    component: InteractiveFeatures,
    features: ['hover-effects', 'keyboard-shortcuts', 'feedback-systems'],
    category: 'interaction'
  },
  {
    id: 'code',
    title: 'Code Examples',
    description: 'Implementation examples and best practices',
    icon: '💻',
    component: CodeExamples,
    features: ['typescript-examples', 'best-practices', 'integration-guides'],
    category: 'components'
  }
];

// Feature Flag Context - DRY approach for state management
const FeatureFlagContext = React.createContext<{
  flags: FeatureFlag[];
  toggleFlag: (id: string) => void;
  isEnabled: (id: string) => boolean;
  getEnabledByCategory: (category: string) => FeatureFlag[];
  getStats: () => { total: number; enabled: number; byCategory: Record<string, number> };
}>({
  flags: FEATURE_FLAGS,
  toggleFlag: () => {},
  isEnabled: () => true,
  getEnabledByCategory: () => [],
  getStats: () => ({ total: 0, enabled: 0, byCategory: {} }),
});

export const useFeatureFlags = () => React.useContext(FeatureFlagContext);

// Shared Components - DRY approach
const ShowcaseHeader: React.FC<{ 
  section: ShowcaseSection; 
  stats: { total: number; enabled: number }; 
}> = ({ section, stats }) => (
  <header className="border-b border-current/20 backdrop-blur-sm bg-black/50 p-6">
    <Container size="full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <Glow intensity="medium">
            <Text as="h1" size="2xl" weight="bold" className="flex items-center gap-3">
              <span className="text-3xl">{section.icon}</span>
              <Typewriter 
                text={section.title}
                speed={50}
                cursor
              />
            </Text>
          </Glow>
          <Text variant="secondary" className="mt-2">
            {section.description}
          </Text>
        </div>
        
        <div className="flex items-center gap-4">
          <Badge variant="primary" size="lg">
            {section.features.length} Features
          </Badge>
          <Badge variant="success" size="lg">
            {stats.enabled}/{stats.total} Active
          </Badge>
        </div>
      </div>
    </Container>
  </header>
);

const ShowcaseFooter: React.FC = () => (
  <footer className="border-t border-current/20 backdrop-blur-sm bg-black/50 p-6">
    <Container size="full">
      <Grid cols={1} mdCols={3} gap="md" className="items-center">
        <GridItem>
          <Text variant="muted" size="sm">
            @jonmatum/terminal-ui Design System
          </Text>
          <Text variant="muted" size="xs">
            Built with React, TypeScript, and Tailwind CSS
          </Text>
        </GridItem>
        
        <GridItem className="text-center">
          <div className="flex justify-center gap-4">
            <Link href="https://github.com/jonmatum/terminal-ui" variant="secondary" external>
              🐙 GitHub
            </Link>
            <Link href="https://npmjs.com/package/@jonmatum/terminal-ui" variant="secondary" external>
              📦 NPM
            </Link>
          </div>
        </GridItem>
        
        <GridItem className="text-right">
          <Button variant="ghost" size="sm">
            ⭐ Star on GitHub
          </Button>
        </GridItem>
      </Grid>
    </Container>
  </footer>
);

// Main Showcase App - Leveraging package 100%
function ShowcaseApp() {
  const { mode } = useTheme();
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [featureFlags, setFeatureFlags] = useState(FEATURE_FLAGS);
  
  // Konami code integration - using package hook 100%
  const { isActive: konamiActive, progress } = useKonami({
    onActivate: () => console.log('🎮 Konami code activated! Theme switching enabled!'),
    onDeactivate: () => console.log('🔄 Konami code deactivated'),
  });

  // Feature flag management - DRY approach
  const featureFlagUtils = useMemo(() => ({
    toggleFlag: (id: string) => {
      setFeatureFlags(prev => prev.map(flag => 
        flag.id === id ? { ...flag, enabled: !flag.enabled } : flag
      ));
    },
    isEnabled: (id: string) => featureFlags.find(f => f.id === id)?.enabled ?? true,
    getEnabledByCategory: (category: string) => 
      featureFlags.filter(f => f.category === category && f.enabled),
    getStats: () => {
      const total = featureFlags.length;
      const enabled = featureFlags.filter(f => f.enabled).length;
      const byCategory = featureFlags.reduce((acc, flag) => {
        acc[flag.category] = (acc[flag.category] || 0) + (flag.enabled ? 1 : 0);
        return acc;
      }, {} as Record<string, number>);
      return { total, enabled, byCategory };
    }
  }), [featureFlags]);

  const currentSection = SHOWCASE_SECTIONS.find(section => section.id === activeSection);
  const CurrentSectionComponent = currentSection?.component || FeatureShowcase;
  const stats = featureFlagUtils.getStats();

  // Navigation items - using package components 100%
  const navItems = SHOWCASE_SECTIONS.map(section => ({
    id: section.id,
    label: section.title,
    icon: section.icon,
    active: activeSection === section.id,
    onClick: () => setActiveSection(section.id),
    badge: section.features.length.toString()
  }));

  // Breadcrumb items - using package components 100%
  const breadcrumbItems = [
    { label: 'Terminal UI', onClick: () => setActiveSection('overview') },
    { label: 'Design System Showcase', onClick: () => setActiveSection('overview') },
    { label: currentSection?.title || 'Feature Overview' }
  ];

  return (
    <FeatureFlagContext.Provider value={{ flags: featureFlags, ...featureFlagUtils }}>
      <div className="min-h-screen bg-background text-current relative overflow-hidden">
        {/* Dynamic Background Effects - using package components 100% */}
        {featureFlagUtils.isEnabled('matrix-rain') && mode === 'matrix' && (
          <MatrixRain 
            density="low" 
            speed="slow" 
            className="fixed inset-0 z-0 opacity-30" 
          />
        )}
        {featureFlagUtils.isEnabled('particle-system') && mode === 'tron' && (
          <ParticleBackground 
            count={40} 
            speed="medium" 
            size="small"
            className="fixed inset-0 z-0 opacity-20"
          />
        )}

        {/* Main Layout - using package components 100% */}
        <div className="relative z-10 flex min-h-screen">
          {/* Enhanced Sidebar - using package component 100% */}
          {featureFlagUtils.isEnabled('sidebar-nav') && (
            <Sidebar
              items={navItems}
              title="Design System Showcase"
              collapsible
              defaultCollapsed={sidebarCollapsed}
              onToggle={setSidebarCollapsed}
              header={
                <div className="p-4 border-b border-current/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="primary" size="sm">v1.0.0</Badge>
                    <Badge variant={mode === 'tron' ? 'accent' : 'secondary'} size="sm">
                      {mode === 'tron' ? '🎮 TRON' : '🔋 Matrix'}
                    </Badge>
                  </div>
                  <Text variant="muted" size="xs">
                    {stats.enabled}/{stats.total} features enabled
                  </Text>
                </div>
              }
              footer={
                <div className="p-4 border-t border-current/20 space-y-2">
                  <Text variant="muted" size="xs">
                    💡 Try Konami code: ↑↑↓↓←→←→BA
                  </Text>
                  {konamiActive && (
                    <Badge variant="success" size="sm" className="w-full justify-center">
                      🎮 Konami Active!
                    </Badge>
                  )}
                  {progress > 0 && progress < 1 && (
                    <div className="w-full bg-current/20 rounded-full h-1">
                      <div 
                        className="bg-current h-1 rounded-full transition-all duration-200"
                        style={{ width: `${progress * 100}%` }}
                      />
                    </div>
                  )}
                </div>
              }
              className="border-r border-current/20 backdrop-blur-sm bg-black/50"
            />
          )}

          {/* Main Content */}
          <main className="flex-1 flex flex-col">
            {/* Header - using shared component */}
            <ShowcaseHeader section={currentSection!} stats={stats} />

            {/* Breadcrumbs - using package component 100% */}
            {featureFlagUtils.isEnabled('breadcrumbs') && (
              <div className="px-6 py-3 border-b border-current/10">
                <Breadcrumb items={breadcrumbItems} />
              </div>
            )}

            {/* Feature Status Bar - using package components 100% */}
            <Section className="bg-current/5 border-b border-current/10">
              <Container size="full">
                <Grid cols={1} mdCols={2} gap="md" className="items-center">
                  <GridItem>
                    <div className="flex items-center gap-4">
                      <Text variant="muted" size="sm">Active Features:</Text>
                      <div className="flex gap-2">
                        {currentSection?.features.slice(0, 3).map(feature => (
                          <Badge 
                            key={feature} 
                            variant={featureFlagUtils.isEnabled(feature) ? 'success' : 'muted'} 
                            size="xs"
                          >
                            {feature.replace('-', ' ')}
                          </Badge>
                        ))}
                        {currentSection && currentSection.features.length > 3 && (
                          <Badge variant="muted" size="xs">
                            +{currentSection.features.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </GridItem>
                  
                  <GridItem className="text-right">
                    <Badge variant={mode === 'tron' ? 'accent' : 'primary'} size="sm">
                      {mode === 'tron' ? 'TRON Theme' : 'Matrix Theme'}
                    </Badge>
                  </GridItem>
                </Grid>
              </Container>
            </Section>

            {/* Page Content - using package Animation component 100% */}
            <div className="flex-1 p-6">
              <Animation type="fade-in" duration="normal" trigger="immediate">
                <CurrentSectionComponent />
              </Animation>
            </div>

            {/* Footer - using shared component */}
            <ShowcaseFooter />
          </main>
        </div>
      </div>
    </FeatureFlagContext.Provider>
  );
}

// Root App Component - using package ThemeProvider 100%
function App() {
  return (
    <ThemeProvider defaultTheme="matrix" enableKonami>
      <ShowcaseApp />
    </ThemeProvider>
  );
}

export default App;
