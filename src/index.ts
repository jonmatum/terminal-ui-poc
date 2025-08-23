// Components
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
export {
  themes,
  matrixTheme,
  tronTheme,
  createComponentVariants,
} from './utils/theme-config';
