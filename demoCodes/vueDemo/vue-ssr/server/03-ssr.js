const express = require('express')
const { createRenderer } = require('vue-server-renderer')
const server = express()
const Vue = require('vue')
const renderer = createRenderer()

// 导入路由
const VueRouter = require('vue-router')
Vue.use(VueRouter)


server.get('*', async (req, res) => {
  // 创建一个路由器实例
  const router = new VueRouter({
    routes: [
      { path: '/', component: { template: '<div>Index</div>' } },
      { path: '/detail', component: { template: '<div>detail</div>' } },
    ]
  })
  const app = new Vue({
    router,
    template: `<div>
                  <router-link to="/">index</router-link>
                  <router-link to="/detail">detail</router-link>
                  <div>{{msg}}</div>
                  <router-view></router-view>
               </div>`,
    data () {
      return {
        msg: "我是一段信息"
      }
    }
  })
  try {

    //路由跳转
    router.push(req.url)

    const html = await renderer.renderToString(app)
    res.send(html)
  } catch (error) {
    res.status(500).send('服务器错误')
    console.log(error);
  }
})

server.listen(3000, () => {
  console.log('server运行');
})