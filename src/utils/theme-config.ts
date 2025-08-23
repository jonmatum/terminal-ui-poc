import type { ThemeConfig, ComponentVariants } from '../types/theme';

export const matrixTheme: ThemeConfig = {
  mode: 'matrix',
  colors: {
    primary: '#00ff41',
    secondary: '#008f11',
    accent: '#00ff41',
    background: '#000000',
    surface: '#0a0a0a',
    border: '#00ff41',
    text: {
      primary: '#00ff41',
      secondary: '#008f11',
      muted: '#004d0a',
    },
    glow: '#00ff41',
    shadow: 'rgba(0, 255, 65, 0.3)',
  },
  animations: {
    duration: '200ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  effects: {
    glow: true,
    particles: false,
    scanlines: true,
  },
};

export const tronTheme: ThemeConfig = {
  mode: 'tron',
  colors: {
    primary: '#00ffff',
    secondary: '#0080ff',
    accent: '#ff8000',
    background: '#0a0a0a',
    surface: '#111111',
    border: '#00ffff',
    text: {
      primary: '#00ffff',
      secondary: '#0080ff',
      muted: '#004d66',
    },
    glow: '#00ffff',
    shadow: 'rgba(0, 255, 255, 0.3)',
  },
  animations: {
    duration: '300ms',
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
  effects: {
    glow: true,
    particles: true,
    scanlines: false,
  },
};

export const createComponentVariants = (theme: ThemeConfig): ComponentVariants => ({
  button: {
    primary: `
      bg-transparent border-2 border-current text-current
      hover:bg-current hover:text-black hover:shadow-lg
      transition-all duration-${theme.animations.duration}
      ${theme.effects.glow ? `hover:shadow-[0_0_20px_currentColor]` : ''}
    `,
    secondary: `
      bg-transparent border border-current text-current opacity-70
      hover:opacity-100 hover:border-2
      transition-all duration-${theme.animations.duration}
    `,
    ghost: `
      bg-transparent text-current
      hover:bg-current hover:bg-opacity-10
      transition-all duration-${theme.animations.duration}
    `,
    danger: `
      bg-transparent border-2 border-red-500 text-red-500
      hover:bg-red-500 hover:text-black hover:shadow-lg
      transition-all duration-${theme.animations.duration}
      ${theme.effects.glow ? `hover:shadow-[0_0_20px_rgb(239,68,68)]` : ''}
    `,
  },
  card: {
    default: `
      bg-black border border-current backdrop-blur-md
      ${theme.effects.glow ? `shadow-[0_0_10px_currentColor]` : 'shadow-lg'}
    `,
    elevated: `
      bg-black border-2 border-current backdrop-blur-md
      ${theme.effects.glow ? `shadow-[0_0_20px_currentColor]` : 'shadow-xl'}
    `,
    interactive: `
      bg-black border border-current backdrop-blur-md cursor-pointer
      hover:border-2 transition-all duration-${theme.animations.duration}
      ${theme.effects.glow ? `hover:shadow-[0_0_15px_currentColor]` : 'hover:shadow-lg'}
    `,
  },
  input: {
    default: `
      bg-transparent border border-current text-current
      placeholder:text-current placeholder:opacity-50
      focus:border-2 focus:outline-none
      transition-all duration-${theme.animations.duration}
    `,
    focused: `
      border-2 outline-none
      ${theme.effects.glow ? `shadow-[0_0_10px_currentColor]` : ''}
    `,
    error: `
      border-red-500 text-red-500
      ${theme.effects.glow ? `shadow-[0_0_10px_rgb(239,68,68)]` : ''}
    `,
  },
  text: {
    primary: 'text-current font-mono',
    secondary: 'text-current opacity-70 font-mono',
    muted: 'text-current opacity-50 font-mono text-sm',
    accent: `text-current font-mono font-bold ${theme.effects.glow ? 'drop-shadow-[0_0_5px_currentColor]' : ''}`,
  },
});

export const themes = {
  matrix: matrixTheme,
  tron: tronTheme,
} as const;
