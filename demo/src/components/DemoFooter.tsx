import React from 'react';
import {
  Card,
  CardContent,
  Text,
  Link,
  Badge,
  useTheme,
} from '@jonmatum/terminal-ui';

export function DemoFooter() {
  const { mode } = useTheme();

  return (
    <div className="border-t border-current/20 bg-black/50 backdrop-blur-sm mt-auto">
      <div className="px-6 py-6">
        <Card variant="ghost">
          <CardContent className="py-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="space-y-2">
                <Text variant="primary" weight="semibold">
                  @jonmatum/terminal-ui Design System
                </Text>
                <Text variant="muted" size="sm">
                  Enhanced demo showcasing all capabilities: layout system, animations, 
                  navigation, themes, and interactive features.
                </Text>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" size="sm">v1.0.0</Badge>
                  <Badge variant={mode === 'tron' ? 'success' : 'primary'} size="sm">
                    {mode === 'tron' ? '🎮 TRON' : '🔋 Matrix'}
                  </Badge>
                </div>
                
                <div className="flex gap-4">
                  <Link variant="secondary" size="sm">
                    📚 Documentation
                  </Link>
                  <Link variant="secondary" size="sm">
                    📦 NPM Package
                  </Link>
                  <Link variant="secondary" size="sm">
                    🐙 GitHub
                  </Link>
                </div>
              </div>
            </div>
            
            {mode === 'tron' && (
              <div className="mt-4 pt-4 border-t border-current/10">
                <Text variant="accent" size="sm" className="text-center animate-pulse">
                  🎮 TRON mode active - Experience the cyberpunk aesthetic with enhanced glows and effects!
                </Text>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
