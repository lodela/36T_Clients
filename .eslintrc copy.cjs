const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error',
}
module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    // 'eslint:recommended',
    'plugin:react/recommended',
    // 'plugin:react/jsx-runtime',
    // 'plugin:react-hooks/recommended',
    'standard',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': RULES.OFF,
    'react-refresh/only-export-components': [
      RULES.WARN,
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': RULES.OFF,
  },
}
