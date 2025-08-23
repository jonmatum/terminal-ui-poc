import React, { forwardRef } from 'react';
import { cn } from '../utils/cn';
import { useTheme } from '../providers/ThemeProvider';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary' | 'muted' | 'accent';
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ className, variant = 'primary', as = 'p', children, ...props }, ref) => {
    const { variants } = useTheme();
    const Component = as;

    const elementProps = {
      className: cn(variants.text[variant], className),
      ...props,
    };

    if (Component === 'p') {
      return (
        <p ref={ref as React.Ref<HTMLParagraphElement>} {...elementProps}>
          {children}
        </p>
      );
    }

    if (Component === 'span') {
      return (
        <span ref={ref as React.Ref<HTMLSpanElement>} {...elementProps}>
          {children}
        </span>
      );
    }

    if (Component === 'div') {
      return (
        <div ref={ref as React.Ref<HTMLDivElement>} {...elementProps}>
          {children}
        </div>
      );
    }

    if (Component === 'h1') {
      return (
        <h1 ref={ref as React.Ref<HTMLHeadingElement>} {...elementProps}>
          {children}
        </h1>
      );
    }

    if (Component === 'h2') {
      return (
        <h2 ref={ref as React.Ref<HTMLHeadingElement>} {...elementProps}>
          {children}
        </h2>
      );
    }

    if (Component === 'h3') {
      return (
        <h3 ref={ref as React.Ref<HTMLHeadingElement>} {...elementProps}>
          {children}
        </h3>
      );
    }

    if (Component === 'h4') {
      return (
        <h4 ref={ref as React.Ref<HTMLHeadingElement>} {...elementProps}>
          {children}
        </h4>
      );
    }

    if (Component === 'h5') {
      return (
        <h5 ref={ref as React.Ref<HTMLHeadingElement>} {...elementProps}>
          {children}
        </h5>
      );
    }

    if (Component === 'h6') {
      return (
        <h6 ref={ref as React.Ref<HTMLHeadingElement>} {...elementProps}>
          {children}
        </h6>
      );
    }

    // Default fallback
    return (
      <p ref={ref as React.Ref<HTMLParagraphElement>} {...elementProps}>
        {children}
      </p>
    );
  }
);

Text.displayName = 'Text';
