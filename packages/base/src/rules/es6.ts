import type { Linter } from 'eslint';

export = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      generators: false,
      globalReturn: false,
      impliedStrict: true,
      jsx: false,
      objectLiteralDuplicateProperties: false,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
} as Linter.Config;
