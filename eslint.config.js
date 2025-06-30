import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import plugin from '@tanstack/eslint-plugin-router'
import pluginQuery from '@tanstack/eslint-plugin-query'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      plugin.configs['flat/recommended'],
      pluginQuery.configs['flat/recommended'] ,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [
            ['@', './src']
          ],
          extensions: ['.ts', '.tsx', '.js', '.jsx']
        }
      }
    }
  },
])
