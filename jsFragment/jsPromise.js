/* eslint-disable no-console */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-throw-literal */
/* eslint-disable @typescript-eslint/no-unused-vars */
const p1 = Promise.resolve('foo')
// 注释均是输出p2、p3......
// Promise <resolved>: foo
const p2 = p1.then()
// Promise <resolved>: undefined
const p3 = p1.then(() => undefined)
const p4 = p1.then(() => { })
const p5 = p1.then(() => Promise.resolve())
// Promise <resolved>: var
const p6 = p1.then(() => 'bar')
const p7 = p1.then(() => Promise.resolve('bar'))
// Promise <pending>
const p8 = p1.then(() => new Promise(() => { }))
// Promise <rejected>: undefined
const p9 = p1.then(() => Promise.reject())
// Promise <rejected> baz
const p10 = p1.then(() => { throw 'baz' })
// 返回错误值依然是resolved
// Promise <resolved>: Error: qux
const p11 = p1.then(() => Error('qux'))

////////////////////////////////////////////////////////////////////////////////

// 任意多个函数作为处理程序合成一个连续传值的期约连锁
function compose(...fns) {
  return x => fns.reduce((promise, fn) => promise.then(fn), Promise.resolve(x))
}

/**
 * compose使用
 */
function addTwo(x) { return x + 2 }
function addThree(x) { return x + 3 }
function addFive(x) { return x + 5 }

const addTen = compose(addTwo, addThree, addFive)
addTen(8).then(console.log)

//////////////////////////////////////////////////////////////////////////////

// promise进度
class TrackablePromise extends Promise {
  constructor(executor) {
    // 存储通知函数
    const notifyHandlers = []

    super((resolve, reject) => {
      return executor(resolve, reject, (status) => {
        notifyHandlers.map(hanlder => hanlder(status))
      })
    })

    this.notifyHandlers = notifyHandlers
  }

  notify(notifyHandler) {
    this.notifyHandlers.push(notifyHandler)
    return this
  }
}

// 实例化一个promise
const p = new TrackablePromise((resolve, reject, notify) => {
  function countdown(x) {
    if (x > 0) {
      notify(`${20 * x}% remaining`)
      setTimeout(() => countdown(x - 1), 1000)
    }
    else {
      resolve()
    }
  }

  countdown(5)
})

p.notify(x => setTimeout(console.log, 0, 'progress:', x))
p.then(() => setTimeout(console.log, 0, 'completed'))
