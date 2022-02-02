// 偏函数
// 带一个函数参数和该函数的部分参数
const partial = (f, ...args) => {
  (...moreArgs) => f(...args, ...moreArgs)
}


// 偏函数使用例子
const add3 = (a, b, c) => a + b + c
const fivePlus = partial(add3, 2, 3)
fivePlus(4)




// 函数的柯里化
// 函数柯里化例子1
// 柯里化之前
function add (x, y) {
  return x + y
}
add(1, 2) // 3
// 柯里化之后
function addX (y) {
  return function (x) {
    return x + y
  }
}
add(2)(1)




// 柯里化例子2
const checkage = min => (age => age > min)
const checkage18 = checkage(18)
checkage18(20)
// 函数反柯里化
Function.prototype.uncurring = function () {
  var self = this
  return function () {
    var obj = Array.prototype.shift.call(arguments)
    return self.apply(obj, arguments)
  }
}
var push = Array.prototype.push.uncurring(),
  obj = {}
push(obj, "first", "two")
console.log(obj)