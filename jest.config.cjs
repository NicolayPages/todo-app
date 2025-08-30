module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^constants/(.*)$': '<rootDir>/src/constants/$1',
    '^store/(.*)$': '<rootDir>/src/store/$1',
    '^types/(.*)$': '<rootDir>/src/types/$1',
    '^hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^ui/(.*)$': '<rootDir>/src/ui/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/src/__mocks__/svg.js',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/setupTests.ts',
  ],
  testMatch: [
    '<rootDir>/src/__tests__/**/*.{js,jsx,ts,tsx}',
    '**/?(*.)+(spec|test).{js,jsx,ts,tsx}'
  ],
};