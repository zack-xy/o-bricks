/* eslint-disable no-console */
// 实现可遍历结构
class Counter {
  constructor(limit) {
    this.limit = limit
  }

  [Symbol.iterator]() {
    let count = 1; const limit = this.limit
    return {
      next() {
        if (count <= limit)
          return { done: false, value: count++ }

        else
          return { done: true, value: undefined }
      },
    }
  }
}
const counter = new Counter(3)
for (const i of counter)
  console.log(i)

