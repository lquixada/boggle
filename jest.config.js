module.exports = {
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/src/**/*.spec.js'
  ],
  setupTestFrameworkScriptFile: '<rootDir>/src/__tests__/setup.js',
  collectCoverage: false,
  coverageDirectory: '<rootDir>/.reports/coverage',
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 95,
      lines: 95,
      statements: 95
    }
  }
}
