module.exports = {
  parser: 'babel-eslint',
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
      jsx: true,
      spread: true,
      restParams: true,
      destructuring: true,
      experimentalDecorators: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    strict: 'error',
  },
  globals: {
    window: true,
    document: true,
    location: true,
    __DEVELOPMENT__: true,
    __CLIENT__: true,
    __SERVER__: true,
    __DISABLE_SSR__: true,
    __DEVTOOLS__: true,
    __TEST__: true,
    __OA__: true,
    __PRODUCTION__: true,
    __UNITTEST__: true,
    __PRODTEST__: true,
    __data: true,
    __DATA__: true,
    __INITIAL_STATE__: true,
    describe: true,
    beforeEach: true,
    it: true,
    afterEach: true,
    app: true,
    mm: true,
    mock: true,
    request: true,
    assert: true,
    before: true, // mocha before()
    after: true, // mocha after()
    Mock: true, // mockjs
    Random: true,  // mockjs Mock.Random
    localStorage: true,
    ga: true
  },
};
