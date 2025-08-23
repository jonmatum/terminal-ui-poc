import React, { ReactNode, useEffect, useState } from 'react';
import { cn } from '../utils/cn';
import { useTheme } from '../providers/ThemeProvider';

// Animation Types
export type AnimationType = 
  | 'fade-in' | 'fade-out' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right'
  | 'scale-in' | 'scale-out' | 'glow' | 'pulse' | 'typewriter' | 'blink' | 'shake'
  | 'matrix-rain' | 'tron-grid';

export type AnimationDuration = 'fast' | 'normal' | 'slow' | 'slower';
export type AnimationDelay = 'none' | 'short' | 'medium' | 'long';
export type AnimationEasing = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'bounce';

// Animation Component
export interface AnimationProps {
  children: ReactNode;
  type: AnimationType;
  duration?: AnimationDuration;
  delay?: AnimationDelay;
  easing?: AnimationEasing;
  repeat?: boolean | number;
  trigger?: 'immediate' | 'hover' | 'focus' | 'visible';
  className?: string;
}

const animationClasses: Record<AnimationType, string> = {
  'fade-in': 'animate-fade-in',
  'fade-out': 'animate-fade-out',
  'slide-up': 'animate-slide-up',
  'slide-down': 'animate-slide-down',
  'slide-left': 'animate-slide-left',
  'slide-right': 'animate-slide-right',
  'scale-in': 'animate-scale-in',
  'scale-out': 'animate-scale-out',
  'glow': 'animate-glow',
  'pulse': 'animate-pulse',
  'typewriter': 'animate-typewriter',
  'blink': 'animate-blink',
  'shake': 'animate-shake',
  'matrix-rain': 'animate-matrix-rain',
  'tron-grid': 'animate-tron-grid',
};

const durationClasses: Record<AnimationDuration, string> = {
  fast: 'duration-150',
  normal: 'duration-300',
  slow: 'duration-500',
  slower: 'duration-1000',
};

const delayClasses: Record<AnimationDelay, string> = {
  none: '',
  short: 'delay-75',
  medium: 'delay-150',
  long: 'delay-300',
};

const easingClasses: Record<AnimationEasing, string> = {
  linear: 'ease-linear',
  ease: 'ease',
  'ease-in': 'ease-in',
  'ease-out': 'ease-out',
  'ease-in-out': 'ease-in-out',
  bounce: 'ease-bounce',
};

export const Animation: React.FC<AnimationProps> = ({
  children,
  type,
  duration = 'normal',
  delay = 'none',
  easing = 'ease-in-out',
  repeat = false,
  trigger = 'immediate',
  className,
}) => {
  const [isVisible, setIsVisible] = useState(trigger === 'immediate');
  const [shouldAnimate, setShouldAnimate] = useState(trigger === 'immediate');

  useEffect(() => {
    if (trigger === 'visible') {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setShouldAnimate(true);
          }
        },
        { threshold: 0.1 }
      );

      const element = document.querySelector(`[data-animation="${type}"]`);
      if (element) {
        observer.observe(element);
      }

      return () => observer.disconnect();
    }
  }, [trigger, type]);

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      setShouldAnimate(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      setShouldAnimate(false);
    }
  };

  const handleFocus = () => {
    if (trigger === 'focus') {
      setShouldAnimate(true);
    }
  };

  const handleBlur = () => {
    if (trigger === 'focus') {
      setShouldAnimate(false);
    }
  };

  const classes = cn(
    shouldAnimate && animationClasses[type],
    durationClasses[duration],
    delayClasses[delay],
    easingClasses[easing],
    repeat === true && 'animate-infinite',
    typeof repeat === 'number' && `animate-repeat-${repeat}`,
    className
  );

  return (
    <div
      className={classes}
      data-animation={type}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {children}
    </div>
  );
};

// Typewriter Effect Component
export interface TypewriterProps {
  text: string | string[];
  speed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
  loop?: boolean;
  cursor?: boolean;
  cursorChar?: string;
  className?: string;
  onComplete?: () => void;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 50,
  deleteSpeed = 30,
  delayBetween = 1000,
  loop = false,
  cursor = true,
  cursorChar = '|',
  className,
  onComplete,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const textArray = Array.isArray(text) ? text : [text];

  useEffect(() => {
    const currentText = textArray[currentIndex % textArray.length];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          if (textArray.length > 1) {
            setTimeout(() => setIsDeleting(true), delayBetween);
          } else if (onComplete) {
            onComplete();
          }
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => prev + 1);
          if (!loop && currentIndex >= textArray.length - 1) {
            return;
          }
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, textArray, speed, deleteSpeed, delayBetween, loop, onComplete]);

  useEffect(() => {
    if (cursor) {
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);
      return () => clearInterval(cursorInterval);
    }
  }, [cursor]);

  return (
    <span className={cn('font-mono', className)}>
      {displayText}
      {cursor && (
        <span className={cn('animate-blink', !showCursor && 'opacity-0')}>
          {cursorChar}
        </span>
      )}
    </span>
  );
};

// Glow Effect Component
export interface GlowProps {
  children: ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  color?: 'primary' | 'secondary' | 'accent' | 'custom';
  customColor?: string;
  pulse?: boolean;
  className?: string;
}

export const Glow: React.FC<GlowProps> = ({
  children,
  intensity = 'medium',
  color = 'primary',
  customColor,
  pulse = false,
  className,
}) => {
  const { mode } = useTheme();

  const getGlowColor = () => {
    if (customColor) return customColor;
    
    switch (color) {
      case 'primary':
        return mode === 'tron' ? '#00FFFF' : '#22C55E';
      case 'secondary':
        return mode === 'tron' ? '#8A2BE2' : '#86EFAC';
      case 'accent':
        return mode === 'tron' ? '#FF8000' : '#16A34A';
      default:
        return mode === 'tron' ? '#00FFFF' : '#22C55E';
    }
  };

  const getGlowIntensity = () => {
    const glowColor = getGlowColor();
    switch (intensity) {
      case 'low':
        return `0 0 5px ${glowColor}40, 0 0 10px ${glowColor}20`;
      case 'medium':
        return `0 0 10px ${glowColor}60, 0 0 20px ${glowColor}40, 0 0 30px ${glowColor}20`;
      case 'high':
        return `0 0 15px ${glowColor}80, 0 0 30px ${glowColor}60, 0 0 45px ${glowColor}40, 0 0 60px ${glowColor}20`;
      default:
        return `0 0 10px ${glowColor}60, 0 0 20px ${glowColor}40`;
    }
  };

  const glowStyle = {
    textShadow: getGlowIntensity(),
    filter: `drop-shadow(${getGlowIntensity()})`,
  };

  return (
    <div
      className={cn(
        'relative',
        pulse && 'animate-pulse',
        className
      )}
      style={glowStyle}
    >
      {children}
    </div>
  );
};

// Particle Effect Component (for background animations)
export interface ParticleProps {
  count?: number;
  speed?: 'slow' | 'medium' | 'fast';
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

export const ParticleBackground: React.FC<ParticleProps> = ({
  count = 50,
  speed = 'medium',
  size = 'small',
  color,
  className,
}) => {
  const { mode } = useTheme();
  
  const particleColor = color || (mode === 'tron' ? '#00FFFF' : '#22C55E');
  
  const speedClass = {
    slow: 'animate-float-slow',
    medium: 'animate-float',
    fast: 'animate-float-fast',
  }[speed];

  const sizeClass = {
    small: 'w-1 h-1',
    medium: 'w-2 h-2',
    large: 'w-3 h-3',
  }[size];

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={cn(
            'absolute rounded-full opacity-20',
            sizeClass,
            speedClass
          )}
          style={{
            backgroundColor: particleColor,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
};

// Matrix Rain Effect Component
export interface MatrixRainProps {
  density?: 'low' | 'medium' | 'high';
  speed?: 'slow' | 'medium' | 'fast';
  characters?: string;
  className?: string;
}

export const MatrixRain: React.FC<MatrixRainProps> = ({
  density = 'medium',
  speed = 'medium',
  characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン',
  className,
}) => {
  const [drops, setDrops] = useState<Array<{ id: number; x: number; chars: string[] }>>([]);

  const densityCount = {
    low: 20,
    medium: 40,
    high: 60,
  }[density];

  const speedDuration = {
    slow: '8s',
    medium: '5s',
    fast: '3s',
  }[speed];

  useEffect(() => {
    const newDrops = Array.from({ length: densityCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      chars: Array.from({ length: 20 }, () => 
        characters[Math.floor(Math.random() * characters.length)]
      ),
    }));
    setDrops(newDrops);
  }, [densityCount, characters]);

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute top-0 text-green-400 font-mono text-sm opacity-60 animate-matrix-fall"
          style={{
            left: `${drop.x}%`,
            animationDuration: speedDuration,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          {drop.chars.map((char, i) => (
            <div
              key={i}
              className="block leading-tight"
              style={{
                opacity: Math.max(0, 1 - i * 0.1),
              }}
            >
              {char}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
