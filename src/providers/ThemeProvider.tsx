import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import type { ThemeMode, ThemeContextValue } from '../types/theme';
import { themes, createComponentVariants } from '../utils/theme-config';
import { useKonami } from '../hooks/useKonami';

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: ThemeMode;
  enableKonami?: boolean;
  onThemeChange?: (theme: ThemeMode) => void;
  storageKey?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = 'matrix',
  enableKonami = true,
  onThemeChange,
  storageKey = 'terminal-ui-theme',
}: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined' && storageKey) {
      const stored = localStorage.getItem(storageKey);
      return (stored as ThemeMode) || defaultTheme;
    }
    return defaultTheme;
  });

  const { isActive: isKonamiMode } = useKonami({
    onActivate: enableKonami
      ? () => {
          const newMode = mode === 'matrix' ? 'tron' : 'matrix';
          setMode(newMode);
        }
      : undefined,
  });

  const theme = themes[mode];
  const variants = createComponentVariants(theme);

  const toggleTheme = () => {
    const newMode = mode === 'matrix' ? 'tron' : 'matrix';
    setMode(newMode);
  };

  const setTheme = (newMode: ThemeMode) => {
    setMode(newMode);
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && storageKey) {
      localStorage.setItem(storageKey, mode);
    }
    onThemeChange?.(mode);
  }, [mode, onThemeChange, storageKey]);

  useEffect(() => {
    // Apply CSS custom properties to document root
    const root = document.documentElement;
    const colors = theme.colors;

    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-secondary', colors.secondary);
    root.style.setProperty('--color-accent', colors.accent);
    root.style.setProperty('--color-background', colors.background);
    root.style.setProperty('--color-surface', colors.surface);
    root.style.setProperty('--color-border', colors.border);
    root.style.setProperty('--color-text-primary', colors.text.primary);
    root.style.setProperty('--color-text-secondary', colors.text.secondary);
    root.style.setProperty('--color-text-muted', colors.text.muted);
    root.style.setProperty('--color-glow', colors.glow);
    root.style.setProperty('--color-shadow', colors.shadow);

    root.style.setProperty('--animation-duration', theme.animations.duration);
    root.style.setProperty('--animation-easing', theme.animations.easing);

    // Apply theme class to body
    document.body.className = `theme-${mode}`;
  }, [theme, mode]);

  const value: ThemeContextValue = {
    theme,
    mode,
    toggleTheme,
    setTheme,
    isKonamiMode,
    variants,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
