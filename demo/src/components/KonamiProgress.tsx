import React from 'react';
import {
  Card,
  CardContent,
  Text,
  Badge,
  Icon,
  useTheme,
} from '@jonmatum/terminal-ui';

interface KonamiProgressProps {
  progress: number;
  isActive: boolean;
}

export function KonamiProgress({ progress, isActive }: KonamiProgressProps) {
  const { mode } = useTheme();
  
  const sequence = ['↑', '↑', '↓', '↓', '←', '→', '←', '→', 'B', 'A'];
  const completedSteps = Math.floor(progress * sequence.length);
  
  if (progress === 0 && !isActive) return null;
  
  return (
    <Card variant="elevated" className="mb-6 border-2 border-dashed">
      <CardContent className="py-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Icon variant="accent" size="sm">
              <span>🎮</span>
            </Icon>
            <Text variant="accent" weight="semibold">
              {isActive ? 'KONAMI MODE ACTIVE!' : 'Konami Code Progress'}
            </Text>
          </div>
          <Badge variant={isActive ? 'success' : 'primary'}>
            {Math.round(progress * 100)}%
          </Badge>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {sequence.map((key, index) => (
            <Badge
              key={index}
              variant={index < completedSteps ? 'success' : 'outline'}
              size="sm"
            >
              {key}
            </Badge>
          ))}
        </div>
        
        {isActive ? (
          <Text variant="accent" size="sm" className="animate-pulse">
            🎉 {mode === 'tron' ? 'TRON' : 'Matrix'} mode activated! Theme switching enabled via Konami code.
          </Text>
        ) : (
          <Text variant="muted" size="sm">
            Continue the sequence: {sequence.slice(completedSteps).join(' ')}
          </Text>
        )}
      </CardContent>
    </Card>
  );
}
