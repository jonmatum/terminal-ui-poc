/**
 * Terminal UI Tailwind CSS Configuration
 * 
 * This configuration leverages design tokens and provides utilities
 * for building terminal-style interfaces quickly.
 */

import { tokens } from '../tokens';
import { createColorUtilities } from '../tokens/colors';
import { createTypographyUtilities } from '../tokens/typography';
import { createSpacingUtilities } from '../tokens/spacing';

// Base Tailwind configuration using design tokens
export const terminalUITailwindConfig = {
  content: [
    './node_modules/@jonmatum/terminal-ui/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    // Override default theme with design tokens
    colors: {
      // Inherit Tailwind's default colors
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: '#000000',
      white: '#ffffff',
      
      // Design token colors - use individual palettes
      matrix: tokens.colors.matrix,
      tron: tokens.colors.tron,
      neutral: tokens.colors.neutral,
      semantic: tokens.colors.semantic,
      
      // Semantic colors using CSS custom properties
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      accent: 'var(--color-accent)',
      background: 'var(--color-background)',
      foreground: 'var(--color-foreground)',
      surface: 'var(--color-surface)',
      border: 'var(--color-border)',
      
      // Text colors
      'text-primary': 'var(--color-text-primary)',
      'text-secondary': 'var(--color-text-secondary)',
      'text-muted': 'var(--color-text-muted)',
      
      // State colors
      hover: 'var(--color-hover)',
      active: 'var(--color-active)',
      focus: 'var(--color-focus)',
      disabled: 'var(--color-disabled)',
      
      // Effect colors
      glow: 'var(--color-glow)',
      shadow: 'var(--color-shadow)',
    },
    
    // Typography from design tokens
    fontFamily: tokens.typography.fontFamily,
    fontSize: tokens.typography.fontSize,
    fontWeight: tokens.typography.fontWeight,
    letterSpacing: tokens.typography.letterSpacing,
    
    // Spacing from design tokens
    spacing: tokens.spacing,
    borderRadius: tokens.borderRadius,
    
    // Extend default theme
    extend: {
      // Animation tokens
      animation: {
        // Basic animations
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-out': 'fadeOut 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.3s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'slide-left': 'slideLeft 0.3s ease-out forwards',
        'slide-right': 'slideRight 0.3s ease-out forwards',
        'scale-in': 'scaleIn 0.2s ease-out forwards',
        'scale-out': 'scaleOut 0.2s ease-out forwards',
        
        // Terminal-specific animations
        'typewriter': 'typewriter 2s steps(40) forwards',
        'blink': 'blink 1s step-end infinite',
        'glow': 'glow 1.5s ease-in-out infinite alternate',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        
        // Matrix/TRON animations
        'matrix-rain': 'matrixRain 3s linear infinite',
        'matrix-fall': 'matrixFall 5s linear infinite',
        'tron-pulse': 'tronPulse 1.5s ease-in-out infinite',
        
        // Utility animations
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'spin-slow': 'spin 2s linear infinite',
      },
      
      // Keyframes
      keyframes: {
        // Basic keyframes
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.9)', opacity: '0' },
        },
        
        // Terminal-specific keyframes
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        glow: {
          '0%': { textShadow: '0 0 5px currentColor' },
          '100%': { textShadow: '0 0 20px currentColor, 0 0 30px currentColor' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px var(--color-glow)' },
          '50%': { boxShadow: '0 0 20px var(--color-glow), 0 0 30px var(--color-glow)' },
        },
        
        // Matrix/TRON keyframes
        matrixRain: {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        matrixFall: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        tronPulse: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        
        // Utility keyframes
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      
      // Box shadows with glow effects
      boxShadow: {
        ...tokens.shadows,
        
        // Terminal-specific shadows
        'terminal-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'terminal': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'terminal-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        
        // Glow shadows
        'glow-sm': '0 0 5px var(--color-glow)',
        'glow': '0 0 10px var(--color-glow), 0 0 20px var(--color-glow)',
        'glow-lg': '0 0 15px var(--color-glow), 0 0 30px var(--color-glow)',
        'glow-xl': '0 0 20px var(--color-glow), 0 0 40px var(--color-glow)',
        
        // Theme-specific glows
        'matrix-glow': '0 0 10px #22c55e, 0 0 20px #22c55e',
        'matrix-glow-lg': '0 0 15px #22c55e, 0 0 30px #22c55e, 0 0 45px #22c55e',
        'tron-glow': '0 0 10px #00ffff, 0 0 20px #00ffff',
        'tron-glow-lg': '0 0 15px #00ffff, 0 0 30px #00ffff, 0 0 45px #00ffff',
      },
      
      // Text shadows
      textShadow: {
        'glow': '0 0 10px currentColor',
        'glow-lg': '0 0 20px currentColor, 0 0 30px currentColor',
        'matrix': '0 0 10px #22c55e',
        'tron': '0 0 10px #00ffff',
      },
      
      // Backdrop blur
      backdropBlur: {
        terminal: '12px',
      },
      
      // Z-index scale
      zIndex: tokens.zIndex,
      
      // Transition timing functions
      transitionTimingFunction: {
        terminal: 'cubic-bezier(0.4, 0, 0.2, 1)',
        bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      
      // Custom gradients
      backgroundImage: {
        'matrix-gradient': 'linear-gradient(135deg, #000000 0%, #14532d 100%)',
        'tron-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #111111 100%)',
        'terminal-grid': `
          linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
        `,
        'tron-grid': `
          linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
        `,
      },
      
      // Background size for grid patterns
      backgroundSize: {
        'grid': '20px 20px',
        'grid-lg': '40px 40px',
      },
      
      // Container max widths
      maxWidth: tokens.sizes.container,
    },
  },
  
  plugins: [
    // Custom plugin for terminal-specific utilities
    function({ addUtilities, addComponents, theme }: any) {
      // Terminal component utilities
      addComponents({
        // Terminal window
        '.terminal-window': {
          backgroundColor: 'var(--color-background)',
          border: '1px solid var(--color-border)',
          borderRadius: theme('borderRadius.terminal'),
          fontFamily: theme('fontFamily.terminal').join(', '),
          color: 'var(--color-text-primary)',
          boxShadow: '0 0 20px var(--color-shadow)',
        },
        
        // Terminal button
        '.terminal-button': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: theme('borderRadius.button'),
          fontFamily: theme('fontFamily.terminal').join(', '),
          fontWeight: theme('fontWeight.medium'),
          transition: 'all 0.2s ease',
          cursor: 'pointer',
          
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 0 15px var(--color-glow)',
          },
          
          '&:active': {
            transform: 'scale(0.98)',
          },
          
          '&:disabled': {
            opacity: '0.5',
            cursor: 'not-allowed',
            transform: 'none',
          },
        },
        
        // Terminal card
        '.terminal-card': {
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: theme('borderRadius.card'),
          padding: theme('spacing.6'),
          boxShadow: '0 0 10px var(--color-shadow)',
        },
        
        // Terminal input
        '.terminal-input': {
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: theme('borderRadius.input'),
          fontFamily: theme('fontFamily.terminal').join(', '),
          color: 'var(--color-text-primary)',
          
          '&:focus': {
            outline: 'none',
            borderColor: 'var(--color-focus)',
            boxShadow: '0 0 0 2px var(--color-focus)',
          },
        },
      });
      
      // Terminal utility classes
      addUtilities({
        // Text utilities
        '.text-glow': {
          textShadow: '0 0 10px currentColor',
        },
        '.text-glow-lg': {
          textShadow: '0 0 20px currentColor, 0 0 30px currentColor',
        },
        
        // Matrix utilities
        '.matrix-text': {
          color: '#22c55e',
          textShadow: '0 0 10px #22c55e',
        },
        '.matrix-bg': {
          backgroundColor: '#000000',
        },
        '.matrix-border': {
          borderColor: '#166534',
        },
        
        // TRON utilities
        '.tron-text': {
          color: '#00ffff',
          textShadow: '0 0 10px #00ffff',
        },
        '.tron-bg': {
          backgroundColor: '#0a0a0a',
        },
        '.tron-border': {
          borderColor: '#00ccff',
        },
        
        // Effect utilities
        '.scanlines': {
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: `
              linear-gradient(
                transparent 50%,
                rgba(0, 255, 0, 0.03) 50%,
                rgba(0, 255, 0, 0.05) 51%,
                transparent 52%
              )
            `,
            backgroundSize: '100% 4px',
            pointerEvents: 'none',
          },
        },
        
        '.crt-effect': {
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: `
              radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%)
            `,
            pointerEvents: 'none',
          },
        },
        
        // Interactive utilities
        '.hover-glow': {
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 0 15px var(--color-glow)',
          },
        },
        
        '.hover-scale': {
          transition: 'transform 0.2s ease',
          '&:hover': {
            transform: 'scale(1.02)',
          },
        },
        
        '.active-scale': {
          '&:active': {
            transform: 'scale(0.98)',
          },
        },
      });
    },
  ],
};

// Utility function to merge with existing Tailwind config
export const mergeWithTailwindConfig = (existingConfig: any = {}) => {
  return {
    ...existingConfig,
    content: [
      ...(existingConfig.content || []),
      ...terminalUITailwindConfig.content,
    ],
    theme: {
      ...existingConfig.theme,
      extend: {
        ...existingConfig.theme?.extend,
        ...terminalUITailwindConfig.theme.extend,
      },
    },
    plugins: [
      ...(existingConfig.plugins || []),
      ...terminalUITailwindConfig.plugins,
    ],
  };
};

// Export preset configurations
export const matrixPreset = {
  theme: {
    extend: {
      colors: {
        primary: '#22c55e',
        secondary: '#86efac',
        accent: '#16a34a',
        background: '#000000',
        surface: '#14532d',
      },
    },
  },
};

export const tronPreset = {
  theme: {
    extend: {
      colors: {
        primary: '#00ffff',
        secondary: '#8a2be2',
        accent: '#ff8000',
        background: '#000000',
        surface: '#0a0a0a',
      },
    },
  },
};

export default terminalUITailwindConfig;
