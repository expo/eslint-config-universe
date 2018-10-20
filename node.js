module.exports = {
  extends: ['./shared/core.js', './shared/react.js'],
  env: { node: true },
  rules: {
    'no-buffer-constructor': 'warn',
  },
};
