import React, { forwardRef } from 'react';
import { cn } from '../utils/cn';
import { useTheme } from '../providers/ThemeProvider';

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary' | 'muted' | 'accent';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  /** Enable hover effects */
  hover?: boolean;
  /** Custom sound effect callback */
  onSound?: () => void;
}

const sizeClasses = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
};

export const Icon = forwardRef<HTMLDivElement, IconProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    hover = false,
    children, 
    onSound,
    onClick,
    ...props 
  }, ref) => {
    const { variants, mode } = useTheme();

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (onClick) {
        onSound?.();
        onClick(e);
      }
    };

    const getHoverClass = () => {
      if (!hover) return '';
      return mode === 'tron'
        ? 'hover:text-[#FF8000]'
        : 'hover:text-green-300';
    };

    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center transition-all duration-200',
          sizeClasses[size],
          variants.text[variant],
          hover && getHoverClass(),
          onClick && 'cursor-pointer',
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Icon.displayName = 'Icon';
