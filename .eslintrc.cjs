module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'comma-dangle':'off',
    'quotes':'off',
    'prefer-promise-reject-errors':'off',
    'object-curly-spacing':'off',
    'semi':'off',
    'space-before-function-paren':'off',
  }
}
