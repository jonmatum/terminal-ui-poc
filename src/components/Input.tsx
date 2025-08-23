import React, { forwardRef } from 'react';
import { cn } from '../utils/cn';
import { useTheme } from '../providers/ThemeProvider';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  label?: string;
  helper?: string;
  variant?: 'default' | 'search' | 'ghost';
  /** Icon to display on the left side */
  leftIcon?: React.ReactNode;
  /** Icon to display on the right side */
  rightIcon?: React.ReactNode;
  /** Custom sound effect callback */
  onSound?: () => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type, 
    error, 
    label, 
    helper, 
    variant = 'default',
    leftIcon,
    rightIcon,
    onSound,
    onFocus,
    onChange,
    ...props 
  }, ref) => {
    const { variants, mode } = useTheme();

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      onSound?.();
      onFocus?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
    };

    const getVariantClasses = () => {
      const isTron = mode === 'tron';
      
      const baseClasses = 'flex w-full rounded-md px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2';
      
      switch (variant) {
        case 'default':
          return cn(
            baseClasses,
            'h-10 border bg-transparent',
            isTron
              ? 'border-[#00FFFF]/30 text-[#00FFFF] placeholder:text-[#00FFFF]/50 focus:border-[#00FFFF] focus:ring-[#00FFFF]/20'
              : 'border-green-700 text-green-400 placeholder:text-green-400/50 focus:border-green-400 focus:ring-green-400/20',
            error && (isTron ? 'border-[#FF0080] focus:border-[#FF0080] focus:ring-[#FF0080]/20' : 'border-red-500 focus:border-red-500 focus:ring-red-500/20')
          );
        case 'search':
          return cn(
            baseClasses,
            'h-10 border bg-transparent',
            leftIcon ? 'pl-10' : 'pl-3',
            rightIcon ? 'pr-10' : 'pr-3',
            isTron
              ? 'border-[#00FFFF]/30 text-[#00FFFF] placeholder:text-[#00FFFF]/50 focus:border-[#00FFFF] focus:ring-[#00FFFF]/20'
              : 'border-green-700 text-green-400 placeholder:text-green-400/50 focus:border-green-400 focus:ring-green-400/20'
          );
        case 'ghost':
          return cn(
            'w-full bg-transparent border-0 border-b-2 rounded-none py-2 px-0 text-sm transition-colors focus:outline-none',
            isTron
              ? 'border-[#00FFFF]/30 text-[#00FFFF] placeholder:text-[#00FFFF]/50 focus:border-[#00FFFF]'
              : 'border-green-700 text-green-400 placeholder:text-green-400/50 focus:border-green-400'
          );
        default:
          return cn(baseClasses, variants.input.default);
      }
    };

    const inputElement = (
      <input
        type={type}
        className={cn(
          getVariantClasses(),
          'file:border-0 file:bg-transparent file:text-sm file:font-medium',
          className
        )}
        ref={ref}
        onFocus={handleFocus}
        onChange={handleChange}
        {...props}
      />
    );

    const inputWithIcons = leftIcon || rightIcon ? (
      <div className="relative">
        {leftIcon && (
          <div className={cn(
            'absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none',
            mode === 'tron' ? 'text-[#00FFFF]/70' : 'text-green-400/70'
          )}>
            {leftIcon}
          </div>
        )}
        {inputElement}
        {rightIcon && (
          <div className={cn(
            'absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none',
            mode === 'tron' ? 'text-[#00FFFF]/70' : 'text-green-400/70'
          )}>
            {rightIcon}
          </div>
        )}
      </div>
    ) : inputElement;

    return (
      <div className="space-y-2">
        {label && (
          <label
            className={cn('block text-sm font-medium', variants.text.primary)}
          >
            {label}
          </label>
        )}
        {inputWithIcons}
        {helper && (
          <p
            className={cn(
              'text-sm',
              error ? (mode === 'tron' ? 'text-[#FF0080]' : 'text-red-500') : variants.text.muted
            )}
          >
            {helper}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
