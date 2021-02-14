<img src="img/eslint.png" height=120 alt="ESLint's Logo" align="right">

# eslint-config-bryan &middot; [![CI Status](https://github.com/bryan-hoang/eslint-config-bryan/workflows/Node.js%20CI/badge.svg)](https://github.com/bryan-hoang/eslint-config-bryan/actions?query=workflow%3A%22Node.js+CI%22) [![npm](https://img.shields.io/npm/v/eslint-config-bryan)](https://www.npmjs.com/package/eslint-config-bryan) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

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
  - [eslint-config-bryan](#eslint-config-bryan)
  - [eslint-config-bryan/typescript](#eslint-config-bryantypescript)
  - [eslint-config-bryan/react](#eslint-config-bryanreact)
  - [eslint-config-bryan/typescript-react](#eslint-config-bryantypescript-react)
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

### eslint-config-bryan

1. **Installing the packages**

If using **npm 7+**, run

```shell
npm install --save-dev eslint-config-bryan
```

which will also install its associated peer dependencies.

If not using **npm 7+**, run the above command and then install the packages
listed by the command:

```shell
npm info eslint-config-bryan@latest peerDependencies
```

If using **npm 5+**, use this shortcut

```shell
npx install-peerdeps --dev eslint-config-brayn
```

2. **Extending the configuration**

Once the config is installed, add `"extends": "bryan"` to your `.eslintrc` file.

### eslint-config-bryan/typescript

This entry point enables the linting rules for TypeScript. To use, add
`"extends": ["bryan/typescript"]` to your `.eslintrc` file.

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

### eslint-config-bryan/react

This entry point enables the linting rules for React. To use, add
`"extends": ["bryan/react"]` to your `.eslintrc` file.

### eslint-config-bryan/typescript-react

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
```

### Building

Run `npm run build:watch` and `npm run lint:watch` to make development go
smoother.

**Note:** If you run `npm install <package name>` of any form,
`npm link eslint-config-bryan` will be broken and you'll need to run `npm i`
again so that `npm run lint` doesn't break.

### Deploying / Publishing

TODO: Do through `semantic-release`

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
