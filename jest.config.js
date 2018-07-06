module.exports = {
  preset: 'react-native',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/src/**/*.spec.js'
  ],
  transform: {
    '^.+\\.js$': '<rootDir>/jest-preprocess.js'
  },
  setupTestFrameworkScriptFile: '<rootDir>/src/__tests__/setup.js',
  collectCoverage: false,
  coverageDirectory: '<rootDir>/.reports/coverage',
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 90,
      lines: 95,
      statements: 95
    }
  }
}
