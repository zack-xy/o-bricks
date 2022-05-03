// 对象响应式原理
// Object.defineProperty()

function defineReactive (obj, key, val) {
  // val是对象，递归处理
  observe(val)
  Object.defineProperty(obj, key, {
    get () {
      console.log('get', val);
      return val
    },
    set (newVal) {
      if (newVal !== val) {
        console.log('set', newVal);
        val = newVal
        observe(newVal)
      }
    }
  })
}

// 数组响应式
// 1.替换数组原型中7个方法
const originalProro = Array.prototype;
// 备份一份，修改备份
const arrayProto = Object.create(originalProro);
['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(method => {
  arrayProto[method] = function () {
    // 原始操作
    originalProro[method].apply(this, arguments)
    // 覆盖操作，通知更新
    console.log('数组执行' + method + '操作');
  }
})

// 对象响应式处理
function observe (obj) {
  // 判断obj类型必须是对象
  if (typeof obj !== 'object' || obj === null) {
    return
  }

  if (Array.isArray(obj)) {
    // 覆盖原型，替换7个变更操作
    obj.__proto__ = arrayProto
    // 对数组内部元素执行响应式
    const keys = Object.keys(obj)
    for (let i = 0; i < obj.length; i++) {
      observe(obj[i])
    }
  } else {
    Object.keys(obj).forEach(key => defineReactive(obj, key, obj[key]))
  }

}

// 模拟set
function set (obj, key, val) { // 简版没有考虑val类型
  defineReactive(obj, key, val)
}

const obj = { foo: 'foo', arr: [1] }
observe(obj)
obj.arr.push(4)