module.exports = {
  extends: [
    'standard',
    'prettier',
    'prettier/standard',
    'plugin:jest/recommended',
    'plugin:lodash-fp/recommended',
  ],
  plugins: ['prettier', 'standard', 'jest', 'lodash-fp'],
  parserOptions: {
    ecmaFeatures: {},
  },
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
  },
}
