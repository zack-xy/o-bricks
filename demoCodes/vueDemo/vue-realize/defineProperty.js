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

// 对象响应式处理
function observe (obj) {
  // 判断obj类型必须是对象
  if (typeof obj !== 'object' || obj === null) {
    return
  }
  Object.keys(obj).forEach(key => defineReactive(obj, key, obj[key]))
}

// 模拟set
function set (obj, key, val) { // 简版没有考虑val类型
  defineReactive(obj, key, val)
}