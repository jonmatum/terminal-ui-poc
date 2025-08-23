import { useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Text,
  useKonami,
  useTheme,
} from '@jonmatum/terminal-ui';

export function KonamiDemo() {
  const { mode } = useTheme();
  const [activationCount, setActivationCount] = useState(0);
  const [lastActivation, setLastActivation] = useState<Date | null>(null);

  const { isActive, sequence, progress, reset } = useKonami({
    onActivate: () => {
      setActivationCount(prev => prev + 1);
      setLastActivation(new Date());
    },
    onDeactivate: () => {
      console.log('Konami code deactivated');
    },
  });

  const konamiSequence = ['↑', '↑', '↓', '↓', '←', '→', '←', '→', 'B', 'A'];
  
  return (
    <div className="space-y-8">
      {/* Konami Code Status */}
      <Card variant={isActive ? 'elevated' : 'default'} className={isActive ? 'border-accent' : ''}>
        <CardHeader>
          <CardTitle>
            Konami Code Status: {isActive ? 'ACTIVE' : 'INACTIVE'}
          </CardTitle>
          <CardDescription>
            Enter the classic cheat code sequence to activate special features
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Progress Indicator */}
          <div>
            <Text variant="accent" className="mb-3 block">
              Input Progress: {Math.round(progress * 100)}%
            </Text>
            <div className="w-full bg-black border border-current rounded-full h-3">
              <div 
                className="h-full bg-current rounded-full transition-all duration-300"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            <Text variant="muted" className="text-sm mt-2">
              Current sequence: {sequence.length}/10 keys entered
            </Text>
          </div>

          {/* Current Sequence Display */}
          <div>
            <Text variant="accent" className="mb-3 block">
              Expected Sequence
            </Text>
            <div className="flex flex-wrap gap-2">
              {konamiSequence.map((key, index) => (
                <div
                  key={index}
                  className={`
                    px-3 py-2 border-2 rounded font-mono text-sm
                    ${index < sequence.length 
                      ? 'border-accent bg-current text-black' 
                      : 'border-current'
                    }
                  `}
                >
                  {key}
                </div>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card variant="default">
              <CardContent className="py-4 text-center">
                <Text variant="accent" className="text-2xl font-bold block">
                  {activationCount}
                </Text>
                <Text variant="muted" className="text-sm">
                  Total Activations
                </Text>
              </CardContent>
            </Card>
            
            <Card variant="default">
              <CardContent className="py-4 text-center">
                <Text variant="accent" className="text-2xl font-bold block">
                  {sequence.length}
                </Text>
                <Text variant="muted" className="text-sm">
                  Keys Entered
                </Text>
              </CardContent>
            </Card>
            
            <Card variant="default">
              <CardContent className="py-4 text-center">
                <Text variant="accent" className="text-2xl font-bold block">
                  {isActive ? 'ON' : 'OFF'}
                </Text>
                <Text variant="muted" className="text-sm">
                  Current Status
                </Text>
              </CardContent>
            </Card>
          </div>

          {/* Last Activation */}
          {lastActivation && (
            <div>
              <Text variant="accent" className="mb-2 block">
                Last Activation
              </Text>
              <Text variant="secondary" className="font-mono text-sm">
                {lastActivation.toLocaleString()}
              </Text>
            </div>
          )}

          {/* Reset Button */}
          <div className="flex gap-3">
            <Button variant="secondary" onClick={reset}>
              Reset Sequence
            </Button>
            {sequence.length > 0 && (
              <Button variant="ghost" onClick={reset}>
                Clear Progress
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Instructions */}
      <Card>
        <CardHeader>
          <CardTitle>How to Use the Konami Code</CardTitle>
          <CardDescription>
            Step-by-step instructions for activating the code
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <Text variant="primary">
              1. Make sure this page is focused (click anywhere on the page)
            </Text>
            <Text variant="primary">
              2. Use your keyboard arrow keys to enter: ↑ ↑ ↓ ↓ ← → ← → 
            </Text>
            <Text variant="primary">
              3. Then press the B key followed by the A key
            </Text>
            <Text variant="primary">
              4. Watch as the theme switches and the status changes to ACTIVE
            </Text>
            <Text variant="primary">
              5. Enter the sequence again to deactivate
            </Text>
          </div>

          <div className="mt-6 p-4 border border-current rounded">
            <Text variant="accent" className="font-bold mb-2 block">
              Pro Tips:
            </Text>
            <ul className="space-y-1">
              <li>
                <Text variant="secondary" className="text-sm">
                  • The sequence must be entered correctly without mistakes
                </Text>
              </li>
              <li>
                <Text variant="secondary" className="text-sm">
                  • If you make a mistake, the sequence will reset automatically
                </Text>
              </li>
              <li>
                <Text variant="secondary" className="text-sm">
                  • The code won't work when typing in input fields
                </Text>
              </li>
              <li>
                <Text variant="secondary" className="text-sm">
                  • Each activation toggles between Matrix and TRON themes
                </Text>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Theme Integration */}
      <Card>
        <CardHeader>
          <CardTitle>Theme Integration</CardTitle>
          <CardDescription>
            How the Konami code integrates with the theme system
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Text variant="primary">
            The Konami code is deeply integrated with the theme system. When activated:
          </Text>
          
          <ul className="space-y-2 ml-4">
            <li>
              <Text variant="secondary">
                • Automatically switches between Matrix and TRON themes
              </Text>
            </li>
            <li>
              <Text variant="secondary">
                • Updates all component styling instantly
              </Text>
            </li>
            <li>
              <Text variant="secondary">
                • Preserves theme state across page reloads
              </Text>
            </li>
            <li>
              <Text variant="secondary">
                • Triggers custom callbacks for additional functionality
              </Text>
            </li>
          </ul>

          <div className="mt-4 p-4 border border-current rounded">
            <Text variant="accent" className="font-bold mb-2 block">
              Current Theme: {mode.toUpperCase()}
            </Text>
            <Text variant="muted" className="text-sm">
              {mode === 'matrix' 
                ? 'Classic green terminal aesthetic with glow effects'
                : 'Futuristic cyan and orange design with particle effects'
              }
            </Text>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
