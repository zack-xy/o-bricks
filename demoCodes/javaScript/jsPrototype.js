// 把Bar.prototype关联到Foo.prototype
// ES6之前
Bar.prototype = Object.create(Foo.prototype)

// ES6可以直接修改现有的Bar.prototype
Object.setPrototypeOf(Bar.prototype, Foo.prototype)


/////////////////////////////////////////////////////////////////////

// b是否出现在c的[[Prototype]]链中
b.isPrototypeOf(c)


// 获取一个对象的[[Prototype]]链
Object.getPrototypeOf(a)


/////////////////////////////////////////////////////////////////////////

// __proto__的大致实现
Object.defineProperty(Object.prototype, "__proto__", {
  get: function () {
    return Object.getPrototypeOf(this)
  },
  set: function (o) {
    // ES6中的setPrototypeOf(..)
    Object.setPrototypeOf(this, o)
    return o
  }
})

////////////////////////////////////////////////////////////////////////////////

// Object.create()的polyfill代码
if (!Object.create) {
  Object.create = function (o) {
    function F () { }
    F.prototype = o
    return new F()
  }
}