import { ThemeMode, ThemeColors } from '../types/theme';

// Enhanced theme configuration with more comprehensive styling options
export interface EnhancedThemeColors {
  // Base colors (matching existing interface)
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  border: string;
  text: {
    primary: string;
    secondary: string;
    muted: string;
  };
  glow: string;
  shadow: string;
  
  // Extended properties
  foreground: string;
  
  // Extended surface colors
  surfaces: {
    primary: string;
    secondary: string;
    tertiary: string;
    elevated: string;
    overlay: string;
  };
  
  // Interactive states
  interactive: {
    hover: string;
    active: string;
    focus: string;
    disabled: string;
  };
  
  // Semantic colors
  semantic: {
    success: string;
    warning: string;
    error: string;
    info: string;
  };
  
  // Gradients
  gradients: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
  
  // Shadows and glows
  effects: {
    shadow: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    glow: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    blur: {
      sm: string;
      md: string;
      lg: string;
    };
  };
}

// Matrix Theme Configuration
export const matrixTheme: EnhancedThemeColors = {
  // Base colors (matching existing interface)
  primary: '#22C55E',
  secondary: '#86EFAC',
  accent: '#16A34A',
  background: '#000000',
  surface: '#14532D',
  border: '#22C55E',
  text: {
    primary: '#22C55E',
    secondary: '#86EFAC',
    muted: 'rgba(34, 197, 94, 0.7)',
  },
  glow: '0 0 15px rgba(34, 197, 94, 0.4)',
  shadow: '0 4px 6px rgba(34, 197, 94, 0.1)',
  
  // Extended properties
  foreground: '#22C55E',
  
  // Extended surface colors
  surfaces: {
    primary: '#000000',
    secondary: '#0A0A0A',
    tertiary: '#14532D',
    elevated: 'rgba(20, 83, 45, 0.8)',
    overlay: 'rgba(0, 0, 0, 0.9)',
  },
  
  // Interactive states
  interactive: {
    hover: '#16A34A',
    active: '#15803D',
    focus: '#22C55E',
    disabled: 'rgba(34, 197, 94, 0.3)',
  },
  
  // Semantic colors
  semantic: {
    success: '#22C55E',
    warning: '#EAB308',
    error: '#EF4444',
    info: '#3B82F6',
  },
  
  // Gradients
  gradients: {
    primary: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
    secondary: 'linear-gradient(135deg, #86EFAC 0%, #22C55E 100%)',
    accent: 'linear-gradient(135deg, #16A34A 0%, #15803D 100%)',
    background: 'linear-gradient(180deg, #000000 0%, #0A0A0A 100%)',
  },
  
  // Effects
  effects: {
    shadow: {
      sm: '0 1px 2px rgba(34, 197, 94, 0.1)',
      md: '0 4px 6px rgba(34, 197, 94, 0.1), 0 2px 4px rgba(34, 197, 94, 0.06)',
      lg: '0 10px 15px rgba(34, 197, 94, 0.1), 0 4px 6px rgba(34, 197, 94, 0.05)',
      xl: '0 20px 25px rgba(34, 197, 94, 0.1), 0 10px 10px rgba(34, 197, 94, 0.04)',
    },
    glow: {
      sm: '0 0 5px rgba(34, 197, 94, 0.4)',
      md: '0 0 10px rgba(34, 197, 94, 0.4), 0 0 20px rgba(34, 197, 94, 0.2)',
      lg: '0 0 15px rgba(34, 197, 94, 0.6), 0 0 30px rgba(34, 197, 94, 0.4)',
      xl: '0 0 20px rgba(34, 197, 94, 0.8), 0 0 40px rgba(34, 197, 94, 0.6), 0 0 60px rgba(34, 197, 94, 0.4)',
    },
    blur: {
      sm: 'blur(4px)',
      md: 'blur(8px)',
      lg: 'blur(16px)',
    },
  },
};

// TRON Theme Configuration
export const tronTheme: EnhancedThemeColors = {
  // Base colors (matching existing interface)
  primary: '#00FFFF',
  secondary: '#8A2BE2',
  accent: '#FF8000',
  background: '#0A0A0A',
  surface: '#111111',
  border: '#00FFFF',
  text: {
    primary: '#00FFFF',
    secondary: 'rgba(0, 255, 255, 0.8)',
    muted: 'rgba(0, 255, 255, 0.6)',
  },
  glow: '0 0 15px rgba(0, 255, 255, 0.6)',
  shadow: '0 4px 6px rgba(0, 255, 255, 0.1)',
  
  // Extended properties
  foreground: '#00FFFF',
  
  // Extended surface colors
  surfaces: {
    primary: '#0A0A0A',
    secondary: '#111111',
    tertiary: '#1A1A1A',
    elevated: 'rgba(17, 17, 17, 0.9)',
    overlay: 'rgba(10, 10, 10, 0.95)',
  },
  
  // Interactive states
  interactive: {
    hover: '#8A2BE2',
    active: '#FF00FF',
    focus: '#00FFFF',
    disabled: 'rgba(0, 255, 255, 0.3)',
  },
  
  // Semantic colors
  semantic: {
    success: '#00FFFF',
    warning: '#FFFF00',
    error: '#FF00FF',
    info: '#8A2BE2',
  },
  
  // Gradients
  gradients: {
    primary: 'linear-gradient(135deg, #00FFFF 0%, #8A2BE2 100%)',
    secondary: 'linear-gradient(135deg, #8A2BE2 0%, #FF00FF 100%)',
    accent: 'linear-gradient(135deg, #FF8000 0%, #FF00FF 100%)',
    background: 'linear-gradient(180deg, #0A0A0A 0%, #111111 100%)',
  },
  
  // Effects
  effects: {
    shadow: {
      sm: '0 1px 2px rgba(0, 255, 255, 0.1)',
      md: '0 4px 6px rgba(0, 255, 255, 0.1), 0 2px 4px rgba(0, 255, 255, 0.06)',
      lg: '0 10px 15px rgba(0, 255, 255, 0.1), 0 4px 6px rgba(0, 255, 255, 0.05)',
      xl: '0 20px 25px rgba(0, 255, 255, 0.1), 0 10px 10px rgba(0, 255, 255, 0.04)',
    },
    glow: {
      sm: '0 0 5px rgba(0, 255, 255, 0.4)',
      md: '0 0 10px rgba(0, 255, 255, 0.4), 0 0 20px rgba(0, 255, 255, 0.2)',
      lg: '0 0 15px rgba(0, 255, 255, 0.6), 0 0 30px rgba(0, 255, 255, 0.4)',
      xl: '0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.6), 0 0 60px rgba(0, 255, 255, 0.4)',
    },
    blur: {
      sm: 'blur(4px)',
      md: 'blur(8px)',
      lg: 'blur(16px)',
    },
  },
};

// Enhanced themes object
export const enhancedThemes: Record<ThemeMode, EnhancedThemeColors> = {
  matrix: matrixTheme,
  tron: tronTheme,
};

// Component variant generators
export interface ComponentVariantConfig {
  base: string;
  variants: Record<string, Record<string, string>>;
  sizes?: Record<string, string>;
  states?: Record<string, string>;
}

export const createComponentVariants = (config: ComponentVariantConfig) => {
  return (variant: string = 'default', size?: string, state?: string) => {
    const baseClasses = config.base;
    const variantClasses = config.variants[variant] || config.variants.default || {};
    const sizeClasses = size && config.sizes ? config.sizes[size] : '';
    const stateClasses = state && config.states ? config.states[state] : '';
    
    return [baseClasses, variantClasses, sizeClasses, stateClasses]
      .filter(Boolean)
      .join(' ');
  };
};

// Pre-configured component variants
export const buttonVariants = createComponentVariants({
  base: 'inline-flex items-center justify-center font-mono font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  variants: {
    primary: {
      matrix: 'bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black focus:ring-green-400',
      tron: 'bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black focus:ring-cyan-400',
    },
    secondary: {
      matrix: 'bg-green-950 border border-green-700 text-green-300 hover:bg-green-900 hover:border-green-600 focus:ring-green-400',
      tron: 'bg-gray-900 border border-cyan-700 text-cyan-300 hover:bg-gray-800 hover:border-cyan-600 focus:ring-cyan-400',
    },
    ghost: {
      matrix: 'text-green-400 hover:bg-green-950 hover:text-green-300 focus:ring-green-400',
      tron: 'text-cyan-400 hover:bg-gray-900 hover:text-cyan-300 focus:ring-cyan-400',
    },
  },
  sizes: {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  },
  states: {
    loading: 'cursor-wait opacity-75',
    disabled: 'cursor-not-allowed opacity-50',
  },
});

export const cardVariants = createComponentVariants({
  base: 'rounded-lg font-mono transition-all duration-200',
  variants: {
    default: {
      matrix: 'bg-black border border-green-700 text-green-400',
      tron: 'bg-gray-900 border border-cyan-700 text-cyan-400',
    },
    elevated: {
      matrix: 'bg-green-950 border border-green-600 text-green-300 shadow-lg shadow-green-900/20',
      tron: 'bg-gray-800 border border-cyan-600 text-cyan-300 shadow-lg shadow-cyan-900/20',
    },
    ghost: {
      matrix: 'bg-transparent border border-green-800 text-green-400',
      tron: 'bg-transparent border border-cyan-800 text-cyan-400',
    },
  },
  sizes: {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8',
  },
});

export const textVariants = createComponentVariants({
  base: 'font-mono transition-colors duration-200',
  variants: {
    primary: {
      matrix: 'text-green-400',
      tron: 'text-cyan-400',
    },
    secondary: {
      matrix: 'text-green-300',
      tron: 'text-cyan-300',
    },
    muted: {
      matrix: 'text-green-400/70',
      tron: 'text-cyan-400/70',
    },
    accent: {
      matrix: 'text-green-500',
      tron: 'text-purple-400',
    },
  },
  sizes: {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
  },
});

// Utility functions for theme-aware styling
export const getThemeValue = (
  theme: EnhancedThemeColors,
  path: string
): string => {
  return path.split('.').reduce((obj: any, key) => obj?.[key], theme) || '';
};

export const createThemeAwareClass = (
  matrixClass: string,
  tronClass: string,
  mode: ThemeMode
): string => {
  return mode === 'tron' ? tronClass : matrixClass;
};

// CSS-in-JS style generators
export const generateThemeStyles = (theme: EnhancedThemeColors) => ({
  '--color-primary': theme.primary,
  '--color-secondary': theme.secondary,
  '--color-accent': theme.accent,
  '--color-background': theme.background,
  '--color-foreground': theme.foreground,
  '--color-text-primary': theme.text.primary,
  '--color-text-secondary': theme.text.secondary,
  '--color-text-muted': theme.text.muted,
  '--color-border': theme.border,
  '--color-surface': theme.surface,
  '--gradient-primary': theme.gradients.primary,
  '--gradient-secondary': theme.gradients.secondary,
  '--shadow-glow-sm': theme.effects.glow.sm,
  '--shadow-glow-md': theme.effects.glow.md,
  '--shadow-glow-lg': theme.effects.glow.lg,
});

// Animation presets
export const animationPresets = {
  matrix: {
    fadeIn: 'animate-fade-in duration-500 ease-out',
    slideUp: 'animate-slide-up duration-300 ease-out',
    glow: 'animate-glow duration-1000 ease-in-out infinite',
    typewriter: 'animate-typewriter duration-2000 steps-40 forwards',
  },
  tron: {
    fadeIn: 'animate-fade-in duration-300 ease-out',
    slideUp: 'animate-slide-up duration-200 ease-out',
    glow: 'animate-glow duration-800 ease-in-out infinite',
    typewriter: 'animate-typewriter duration-1500 steps-40 forwards',
  },
};
