import React, { forwardRef } from 'react';
import { cn } from '../utils/cn';
import { useTheme } from '../providers/ThemeProvider';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
  /** Enable hover scale animation */
  animate?: boolean;
  /** Custom sound effect callback */
  onSound?: () => void;
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      loading,
      disabled,
      children,
      animate = true,
      onSound,
      onClick,
      ...props
    },
    ref
  ) => {
    const { variants } = useTheme();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled && !loading) {
        onSound?.();
        onClick?.(e);
      }
    };

    return (
      <button
        className={cn(
          // Base styles
          'inline-flex items-center justify-center rounded-xl font-mono font-semibold',
          'focus-visible:ring-2 focus-visible:ring-current focus-visible:outline-none',
          'disabled:pointer-events-none disabled:opacity-50',
          'relative overflow-hidden transition-all duration-200',

          // Animation styles
          animate && 'hover:scale-[1.02] active:scale-[0.98]',

          // Size styles
          sizeClasses[size],

          // Variant styles
          variants.button[variant],

          className
        )}
        disabled={disabled || loading}
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          </div>
        )}
        <span className={loading ? 'opacity-0' : ''}>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';
