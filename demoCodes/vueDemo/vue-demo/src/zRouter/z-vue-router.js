// 插件
// 1.实现一个install方法
let zVue
class ZVueRouter {
  constructor(options) {
    this.$options = options

    // 缓存path和route映射关系
    this.routeMap = {}
    this.$options.routes.forEach(route => {
      this.routeMap[route.path] = route
    })

    // 响应式数据
    const initial = window.location.hash.slice(1) || '/'
    zVue.util.defineReactive(this, 'current', initial)

    // 监听事件
    window.addEventListener('hashchange', this.onHashChange.bind(this))
    window.addEventListener('load', this.onHashChange.bind(this))
  }

  onHashChange () {
    this.current = window.location.hash.slice(1)
    console.log(this.current);
  }
}

//形参是Vue构造函数
ZVueRouter.install = function (Vue) {
  zVue = Vue
  console.log(zVue);

  // 1.挂载$router
  Vue.mixin({
    beforeCreate () {
      // 全局混入，将来在组件实例化的时候才执行
      // 此时router实例是不是已经存在了
      // this指的是组件实例
      if (this.$options.router) {
        // 这里拿的是new Vue里的ZVueRouter实例，
        //之所以要这样拿，是因为vue.use的时候，install就执行了，这时候，new Vue还没有执行，所以也拿不到ZvueRouter实例，
        //混入到生命周期里，延迟到组件创建的时候再拿
        // 挂载
        Vue.prototype.$router = this.$options.router
      }
    }
  })

  // 2.实现2个全局组件
  Vue.component('router-link', {
    props: {
      to: {
        type: String,
        required: true
      }
    },
    render (h) {
      // h函数的参数:tag,props,children
      // 这里也支持jsx
      // return <a href={'#' + this.to}>this.$slots.default</a>
      return h('a', { attrs: { href: '#' + this.to } }, this.$slots.default)
    }
  })
  Vue.component('router-view', {
    render (h) {
      // 1. 获取路由器实例
      const { routeMap, current } = this.$router
      const comp = routeMap[current] ? routeMap[current].component : null
      return h(comp)
    }
  })
}

export default ZVueRouter