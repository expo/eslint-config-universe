module.exports = {
  extends: 'eslint-config-exponent',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  globals: {
    __DEV__: false,
    XMLHttpRequest: false,
    FormData: false,
    fetch: false,
    requestAnimationFrame: false,
    cancelAnimationFrame: false,
    requestIdleCallback: false,
    cancelIdleCallback: false,
  },

  plugins: [
    'react',
  ],

  rules: {
    'react/display-name': [1, { ignoreTranspilerName: false }],
    'react/jsx-boolean-value': [1, 'never'],
    'react/jsx-closing-bracket-location': [1, {
      nonEmpty: 'after-props',
      selfClosing: 'tag-aligned',
    }],
    'react/jsx-curly-spacing': [1, 'never'],
    'react/jsx-equals-spacing': [1, 'never'],
    'react/jsx-handler-names': 0,
    'react/jsx-indent-props': [1, 2],
    'react/jsx-indent': [1, 2],
    'react/jsx-key': 0,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-bind': 1,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-literals': 0,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-space-before-closing': [1, 'always'],
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-danger': 0,
    'react/no-deprecated': 0,
    'react/no-did-mount-set-state': [1, 'allow-in-func'],
    'react/no-did-update-set-state': [1, 'allow-in-func'],
    'react/no-direct-mutation-state': 1,
    'react/no-is-mounted': 0,
    'react/no-multi-comp': 0,
    'react/no-set-state': 0,
    'react/no-string-refs': 0,
    'react/no-unknown-property': 1,
    'react/prefer-es6-class': 0,
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 2,
    'react/require-extension': 1,
    'react/self-closing-comp': 1,
    'react/sort-comp': 0,
    'react/sort-prop-types': 0,
    'react/wrap-multilines': [1, {
      declaration: false,
      assignment: false,
      return: true,
    }],
  }
};
