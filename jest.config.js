module.exports = {
  verbose: true,
  moduleFileExtensions: [
    'js',
    'jsx',
    'json'
  ],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
    '^@/(.*)$': '<rootDir>/lib/$1'
  },
  testMatch: [
    '**/tests/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ]
}