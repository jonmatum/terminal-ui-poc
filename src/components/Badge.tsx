import React, { forwardRef } from 'react';
import { cn } from '../utils/cn';
import { useTheme } from '../providers/ThemeProvider';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md';
  children: React.ReactNode;
  /** Custom sound effect callback */
  onSound?: () => void;
}

const sizeClasses = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'sm', 
    children, 
    onSound,
    onClick,
    ...props 
  }, ref) => {
    const { mode } = useTheme();

    const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
      if (onClick) {
        onSound?.();
        onClick(e);
      }
    };

    const getVariantClasses = () => {
      const isTron = mode === 'tron';
      
      switch (variant) {
        case 'primary':
          return isTron
            ? 'bg-[#00FFFF]/20 text-[#00FFFF] border border-[#00FFFF]'
            : 'bg-green-400/20 text-green-400 border border-green-400';
        case 'secondary':
          return isTron
            ? 'bg-[#0080FF]/20 text-[#0080FF] border border-[#0080FF]'
            : 'bg-green-600/20 text-green-300 border border-green-600';
        case 'outline':
          return isTron
            ? 'border border-[#00FFFF] text-[#00FFFF] bg-transparent'
            : 'border border-green-400 text-green-400 bg-transparent';
        case 'success':
          return isTron
            ? 'bg-[#00FF80]/20 text-[#00FF80] border border-[#00FF80]'
            : 'bg-green-500/20 text-green-500 border border-green-500';
        case 'warning':
          return isTron
            ? 'bg-[#FFFF00]/20 text-[#FFFF00] border border-[#FFFF00]'
            : 'bg-yellow-500/20 text-yellow-500 border border-yellow-500';
        case 'error':
          return isTron
            ? 'bg-[#FF0080]/20 text-[#FF0080] border border-[#FF0080]'
            : 'bg-red-500/20 text-red-500 border border-red-500';
        default:
          return '';
      }
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full font-medium transition-colors',
          sizeClasses[size],
          getVariantClasses(),
          onClick && 'cursor-pointer hover:opacity-80',
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
