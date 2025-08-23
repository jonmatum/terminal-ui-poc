import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '../providers/ThemeProvider';
import type { ThemeMode } from '../types/theme';

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  theme?: ThemeMode;
  enableKonami?: boolean;
}

const customRender = (
  ui: ReactElement,
  options: CustomRenderOptions = {}
) => {
  const { theme = 'matrix', enableKonami = false, ...renderOptions } = options;

  const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return (
      <ThemeProvider defaultTheme={theme} enableKonami={enableKonami}>
        {children}
      </ThemeProvider>
    );
  };

  return render(ui, {
    wrapper: AllTheProviders,
    ...renderOptions,
  });
};

export * from '@testing-library/react';
export { customRender as render };
