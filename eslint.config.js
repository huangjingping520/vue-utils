import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  formatters: true,
  stylistic: {
    overrides: {
      'style/comma-dangle': ['error', 'never']
    }
  },
  vue: {
    overrides: {
      'vue/comma-dangle': ['error', 'never']
    }
  }
})
