module.exports = {
  'moduleNameMapper': {
    '\\.scss': 'identity-obj-proxy'
  },
  'testEnvironment': 'jsdom',
  'testMatch': [
    '<rootDir>/src/**/*.spec.js'
  ],
  'setupTestFrameworkScriptFile': '<rootDir>/src/__tests__/setup.js',
  'coverageDirectory': '<rootDir>/.coverage',
  'coverageThreshold': {
    'global': {
      'branches': 85,
      'functions': 90,
      'lines': 90,
      'statements': 90
    }
  }
};
