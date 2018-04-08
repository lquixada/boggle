module.exports = {
  'moduleNameMapper': {
    '\\.scss': 'identity-obj-proxy'
  },
  'testEnvironment': 'jsdom',
  'testMatch': [
    '<rootDir>/src/**/*.spec.js'
  ],
  'setupTestFrameworkScriptFile': '<rootDir>/src/__tests__/_setup/index.js',
  'coverageDirectory': '<rootDir>/.coverage',
  'coverageThreshold': {
    'global': {
      'branches': 70,
      'functions': 80,
      'lines': 80,
      'statements': 80
    }
  }
};
