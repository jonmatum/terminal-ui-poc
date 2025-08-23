/**
 * Design Tokens for Terminal UI Design System
 * 
 * These tokens define the core design language and can be used
 * directly in Tailwind CSS classes or as CSS custom properties.
 */

// Color Tokens
export const colors = {
  // Matrix Theme Colors
  matrix: {
    primary: '#22c55e',      // green-400
    secondary: '#86efac',    // green-300  
    accent: '#16a34a',       // green-500
    background: '#000000',   // black
    surface: '#14532d',      // green-950
    border: '#166534',       // green-700
    text: {
      primary: '#22c55e',    // green-400
      secondary: '#86efac',  // green-300
      muted: '#4ade80',      // green-400 with opacity
    },
    glow: '#22c55e',
    shadow: 'rgba(34, 197, 94, 0.3)',
  },
  
  // TRON Theme Colors
  tron: {
    primary: '#00ffff',      // cyan
    secondary: '#0080ff',    // blue
    accent: '#ff8000',       // orange
    background: '#000000',   // black
    surface: '#0a0a0a',      // very dark gray
    border: '#00ccff',       // light cyan
    text: {
      primary: '#00ffff',    // cyan
      secondary: '#0080ff',  // blue
      muted: '#66f0ff',      // light cyan
    },
    glow: '#00ffff',
    shadow: 'rgba(0, 255, 255, 0.3)',
  },
  
  // Semantic Colors (theme-agnostic)
  semantic: {
    success: '#10b981',      // emerald-500
    warning: '#f59e0b',      // amber-500
    error: '#ef4444',        // red-500
    info: '#3b82f6',         // blue-500
  },
  
  // Neutral Colors
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
} as const;

// Typography Tokens
export const typography = {
  fontFamily: {
    mono: [
      'JetBrains Mono',
      'Fira Code',
      'SF Mono',
      'Monaco',
      'Consolas',
      'Courier New',
      'monospace',
    ],
    terminal: [
      'JetBrains Mono',
      'Fira Code',
      'Consolas',
      'monospace',
    ],
  },
  
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    '5xl': ['3rem', { lineHeight: '1' }],
  },
  
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  
  letterSpacing: {
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

// Spacing Tokens
export const spacing = {
  0: '0px',
  1: '0.25rem',    // 4px
  2: '0.5rem',     // 8px
  3: '0.75rem',    // 12px
  4: '1rem',       // 16px
  5: '1.25rem',    // 20px
  6: '1.5rem',     // 24px
  8: '2rem',       // 32px
  10: '2.5rem',    // 40px
  12: '3rem',      // 48px
  16: '4rem',      // 64px
  20: '5rem',      // 80px
  24: '6rem',      // 96px
  32: '8rem',      // 128px
  40: '10rem',     // 160px
  48: '12rem',     // 192px
  56: '14rem',     // 224px
  64: '16rem',     // 256px
} as const;

// Border Radius Tokens
export const borderRadius = {
  none: '0px',
  sm: '0.125rem',    // 2px
  base: '0.25rem',   // 4px
  md: '0.375rem',    // 6px
  lg: '0.5rem',      // 8px
  xl: '0.75rem',     // 12px
  '2xl': '1rem',     // 16px
  '3xl': '1.5rem',   // 24px
  full: '9999px',
  terminal: '0.5rem', // 8px - standard terminal radius
} as const;

// Shadow Tokens
export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  
  // Glow shadows using design tokens
  'glow-sm': '0 0 5px var(--color-primary)',
  'glow-md': '0 0 10px var(--color-primary), 0 0 20px var(--color-primary)',
  'glow-lg': '0 0 15px var(--color-primary), 0 0 30px var(--color-primary)',
  'glow-xl': '0 0 20px var(--color-primary), 0 0 40px var(--color-primary)',
  
  // Theme-specific glows
  'matrix-glow': '0 0 10px #22c55e, 0 0 20px #22c55e',
  'tron-glow': '0 0 10px #00ffff, 0 0 20px #00ffff',
} as const;

// Animation Tokens
export const animations = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    slower: '1000ms',
  },
  
  easing: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    terminal: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
} as const;

// Breakpoint Tokens
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Z-Index Tokens
export const zIndex = {
  auto: 'auto',
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  dropdown: '1000',
  sticky: '1020',
  fixed: '1030',
  modal: '1040',
  popover: '1050',
  tooltip: '1060',
  toast: '1070',
} as const;

// Component Size Tokens
export const sizes = {
  button: {
    sm: {
      height: '2rem',      // 32px
      padding: '0.5rem 0.75rem', // 8px 12px
      fontSize: '0.875rem', // 14px
    },
    md: {
      height: '2.5rem',    // 40px
      padding: '0.625rem 1rem', // 10px 16px
      fontSize: '1rem',    // 16px
    },
    lg: {
      height: '3rem',      // 48px
      padding: '0.75rem 1.5rem', // 12px 24px
      fontSize: '1.125rem', // 18px
    },
  },
  
  input: {
    sm: {
      height: '2rem',      // 32px
      padding: '0.5rem 0.75rem', // 8px 12px
      fontSize: '0.875rem', // 14px
    },
    md: {
      height: '2.5rem',    // 40px
      padding: '0.625rem 1rem', // 10px 16px
      fontSize: '1rem',    // 16px
    },
    lg: {
      height: '3rem',      // 48px
      padding: '0.75rem 1rem', // 12px 16px
      fontSize: '1.125rem', // 18px
    },
  },
  
  container: {
    sm: '24rem',    // 384px
    md: '28rem',    // 448px
    lg: '32rem',    // 512px
    xl: '36rem',    // 576px
    '2xl': '42rem', // 672px
    '3xl': '48rem', // 768px
    '4xl': '56rem', // 896px
    '5xl': '64rem', // 1024px
    '6xl': '72rem', // 1152px
    '7xl': '80rem', // 1280px
    full: '100%',
  },
} as const;

// Export all tokens as a single object
export const tokens = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  animations,
  breakpoints,
  zIndex,
  sizes,
} as const;

// Export individual token categories
export * from './colors';
export * from './typography';
export * from './spacing';

// Type exports for TypeScript
export type Colors = typeof colors;
export type Typography = typeof typography;
export type Spacing = typeof spacing;
export type BorderRadius = typeof borderRadius;
export type Shadows = typeof shadows;
export type Animations = typeof animations;
export type Breakpoints = typeof breakpoints;
export type ZIndex = typeof zIndex;
export type Sizes = typeof sizes;
export type Tokens = typeof tokens;
