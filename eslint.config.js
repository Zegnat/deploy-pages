import github from 'eslint-plugin-github'
import prettierConfig from 'eslint-config-prettier'
import globals from 'globals'

const githubFlatConfigs = github.getFlatConfigs()

export default [
  {
    ignores: ['dist/']
  },
  githubFlatConfigs.internal,
  prettierConfig,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest
      }
    },
    rules: {
      semi: ['error', 'never']
    }
  }
]
