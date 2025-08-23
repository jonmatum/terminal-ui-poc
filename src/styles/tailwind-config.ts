// Enhanced Tailwind CSS configuration for terminal-ui design system
// This can be imported and extended in consuming applications

export const terminalUITailwindConfig = {
  content: [
    './node_modules/@jonmatum/terminal-ui/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Terminal theme colors
      colors: {
        // Matrix theme colors
        matrix: {
          green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac', // green-300
            400: '#22c55e', // green-400 - primary terminal green
            500: '#16a34a', // green-500
            600: '#15803d', // green-600
            700: '#166534', // green-700
            800: '#14532d', // green-800
            900: '#052e16', // green-900
            950: '#14532d', // green-950 - dark background
          },
        },
        
        // TRON/Konami theme colors
        tron: {
          cyan: {
            DEFAULT: '#00FFFF', // Primary cyan
            50: '#f0fdff',
            100: '#ccfbff',
            200: '#99f6ff',
            300: '#66f0ff',
            400: '#33ebff',
            500: '#00e6ff',
            600: '#00ccff',
            700: '#0099cc',
            800: '#006699',
            900: '#003366',
          },
          purple: {
            DEFAULT: '#8A2BE2', // BlueViolet
            50: '#f3e8ff',
            100: '#e9d5ff',
            200: '#d8b4fe',
            300: '#c084fc',
            400: '#a855f7',
            500: '#8A2BE2',
            600: '#7c3aed',
            700: '#6d28d9',
            800: '#5b21b6',
            900: '#4c1d95',
          },
          orange: {
            DEFAULT: '#FF8000', // Orange accent
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#FF8000',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12',
          },
          magenta: {
            DEFAULT: '#FF00FF', // Magenta
            50: '#fdf4ff',
            100: '#fae8ff',
            200: '#f5d0fe',
            300: '#f0abfc',
            400: '#e879f9',
            500: '#FF00FF',
            600: '#c026d3',
            700: '#a21caf',
            800: '#86198f',
            900: '#701a75',
          },
        },
        
        // Background colors
        background: {
          matrix: '#000000', // Pure black
          tron: '#0A0A0A', // Very dark gray
          card: {
            matrix: '#14532d', // green-950
            tron: '#111111', // Dark gray
          },
        },
        
        // Terminal UI semantic colors
        terminal: {
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          accent: 'var(--color-accent)',
          background: 'var(--color-background)',
          foreground: 'var(--color-foreground)',
          muted: 'var(--color-text-muted)',
          border: 'var(--color-border-primary)',
          surface: 'var(--color-surface-primary)',
        },
      },
      
      // Typography
      fontFamily: {
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'SF Mono',
          'Monaco',
          'Inconsolata',
          'Roboto Mono',
          'Source Code Pro',
          'Menlo',
          'Consolas',
          'DejaVu Sans Mono',
          'monospace',
        ],
        terminal: [
          'JetBrains Mono',
          'Fira Code',
          'SF Mono',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      
      // Animations
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
        'shake': 'shake 0.6s ease-in-out',
        
        // Matrix/TRON specific
        'matrix-rain': 'matrixRain 3s linear infinite',
        'matrix-fall': 'matrixFall 5s linear infinite',
        'tron-grid': 'tronGrid 2s ease-in-out infinite',
        'tron-pulse': 'tronPulse 1.5s ease-in-out infinite',
        
        // Utility animations
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-fast': 'float 1.5s ease-in-out infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 10s linear infinite',
        
        // Loading animations
        'spin-slow': 'spin 2s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
          '0%': {
            textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
          },
          '100%': {
            textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
          },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 5px currentColor',
          },
          '50%': {
            boxShadow: '0 0 20px currentColor, 0 0 30px currentColor',
          },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },
        },
        
        // Matrix/TRON specific keyframes
        matrixRain: {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        matrixFall: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        tronGrid: {
          '0%, 100%': { 
            borderColor: 'currentColor',
            boxShadow: '0 0 5px currentColor',
          },
          '50%': { 
            borderColor: 'transparent',
            boxShadow: '0 0 20px currentColor',
          },
        },
        tronPulse: {
          '0%, 100%': { 
            opacity: '0.6',
            transform: 'scale(1)',
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.05)',
          },
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
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      
      // Box shadows with glow effects
      boxShadow: {
        'glow-sm': '0 0 5px var(--color-primary)',
        'glow': '0 0 10px var(--color-primary), 0 0 20px var(--color-primary)',
        'glow-lg': '0 0 15px var(--color-primary), 0 0 30px var(--color-primary), 0 0 45px var(--color-primary)',
        'glow-xl': '0 0 20px var(--color-primary), 0 0 40px var(--color-primary), 0 0 60px var(--color-primary), 0 0 80px var(--color-primary)',
        
        // Matrix glow
        'matrix-glow': '0 0 10px #22c55e, 0 0 20px #22c55e, 0 0 30px #22c55e',
        'matrix-glow-lg': '0 0 15px #22c55e, 0 0 30px #22c55e, 0 0 45px #22c55e, 0 0 60px #22c55e',
        
        // TRON glow
        'tron-glow': '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff',
        'tron-glow-lg': '0 0 15px #00ffff, 0 0 30px #00ffff, 0 0 45px #00ffff, 0 0 60px #00ffff',
        
        // Terminal shadows
        'terminal': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'terminal-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      
      // Text shadows for glow effects
      textShadow: {
        'glow': '0 0 10px currentColor',
        'glow-lg': '0 0 20px currentColor, 0 0 30px currentColor',
        'matrix': '0 0 10px #22c55e',
        'tron': '0 0 10px #00ffff',
      },
      
      // Backdrop blur
      backdropBlur: {
        'terminal': '12px',
      },
      
      // Border radius
      borderRadius: {
        'terminal': '0.5rem',
      },
      
      // Spacing for terminal layouts
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Z-index scale
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      
      // Transition timing functions
      transitionTimingFunction: {
        'terminal': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
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
    },
  },
  plugins: [
    // Custom plugin for terminal-specific utilities
    function({ addUtilities, theme }: any) {
      const newUtilities = {
        // Terminal window styles
        '.terminal-window': {
          backgroundColor: theme('colors.background.matrix'),
          border: `1px solid ${theme('colors.matrix.green.700')}`,
          borderRadius: theme('borderRadius.terminal'),
          fontFamily: theme('fontFamily.terminal').join(', '),
          color: theme('colors.matrix.green.400'),
        },
        
        // TRON window styles
        '.tron-window': {
          backgroundColor: theme('colors.background.tron'),
          border: `1px solid ${theme('colors.tron.cyan.700')}`,
          borderRadius: theme('borderRadius.terminal'),
          fontFamily: theme('fontFamily.terminal').join(', '),
          color: theme('colors.tron.cyan.400'),
        },
        
        // Glow text utilities
        '.text-glow': {
          textShadow: theme('textShadow.glow'),
        },
        '.text-glow-lg': {
          textShadow: theme('textShadow.glow-lg'),
        },
        
        // Matrix-specific utilities
        '.matrix-text': {
          color: theme('colors.matrix.green.400'),
          textShadow: theme('textShadow.matrix'),
        },
        '.matrix-bg': {
          backgroundColor: theme('colors.background.matrix'),
        },
        '.matrix-border': {
          borderColor: theme('colors.matrix.green.700'),
        },
        
        // TRON-specific utilities
        '.tron-text': {
          color: theme('colors.tron.cyan.400'),
          textShadow: theme('textShadow.tron'),
        },
        '.tron-bg': {
          backgroundColor: theme('colors.background.tron'),
        },
        '.tron-border': {
          borderColor: theme('colors.tron.cyan.700'),
        },
        
        // Scanline effects
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
        
        // CRT effect
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
      };
      
      addUtilities(newUtilities);
    },
  ],
};

// Export individual theme configurations
export const matrixTailwindTheme = {
  colors: {
    primary: '#22c55e',
    secondary: '#86efac',
    accent: '#16a34a',
    background: '#000000',
    surface: '#14532d',
    border: '#166534',
    text: '#22c55e',
  },
};

export const tronTailwindTheme = {
  colors: {
    primary: '#00ffff',
    secondary: '#8a2be2',
    accent: '#ff8000',
    background: '#0a0a0a',
    surface: '#111111',
    border: '#006699',
    text: '#00ffff',
  },
};

// Utility function to merge with existing Tailwind config
export const mergeWithTailwindConfig = (existingConfig: any) => {
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
