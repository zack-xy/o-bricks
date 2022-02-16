let p1 = Promise.resolve('foo')
// 注释均是输出p2、p3......
// Promise <resolved>: foo
let p2 = p1.then();
// Promise <resolved>: undefined
let p3 = p1.then(() => undefined)
let p4 = p1.then(() => { })
let p5 = p1.then(() => Promise.resolve())
// Promise <resolved>: var
let p6 = p1.then(() => 'bar')
let p7 = p1.then(() => Promise.resolve('bar'))
// Promise <pending>
let p8 = p1.then(() => new Promise(() => { }))
// Promise <rejected>: undefined 
let p9 = p1.then(() => Promise.reject())
// Promise <rejected> baz
let p10 = p1.then(() => { throw 'baz' })
// 返回错误值依然是resolved
// Promise <resolved>: Error: qux
let p11 = p1.then(() => Error('qux'))