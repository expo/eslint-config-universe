# eslint-config-exponent
Shared ESLint configs for Exponent's JS.

## Installation

```sh
npm install eslint-config-exponent --save-dev
```

## Usage

Import this config into your own ESLint configuration using the `extends` option. ESLint checks both package.json and .eslintrc.* files for its configuration:

### package.json
```json
{
  "eslintConfig": {
    "extends": "exponent"
  }
}
```

### .eslintrc.js
```js
module.exports = {
  extends: 'exponent',
};
```

## React and JSX Support

There are two configs: one for JavaScript and one for React. The React configuration extends the JavaScript one and adds support and linter rules for JSX.

###
```js
"eslintConfig": {
  "extends": "exponent"
  // or
  "extends": "exponent/react"
}
```

