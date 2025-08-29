require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
   root: true,
   env: {
      browser: true,
      es2021: true,
   },
   extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
   ],
   overrides: [],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
         jsx: true,
      },
   },
   plugins: ['react', '@typescript-eslint'],
   rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
   },
   settings: {
      react: {
         version: 'detect',
      },
   },
};