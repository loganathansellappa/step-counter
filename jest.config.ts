/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.tsx?$': 'babel-jest', // Babel only used in Jest. Vite uses esbuild internally
  },
  transformIgnorePatterns: [],

  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: ['/node_modules/', 'dist', '/src/main'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,js,tsx,jsx}'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'dist',
    'src/main.tsx',
    'src/vite-env.d.ts',
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 60,
      lines: 80,
      functions: 80,
    },
  },
};
