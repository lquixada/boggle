module.exports = {
  'moduleNameMapper': {
    '\\.scss': 'identity-obj-proxy'
  },
  'testEnvironment': 'jsdom',
  'testMatch': [
    '<rootDir>/src/**/*.spec.js'
  ],
  'setupTestFrameworkScriptFile': '<rootDir>/src/__tests__/setup.js',
  'collectCoverage': true,
  'coverageDirectory': '<rootDir>/.reports/coverage',
  'coverageThreshold': {
    'global': {
      'branches': 90,
      'functions': 95,
      'lines': 95,
      'statements': 95
    }
  }
};
