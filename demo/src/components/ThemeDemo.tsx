import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Text,
  useTheme,
} from '@jonmatum/terminal-ui';

export function ThemeDemo() {
  const { mode, toggleTheme, theme } = useTheme();

  return (
    <div className="space-y-8">
      {/* Current Theme Info */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Current Theme: {mode.toUpperCase()}</CardTitle>
          <CardDescription>
            Active theme configuration and color palette
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Theme Colors */}
          <div>
            <Text variant="accent" className="mb-4 block text-lg">
              Color Palette
            </Text>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div 
                  className="w-full h-12 rounded border-2 border-current"
                  style={{ backgroundColor: theme.colors.primary }}
                />
                <Text variant="muted" className="text-sm">Primary</Text>
                <Text variant="primary" className="text-xs font-mono">
                  {theme.colors.primary}
                </Text>
              </div>
              
              <div className="space-y-2">
                <div 
                  className="w-full h-12 rounded border-2 border-current"
                  style={{ backgroundColor: theme.colors.secondary }}
                />
                <Text variant="muted" className="text-sm">Secondary</Text>
                <Text variant="primary" className="text-xs font-mono">
                  {theme.colors.secondary}
                </Text>
              </div>
              
              <div className="space-y-2">
                <div 
                  className="w-full h-12 rounded border-2 border-current"
                  style={{ backgroundColor: theme.colors.accent }}
                />
                <Text variant="muted" className="text-sm">Accent</Text>
                <Text variant="primary" className="text-xs font-mono">
                  {theme.colors.accent}
                </Text>
              </div>
              
              <div className="space-y-2">
                <div 
                  className="w-full h-12 rounded border-2 border-current"
                  style={{ backgroundColor: theme.colors.background }}
                />
                <Text variant="muted" className="text-sm">Background</Text>
                <Text variant="primary" className="text-xs font-mono">
                  {theme.colors.background}
                </Text>
              </div>
            </div>
          </div>

          {/* Theme Effects */}
          <div>
            <Text variant="accent" className="mb-4 block text-lg">
              Theme Effects
            </Text>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card variant="default">
                <CardContent className="py-4">
                  <Text variant="primary" className="font-bold mb-2">
                    Glow Effects
                  </Text>
                  <Text variant="secondary" className="text-sm">
                    {theme.effects.glow ? 'Enabled' : 'Disabled'}
                  </Text>
                </CardContent>
              </Card>
              
              <Card variant="default">
                <CardContent className="py-4">
                  <Text variant="primary" className="font-bold mb-2">
                    Particles
                  </Text>
                  <Text variant="secondary" className="text-sm">
                    {theme.effects.particles ? 'Enabled' : 'Disabled'}
                  </Text>
                </CardContent>
              </Card>
              
              <Card variant="default">
                <CardContent className="py-4">
                  <Text variant="primary" className="font-bold mb-2">
                    Scanlines
                  </Text>
                  <Text variant="secondary" className="text-sm">
                    {theme.effects.scanlines ? 'Enabled' : 'Disabled'}
                  </Text>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Animation Settings */}
          <div>
            <Text variant="accent" className="mb-4 block text-lg">
              Animation Configuration
            </Text>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card variant="default">
                <CardContent className="py-4">
                  <Text variant="primary" className="font-bold mb-2">
                    Duration
                  </Text>
                  <Text variant="secondary" className="font-mono">
                    {theme.animations.duration}
                  </Text>
                </CardContent>
              </Card>
              
              <Card variant="default">
                <CardContent className="py-4">
                  <Text variant="primary" className="font-bold mb-2">
                    Easing
                  </Text>
                  <Text variant="secondary" className="font-mono text-xs">
                    {theme.animations.easing}
                  </Text>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Theme Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Theme Comparison</CardTitle>
          <CardDescription>
            Visual differences between Matrix and TRON themes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Matrix Theme Preview */}
            <div className="space-y-3">
              <Text variant="accent" className="text-lg">
                Matrix Theme
              </Text>
              <div className="p-4 rounded border-2" style={{ 
                borderColor: '#00ff41', 
                backgroundColor: '#000000',
                color: '#00ff41'
              }}>
                <div className="space-y-2">
                  <div className="text-lg font-bold">Terminal Interface</div>
                  <div className="text-sm opacity-70">Green monochrome aesthetic</div>
                  <div className="flex gap-2 mt-3">
                    <div className="px-3 py-1 border border-current text-xs">
                      Primary
                    </div>
                    <div className="px-3 py-1 border border-current text-xs opacity-70">
                      Secondary
                    </div>
                  </div>
                </div>
              </div>
              <Text variant="muted" className="text-sm">
                Classic hacker aesthetic with green glow effects and scanlines
              </Text>
            </div>

            {/* TRON Theme Preview */}
            <div className="space-y-3">
              <Text variant="accent" className="text-lg">
                TRON Theme
              </Text>
              <div className="p-4 rounded border-2" style={{ 
                borderColor: '#00ffff', 
                backgroundColor: '#0a0a0a',
                color: '#00ffff'
              }}>
                <div className="space-y-2">
                  <div className="text-lg font-bold">Digital Grid</div>
                  <div className="text-sm" style={{ color: '#0080ff' }}>
                    Cyan and orange futuristic design
                  </div>
                  <div className="flex gap-2 mt-3">
                    <div className="px-3 py-1 border text-xs" style={{ borderColor: '#00ffff' }}>
                      Primary
                    </div>
                    <div className="px-3 py-1 border text-xs" style={{ 
                      borderColor: '#ff8000', 
                      color: '#ff8000' 
                    }}>
                      Accent
                    </div>
                  </div>
                </div>
              </div>
              <Text variant="muted" className="text-sm">
                Futuristic design with cyan primary and orange accent colors
              </Text>
            </div>
          </div>

          <div className="text-center pt-4">
            <Button variant="primary" size="lg" onClick={toggleTheme}>
              Switch to {mode === 'matrix' ? 'TRON' : 'Matrix'} Theme
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
