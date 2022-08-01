import getSearchObj from '@/utils/getSearchObj'

describe('getSearchObj', () => {
  it('get url query params', () => {
    // window.location.href = 'https://www.baidu.com?a=1&b=2'

    globalThis.jsdom.reconfigure({
      url: 'https://www.baidu.com?a=1&b=2',
    })

    expect(window.location.search).toEqual('?a=1&b=2')
    expect(getSearchObj()).toEqual({
      a: '1',
      b: '2',
    })
  })

  it('empty return', () => {
    // window.location.href = 'https://www.baidu.com'

    globalThis.jsdom.reconfigure({
      url: 'https://www.baidu.com',
    })

    expect(window.location.search).toEqual('')
    expect(getSearchObj()).toEqual({})
  })
})
