module.exports = {
  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
    },
  },

  env: {
    es6: true,
    jest: true,
    node: true,
  },

  plugins: [
    'babel',
    'import',
  ],

  rules: {
    'no-alert': 1,
    'no-array-constructor': 1,
    'no-bitwise': 0,
    'no-caller': 1,
    'no-catch-shadow': 0,
    'no-class-assign': 0,
    'no-cond-assign': 1,
    'no-confusing-arrow': 0,
    'no-console': 0,
    'no-const-assign': 2,
    'no-constant-condition': 1,
    'no-continue': 0,
    'no-control-regex': 1,
    'no-debugger': 1,
    'no-delete-var': 2,
    'no-div-regex': 1,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-duplicate-imports': 2,
    'no-else-return': 0,
    'no-empty': 0,
    'no-empty-character-class': 1,
    'no-eq-null': 0,
    'no-eval': 1,
    'no-ex-assign': 1,
    'no-extend-native': 1,
    'no-extra-bind': 1,
    'no-extra-boolean-cast': 1,
    'no-extra-parens': 0,
    'no-extra-semi': 1,
    'no-fallthrough': 1,
    'no-floating-decimal': 1,
    'no-func-assign': 2,
    'no-implied-eval': 1,
    'no-inline-comments': 0,
    'no-inner-declarations': [0, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 1,
    'no-iterator': 1,
    'no-label-var': 1,
    'no-labels': [1, { allowLoop: true, allowSwitch: true }],
    'no-lone-blocks': 1,
    'no-lonely-if': 0,
    'no-loop-func': 0,
    'no-mixed-operators': 0,
    'no-mixed-requires': [0, false],
    'no-mixed-spaces-and-tabs': [1, false],
    'no-multi-spaces': 0,
    'no-multi-str': 0,
    'no-multiple-empty-lines': [0, { max: 2 }],
    'no-native-reassign': 0,
    'no-negated-condition': 0,
    'no-negated-in-lhs': 1,
    'no-nested-ternary': 0,
    'no-new': 1,
    'no-new-func': 1,
    'no-new-object': 1,
    'no-new-require': 1,
    'no-new-symbol': 2,
    'no-new-wrappers': 1,
    'no-obj-calls': 1,
    'no-octal': 1,
    'no-octal-escape': 1,
    'no-param-reassign': 0,
    'no-path-concat': 1,
    'no-plusplus': 0,
    'no-process-env': 0,
    'no-process-exit': 0,
    'no-proto': 1,
    'no-prototype-builtins': 0,
    'no-redeclare': 1,
    'no-regex-spaces': 0,
    'no-restricted-globals': 0,
    'no-restricted-imports': 0,
    'no-restricted-modules': 0,
    'no-restricted-syntax': 0,
    'no-return-assign': 1,
    'no-return-await': 0,
    'no-script-url': 1,
    'no-self-compare': 1,
    'no-sequences': 1,
    'no-shadow': 0,
    'no-shadow-restricted-names': 1,
    'no-spaced-func': 1,
    'no-sparse-arrays': 1,
    'no-sync': 0,
    'no-ternary': 0,
    'no-trailing-spaces': 1,
    'no-this-before-super': 1,
    'no-throw-literal': 1,
    'no-undef': 2,
    'no-undef-init': 0,
    'no-undefined': 0,
    'no-unexpected-multiline': 1,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 1,
    'no-unreachable': 1,
    'no-unsafe-finally': 0,
    'no-unused-expressions': 1,
    'no-unused-vars': [1, { vars: 'all', args: 'none' }],
    'no-use-before-define': 0,
    'no-useless-call': 0,
    'no-useless-computed-key': 1,
    'no-useless-concat': 1,
    'no-useless-constructor': 1,
    'no-useless-rename': 1,
    'no-void': 1,
    'no-var': 0,
    'no-warning-comments': [0, { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],
    'no-whitespace-before-property': 1,
    'no-with': 1,

    'array-bracket-spacing': [1, 'never'],
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'arrow-spacing': [1, { before: true, after: true }],
    'accessor-pairs': 0,
    'block-scoped-var': 0,
    'block-spacing': [1, 'always'],
    'brace-style': [0, '1tbs'],
    'callback-return': 0,
    'camelcase': 0,
    'comma-dangle': [1, 'always-multiline'],
    'comma-spacing': [1, { before: false, after: true }],
    'comma-style': [1, 'last'],
    'complexity': [0, 11],
    'computed-property-spacing': [0, 'never'],
    'consistent-return': 0,
    'consistent-this': [0, 'self'],
    'constructor-super': 1,
    'curly': [1, 'all'],
    'default-case': 0,
    'dot-location': [1, 'property'],
    'dot-notation': [0, { allowKeywords: true }],
    'eol-last': 1,
    'eqeqeq': [1, 'smart'],
    'func-names': 0,
    'func-style': [0, 'declaration'],
    'generator-star-spacing': [1, 'after'],
    'global-require': 0,
    'guard-for-in': 0,
    'handle-callback-err': [1, '^(err|error)$'],
    'id-blacklist': [0],
    'id-length': [0],
    'id-match': [0],
    'indent': [0, 2],
    'init-declarations': 0,
    'jsx-quotes': [1, 'prefer-double'],
    'key-spacing': [0, { beforeColon: false, afterColon: true }],
    'keyword-spacing': [1, { before: true, after: true }],
    'linebreak-style': [0, 'unix'],
    'lines-around-comment': 0,
    'max-depth': [0, 4],
    'max-len': [0, 80, 4],
    'max-nested-callbacks': [0, 2],
    'max-params': [0, 3],
    'max-statements': [0, 10],
    'max-statements-per-line': [0, { max: 1 }],
    'new-cap': 0,
    'new-parens': 1,
    'newline-after-var': 0,
    'newline-before-return': 0,
    'newline-per-chained-call': [1, { ignoreChainWithDepth: 4 }],
    'object-curly-spacing': 0,
    'object-property-newline': [0, { allowMultiplePropertiesPerLine: true }],
    'object-shorthand': 1,
    'one-var': [0, 'never'],
    'one-var-declaration-per-line': [0, 'always'],
    'operator-assignment': [0, 'always'],
    'operator-linebreak': [1, 'after'],
    'padded-blocks': 0,
    'prefer-arrow-callback': 0,
    'prefer-const': 0,
    'prefer-reflect': 0,
    'prefer-rest-params': 1,
    'prefer-spread': 1,
    'prefer-template': 0,
    'quote-props': 0,
    'quotes': [0, 'single', 'avoid-escape'],
    'radix': 1,
    'rest-spread-spacing': [1, 'never'],
    'require-jsdoc': 0,
    'require-yield': 0,
    'semi': 1,
    'semi-spacing': [1, { before: false, after: true }],
    'sort-imports': 0,
    'sort-vars': 0,
    'space-before-blocks': [1, 'always'],
    'space-before-function-paren': [1, { anonymous: 'never', named: 'never' }],
    'space-in-parens': [1, 'never'],
    'space-infix-ops': 1,
    'space-unary-ops': [0, { words: true, nonwords: false }],
    'spaced-comment': 0,
    'strict': [0, 'global'],
    'template-curly-spacing': [1, 'never'],
    'unicode-bom': [1, 'never'],
    'use-isnan': 2,
    'valid-jsdoc': 0,
    'valid-typeof': 2,
    'vars-on-top': 0,
    'wrap-iife': 0,
    'wrap-regex': 0,
    'yield-star-spacing': [1, 'after'],
    'yoda': [1, 'never', { exceptRange: true }],

    'babel/new-cap': 0,
    'babel/no-await-in-loop': 0,
    'babel/no-invalid-this': 1,
    'babel/object-curly-spacing': [0, 'always', { objectsInObjects: false }],

    'flowtype/object-type-delimiter': [1, 'comma'],

    'import/order': [1, {
      groups: [['builtin', 'external'], 'internal', 'index', 'sibling', 'parent'],
      'newlines-between': 'ignore',
    }],
  },
};
