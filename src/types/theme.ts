export type ThemeMode = 'matrix' | 'tron';

export interface ThemeColors {
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
}

export interface ThemeConfig {
  mode: ThemeMode;
  colors: ThemeColors;
  animations: {
    duration: string;
    easing: string;
  };
  effects: {
    glow: boolean;
    particles: boolean;
    scanlines: boolean;
  };
}

export interface ComponentVariants {
  button: {
    primary: string;
    secondary: string;
    ghost: string;
    danger: string;
  };
  card: {
    default: string;
    elevated: string;
    interactive: string;
  };
  input: {
    default: string;
    focused: string;
    error: string;
  };
  text: {
    primary: string;
    secondary: string;
    muted: string;
    accent: string;
  };
}

export interface ThemeContextValue {
  theme: ThemeConfig;
  mode: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
  isKonamiMode: boolean;
  variants: ComponentVariants;
}
