import { useState, useEffect, useCallback } from 'react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'KeyB',
  'KeyA',
];

export interface UseKonamiOptions {
  onActivate?: () => void;
  onDeactivate?: () => void;
  resetTimeout?: number;
}

export function useKonami(options: UseKonamiOptions = {}) {
  const { onActivate, onDeactivate, resetTimeout = 3000 } = options;
  const [sequence, setSequence] = useState<string[]>([]);
  const [isActive, setIsActive] = useState(false);

  const reset = useCallback(() => {
    setSequence([]);
  }, []);

  const checkSequence = useCallback((newSequence: string[]) => {
    if (newSequence.length > KONAMI_CODE.length) {
      return false;
    }

    return KONAMI_CODE.slice(0, newSequence.length).every(
      (key, index) => key === newSequence[index]
    );
  }, []);

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      setSequence(prev => {
        const newSequence = [...prev, event.code];

        if (!checkSequence(newSequence)) {
          return [];
        }

        if (newSequence.length === KONAMI_CODE.length) {
          setIsActive(current => {
            const newActive = !current;
            if (newActive) {
              onActivate?.();
            } else {
              onDeactivate?.();
            }
            return newActive;
          });
          return [];
        }

        return newSequence;
      });
    },
    [checkSequence, onActivate, onDeactivate]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  useEffect(() => {
    if (sequence.length > 0) {
      const timeout = setTimeout(reset, resetTimeout);
      return () => clearTimeout(timeout);
    }
  }, [sequence, reset, resetTimeout]);

  return {
    isActive,
    sequence,
    progress: sequence.length / KONAMI_CODE.length,
    reset,
    toggle: () => setIsActive(prev => !prev),
  };
}
