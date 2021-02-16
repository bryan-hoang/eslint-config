import type { Linter } from 'eslint';

export = {
  extends: [
    '@bryan-hoang/eslint-config-react/dist/index',
    'airbnb',
    'airbnb/hooks',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'latest',
    },
  },
} as Linter.Config;
