# eslint-config-expo
Shared ESLint configs for Expo's JS.

## Installation

```sh
yarn add --dev eslint-config-expo
```

You will also need to install `eslint` and `prettier`:

```sh
yarn add --dev eslint prettier
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

## Support for Different Platforms

There are several configs for different platforms. They are:
* `expo`: the basic config for JavaScript projects for which there isn't a more specific config
* `expo/native`: the config for React Native projects, including Expo projects, with support for React and JSX
* `expo/web`: the config for code that runs in web browsers, with support for React and JSX
* `expo/node`: the config for code that runs in Node

For an Expo project, your configuration might look like this:

```js
"eslintConfig": {
  "extends": "expo/native"
}
```

You also can extend multiple configs, which is useful for projects that span several platforms:

```js
"eslintConfig": {
  "extends": ["expo/node", "expo/web"]
}
```
