module.exports = {
  moduleNameMapper: {
    '\\.scss': 'identity-obj-proxy'
  },
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/src/**/*.spec.js'
  ],
  setupTestFrameworkScriptFile: '<rootDir>/src/__tests__/_setup/index.js'
};