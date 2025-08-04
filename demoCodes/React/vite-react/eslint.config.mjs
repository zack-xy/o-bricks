import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: ['bin/', '**/bin/**/', 'node_modules/', '**/node_modules/**/', 'dist/', '**/dist/**/'],
})
