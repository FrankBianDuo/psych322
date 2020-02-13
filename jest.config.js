module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transformIgnorePatterns: ["/node_modules/(?!ScriptTransformer)"],
  testTimeout: 100000000
}
