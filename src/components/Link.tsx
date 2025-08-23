import React, { forwardRef } from 'react';
import { cn } from '../utils/cn';
import { useTheme } from '../providers/ThemeProvider';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'underline' | 'button';
  children: React.ReactNode;
  /** Custom sound effect callback */
  onSound?: () => void;
  /** External link (adds target="_blank" and rel="noopener noreferrer") */
  external?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ 
    className, 
    variant = 'primary', 
    children, 
    onSound,
    onClick,
    external = false,
    href,
    target,
    rel,
    ...props 
  }, ref) => {
    const { mode } = useTheme();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
            ? 'text-[#00FFFF] hover:text-[#FF8000] transition-colors'
            : 'text-green-400 hover:text-green-300 transition-colors';
        case 'underline':
          return isTron
            ? 'underline underline-offset-2 text-[#00FFFF] hover:text-[#FF8000] transition-colors'
            : 'underline underline-offset-2 text-green-400 hover:text-green-300 transition-colors';
        case 'button':
          return isTron
            ? 'inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#00FFFF] text-black hover:bg-[#0080FF] hover:text-white transition-all font-semibold'
            : 'inline-flex items-center justify-center px-4 py-2 rounded-xl bg-green-700 text-white hover:bg-green-600 transition-all font-semibold';
        default:
          return '';
      }
    };

    // Handle external links
    const linkTarget = external ? '_blank' : target;
    const linkRel = external ? 'noopener noreferrer' : rel;

    return (
      <a
        ref={ref}
        href={href}
        target={linkTarget}
        rel={linkRel}
        className={cn(
          getVariantClasses(),
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    );
  }
);

Link.displayName = 'Link';
