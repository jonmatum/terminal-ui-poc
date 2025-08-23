import { mergeWithTailwindConfig } from '@jonmatum/terminal-ui';

export default mergeWithTailwindConfig({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    // Include the package content for proper CSS generation
    '../dist/**/*.{js,ts,jsx,tsx}',
    '../src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Demo can extend or override design tokens if needed
      // But should primarily use the design system tokens
      
      // Example: Demo-specific extensions (use sparingly)
      animation: {
        // Demo-specific animations that aren't in the design system
        'demo-bounce': 'bounce 1s infinite',
      },
      
      // Example: Demo-specific utilities (use sparingly)
      utilities: {
        '.demo-highlight': {
          backgroundColor: 'var(--color-accent)',
          color: 'var(--color-background)',
          padding: '0.25rem 0.5rem',
          borderRadius: '0.25rem',
        },
      },
    },
  },
  
  // Demo-specific plugins (use sparingly)
  plugins: [
    // Example: Demo-specific plugin
    function({ addUtilities }) {
      addUtilities({
        '.demo-grid-overlay': {
          backgroundImage: 'var(--bg-terminal-grid)',
          backgroundSize: 'var(--bg-grid)',
          opacity: '0.1',
        },
      });
    },
  ],
});
