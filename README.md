<img src="img/eslint.png" height=100 alt="ESLint's Logo" align="right">

# eslint-config-bryan &middot; [![CI Status](https://github.com/bryan-hoang/eslint-config-bryan/workflows/Node.js%20CI/badge.svg)](https://github.com/bryan-hoang/eslint-config-bryan/actions?query=workflow%3A%22Node.js+CI%22) [![npm](https://img.shields.io/npm/v/eslint-config-bryan)](https://www.npmjs.com/package/eslint-config-bryan) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> My approach to JavaScript linting

This is my [ESLint](https://eslint.org/)
[Shareable Config](https://eslint.org/docs/developer-guide/shareable-configs)
which builds off of the
[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#airbnb-javascript-style-guide-)
by adding additional ESLint configs and plugins that I find useful. In addition
to the base config which is meant to lint only JavaScript, configs for
[TypeScript](https://www.typescriptlang.org/) and [React](https://reactjs.org/)
are also exported!

- [Installing / Getting started](#installing-getting-started)
  - [@bryan-hoang/eslint-config](#bryaneslint-config)
  - [@bryan-hoang/eslint-config-typescript](#bryaneslint-config-typescript)
  - [@bryan-hoang/eslint-config-react](#bryaneslint-config-react)
  - [@bryan-hoang/eslint-config-typescript-react](#bryaneslint-config-typescript-react)
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

Four standalone ESLint configurations are exported for your usage depending on
the type of project.

### @bryan-hoang/eslint-config

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

2. **Extending the configuration**

Once the config is installed, add `"extends": "@bryan-hoang/eslint-config-base"`
to your `.eslintrc` file.

### @bryan-hoang/eslint-config-typescript

This entry point enables the linting rules for TypeScript. To use, add
`"extends": ["@bryan-hoang/eslint-config-typescript"]` to your `.eslintrc` file.

This config requires knowledge of your TypeScript config.

In your ESLint config, set
[parserOptions.project](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject)
to the path of your
[tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).
e.g.

```diff
{
   "extends": ["bryan/typescript"],
+  "parserOptions": {
+    "project": ["tsconfig.json"]
+  }
}
```

### @bryan-hoang/eslint-config-react

This entry point enables the linting rules for React. To use, add
`"extends": ["@bryan-hoang/eslint-config-react"]` to your `.eslintrc` file.

### @bryan-hoang/eslint-config-typescript-react

TODO.

## Developing

### Built With

- ESLint
- Typescript

### Prerequisites

Node.js (v12+) and npm (v7+) are need to set up a dev environment for the
project.

### Setting up Dev

```shell
git clone https://github.com/bryan/eslint-config-bryan.git
cd eslint-config-bryan
# The postinstall script will run `npm link` and `npm link eslint-config-bryan`
npm install
# Compile the configs in `src` to generate `dist`
npm run build
# Link the package so that it can lint itself through `npm run lint`
npm link
npm link eslint-config-bryan
```

### Building

Run `npm run build:watch` and `npm run lint:watch` to make development go
smoother.

**Note:** If you run `npm install <package name>` of any form,
`npm link eslint-config-bryan` will be broken and you'll need to run `npm i`
again so that `npm run lint` doesn't break.

### Deploying / Publishing

Make a commit that follows the `conventional commit` specification and then push
to the `main` branch so that `semantic-release` can detect the changes and make
an appropriate release.

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

This project uses itself it check its style (an extension of the
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
