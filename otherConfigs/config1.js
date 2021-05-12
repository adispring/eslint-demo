module.exports = {
  env: {
    browser: true,
    node: true,
  },
  globals: {
    Haha: 'readonly',
    Hehe: 'writable',
  },
  /* extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'], */
  rules: {
    'no-empty-function': 'error',
  },
};
