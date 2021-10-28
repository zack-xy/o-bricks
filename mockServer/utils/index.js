var Mock = require('mockjs')
// 生成数据
function generatedData(data) {
   return  Mock.mock(data)
}
module.exports = {
    generatedData
}