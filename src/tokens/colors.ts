/**
 * Color Design Tokens
 * 
 * Semantic color system for Terminal UI design system.
 * These colors work with both Matrix and TRON themes.
 */

// Base color palette
export const palette = {
  // Matrix colors (green-based)
  matrix: {
    50: '#f0fdf4',
    100: '#dcfce7', 
    200: '#bbf7d0',
    300: '#86efac',
    400: '#22c55e',  // Primary matrix green
    500: '#16a34a',
    600: '#15803d',
    700: '#166534',
    800: '#14532d',
    900: '#052e16',
    950: '#14532d',
  },
  
  // TRON colors (cyan/blue-based)
  tron: {
    cyan: {
      50: '#f0fdff',
      100: '#ccfbff',
      200: '#99f6ff', 
      300: '#66f0ff',
      400: '#33ebff',
      500: '#00e6ff',
      600: '#00ccff',
      700: '#0099cc',
      800: '#006699',
      900: '#003366',
      DEFAULT: '#00ffff',
    },
    orange: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74', 
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
      DEFAULT: '#ff8000',
    },
    purple: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7c3aed',
      800: '#6b21b6',
      900: '#581c87',
      DEFAULT: '#8a2be2',
    },
  },
  
  // Neutral colors
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },
  
  // Semantic colors
  semantic: {
    success: {
      50: '#f0fdf4',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      DEFAULT: '#10b981',
    },
    warning: {
      50: '#fffbeb',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      DEFAULT: '#f59e0b',
    },
    error: {
      50: '#fef2f2',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      DEFAULT: '#ef4444',
    },
    info: {
      50: '#eff6ff',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      DEFAULT: '#3b82f6',
    },
  },
} as const;

// Semantic color mappings
export const colors = {
  // Theme-agnostic semantic colors
  primary: 'var(--color-primary)',
  secondary: 'var(--color-secondary)', 
  accent: 'var(--color-accent)',
  background: 'var(--color-background)',
  foreground: 'var(--color-foreground)',
  surface: 'var(--color-surface)',
  border: 'var(--color-border)',
  
  // Text colors
  text: {
    primary: 'var(--color-text-primary)',
    secondary: 'var(--color-text-secondary)',
    muted: 'var(--color-text-muted)',
    inverse: 'var(--color-text-inverse)',
  },
  
  // State colors
  success: palette.semantic.success.DEFAULT,
  warning: palette.semantic.warning.DEFAULT,
  error: palette.semantic.error.DEFAULT,
  info: palette.semantic.info.DEFAULT,
  
  // Interactive states
  hover: 'var(--color-hover)',
  active: 'var(--color-active)',
  focus: 'var(--color-focus)',
  disabled: 'var(--color-disabled)',
  
  // Special effects
  glow: 'var(--color-glow)',
  shadow: 'var(--color-shadow)',
  
  // Direct palette access
  matrix: palette.matrix,
  tron: palette.tron,
  neutral: palette.neutral,
  semantic: palette.semantic,
} as const;

// CSS custom property definitions for themes
export const matrixThemeVars = {
  '--color-primary': palette.matrix[400],
  '--color-secondary': palette.matrix[300],
  '--color-accent': palette.matrix[500],
  '--color-background': '#000000',
  '--color-foreground': palette.matrix[400],
  '--color-surface': palette.matrix[950],
  '--color-border': palette.matrix[700],
  '--color-text-primary': palette.matrix[400],
  '--color-text-secondary': palette.matrix[300],
  '--color-text-muted': palette.matrix[600],
  '--color-text-inverse': '#000000',
  '--color-hover': palette.matrix[300],
  '--color-active': palette.matrix[500],
  '--color-focus': palette.matrix[400],
  '--color-disabled': palette.matrix[800],
  '--color-glow': palette.matrix[400],
  '--color-shadow': 'rgba(34, 197, 94, 0.3)',
} as const;

export const tronThemeVars = {
  '--color-primary': palette.tron.cyan.DEFAULT,
  '--color-secondary': palette.tron.purple.DEFAULT,
  '--color-accent': palette.tron.orange.DEFAULT,
  '--color-background': '#000000',
  '--color-foreground': palette.tron.cyan.DEFAULT,
  '--color-surface': palette.neutral[950],
  '--color-border': palette.tron.cyan[700],
  '--color-text-primary': palette.tron.cyan.DEFAULT,
  '--color-text-secondary': palette.tron.purple.DEFAULT,
  '--color-text-muted': palette.tron.cyan[600],
  '--color-text-inverse': '#000000',
  '--color-hover': palette.tron.cyan[300],
  '--color-active': palette.tron.cyan[600],
  '--color-focus': palette.tron.cyan.DEFAULT,
  '--color-disabled': palette.neutral[800],
  '--color-glow': palette.tron.cyan.DEFAULT,
  '--color-shadow': 'rgba(0, 255, 255, 0.3)',
} as const;

// Utility functions
export const getColorValue = (colorPath: string, theme: 'matrix' | 'tron' = 'matrix') => {
  const vars = theme === 'matrix' ? matrixThemeVars : tronThemeVars;
  return vars[`--color-${colorPath}` as keyof typeof vars] || colorPath;
};

export const createColorUtilities = (theme: 'matrix' | 'tron' = 'matrix') => {
  const vars = theme === 'matrix' ? matrixThemeVars : tronThemeVars;
  
  return Object.entries(vars).reduce((acc, [key, value]) => {
    const utilityName = key.replace('--color-', '');
    acc[`.text-${utilityName}`] = { color: `var(${key})` };
    acc[`.bg-${utilityName}`] = { backgroundColor: `var(${key})` };
    acc[`.border-${utilityName}`] = { borderColor: `var(${key})` };
    return acc;
  }, {} as Record<string, any>);
};

export type ColorPalette = typeof palette;
export type Colors = typeof colors;
export type MatrixThemeVars = typeof matrixThemeVars;
export type TronThemeVars = typeof tronThemeVars;
