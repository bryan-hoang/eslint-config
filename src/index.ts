import type { Linter } from 'eslint';

export = {
  env: {
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'bryan/dist/rules/es6',
    'bryan/dist/rules/node',
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
  },
  plugins: ['html', 'json-format', 'promise', 'json-files'],
} as Linter.Config;
