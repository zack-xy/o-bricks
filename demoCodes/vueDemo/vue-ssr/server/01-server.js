const express = require('express')
const server = express()
const Vue = require('vue')
const { createRenderer } = require('vue-server-renderer')
const renderer = createRenderer()


server.get('/', (req, res) => {
  const app = new Vue({
    template: '<div>{{msg}}</div>',
    data: {
      msg: "我是一段信息"
    }
  })
  renderer.renderToString(app).then(html => {
    res.send(html)
  }).catch(err => {
    res.status(500)
    res.send('服务器错误' + err)
  })
})

server.listen(80, () => {
  console.log('server运行');
})