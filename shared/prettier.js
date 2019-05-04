const prettier = require('prettier');

const defaultPrettierConfig = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  jsxBracketSameLine: true,
  trailingComma: 'es5',
};

module.exports = {
  extends: ['prettier', 'prettier/flowtype', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      prettier.resolveConfig.sync(process.cwd()) || defaultPrettierConfig,
    ],
  },
};
