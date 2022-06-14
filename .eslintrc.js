// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  ignorePatterns: [
    'webpack.config.js',
  ],
  rules: {
    'no-console': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'max-len': ['warn', { code: 80, ignoreComments: true }],
    'no-var': 'error',
    'spaced-comment': ['error', 'always'],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-empty-function': 'off'
  }
}
