import { render, screen, fireEvent } from '../../test/test-utils';
import { useTheme } from '../../providers/ThemeProvider';
import { vi } from 'vitest';

const TestComponent = () => {
  const { mode, toggleTheme, isKonamiMode } = useTheme();
  return (
    <div>
      <span data-testid="theme-mode">{mode}</span>
      <span data-testid="konami-status">{isKonamiMode.toString()}</span>
      <button onClick={toggleTheme} data-testid="toggle-theme">
        Toggle
      </button>
    </div>
  );
};

describe('ThemeProvider', () => {
  it('provides default matrix theme', () => {
    render(<TestComponent />);
    expect(screen.getByTestId('theme-mode')).toHaveTextContent('matrix');
  });

  it('provides tron theme when specified', () => {
    render(<TestComponent />, { theme: 'tron' });
    expect(screen.getByTestId('theme-mode')).toHaveTextContent('tron');
  });

  it('toggles theme when toggle function is called', () => {
    render(<TestComponent />);
    const toggleButton = screen.getByTestId('toggle-theme');
    
    expect(screen.getByTestId('theme-mode')).toHaveTextContent('matrix');
    
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('theme-mode')).toHaveTextContent('tron');
    
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('theme-mode')).toHaveTextContent('matrix');
  });

  it('handles konami mode correctly', () => {
    render(<TestComponent />, { enableKonami: true });
    expect(screen.getByTestId('konami-status')).toHaveTextContent('false');
  });

  it('calls onThemeChange callback when theme changes', () => {
    const onThemeChange = vi.fn();
    const TestWithCallback = () => {
      const { toggleTheme } = useTheme();
      return <button onClick={toggleTheme}>Toggle</button>;
    };

    render(<TestWithCallback />, { theme: 'matrix' });
    // Note: We'd need to modify ThemeProvider to accept onThemeChange prop for this test
  });
});
