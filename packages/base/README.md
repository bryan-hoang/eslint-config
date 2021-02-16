<img src="../../img/eslint.png" height=100 alt="ESLint's Logo" align="right">

# @bryan-hoang/eslint-config-base &middot; [![CI Status](https://github.com/bryan-hoang/eslint-config/workflows/Node.js%20CI/badge.svg)](https://github.com/bryan-hoang/eslint-config/actions?query=workflow%3A%22Node.js+CI%22) [![npm](https://img.shields.io/npm/v/@bryan-hoang/eslint-config-base)](https://www.npmjs.com/package/@bryan-hoang/eslint-config-base) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> My approach to JavaScript linting

This package provides my base [JavaScript](https://www.javascript.com/)
`.eslintrc` as an extensible shared config.

- [Installing / Getting started](#installing-getting-started)
- [Contributing](#contributing)
- [Licensing](#licensing)

## Installing / Getting started

1. **Installing the packages**

If using **npm 7+**, run

```shell
npm install --save-dev @bryan-hoang/eslint-config-base
```

which will also install its associated peer dependencies.

If not using **npm 7+**, run the above command and then install the packages
listed by the command:

```shell
npm info @bryan-hoang/eslint-config-base@latest peerDependencies
```

If using **npm 5+**, use this shortcut

```shell
npx install-peerdeps --dev @bryan-hoang/eslint-config-base
```

If using **yarn**, you can also use the shortcut described above if you have npm
5+ installed on your machine, as the command will detect that you are using yarn
and will act accordingly. Otherwise, run
`npm info "eslint-config-airbnb-base@latest" peerDependencies` to list the peer
dependencies and versions, then run `yarn add --dev <dependency>@<version>` for
each listed peer dependency.

1. **Extending the configuration**

Once the config is installed, add `"extends": "@bryan-hoang/eslint-config-base"`
to your `.eslintrc` file.

## Contributing

Take a look at the [README.md](../../README.md) and
[CONTRIBUTING.md](../../CONTRIBUTING.md) for the monorepo.

## Licensing

MIT License

Copyright (c) 2021 Bryan Hoang

See [LICENSE](LICENSE).
