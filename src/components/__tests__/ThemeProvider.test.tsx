import { render, screen, fireEvent } from '../../test/test-utils';
import { useTheme } from '../../providers/ThemeProvider';

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

  it('provides theme context values', () => {
    render(<TestComponent />);
    
    // Check that all expected elements are present
    expect(screen.getByTestId('theme-mode')).toBeInTheDocument();
    expect(screen.getByTestId('konami-status')).toBeInTheDocument();
    expect(screen.getByTestId('toggle-theme')).toBeInTheDocument();
  });

  it('theme context provides all required methods', () => {
    const TestHookComponent = () => {
      const { mode, toggleTheme, setTheme, isKonamiMode, variants } = useTheme();
      
      return (
        <div>
          <span data-testid="has-mode">{mode ? 'true' : 'false'}</span>
          <span data-testid="has-toggle">{toggleTheme ? 'true' : 'false'}</span>
          <span data-testid="has-set-theme">{setTheme ? 'true' : 'false'}</span>
          <span data-testid="has-konami">{typeof isKonamiMode === 'boolean' ? 'true' : 'false'}</span>
          <span data-testid="has-variants">{variants ? 'true' : 'false'}</span>
        </div>
      );
    };

    render(<TestHookComponent />);
    
    expect(screen.getByTestId('has-mode')).toHaveTextContent('true');
    expect(screen.getByTestId('has-toggle')).toHaveTextContent('true');
    expect(screen.getByTestId('has-set-theme')).toHaveTextContent('true');
    expect(screen.getByTestId('has-konami')).toHaveTextContent('true');
    expect(screen.getByTestId('has-variants')).toHaveTextContent('true');
  });
});
