import type { Linter } from 'eslint';

const typescriptConfig: Linter.Config = {
  extends: [
    'bryan/dist/index',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
};

export = typescriptConfig;
