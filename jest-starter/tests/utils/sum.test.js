/* eslint-disable no-undef */
const sum = require('../../src/utils/sum')

describe('sum', () => {
  it('sum test', () => {
    expect(sum(1, 1)).toEqual(2)
  })
})
