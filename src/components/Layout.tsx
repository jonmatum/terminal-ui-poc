import React, { ReactNode, ElementType } from 'react';
import { cn } from '../utils/cn';
import { useTheme } from '../providers/ThemeProvider';

// Container Types
export type ContainerSize =
  | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
  | 'screen-sm' | 'screen-md' | 'screen-lg' | 'screen-xl' | 'screen-2xl'
  | 'full' | 'none';

export type ContainerPadding = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ContainerSpacing = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Grid Types
export type GridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type GridGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Section Types
export type SectionVariant = 'default' | 'hero' | 'feature' | 'content' | 'compact';
export type SectionBackground = 'default' | 'elevated' | 'subtle';

// Container Component
export interface ContainerProps {
  children: ReactNode;
  size?: ContainerSize;
  padding?: ContainerPadding;
  spacing?: ContainerSpacing;
  center?: boolean;
  className?: string;
  as?: ElementType;
}

const containerSizes: Record<ContainerSize, string> = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
  'screen-sm': 'max-w-screen-sm',
  'screen-md': 'max-w-screen-md',
  'screen-lg': 'max-w-screen-lg',
  'screen-xl': 'max-w-screen-xl',
  'screen-2xl': 'max-w-screen-2xl',
  full: 'w-full',
  none: '',
};

const containerPadding: Record<ContainerPadding, string> = {
  none: '',
  xs: 'px-2 py-1',
  sm: 'px-4 py-2',
  md: 'px-6 py-4',
  lg: 'px-8 py-6',
  xl: 'px-10 py-8',
  '2xl': 'px-12 py-10',
};

const containerSpacing: Record<ContainerSpacing, string> = {
  none: '',
  xs: 'my-2',
  sm: 'my-4',
  md: 'my-8',
  lg: 'my-12',
  xl: 'my-16',
  '2xl': 'my-20',
};

export const Container: React.FC<ContainerProps> = ({
  children,
  size = '4xl',
  padding = 'md',
  spacing = 'none',
  center = true,
  className,
  as: Component = 'div',
  ...props
}) => {
  const classes = cn(
    containerSizes[size],
    containerPadding[padding],
    containerSpacing[spacing],
    center && 'mx-auto',
    className
  );

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

// Grid Component
export interface GridProps {
  children: ReactNode;
  cols?: GridColumns;
  smCols?: GridColumns;
  mdCols?: GridColumns;
  lgCols?: GridColumns;
  xlCols?: GridColumns;
  gap?: GridGap;
  className?: string;
  as?: ElementType;
}

const gridColumns: Record<GridColumns, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
  9: 'grid-cols-9',
  10: 'grid-cols-10',
  11: 'grid-cols-11',
  12: 'grid-cols-12',
};

const gridGaps: Record<GridGap, string> = {
  none: 'gap-0',
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
  '2xl': 'gap-12',
};

export const Grid: React.FC<GridProps> = ({
  children,
  cols = 1,
  smCols,
  mdCols,
  lgCols,
  xlCols,
  gap = 'md',
  className,
  as: Component = 'div',
  ...props
}) => {
  const classes = cn(
    'grid',
    gridColumns[cols],
    smCols && `sm:${gridColumns[smCols]}`,
    mdCols && `md:${gridColumns[mdCols]}`,
    lgCols && `lg:${gridColumns[lgCols]}`,
    xlCols && `xl:${gridColumns[xlCols]}`,
    gridGaps[gap],
    className
  );

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

// GridItem Component
export interface GridItemProps {
  children: ReactNode;
  span?: GridColumns;
  smSpan?: GridColumns;
  mdSpan?: GridColumns;
  lgSpan?: GridColumns;
  xlSpan?: GridColumns;
  className?: string;
  as?: ElementType;
}

const gridSpans: Record<GridColumns, string> = {
  1: 'col-span-1',
  2: 'col-span-2',
  3: 'col-span-3',
  4: 'col-span-4',
  5: 'col-span-5',
  6: 'col-span-6',
  7: 'col-span-7',
  8: 'col-span-8',
  9: 'col-span-9',
  10: 'col-span-10',
  11: 'col-span-11',
  12: 'col-span-12',
};

export const GridItem: React.FC<GridItemProps> = ({
  children,
  span,
  smSpan,
  mdSpan,
  lgSpan,
  xlSpan,
  className,
  as: Component = 'div',
  ...props
}) => {
  const classes = cn(
    span && gridSpans[span],
    smSpan && `sm:${gridSpans[smSpan]}`,
    mdSpan && `md:${gridSpans[mdSpan]}`,
    lgSpan && `lg:${gridSpans[lgSpan]}`,
    xlSpan && `xl:${gridSpans[xlSpan]}`,
    className
  );

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

// Section Component
export interface SectionProps {
  children: ReactNode;
  variant?: SectionVariant;
  background?: SectionBackground;
  containerSize?: ContainerSize;
  className?: string;
  id?: string;
  as?: ElementType;
}

export const Section: React.FC<SectionProps> = ({
  children,
  variant = 'default',
  background = 'default',
  containerSize = '4xl',
  className,
  as: Component = 'section',
  ...props
}) => {
  const { mode } = useTheme();
  
  const sectionClasses = cn(
    'relative',
    // Variant styles
    {
      'py-8 md:py-12': variant === 'default',
      'py-16 md:py-24 lg:py-32': variant === 'hero',
      'py-12 md:py-16 lg:py-20': variant === 'feature',
      'py-8 md:py-12 lg:py-16': variant === 'content',
      'py-4 md:py-6 lg:py-8': variant === 'compact',
    },
    // Background styles
    {
      'bg-transparent': background === 'default',
      'bg-black/20 border-y border-current/10': background === 'elevated' && mode === 'matrix',
      'bg-gray-900/20 border-y border-current/10': background === 'elevated' && mode === 'tron',
      'bg-current/5': background === 'subtle',
    },
    className
  );

  return (
    <Component className={sectionClasses} {...props}>
      <Container size={containerSize}>
        {children}
      </Container>
    </Component>
  );
};

// Layout Presets
export interface PresetSectionProps {
  children: ReactNode;
  containerSize?: ContainerSize;
  className?: string;
  id?: string;
}

export interface PresetGridProps {
  children: ReactNode;
  gap?: GridGap;
  className?: string;
}

// Hero Section preset
export const HeroSection: React.FC<PresetSectionProps> = ({
  children,
  containerSize = '4xl',
  className = '',
  ...props
}) => (
  <Section variant="hero" containerSize={containerSize} className={className} {...props}>
    {children}
  </Section>
);

// Feature Section preset
export const FeatureSection: React.FC<PresetSectionProps> = ({
  children,
  containerSize = 'screen-xl',
  className = '',
  ...props
}) => (
  <Section variant="feature" containerSize={containerSize} className={className} {...props}>
    {children}
  </Section>
);

// Content Section preset
export const ContentSection: React.FC<PresetSectionProps> = ({
  children,
  containerSize = '4xl',
  className = '',
  ...props
}) => (
  <Section variant="content" containerSize={containerSize} className={className} {...props}>
    {children}
  </Section>
);

// Card Grid preset
export const CardGrid: React.FC<PresetGridProps> = ({ 
  children, 
  gap = 'md', 
  className = '', 
  ...props 
}) => (
  <Grid cols={1} mdCols={2} xlCols={3} gap={gap} className={className} {...props}>
    {children}
  </Grid>
);

// Feature Grid preset
export const FeatureGrid: React.FC<PresetGridProps> = ({
  children,
  gap = 'lg',
  className = '',
  ...props
}) => (
  <Grid cols={1} smCols={2} mdCols={3} gap={gap} className={className} {...props}>
    {children}
  </Grid>
);

// Two Column Grid preset
export const TwoColumnGrid: React.FC<PresetGridProps> = ({
  children,
  gap = 'md',
  className = '',
  ...props
}) => (
  <Grid cols={1} mdCols={2} gap={gap} className={className} {...props}>
    {children}
  </Grid>
);
