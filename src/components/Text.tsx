import React, { forwardRef } from 'react';
import { cn } from '../utils/cn';
import { useTheme } from '../providers/ThemeProvider';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary' | 'muted' | 'accent';
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ className, variant = 'primary', as: Component = 'p', children, ...props }, ref) => {
    const { variants } = useTheme();

    return (
      <Component
        ref={ref as any}
        className={cn(
          variants.text[variant],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';
