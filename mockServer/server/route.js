const router = require('koa-router')()
const fs = require('fs')
const path = require('path')
const { generatedData } = require('../utils')


// 项目：vue3-bms 
const vue3Bms = require('../groups/vue3-bms')
vue3Bms.forEach(item => {
    // get请求
    router.get(item.path, (ctx) => {
        ctx.body = generatedData(item.dataFormat)
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