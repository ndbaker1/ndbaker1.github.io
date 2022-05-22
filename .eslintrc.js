module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['solid', '@typescript-eslint'],
  extends: ['standard', 'eslint:recommended', 'plugin:solid/typescript'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    quotes: [
      { allowTemplateLiterals: true }
    ]
  }
}
