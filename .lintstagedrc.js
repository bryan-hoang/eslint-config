const typeCheckCommand = () => 'npm run check:types';
const eslintCommand = 'npm run lint -- --fix';
const prettierCommand = 'npm run format -- --write';
const markdownlintCommand = 'npm run lint:markdown -- --fix';
const spellCheckCommand = 'npm run check:spelling';

const micromatchFileExtension = (...fileExtensions) =>
  `*.(${fileExtensions.join('|')})`;

module.exports = {
  [micromatchFileExtension('ts')]: [typeCheckCommand],
  [micromatchFileExtension('ts', 'js')]: [eslintCommand, spellCheckCommand],
  [micromatchFileExtension('md')]: [markdownlintCommand, spellCheckCommand],
  [micromatchFileExtension('md', 'json', 'svg', 'yaml', 'yml')]: [
    prettierCommand,
  ],
};
