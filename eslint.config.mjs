import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 'warn',
      'comma-dangle': 'error',
      'no-console': 'error',
      'multiline-ternary': 'off',
      'no-use-before-define': 'off',
      'space-before-function-paren': 'off',
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
      'react/display-name': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      semi: ['error', 'never'],
      'react/jsx-key': 'error',
      quotes: ['error', 'single'],
      'react-hooks/exhaustive-deps': 'off',
      'react-hooks/rules-of-hooks': 'error'
    }
  }
]

export default eslintConfig
