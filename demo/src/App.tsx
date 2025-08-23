import { useState } from 'react';
import {
  ThemeProvider,
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
import { ComponentShowcase } from './components/ComponentShowcase';
import { KonamiDemo } from './components/KonamiDemo';
import { ThemeDemo } from './components/ThemeDemo';
import { InteractiveDemo } from './components/InteractiveDemo';

function AppContent() {
  const { mode, toggleTheme, isKonamiMode } = useTheme();
  const [activeTab, setActiveTab] = useState<'showcase' | 'theme' | 'konami' | 'interactive'>('showcase');

  return (
    <div className="min-h-screen bg-black text-current p-4 md:p-8">
      {/* Header */}
      <Card variant="elevated" className="mb-8">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle className="text-3xl md:text-4xl mb-2">
                Terminal UI Design System
              </CardTitle>
              <CardDescription>
                Interactive demo showcasing Matrix/TRON themes with Konami code integration
              </CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex items-center gap-2">
                <Text variant="muted" className="text-sm">
                  Current theme:
                </Text>
                <Text variant="accent" className="font-bold">
                  {mode.toUpperCase()}
                </Text>
              </div>
              <Button variant="secondary" onClick={toggleTheme}>
                Switch to {mode === 'matrix' ? 'TRON' : 'Matrix'}
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Konami Status */}
      {isKonamiMode && (
        <Card variant="elevated" className="mb-6 border-accent">
          <CardContent className="py-4">
            <Text variant="accent" className="text-center animate-pulse">
              🎮 KONAMI MODE ACTIVATED! Theme switching enabled via code sequence.
            </Text>
          </CardContent>
        </Card>
      )}

      {/* Navigation */}
      <Card className="mb-8">
        <CardContent className="py-4">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={activeTab === 'showcase' ? 'primary' : 'ghost'}
              onClick={() => setActiveTab('showcase')}
            >
              Component Showcase
            </Button>
            <Button
              variant={activeTab === 'theme' ? 'primary' : 'ghost'}
              onClick={() => setActiveTab('theme')}
            >
              Theme System
            </Button>
            <Button
              variant={activeTab === 'konami' ? 'primary' : 'ghost'}
              onClick={() => setActiveTab('konami')}
            >
              Konami Code
            </Button>
            <Button
              variant={activeTab === 'interactive' ? 'primary' : 'ghost'}
              onClick={() => setActiveTab('interactive')}
            >
              Interactive Demo
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Content */}
      <div className="space-y-8">
        {activeTab === 'showcase' && <ComponentShowcase />}
        {activeTab === 'theme' && <ThemeDemo />}
        {activeTab === 'konami' && <KonamiDemo />}
        {activeTab === 'interactive' && <InteractiveDemo />}
      </div>

      {/* Footer */}
      <Card className="mt-12">
        <CardContent className="py-6">
          <div className="text-center space-y-2">
            <Text variant="primary">
              Built with @jonmatum/terminal-ui design system
            </Text>
            <Text variant="muted" className="text-sm">
              All components in this demo are from the design system package
            </Text>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="matrix" enableKonami>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
