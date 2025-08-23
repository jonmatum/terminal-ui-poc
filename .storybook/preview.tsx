import type { Preview } from '@storybook/react';
import { ThemeProvider } from '../src/providers/ThemeProvider';
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#000000',
        },
        {
          name: 'matrix',
          value: '#001100',
        },
        {
          name: 'tron',
          value: '#0a0a0a',
        },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'matrix';
      return (
        <ThemeProvider defaultTheme={theme} enableKonami={false}>
          <div className="min-h-screen bg-background text-primary p-8">
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'matrix',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'matrix', title: 'Matrix' },
          { value: 'tron', title: 'TRON' },
        ],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
