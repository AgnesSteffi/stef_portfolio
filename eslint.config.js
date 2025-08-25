// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  // Ignore build/dist folders
  { ignores: ['dist'] },

  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // Base ESLint recommended rules
      ...js.configs.recommended.rules,

      // React hooks best practices
      ...reactHooks.configs.recommended.rules,

      // No unused variables unless they're constants (like uppercase enums)
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

      // Ensure only valid exports for React Fast Refresh
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
