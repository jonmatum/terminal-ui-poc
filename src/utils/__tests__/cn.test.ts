import { cn } from '../cn';

describe('cn utility', () => {
  it('merges class names correctly', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2');
  });

  it('handles conditional classes', () => {
    expect(cn('base', true && 'conditional', false && 'hidden')).toBe(
      'base conditional'
    );
  });

  it('handles Tailwind conflicts correctly', () => {
    expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4');
  });

  it('handles arrays of classes', () => {
    expect(cn(['class1', 'class2'], 'class3')).toBe('class1 class2 class3');
  });

  it('handles objects with boolean values', () => {
    expect(
      cn({
        class1: true,
        class2: false,
        class3: true,
      })
    ).toBe('class1 class3');
  });

  it('handles undefined and null values', () => {
    expect(cn('class1', undefined, null, 'class2')).toBe('class1 class2');
  });

  it('handles empty inputs', () => {
    expect(cn()).toBe('');
    expect(cn('')).toBe('');
    expect(cn(null)).toBe('');
    expect(cn(undefined)).toBe('');
  });

  it('handles complex Tailwind merge scenarios', () => {
    expect(cn('bg-red-500 text-white p-4', 'bg-blue-500 p-2')).toBe(
      'text-white bg-blue-500 p-2'
    );
  });
});
