/**
 * Typography Design Tokens
 * 
 * Font families, sizes, weights, and spacing for Terminal UI design system.
 */

// Font stacks
export const fontFamily = {
  // Primary monospace font stack for terminal aesthetic
  mono: [
    'JetBrains Mono',
    'Fira Code',
    'SF Mono',
    'Monaco',
    'Inconsolata',
    'Roboto Mono',
    'Source Code Pro',
    'Menlo',
    'Consolas',
    'DejaVu Sans Mono',
    'Courier New',
    'monospace',
  ],
  
  // Terminal-specific font stack (subset of mono)
  terminal: [
    'JetBrains Mono',
    'Fira Code',
    'Consolas',
    'Monaco',
    'monospace',
  ],
  
  // Fallback sans-serif (rarely used)
  sans: [
    'Inter',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
} as const;

// Font sizes with line heights
export const fontSize = {
  xs: ['0.75rem', { lineHeight: '1rem' }],      // 12px, 16px
  sm: ['0.875rem', { lineHeight: '1.25rem' }],  // 14px, 20px
  base: ['1rem', { lineHeight: '1.5rem' }],     // 16px, 24px
  lg: ['1.125rem', { lineHeight: '1.75rem' }],  // 18px, 28px
  xl: ['1.25rem', { lineHeight: '1.75rem' }],   // 20px, 28px
  '2xl': ['1.5rem', { lineHeight: '2rem' }],    // 24px, 32px
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px, 36px
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px, 40px
  '5xl': ['3rem', { lineHeight: '1' }],         // 48px, 48px
  '6xl': ['3.75rem', { lineHeight: '1' }],      // 60px, 60px
  '7xl': ['4.5rem', { lineHeight: '1' }],       // 72px, 72px
  '8xl': ['6rem', { lineHeight: '1' }],         // 96px, 96px
  '9xl': ['8rem', { lineHeight: '1' }],         // 128px, 128px
} as const;

// Font weights
export const fontWeight = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
} as const;

// Letter spacing
export const letterSpacing = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
} as const;

// Line heights
export const lineHeight = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
} as const;

// Text decoration
export const textDecoration = {
  none: 'none',
  underline: 'underline',
  overline: 'overline',
  'line-through': 'line-through',
} as const;

// Text transform
export const textTransform = {
  none: 'none',
  capitalize: 'capitalize',
  uppercase: 'uppercase',
  lowercase: 'lowercase',
} as const;

// Text shadows for glow effects
export const textShadow = {
  none: 'none',
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
  
  // Glow effects
  'glow-sm': '0 0 5px currentColor',
  'glow-md': '0 0 10px currentColor',
  'glow-lg': '0 0 15px currentColor, 0 0 30px currentColor',
  'glow-xl': '0 0 20px currentColor, 0 0 40px currentColor',
  
  // Theme-specific glows
  matrix: '0 0 10px #22c55e',
  'matrix-lg': '0 0 15px #22c55e, 0 0 30px #22c55e',
  tron: '0 0 10px #00ffff',
  'tron-lg': '0 0 15px #00ffff, 0 0 30px #00ffff',
} as const;

// Typography scale presets
export const typographyScale = {
  // Display text (large headings)
  display: {
    '2xl': {
      fontSize: fontSize['7xl'],
      fontWeight: fontWeight.extrabold,
      letterSpacing: letterSpacing.tight,
      lineHeight: lineHeight.none,
    },
    xl: {
      fontSize: fontSize['6xl'],
      fontWeight: fontWeight.extrabold,
      letterSpacing: letterSpacing.tight,
      lineHeight: lineHeight.none,
    },
    lg: {
      fontSize: fontSize['5xl'],
      fontWeight: fontWeight.bold,
      letterSpacing: letterSpacing.tight,
      lineHeight: lineHeight.tight,
    },
    md: {
      fontSize: fontSize['4xl'],
      fontWeight: fontWeight.bold,
      letterSpacing: letterSpacing.normal,
      lineHeight: lineHeight.tight,
    },
    sm: {
      fontSize: fontSize['3xl'],
      fontWeight: fontWeight.semibold,
      letterSpacing: letterSpacing.normal,
      lineHeight: lineHeight.snug,
    },
  },
  
  // Heading text
  heading: {
    '2xl': {
      fontSize: fontSize['3xl'],
      fontWeight: fontWeight.bold,
      letterSpacing: letterSpacing.tight,
      lineHeight: lineHeight.tight,
    },
    xl: {
      fontSize: fontSize['2xl'],
      fontWeight: fontWeight.bold,
      letterSpacing: letterSpacing.normal,
      lineHeight: lineHeight.snug,
    },
    lg: {
      fontSize: fontSize.xl,
      fontWeight: fontWeight.semibold,
      letterSpacing: letterSpacing.normal,
      lineHeight: lineHeight.snug,
    },
    md: {
      fontSize: fontSize.lg,
      fontWeight: fontWeight.semibold,
      letterSpacing: letterSpacing.normal,
      lineHeight: lineHeight.normal,
    },
    sm: {
      fontSize: fontSize.base,
      fontWeight: fontWeight.medium,
      letterSpacing: letterSpacing.normal,
      lineHeight: lineHeight.normal,
    },
  },
  
  // Body text
  body: {
    lg: {
      fontSize: fontSize.lg,
      fontWeight: fontWeight.normal,
      letterSpacing: letterSpacing.normal,
      lineHeight: lineHeight.relaxed,
    },
    md: {
      fontSize: fontSize.base,
      fontWeight: fontWeight.normal,
      letterSpacing: letterSpacing.normal,
      lineHeight: lineHeight.normal,
    },
    sm: {
      fontSize: fontSize.sm,
      fontWeight: fontWeight.normal,
      letterSpacing: letterSpacing.normal,
      lineHeight: lineHeight.normal,
    },
  },
  
  // Caption/small text
  caption: {
    lg: {
      fontSize: fontSize.sm,
      fontWeight: fontWeight.medium,
      letterSpacing: letterSpacing.wide,
      lineHeight: lineHeight.normal,
    },
    md: {
      fontSize: fontSize.xs,
      fontWeight: fontWeight.medium,
      letterSpacing: letterSpacing.wide,
      lineHeight: lineHeight.normal,
    },
    sm: {
      fontSize: fontSize.xs,
      fontWeight: fontWeight.normal,
      letterSpacing: letterSpacing.wider,
      lineHeight: lineHeight.tight,
    },
  },
  
  // Code/monospace text
  code: {
    lg: {
      fontSize: fontSize.base,
      fontWeight: fontWeight.medium,
      fontFamily: fontFamily.mono,
      letterSpacing: letterSpacing.normal,
      lineHeight: lineHeight.relaxed,
    },
    md: {
      fontSize: fontSize.sm,
      fontWeight: fontWeight.normal,
      fontFamily: fontFamily.mono,
      letterSpacing: letterSpacing.normal,
      lineHeight: lineHeight.normal,
    },
    sm: {
      fontSize: fontSize.xs,
      fontWeight: fontWeight.normal,
      fontFamily: fontFamily.mono,
      letterSpacing: letterSpacing.wide,
      lineHeight: lineHeight.normal,
    },
  },
} as const;

// Utility functions
export const createTypographyUtilities = () => {
  const utilities: Record<string, any> = {};
  
  // Generate utilities for each typography scale
  Object.entries(typographyScale).forEach(([category, scales]) => {
    Object.entries(scales).forEach(([size, styles]) => {
      const className = `.text-${category}-${size}`;
      utilities[className] = styles;
    });
  });
  
  return utilities;
};

export const getTypographyStyles = (
  category: keyof typeof typographyScale,
  size: string
) => {
  return typographyScale[category]?.[size as keyof typeof typographyScale[typeof category]];
};

// Export all typography tokens
export const typography = {
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  textDecoration,
  textTransform,
  textShadow,
  typographyScale,
} as const;

// Type exports
export type FontFamily = typeof fontFamily;
export type FontSize = typeof fontSize;
export type FontWeight = typeof fontWeight;
export type LetterSpacing = typeof letterSpacing;
export type LineHeight = typeof lineHeight;
export type TextShadow = typeof textShadow;
export type TypographyScale = typeof typographyScale;
export type Typography = typeof typography;
