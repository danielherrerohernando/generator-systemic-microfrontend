module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:jest/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest'
  ],
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'comma-dangle': 0,
    'arrow-parens': ["error", "as-needed"],
    'consistent-return': 0,
    'max-len': ["error", { "code": 175 }],
    'no-console': 0,
    'linebreak-style': 0,
    'indent': ['warn', "tab"],
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': 0,
    'react/no-array-index-key': 0,
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-indent': 0,
    'react/jsx-closing-tag-location': 0
  },
};