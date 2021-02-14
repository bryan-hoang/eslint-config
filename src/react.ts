import type { Linter } from 'eslint';

export = {
  extends: ['bryan/dist/index', 'airbnb', 'airbnb/hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
} as Linter.Config;
