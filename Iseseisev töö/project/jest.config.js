module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.js'],
  coverageThreshold: {
    global: { statements: 90, branches: 80, functions: 90, lines: 90 }
  }
};