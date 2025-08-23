import React, { forwardRef } from 'react';
import { cn } from '../utils/cn';
import { useTheme } from '../providers/ThemeProvider';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'interactive';
  children: React.ReactNode;
  /** Enable hover animations */
  animate?: boolean;
  /** Custom sound effect callback */
  onSound?: () => void;
  /** Padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className, 
    variant = 'default', 
    children, 
    animate = true,
    onSound,
    padding = 'md',
    onClick,
    ...props 
  }, ref) => {
    const { variants } = useTheme();

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (onClick) {
        onSound?.();
        onClick(e);
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl border transition-all duration-300',
          paddingClasses[padding],
          variants.card[variant],
          onClick && 'cursor-pointer',
          animate && variant === 'interactive' && 'hover:scale-[1.02] hover:-translate-y-1',
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

Card.displayName = 'Card';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col space-y-1.5 pb-6', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

export interface CardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  /** Text size variant */
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const titleSizes = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
  xl: 'text-3xl',
};

export const CardTitle = forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ className, children, size = 'lg', ...props }, ref) => {
    const { variants } = useTheme();

    return (
      <h3
        ref={ref}
        className={cn(
          'leading-none font-semibold tracking-tight',
          titleSizes[size],
          variants.text.accent,
          className
        )}
        {...props}
      >
        {children}
      </h3>
    );
  }
);

CardTitle.displayName = 'CardTitle';

export interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ className, children, ...props }, ref) => {
  const { variants } = useTheme();

  return (
    <p ref={ref} className={cn(variants.text.secondary, className)} {...props}>
      {children}
    </p>
  );
});

CardDescription.displayName = 'CardDescription';

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('pt-0', className)} {...props}>
        {children}
      </div>
    );
  }
);

CardContent.displayName = 'CardContent';

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-center pt-6', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';
