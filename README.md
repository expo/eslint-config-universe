# eslint-config-expo
Shared ESLint configs for Expo's JS.

## Installation

```sh
yarn add --dev eslint-config-expo
```

You will also need to install `eslint`, `babel-eslint`, `eslint-plugin-babel`, `eslint-plugin-import`, and `eslint-plugin-react` (if you want to lint React and JSX):

```sh
yarn add --dev eslint babel-eslint eslint-plugin-babel eslint-plugin-import eslint-plugin-react
```

## Usage

Import this config into your own ESLint configuration using the `extends` option. ESLint checks both package.json and .eslintrc.* files for its configuration:

### package.json
```json
{
  "eslintConfig": {
    "extends": "expo"
  }
}
```

### .eslintrc.js
```js
module.exports = {
  extends: 'expo',
};
```

## React and JSX Support

There are two configs: one for JavaScript and one for React. The React configuration extends the JavaScript one and adds support and linter rules for JSX.

###
```js
"eslintConfig": {
  "extends": "expo"
  // or
  "extends": "expo/react"
}
```

