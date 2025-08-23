// Import CSS styles
import './styles/globals.css';

// Design Tokens - Export first for maximum utility
export * from './tokens';
export { tokens } from './tokens';

// Tailwind Configuration - Export for easy integration
export * from './config/tailwind.config';
export { 
  terminalUITailwindConfig,
  mergeWithTailwindConfig,
  matrixPreset,
  tronPreset,
} from './config/tailwind.config';

// Core Components
export { Button } from './components/Button';
export type { ButtonProps } from './components/Button';

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './components/Card';
export type {
  CardProps,
  CardHeaderProps,
  CardTitleProps,
  CardDescriptionProps,
  CardContentProps,
  CardFooterProps,
} from './components/Card';

export { Input } from './components/Input';
export type { InputProps } from './components/Input';

export { Text } from './components/Text';
export type { TextProps } from './components/Text';

export { Badge } from './components/Badge';
export type { BadgeProps } from './components/Badge';

export { Icon } from './components/Icon';
export type { IconProps } from './components/Icon';

export { Link } from './components/Link';
export type { LinkProps } from './components/Link';

// Layout Components
export {
  Container,
  Grid,
  GridItem,
  Section,
  HeroSection,
  FeatureSection,
  ContentSection,
  CardGrid,
  FeatureGrid,
  TwoColumnGrid,
} from './components/Layout';
export type {
  ContainerProps,
  GridProps,
  GridItemProps,
  SectionProps,
  ContainerSize,
  ContainerPadding,
  ContainerSpacing,
  GridColumns,
  GridGap,
  SectionVariant,
  SectionBackground,
  PresetSectionProps,
  PresetGridProps,
} from './components/Layout';

// Animation Components
export {
  Animation,
  Typewriter,
  Glow,
  ParticleBackground,
  MatrixRain,
} from './components/Animation';
export type {
  AnimationProps,
  TypewriterProps,
  GlowProps,
  ParticleProps,
  MatrixRainProps,
  AnimationType,
  AnimationDuration,
  AnimationDelay,
  AnimationEasing,
} from './components/Animation';

// Navigation Components
export {
  Navigation,
  Breadcrumb,
  Tabs,
  Sidebar,
} from './components/Navigation';
export type {
  NavigationProps,
  BreadcrumbProps,
  TabsProps,
  SidebarProps,
  NavigationItem,
  TabItem,
  NavigationVariant,
  NavigationSize,
  NavigationAlignment,
} from './components/Navigation';

// Providers
export { ThemeProvider, useTheme } from './providers/ThemeProvider';
export type { ThemeProviderProps } from './providers/ThemeProvider';

// Hooks
export { useKonami } from './hooks/useKonami';
export type { UseKonamiOptions } from './hooks/useKonami';

// Types
export type {
  ThemeMode,
  ThemeColors,
  ThemeConfig,
  ComponentVariants,
  ThemeContextValue,
} from './types/theme';

// Utils
export { cn } from './utils/cn';

// Theme Configuration (Legacy - use tokens instead)
export {
  themes,
  matrixTheme,
  tronTheme,
  createComponentVariants,
} from './utils/theme-config';

// Enhanced Theme Configuration (Legacy - use tokens instead)
export {
  enhancedThemes,
  matrixTheme as enhancedMatrixTheme,
  tronTheme as enhancedTronTheme,
  buttonVariants,
  cardVariants,
  textVariants,
  getThemeValue,
  createThemeAwareClass,
  generateThemeStyles,
  animationPresets,
} from './utils/enhanced-theme-config';
export type {
  EnhancedThemeColors,
  ComponentVariantConfig,
} from './utils/enhanced-theme-config';

// Tailwind Configuration (Legacy - use config/tailwind.config instead)
export {
  terminalUITailwindConfig as legacyTailwindConfig,
  matrixTailwindTheme,
  tronTailwindTheme,
  mergeWithTailwindConfig as legacyMergeConfig,
} from './styles/tailwind-config';
