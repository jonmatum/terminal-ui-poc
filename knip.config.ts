import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['src/index.ts'],
  project: ['src/**/*.{ts,tsx}'],
  ignore: ['src/**/*.test.{ts,tsx}', 'src/test/**/*'],
  ignoreBinaries: ['bundlesize'],
  ignoreDependencies: [
    // Testing dependencies
    '@testing-library/jest-dom',
    '@testing-library/react',
    '@testing-library/user-event',
    'jsdom',
    
    // Build and tooling
    'tsup',
    'rimraf',
    'bundlesize',
    
    // Linting and formatting
    'prettier',
    'prettier-plugin-tailwindcss',
    'eslint-config-prettier',
    
    // Vitest and coverage
    '@vitest/ui',
    '@vitest/coverage-v8',
    
    // TypeScript and React types
    '@types/react',
    '@types/react-dom',
  ],
  workspaces: {
    '.': {
      entry: 'src/index.ts',
      project: ['src/**/*.{ts,tsx}'],
    },
  },
  rules: {
    files: 'error',
    dependencies: 'error',
    unlisted: 'error',
    exports: 'error',
    nsExports: 'error',
    classMembers: 'error',
    types: 'error',
    nsTypes: 'error',
    enumMembers: 'error',
    duplicates: 'error',
  },
};
