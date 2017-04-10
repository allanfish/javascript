module.exports = {
  extends: [
    'eslint-config-bugly-base',
    'eslint-config-bugly-base/rules/strict',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
};
