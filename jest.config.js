module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/app/**',
    '!src/components/index.ts',
    '!src/lib/registry.tsx',
    '!src/types/**',
    '!src/**/stories.tsx',
    '!src/styles/**'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      'babel-jest',
      {
        presets: ['next/babel'],
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              ssr: true,
              displayName: true
            }
          ]
        ],
        env: {
          test: {
            plugins: [
              [
                'babel-plugin-styled-components',
                {
                  ssr: false,
                  displayName: false
                }
              ]
            ]
          }
        }
      }
    ]
  },
  moduleNameMapper: {
    '^styled-components':
      'styled-components/dist/styled-components.browser.cjs.js',
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};
