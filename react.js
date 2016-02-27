module.exports = {
  extends: 'eslint-config-exponent',

  parseOptions: {
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
  },

  plugins: [
    'react',
  ],

  rules: {
    'react/display-name': [1, { acceptTranspilerName: true }],
    'react/jsx-boolean-value': [1, 'never'],
    'react/jsx-no-undef': 2,
    'react/jsx-sort-prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-danger': 0,
    'react/no-did-mount-set-state': [1, 'allow-in-func'],
    'react/no-did-update-set-state': [1, 'allow-in-func'],
    'react/no-multi-comp': 0,
    'react/no-unknown-property': 1,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 2,
    'react/require-extension': 1,
    'react/self-closing-comp': 1,
    'react/sort-comp': 0,
    'react/wrap-multilines': [1, { declaration: false, assignment: false, return: true}],
  }
};
