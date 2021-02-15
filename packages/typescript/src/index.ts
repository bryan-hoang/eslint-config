import type { Linter } from 'eslint';

const typescriptConfig: Linter.Config = {
  extends: [
    '@bryan/eslint-config-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
};

export = typescriptConfig;
