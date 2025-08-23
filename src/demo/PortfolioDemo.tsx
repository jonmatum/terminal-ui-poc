import React, { useState } from 'react';
import { 
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
  Icon, 
  Link,
  useTheme,
  useKonami
} from '../index';

// Mock icons (in real usage, you'd import from lucide-react or similar)
const SearchIcon = () => <div className="w-4 h-4">🔍</div>;
const GitHubIcon = () => <div className="w-4 h-4">⚡</div>;
const ExternalLinkIcon = () => <div className="w-4 h-4">↗</div>;

export function PortfolioDemo() {
  const { theme, toggleTheme } = useTheme();
  const [searchValue, setSearchValue] = useState('');
  const [clickCount, setClickCount] = useState(0);

  // Konami code integration
  const { isActive: konamiActive } = useKonami({
    onActivate: () => {
      console.log('🎮 Konami code activated! TRON mode enabled!');
      if (theme !== 'tron') {
        toggleTheme();
      }
    },
  });

  // Mock sound effect
  const playSound = () => {
    console.log('🔊 Click sound effect');
    setClickCount(prev => prev + 1);
  };

  const mockRepos = [
    {
      name: 'terminal-portfolio',
      description: 'A cyberpunk-themed portfolio with Matrix/TRON aesthetics',
      language: 'TypeScript',
      stars: 42,
      forks: 8,
    },
    {
      name: 'design-system',
      description: 'Reusable component library with theme switching',
      language: 'React',
      stars: 28,
      forks: 5,
    },
    {
      name: 'konami-hook',
      description: 'React hook for Konami code detection',
      language: 'JavaScript',
      stars: 15,
      forks: 3,
    },
  ];

  return (
    <div className="min-h-screen p-8 space-y-8 bg-black">
      {/* Header Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Text 
            as="h1" 
            size="4xl" 
            weight="bold" 
            gradient={true}
            glow={theme === 'tron'}
          >
            Portfolio Design System
          </Text>
          <div className="flex items-center gap-4">
            <Badge variant="primary">
              Theme: {theme === 'tron' ? 'TRON' : 'Matrix'}
            </Badge>
            <Button 
              variant="ghost" 
              onSound={playSound}
              onClick={toggleTheme}
            >
              Switch Theme
            </Button>
          </div>
        </div>
        
        <Text variant="secondary" size="lg">
          Enhanced components with sound effects, animations, and theme switching
        </Text>

        {konamiActive && (
          <Badge variant="success" size="md">
            🎮 Konami Code Active! Try: ↑↑↓↓←→←→BA
          </Badge>
        )}

        <Text variant="muted" size="sm">
          Clicks detected: {clickCount}
        </Text>
      </div>

      {/* Interactive Elements Section */}
      <Card variant="elevated" animate={true} onSound={playSound}>
        <CardHeader>
          <CardTitle size="lg">Interactive Components</CardTitle>
          <CardDescription>
            All components include sound callbacks and hover animations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Buttons */}
          <div className="space-y-4">
            <Text weight="semibold">Buttons with Sound Effects</Text>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" onSound={playSound}>
                Primary Action
              </Button>
              <Button variant="secondary" onSound={playSound}>
                Secondary
              </Button>
              <Button variant="ghost" onSound={playSound}>
                Ghost Button
              </Button>
              <Button variant="danger" onSound={playSound} loading>
                Loading...
              </Button>
            </div>
          </div>

          {/* Search Input */}
          <div className="space-y-4">
            <Text weight="semibold">Enhanced Search Input</Text>
            <Input
              variant="search"
              placeholder="Search repositories..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              leftIcon={<SearchIcon />}
              onSound={playSound}
            />
          </div>

          {/* Links */}
          <div className="space-y-4">
            <Text weight="semibold">Themed Links</Text>
            <div className="flex flex-wrap gap-4">
              <Link variant="primary" onSound={playSound}>
                Primary Link
              </Link>
              <Link variant="underline" onSound={playSound}>
                Underlined Link
              </Link>
              <Link variant="button" onSound={playSound}>
                Button Link
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Repository Cards Section */}
      <div className="space-y-4">
        <Text as="h2" size="2xl" weight="bold">
          Project Showcase
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockRepos.map((repo, index) => (
            <Card 
              key={repo.name} 
              variant="interactive" 
              animate={true}
              onSound={playSound}
              onClick={() => console.log(`Clicked ${repo.name}`)}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle size="md" className="flex items-center gap-2">
                    <Icon variant="primary" size="sm">
                      <GitHubIcon />
                    </Icon>
                    {repo.name}
                  </CardTitle>
                  <Icon variant="secondary" hover={true}>
                    <ExternalLinkIcon />
                  </Icon>
                </div>
                <CardDescription>
                  {repo.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm">
                  <Badge variant="outline">
                    {repo.language}
                  </Badge>
                  <Text variant="muted" size="sm">
                    ⭐ {repo.stars}
                  </Text>
                  <Text variant="muted" size="sm">
                    🍴 {repo.forks}
                  </Text>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onSound={playSound}
                  className="w-full"
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Typography Showcase */}
      <Card variant="default">
        <CardHeader>
          <CardTitle>Typography System</CardTitle>
          <CardDescription>
            Comprehensive text styling with gradient and glow effects
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Text as="h1" size="5xl" weight="extrabold" gradient={true}>
              Heading 1 - Gradient
            </Text>
            <Text as="h2" size="4xl" weight="bold" glow={theme === 'tron'}>
              Heading 2 - {theme === 'tron' ? 'Glow' : 'Bold'}
            </Text>
            <Text as="h3" size="3xl" weight="semibold" variant="accent">
              Heading 3 - Accent
            </Text>
            <Text size="lg" variant="secondary">
              Large secondary text for descriptions and subtitles
            </Text>
            <Text size="base" variant="primary">
              Base text for body content and general information
            </Text>
            <Text size="sm" variant="muted">
              Small muted text for captions and metadata
            </Text>
          </div>
        </CardContent>
      </Card>

      {/* Form Elements */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Form Components</CardTitle>
          <CardDescription>
            Enhanced inputs with icons and validation states
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Input
            label="Default Input"
            placeholder="Enter your name..."
            onSound={playSound}
          />
          
          <Input
            variant="ghost"
            label="Ghost Input"
            placeholder="Minimal styling..."
            onSound={playSound}
          />
          
          <Input
            label="Input with Error"
            placeholder="This has an error..."
            error={true}
            helper="This field is required"
            onSound={playSound}
          />
          
          <Input
            variant="search"
            label="Search Input"
            placeholder="Search with icon..."
            leftIcon={<SearchIcon />}
            onSound={playSound}
          />
        </CardContent>
      </Card>

      {/* Badge Showcase */}
      <Card variant="default">
        <CardHeader>
          <CardTitle>Status Indicators</CardTitle>
          <CardDescription>
            Badges for tags, status, and categorization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="primary" size="md">Medium Size</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
