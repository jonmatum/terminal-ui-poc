import React, { forwardRef } from 'react';
import { cn } from '../utils/cn';
import { useTheme } from '../providers/ThemeProvider';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, disabled, children, ...props }, ref) => {
    const { variants } = useTheme();

    return (
      <button
        className={cn(
          // Base styles
          'inline-flex items-center justify-center rounded-md font-mono font-medium',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current',
          'disabled:pointer-events-none disabled:opacity-50',
          'relative overflow-hidden',
          
          // Size styles
          sizeClasses[size],
          
          // Variant styles
          variants.button[variant],
          
          className
        )}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          </div>
        )}
        <span className={loading ? 'opacity-0' : ''}>
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';
