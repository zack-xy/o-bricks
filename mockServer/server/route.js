const router = require('koa-router')()
const fs = require('fs')
const path = require('path')
const NewMock = require('../utils')
const PassThrough = require('stream').PassThrough


// 项目：vue3-bms 
const vue3Bms = require('../groups/vue3-bms')
const Mock = new NewMock()
vue3Bms.forEach(item => {
  // get请求
  router.get(item.path, async (ctx) => {
    const res = await Mock.asyncGeneratedData({ ...item })
    ctx.body = res
  })
})


// get请求
// router.get('/(.*)', (ctx) => {
//     ctx.body = '访问到服务器'
// })

// 测试Server-Sent 
// 不太会写服务端，这里有问题，连接关闭后无法再次连接
router.get('/stream', (ctx) => {
  var stream = new PassThrough()
  var stream2 = new PassThrough()
  const msgList = [
    { message: "消息111111" }
  ]
  ctx.set({
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });
  interval = setInterval(function () {
    msgList.unshift({
      message: `消息：${new Date().getTime()}`,
      userId: "zack"
    })
    stream2.write("data: " + JSON.stringify(msgList) + "\n\n")
  }, 2000);
  ctx.body = stream.pipe(stream2);
})


// post请求
router.post('/test', (ctx) => {
  ctx.body = {};
})
module.exports = router