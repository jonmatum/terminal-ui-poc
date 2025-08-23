import React, { forwardRef } from 'react';
import { cn } from '../utils/cn';
import { useTheme } from '../providers/ThemeProvider';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  label?: string;
  helper?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, label, helper, ...props }, ref) => {
    const { variants } = useTheme();

    return (
      <div className="space-y-2">
        {label && (
          <label
            className={cn('block text-sm font-medium', variants.text.primary)}
          >
            {label}
          </label>
        )}
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md px-3 py-2 text-sm',
            'file:border-0 file:bg-transparent file:text-sm file:font-medium',
            variants.input.default,
            error && variants.input.error,
            className
          )}
          ref={ref}
          {...props}
        />
        {helper && (
          <p
            className={cn(
              'text-sm',
              error ? 'text-red-500' : variants.text.muted
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
