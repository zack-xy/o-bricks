var Mock = require('mockjs')
const chalk = require('chalk')

// 自定义占位符
const constellations = [
    '白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'
]
/**
 * 初始化Mock，加入自定义占位符
 */
class NewMock {
    constructor(props) {
        var Random = Mock.Random
        Random.extend({
            constellation: function (date) {
                return this.pick(constellations)
            }
        })
        this.Mock = Mock
    }
    /**
     * 异步mock数据
     * @param {string} path  // 接口路径 
     * @param {string} format  // 数据格式（mockjs格式） 
     * @param {string} timeout  // 请求的响应时间，默认200-600毫秒
     */
    asyncGeneratedData ({ path, format, timeout }) {
        let timestamp = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()
        console.log(chalk.blue(`${timestamp} 请求接口>>`, path))
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const mockData = Mock.mock(format)
                if (mockData) {
                    resolve(mockData)
                } else {
                    reject()
                }
            }, timeout ? timeout : Math.floor(Math.random() * 401 + 200))
        })
    }
    /**
     * 同步mock数据
     * @param {string} path  // 接口路径  
     * @param {string} format  // 数据格式（mockjs格式） 
     */
    syncGeneratedData ({ path, format }) {
        let timestamp = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()
        console.log(chalk.blue(`${timestamp} 请求接口>>`, path))
        return Mock.mock(format)
    }
}
module.exports = NewMock