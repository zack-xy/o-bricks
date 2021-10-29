const router = require('koa-router')()
const fs = require('fs')
const path = require('path')
const NewMock = require('../utils')

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
// post请求

router.post('/timeline/activities', (ctx) => {
    ctx.body = JSON.parse(content)
})


module.exports = router