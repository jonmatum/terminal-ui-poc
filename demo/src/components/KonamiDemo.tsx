import { useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Text,
  Badge,
  Icon,
  useKonami,
  useTheme,
} from '@jonmatum/terminal-ui';

const GamepadIcon = () => <span className="text-current">🎮</span>;
const CheckIcon = () => <span className="text-current">✅</span>;

export function KonamiDemo() {
  const { mode, toggleTheme } = useTheme();
  const [activationCount, setActivationCount] = useState(0);
  const [lastActivation, setLastActivation] = useState<Date | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const { isActive, sequence, progress, reset } = useKonami({
    onActivate: () => {
      setActivationCount(prev => prev + 1);
      setLastActivation(new Date());
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    },
    onDeactivate: () => {
      console.log('Konami code deactivated');
    },
  });

  const konamiSequence = ['↑', '↑', '↓', '↓', '←', '→', '←', '→', 'B', 'A'];
  const completedSteps = Math.floor(progress * konamiSequence.length);
  
  return (
    <div className="space-y-8">
      {/* Success Notification */}
      {showSuccess && (
        <Card variant="elevated" className="border-2 border-green-400 animate-pulse">
          <CardContent className="py-4">
            <div className="flex items-center justify-center gap-2">
              <Icon variant="accent" size="sm">
                <CheckIcon />
              </Icon>
              <Text variant="accent" weight="bold" className="text-center">
                🎉 KONAMI CODE ACTIVATED! Theme switched to {mode.toUpperCase()} mode!
              </Text>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Konami Code Status */}
      <Card variant={isActive ? 'elevated' : 'default'} className={isActive ? 'border-accent' : ''}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Icon variant="accent" size="sm">
                  <GamepadIcon />
                </Icon>
                Konami Code Status: {isActive ? 'ACTIVE' : 'INACTIVE'}
              </CardTitle>
              <CardDescription>
                Enter the classic cheat code sequence to activate TRON theme mode
              </CardDescription>
            </div>
            <Badge variant={isActive ? 'success' : 'outline'}>
              {isActive ? 'ENABLED' : 'DISABLED'}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Progress Indicator */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <Text variant="accent">
                Input Progress: {Math.round(progress * 100)}%
              </Text>
              <Text variant="muted" size="sm">
                {completedSteps}/{konamiSequence.length} keys
              </Text>
            </div>
            <div className="w-full bg-black border border-current rounded-full h-3 overflow-hidden">
              <div 
                className={`h-full transition-all duration-300 ${
                  mode === 'tron' 
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500' 
                    : 'bg-gradient-to-r from-green-400 to-green-600'
                }`}
                style={{ width: `${progress * 100}%` }}
              />
            </div>
          </div>

          {/* Sequence Display */}
          <div>
            <Text variant="accent" className="mb-3 block">
              Konami Code Sequence:
            </Text>
            <div className="flex flex-wrap gap-2 mb-4">
              {konamiSequence.map((key, index) => (
                <Badge
                  key={index}
                  variant={index < completedSteps ? 'success' : 'outline'}
                  size="md"
                  className={index < completedSteps ? 'animate-pulse' : ''}
                >
                  {key}
                </Badge>
              ))}
            </div>
            <Text variant="muted" size="sm">
              {progress > 0 && progress < 1 && (
                <>Next key: <Badge variant="primary" size="sm">{konamiSequence[completedSteps]}</Badge></>
              )}
              {progress === 0 && "Start typing the sequence above to begin"}
              {progress === 1 && isActive && "🎉 Sequence complete! Konami mode activated!"}
            </Text>
          </div>

          {/* Current Input Display */}
          {sequence.length > 0 && (
            <div>
              <Text variant="accent" className="mb-2 block">
                Current Input:
              </Text>
              <div className="flex flex-wrap gap-1">
                {sequence.map((key, index) => (
                  <Badge key={index} variant="secondary" size="sm">
                    {konamiSequence[index] || '?'}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-current/20">
            <div className="text-center">
              <Text variant="accent" size="2xl" weight="bold">
                {activationCount}
              </Text>
              <Text variant="muted" size="sm">
                Total Activations
              </Text>
            </div>
            <div className="text-center">
              <Text variant="accent" size="2xl" weight="bold">
                {mode.toUpperCase()}
              </Text>
              <Text variant="muted" size="sm">
                Current Theme
              </Text>
            </div>
            <div className="text-center">
              <Text variant="accent" size="2xl" weight="bold">
                {lastActivation ? lastActivation.toLocaleTimeString() : '--:--:--'}
              </Text>
              <Text variant="muted" size="sm">
                Last Activation
              </Text>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Instructions */}
      <Card variant="interactive">
        <CardHeader>
          <CardTitle>How to Use Konami Code</CardTitle>
          <CardDescription>
            Step-by-step guide to activate the hidden TRON theme
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Badge variant="primary" size="sm">1</Badge>
              <div>
                <Text weight="semibold">Focus the page</Text>
                <Text variant="muted" size="sm">
                  Make sure this page is focused (click anywhere if needed)
                </Text>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Badge variant="primary" size="sm">2</Badge>
              <div>
                <Text weight="semibold">Enter the sequence</Text>
                <Text variant="muted" size="sm">
                  Type the Konami code: ↑ ↑ ↓ ↓ ← → ← → B A
                </Text>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Badge variant="primary" size="sm">3</Badge>
              <div>
                <Text weight="semibold">Watch the magic happen</Text>
                <Text variant="muted" size="sm">
                  The theme will automatically switch to TRON mode with glowing effects
                </Text>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Badge variant="primary" size="sm">4</Badge>
              <div>
                <Text weight="semibold">Toggle back</Text>
                <Text variant="muted" size="sm">
                  Enter the code again to switch back to Matrix mode
                </Text>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-current/20">
            <Text variant="muted" size="sm">
              💡 <strong>Pro tip:</strong> The Konami code works globally throughout the entire demo application, 
              just like in your portfolio. Try it on any page!
            </Text>
          </div>
        </CardContent>
      </Card>

      {/* Manual Controls */}
      <Card variant="default">
        <CardHeader>
          <CardTitle>Manual Controls</CardTitle>
          <CardDescription>
            Alternative ways to test the functionality
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary" onClick={reset}>
              Reset Sequence
            </Button>
            <Button variant="ghost" onClick={toggleTheme}>
              Manual Theme Toggle
            </Button>
          </div>
          
          <Text variant="muted" size="sm">
            Use these controls to reset the input sequence or manually toggle themes for testing.
          </Text>
        </CardContent>
      </Card>

      {/* Technical Details */}
      <Card variant="default">
        <CardHeader>
          <CardTitle>Technical Implementation</CardTitle>
          <CardDescription>
            How the Konami code integration works
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div>
              <Text weight="semibold" className="mb-1">useKonami Hook</Text>
              <Text variant="muted" size="sm">
                Custom React hook that listens for keyboard events and tracks the sequence progress
              </Text>
            </div>
            
            <div>
              <Text weight="semibold" className="mb-1">ThemeProvider Integration</Text>
              <Text variant="muted" size="sm">
                Automatic theme switching when Konami code is activated, with localStorage persistence
              </Text>
            </div>
            
            <div>
              <Text weight="semibold" className="mb-1">Global Event Handling</Text>
              <Text variant="muted" size="sm">
                Works across all pages and components, ignoring input fields to prevent interference
              </Text>
            </div>
            
            <div>
              <Text weight="semibold" className="mb-1">Visual Feedback</Text>
              <Text variant="muted" size="sm">
                Real-time progress tracking with animated indicators and success notifications
              </Text>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
