import storage from '@/utils/storage'

describe('storage', () => {
  it('cache value', () => {
    storage.set('newKey', 'hello')
    expect(localStorage.getItem('my-app-newKey')).toEqual('hello')
  })

  it('set value', () => {
    localStorage.setItem('my-app-newKey', 'hello')
    expect(storage.get('newKey')).toEqual('hello')
  })
})
