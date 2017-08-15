module.exports = {
  extends: ['./shared/core.js', './shared/react.js', './shared/prettier.js'],
  globals: {
    __DEV__: false,
    Atomics: false,
    ErrorUtils: false,
    FormData: false,
    SharedArrayBuffer: false,
    XMLHttpRequest: false,
    alert: false,
    cancelAnimationFrame: false,
    cancelIdleCallback: false,
    fetch: false,
    navigator: false,
    requestAnimationFrame: false,
    requestIdleCallback: false,
    window: false,
  },
};
