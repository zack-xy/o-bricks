let zVue
class Store {
  constructor(options) {
    // 保存mutations
    this._mutations = options.mutations
    // 保存actions
    this._actions = options.actions
    // 保存getters
    this._wrappedGetters = options.getters
    // 绑定this到store实例
    const store = this
    const { commit, action } = store
    this.commit = function boundCommit (type, payload) {
      commit.call(store, type, payload)
    }
    this.action = function boundAction (type, payload) {
      return action.call(store, type, payload)
    }

    // 定义computed选项
    const computed = {}
    this.getters = {}
    Object.keys(this._wrappedGetters).forEach(key => {
      // 获取用户定义的getter
      const fn = store._wrappedGetters[key]
      // 转换为computed可以使用的无参数格式
      computed[key] = function () {
        return fn(store.state)
      }
      //为getter定义只读属性
      Object.defineProperty(store.getters, key, {
        get: () => store._vm[key]
      })
    })

    // 响应式state
    this._vm = new zVue({
      data: {
        $$state: options.state
      },
      computed
    })
  }

  get state () {
    return this._vm._data.$$state
  }

  set state (v) {
    console.error('不能直接修改state');
  }

  // commit(type, payload):执行mutation修改状态
  commit (type, payload) {
    // 根据type获取对应的mutation
    const entry = this._mutations[type]

    if (!entry) {
      console.error("未知mutation类型")
      return
    }

    entry(this.state, payload)
  }

  // dispatch(type, payload)
  dispatch (type, payload) {
    const entry = this._actions[type]

    if (!entry) {
      console.error("未知action类型")
      return
    }

    // this是store实例，注意看一下使用时的定义
    return entry(this, payload)
  }
}

function install (Vue) {
  zVue = Vue

  // 混入
  Vue.mixin({
    beforeCreate () {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}

export default {
  Store,
  install
}