
const fs = require('fs')
const path = require('path')
/**
 * 
 * @param {filePathName} 接口文件夹路径 
 * @param {configRoot} 配置统一前缀文件路径
 * @param {defaultRoot} 默认接口路径前置 
 */
function generateInterface (filePathName, configRoot, defaultRoot, attrs = {}) {
  const nameList = fs.readdirSync(filePathName)
  const configArr = []
  nameList.forEach(nameItem => {
    let apiPath = ''
    let newNameItem = nameItem
    let newRoot = defaultRoot
    for (const root in configRoot) {
      if (nameItem.startsWith(root)) {
        newRoot = configRoot[root]
        newNameItem = nameItem.replace(root + '_', '')
        break
      }
    }
    try {
      apiPath = newRoot + '\/' + newNameItem.split('_').join('\/').replace('.js', '')
    } catch (error) {
      console.log(error);
    }
    apiPath && configArr.push({
      path: apiPath,
      format: require(path.join(filePathName, nameItem)),
      ...attrs
    })
  })
  return configArr
}

module.exports = {
  generateInterface
}