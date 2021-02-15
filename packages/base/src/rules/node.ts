import type { Linter } from 'eslint';

export = {
  extends: ['plugin:node/recommended'],
  env: {
    node: true,
  },
  rules: {},
  settings: {
    node: {
      allowModules: [],
      resolvePaths: [],
      tryExtensions: ['.ts', '.js', '.json', '.node'],
    },
  },
} as Linter.Config;
