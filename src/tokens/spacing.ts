/**
 * Spacing Design Tokens
 * 
 * Consistent spacing scale for margins, padding, gaps, and positioning.
 */

// Base spacing scale (rem-based for scalability)
export const spacing = {
  0: '0rem',
  px: '1px',
  0.5: '0.125rem',  // 2px
  1: '0.25rem',     // 4px
  1.5: '0.375rem',  // 6px
  2: '0.5rem',      // 8px
  2.5: '0.625rem',  // 10px
  3: '0.75rem',     // 12px
  3.5: '0.875rem',  // 14px
  4: '1rem',        // 16px
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  7: '1.75rem',     // 28px
  8: '2rem',        // 32px
  9: '2.25rem',     // 36px
  10: '2.5rem',     // 40px
  11: '2.75rem',    // 44px
  12: '3rem',       // 48px
  14: '3.5rem',     // 56px
  16: '4rem',       // 64px
  18: '4.5rem',     // 72px
  20: '5rem',       // 80px
  24: '6rem',       // 96px
  28: '7rem',       // 112px
  32: '8rem',       // 128px
  36: '9rem',       // 144px
  40: '10rem',      // 160px
  44: '11rem',      // 176px
  48: '12rem',      // 192px
  52: '13rem',      // 208px
  56: '14rem',      // 224px
  60: '15rem',      // 240px
  64: '16rem',      // 256px
  72: '18rem',      // 288px
  80: '20rem',      // 320px
  96: '24rem',      // 384px
} as const;

// Semantic spacing for specific use cases
export const semanticSpacing = {
  // Component internal spacing
  component: {
    xs: spacing[1],    // 4px
    sm: spacing[2],    // 8px
    md: spacing[4],    // 16px
    lg: spacing[6],    // 24px
    xl: spacing[8],    // 32px
  },
  
  // Layout spacing
  layout: {
    xs: spacing[4],    // 16px
    sm: spacing[6],    // 24px
    md: spacing[8],    // 32px
    lg: spacing[12],   // 48px
    xl: spacing[16],   // 64px
    '2xl': spacing[24], // 96px
    '3xl': spacing[32], // 128px
  },
  
  // Section spacing
  section: {
    xs: spacing[8],    // 32px
    sm: spacing[12],   // 48px
    md: spacing[16],   // 64px
    lg: spacing[24],   // 96px
    xl: spacing[32],   // 128px
    '2xl': spacing[40], // 160px
    '3xl': spacing[48], // 192px
  },
  
  // Container padding
  container: {
    xs: spacing[4],    // 16px
    sm: spacing[6],    // 24px
    md: spacing[8],    // 32px
    lg: spacing[12],   // 48px
    xl: spacing[16],   // 64px
  },
  
  // Grid gaps
  gap: {
    xs: spacing[2],    // 8px
    sm: spacing[4],    // 16px
    md: spacing[6],    // 24px
    lg: spacing[8],    // 32px
    xl: spacing[12],   // 48px
  },
} as const;

// Border radius scale
export const borderRadius = {
  none: '0rem',
  sm: '0.125rem',    // 2px
  base: '0.25rem',   // 4px
  md: '0.375rem',    // 6px
  lg: '0.5rem',      // 8px
  xl: '0.75rem',     // 12px
  '2xl': '1rem',     // 16px
  '3xl': '1.5rem',   // 24px
  full: '9999px',
  
  // Semantic border radius
  button: '0.375rem',    // 6px
  card: '0.5rem',        // 8px
  input: '0.375rem',     // 6px
  modal: '0.75rem',      // 12px
  terminal: '0.5rem',    // 8px - standard terminal radius
} as const;

// Border width scale
export const borderWidth = {
  0: '0px',
  1: '1px',
  2: '2px',
  4: '4px',
  8: '8px',
  
  // Semantic border widths
  thin: '1px',
  medium: '2px',
  thick: '4px',
  terminal: '1px',
} as const;

// Size scale for width/height
export const sizes = {
  ...spacing,
  
  // Fractional sizes
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  '9/12': '75%',
  '10/12': '83.333333%',
  '11/12': '91.666667%',
  
  // Viewport sizes
  screen: '100vh',
  full: '100%',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
  
  // Component-specific sizes
  button: {
    sm: '2rem',      // 32px
    md: '2.5rem',    // 40px
    lg: '3rem',      // 48px
  },
  
  input: {
    sm: '2rem',      // 32px
    md: '2.5rem',    // 40px
    lg: '3rem',      // 48px
  },
  
  avatar: {
    xs: '1.5rem',    // 24px
    sm: '2rem',      // 32px
    md: '2.5rem',    // 40px
    lg: '3rem',      // 48px
    xl: '4rem',      // 64px
  },
  
  icon: {
    xs: '0.75rem',   // 12px
    sm: '1rem',      // 16px
    md: '1.25rem',   // 20px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
  },
} as const;

// Container max-widths
export const maxWidth = {
  none: 'none',
  xs: '20rem',      // 320px
  sm: '24rem',      // 384px
  md: '28rem',      // 448px
  lg: '32rem',      // 512px
  xl: '36rem',      // 576px
  '2xl': '42rem',   // 672px
  '3xl': '48rem',   // 768px
  '4xl': '56rem',   // 896px
  '5xl': '64rem',   // 1024px
  '6xl': '72rem',   // 1152px
  '7xl': '80rem',   // 1280px
  full: '100%',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
  prose: '65ch',
  
  // Screen breakpoints
  screen: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;

// Utility functions
export const getSpacing = (key: keyof typeof spacing) => spacing[key];

export const getSemanticSpacing = (
  category: keyof typeof semanticSpacing,
  size: string
) => {
  return semanticSpacing[category]?.[size as keyof typeof semanticSpacing[typeof category]];
};

export const createSpacingUtilities = () => {
  const utilities: Record<string, any> = {};
  
  // Generate margin utilities
  Object.entries(spacing).forEach(([key, value]) => {
    utilities[`.m-${key}`] = { margin: value };
    utilities[`.mx-${key}`] = { marginLeft: value, marginRight: value };
    utilities[`.my-${key}`] = { marginTop: value, marginBottom: value };
    utilities[`.mt-${key}`] = { marginTop: value };
    utilities[`.mr-${key}`] = { marginRight: value };
    utilities[`.mb-${key}`] = { marginBottom: value };
    utilities[`.ml-${key}`] = { marginLeft: value };
  });
  
  // Generate padding utilities
  Object.entries(spacing).forEach(([key, value]) => {
    utilities[`.p-${key}`] = { padding: value };
    utilities[`.px-${key}`] = { paddingLeft: value, paddingRight: value };
    utilities[`.py-${key}`] = { paddingTop: value, paddingBottom: value };
    utilities[`.pt-${key}`] = { paddingTop: value };
    utilities[`.pr-${key}`] = { paddingRight: value };
    utilities[`.pb-${key}`] = { paddingBottom: value };
    utilities[`.pl-${key}`] = { paddingLeft: value };
  });
  
  // Generate gap utilities
  Object.entries(spacing).forEach(([key, value]) => {
    utilities[`.gap-${key}`] = { gap: value };
    utilities[`.gap-x-${key}`] = { columnGap: value };
    utilities[`.gap-y-${key}`] = { rowGap: value };
  });
  
  return utilities;
};

// Export all spacing tokens
export const spacingTokens = {
  spacing,
  semanticSpacing,
  borderRadius,
  borderWidth,
  sizes,
  maxWidth,
} as const;

// Type exports
export type Spacing = typeof spacing;
export type SemanticSpacing = typeof semanticSpacing;
export type BorderRadius = typeof borderRadius;
export type BorderWidth = typeof borderWidth;
export type Sizes = typeof sizes;
export type MaxWidth = typeof maxWidth;
export type SpacingTokens = typeof spacingTokens;
