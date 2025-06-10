/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-console */
/**
 *
 * 生成器
 */

// 代码1：
// 生成器作为可迭代对象
function* nTimes(n) {
  for (let i = 0; i < n; ++i)
    yield i
}

for (const x of nTimes(3))
  console.log(x)

// 0、1、2

///////////////////////////////////////////////////////////////////////////////////

// 代码2：
// 增强yield
function* generatorFn() {
  yield * [1, 2, 3]
  yield * [4, 5, 6]
}

const generatorObject = generatorFn()

for (const x of generatorObject)
  console.log(x)

// 1,2,3,4,5,6

///////////////////////////////////////////////////////////////////////////////////

// 代码3：
// 使用yield*实现递归算法

function* nTimes(n) {
  if (n > 0) {
    yield * nTimes(n - 1)
    yield n - 1
  }
}

for (const x of nTimes(3))
  console.log(x)

// 0,1,2

///////////////////////////////////////////////////////////////////////////////////

// 代码4：
// 提前终止生成器

function* generatorFn() {
  for (const x of [1, 2, 3]) {
    try {
      yield x
    }
    catch (error) {

    }
  }
}

const g = generatorFn()
console.log(g.next())
g.throw('foo')
console.log(g.next())

// {value: 1, done: false}
// {value: 3, done: false}
