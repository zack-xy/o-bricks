const configRoot = require('./configRoot')
const path = require('path')
const { generateInterface } = require('../../utils/tools')
const generateInter = function (foldName, defaultRootName = 'baseApi', attr = {}) {
  return generateInterface(path.resolve(__dirname, foldName), configRoot, configRoot[defaultRootName] || '', attr)
}
const approve = generateInter('approve')
const users = generateInter('users')

// 测试一个get请求
// getInter表明到getInter文件夹下读接口地址
// 第2个参数空，代表没有固定前缀地址
// 第3个参数表明为get请求
// 接口地址就是/test
const getInterface = generateInter('getInter', '', { type: 'get' })

module.exports = [...users, ...approve, ...getInterface]