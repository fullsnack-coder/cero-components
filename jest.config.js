module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/utils/testUtils/svgrMock.js',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  collectCoverageFrom: [
    '{atoms,molecules,layout}/**/!(index).js',
    '{hocs,helpers}/*.js',
  ],
  coverageThreshold: {
    global: {
      statements: 60,
      branches: 60,
      lines: 60,
      functions: 60,
    },
  },
}
