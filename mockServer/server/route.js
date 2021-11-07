const router = require('koa-router')()
const fs = require('fs')
const path = require('path')
const NewMock = require('../utils')
const Mock = new NewMock()
// 项目：vue3-bms 
const vue3BmsRoutes = require('../groups/vue3-bms')
const allInterfaces = [...vue3BmsRoutes]
allInterfaces.forEach(item => {
  // 默认post请求
  const reqType = item.type || 'post'
  router[reqType](item.path, async (ctx) => {
    const res = await Mock.asyncGeneratedData({ ...item })
    ctx.body = res
  })
})
module.exports = router