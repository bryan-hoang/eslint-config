import type { Linter } from 'eslint';

export = {
  env: {
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    '@bryan/eslint-config-base/dist/rules/es6',
    '@bryan/eslint-config-base/dist/rules/node',
    '@bryan/eslint-config-base/dist/rules/imports',
    'plugin:security/recommended',
    'plugin:jsdoc/recommended',
    'plugin:markdown/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['html', 'json-format', 'promise', 'json-files'],
} as Linter.Config;
