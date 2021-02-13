import type { Linter } from 'eslint';

export = {
  rules: {
    'import/extensions': ['error', 'never'],
    'import/no-unresolved': [
      'error',
      {
        commonjs: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.js', 'json'],
      },
    },
  },
} as Linter.Config;
