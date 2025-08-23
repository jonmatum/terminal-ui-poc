import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
  Text,
  Badge,
  Breadcrumb,
  useTheme,
  Glow,
} from '@jonmatum/terminal-ui';

interface DemoHeaderProps {
  currentPage?: {
    id: string;
    label: string;
    icon: string;
    description: string;
  };
  breadcrumbItems: Array<{
    label: string;
    onClick?: () => void;
  }>;
}

export function DemoHeader({ currentPage, breadcrumbItems }: DemoHeaderProps) {
  const { mode, toggleTheme, isKonamiMode } = useTheme();

  return (
    <div className="border-b border-current/20 bg-black/50 backdrop-blur-sm">
      <div className="px-6 py-4 space-y-4">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            {currentPage && (
              <>
                <div className="text-2xl">{currentPage.icon}</div>
                <div>
                  <Text as="h1" size="2xl" weight="bold">
                    {currentPage.label}
                  </Text>
                  <Text variant="secondary" size="sm">
                    {currentPage.description}
                  </Text>
                </div>
              </>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Text variant="muted" size="sm">Theme:</Text>
              <Badge variant={mode === 'tron' ? 'success' : 'primary'}>
                {mode === 'tron' ? '🎮 TRON' : '🔋 Matrix'}
              </Badge>
              {isKonamiMode && (
                <Badge variant="warning" size="sm" className="animate-pulse">
                  Konami
                </Badge>
              )}
            </div>
            
            <Button variant="ghost" size="sm" onClick={toggleTheme}>
              Switch Theme
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
