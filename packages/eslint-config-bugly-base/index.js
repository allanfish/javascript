module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/imports',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    strict: 'error',
  },
  globals: {
    __DEVELOPMENT__: true,
    __CLIENT__: true,
    __SERVER__: true,
    __DISABLE_SSR__: true,
    __DEVTOOLS__: true,
    __TEST__: true,
    __OA__: true,
    __PRODUCTION__: true,
    __PRODTEST__: true,
    __data: true,
    __DATA__: true,
    __INITIAL_STATE__: true
  },
};
