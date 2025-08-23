import React, { forwardRef } from 'react';
import { cn } from '../utils/cn';
import { useTheme } from '../providers/ThemeProvider';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary' | 'muted' | 'accent' | 'inverse';
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
  /** Enable gradient text effect */
  gradient?: boolean;
  /** Enable glow effect */
  glow?: boolean;
  /** Custom sound effect callback */
  onSound?: () => void;
}

const sizeClasses = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
};

const weightClasses = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
};

const alignClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ 
    className, 
    variant = 'primary', 
    as = 'p', 
    size = 'base',
    weight = 'normal',
    align = 'left',
    gradient = false,
    glow = false,
    onSound,
    onClick,
    children, 
    ...props 
  }, ref) => {
    const { variants, mode } = useTheme();
    const Component = as;

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      if (onClick) {
        onSound?.();
        onClick(e);
      }
    };

    const getGradientClass = () => {
      if (!gradient) return '';
      return mode === 'tron'
        ? 'bg-gradient-to-r from-[#00FFFF] via-[#0080FF] to-[#FF8000] bg-clip-text text-transparent'
        : 'bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent';
    };

    const getGlowClass = () => {
      if (!glow) return '';
      return mode === 'tron'
        ? 'drop-shadow-[0_0_20px_#00FFFF]'
        : 'drop-shadow-lg';
    };

    // Handle inverse variant by mapping to primary or using custom class
    const getVariantClass = () => {
      if (variant === 'inverse') {
        return mode === 'tron' ? 'text-black' : 'text-black';
      }
      return variants.text[variant as keyof typeof variants.text];
    };

    const elementProps = {
      className: cn(
        getVariantClass(),
        sizeClasses[size],
        weightClasses[weight],
        alignClasses[align],
        gradient && getGradientClass(),
        glow && getGlowClass(),
        onClick && 'cursor-pointer hover:underline',
        className
      ),
      onClick: handleClick,
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
