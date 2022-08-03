import objToSearchStr from '@/utils/objToSearchStr'

describe('objToSearchStr', () => {
  it('transform object to params string', () => {
    expect(
      objToSearchStr({
        a: '1',
        b: '2',
      }),
    ).toEqual('a=1&b=2')
  })
})
