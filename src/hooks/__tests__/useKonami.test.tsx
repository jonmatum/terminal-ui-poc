import { renderHook, act } from '@testing-library/react';
import { useKonami } from '../useKonami';
import { vi } from 'vitest';

describe('useKonami', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('initializes with correct default values', () => {
    const { result } = renderHook(() => useKonami());

    expect(result.current.isActive).toBe(false);
    expect(result.current.sequence).toEqual([]);
    expect(result.current.progress).toBe(0);
  });

  it('tracks key sequence correctly', () => {
    const { result } = renderHook(() => useKonami());

    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowUp' }));
    });

    expect(result.current.sequence).toEqual(['ArrowUp']);
    expect(result.current.progress).toBe(0.1);
  });

  it('resets sequence on wrong key', () => {
    const { result } = renderHook(() => useKonami());

    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowUp' }));
      document.dispatchEvent(
        new KeyboardEvent('keydown', { code: 'ArrowDown' })
      );
    });

    expect(result.current.sequence).toEqual([]);
    expect(result.current.progress).toBe(0);
  });

  it('activates on complete sequence', () => {
    const onActivate = vi.fn();
    const { result } = renderHook(() => useKonami({ onActivate }));

    const konamiSequence = [
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

    act(() => {
      konamiSequence.forEach(key => {
        document.dispatchEvent(new KeyboardEvent('keydown', { code: key }));
      });
    });

    expect(result.current.isActive).toBe(true);
    expect(onActivate).toHaveBeenCalledTimes(1);
    expect(result.current.sequence).toEqual([]);
  });

  it('deactivates on second complete sequence', () => {
    const onActivate = vi.fn();
    const onDeactivate = vi.fn();
    const { result } = renderHook(() =>
      useKonami({ onActivate, onDeactivate })
    );

    const konamiSequence = [
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

    // First activation
    act(() => {
      konamiSequence.forEach(key => {
        document.dispatchEvent(new KeyboardEvent('keydown', { code: key }));
      });
    });

    expect(result.current.isActive).toBe(true);

    // Second activation (deactivation)
    act(() => {
      konamiSequence.forEach(key => {
        document.dispatchEvent(new KeyboardEvent('keydown', { code: key }));
      });
    });

    expect(result.current.isActive).toBe(false);
    expect(onDeactivate).toHaveBeenCalledTimes(1);
  });

  it('ignores keys when typing in input fields', () => {
    const { result } = renderHook(() => useKonami());

    const input = document.createElement('input');
    document.body.appendChild(input);

    act(() => {
      const event = new KeyboardEvent('keydown', { code: 'ArrowUp' });
      Object.defineProperty(event, 'target', { value: input });
      document.dispatchEvent(event);
    });

    expect(result.current.sequence).toEqual([]);

    document.body.removeChild(input);
  });

  it('resets sequence after timeout', async () => {
    const { result } = renderHook(() => useKonami({ resetTimeout: 100 }));

    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowUp' }));
    });

    expect(result.current.sequence).toEqual(['ArrowUp']);

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 150));
    });

    expect(result.current.sequence).toEqual([]);
  });

  it('provides manual toggle function', () => {
    const { result } = renderHook(() => useKonami());

    expect(result.current.isActive).toBe(false);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.isActive).toBe(true);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.isActive).toBe(false);
  });

  it('provides manual reset function', () => {
    const { result } = renderHook(() => useKonami());

    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowUp' }));
    });

    expect(result.current.sequence).toEqual(['ArrowUp']);

    act(() => {
      result.current.reset();
    });

    expect(result.current.sequence).toEqual([]);
  });
});
