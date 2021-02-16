<img src="img/eslint.png" height=100 alt="ESLint's Logo" align="right">

# @bryan-hoang/eslint-config &middot; [![CI Status](https://github.com/bryan-hoang/eslint-config-bryan/workflows/Node.js%20CI/badge.svg)](https://github.com/bryan-hoang/eslint-config-bryan/actions?query=workflow%3A%22Node.js+CI%22) [![npm](https://img.shields.io/npm/v/eslint-config-bryan)](https://www.npmjs.com/package/eslint-config-bryan) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> My approach to JavaScript linting

This is a collection of my [ESLint](https://eslint.org/)
[Shareable Configs](https://eslint.org/docs/developer-guide/shareable-configs)
which build off of the
[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#airbnb-javascript-style-guide-)
by adding additional ESLint configs and plugins that I find useful. The packages
include a base config which is meant to lint only JavaScript
([`@bryan-hoang/eslint-config-base`](packages/base/README.md)) as well as
configs for [TypeScript](https://www.typescriptlang.org/)
([`@bryan-hoang/eslint-config-typescript`](packages/typescript/README.md)) and
[React](https://reactjs.org/)
([`@bryan-hoang/eslint-config-react`](packages/react/README.md)) which extend
the base config to lint different types of projects!

- [Installing / Getting started](#installing-getting-started)
- [Developing](#developing)
  - [Built With](#built-with)
  - [Prerequisites](#prerequisites)
  - [Setting up Dev](#setting-up-dev)
  - [Building](#building)
  - [Deploying / Publishing](#deploying-publishing)
- [Versioning](#versioning)
- [Configuration](#configuration)
- [Tests](#tests)
- [Style guide](#style-guide)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)
- [Licensing](#licensing)

## Installing / Getting started

Three standalone ESLint configurations are exported for your usage depending on
the type of project.

Installation instructions for each of them are located on their respective
README's.

## Developing

### Built With

- ESLint
- Typescript
- Lerna

### Prerequisites

Node.js (v12+) and npm (v7+) are need to set up a dev environment for the
project.

### Setting up Dev

```shell
git clone https://github.com/bryan/eslint-config.git
cd eslint-config
npm install
```

### Building

Run `npm run build`

### Deploying / Publishing

Make a commit that follows the `conventional commit` specification and then push
to the `main` branch so that `semantic-release` can detect the changes and make
an appropriate releases for each package.

## Versioning

We follow [SemVer](http://semver.org/) for versioning.

## Configuration

<https://eslint.org/docs/user-guide/configuring/>

## Tests

No tests are present because I'm lazy. Also, other somewhat popular eslint
configs (e.g.
[eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript))
don't have any tests which contributes to my lack of motivation to write tests.

## Style guide

This project uses itself (specifically the TypeScript config) to check the style
of the entire project (an extension of the
[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#airbnb-javascript-style-guide-)).

To check it, run

```shell
npm run lint
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Code of Conduct

This project's Code of Conduct (see [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)) is
adapted from the [Contributor Covenant][https://www.contributor-covenant.org],
version 1.4, available at
<https://www.contributor-covenant.org/version/1/4/code-of-conduct.html>.

For answers to common questions about this code of conduct, see
<https://www.contributor-covenant.org/faq>.

## Licensing

MIT License

Copyright (c) 2021 Bryan Hoang

See [LICENSE](LICENSE).
