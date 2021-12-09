/**
 * 
 * @param {*} date 日期
 * @param {*} rule 转换规则 例如：yyyy/MM/dd hh:mm:ss，默认：yyyy-MM-dd hh:mm:ss
 * @returns {String} 返回日期字符串
 */
const formatDate = (date, rule) => {
  let fmt = rule || 'yyyy-MM-dd hh:mm:ss'
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, date.getFullYear())
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (const key in o) {
    if (new RegExp(`(${key})`).test(fmt)) {
      const val = o[key] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? val : ('00' + val).substr(val.length))
    }
  }
  return fmt
}
/**
* 时间戳转日期格式
* @param {*} timestamp 时间戳
* @returns {Date} 返回一个日期
*/
const fromTimestamp = timestamp => new Date(Number(timestamp))
/**
* 日期字符串转时间戳
* @param {*} dateStr  例如：2021/10/1、2021-10-1 10:23:10
* @returns {Number} 毫秒数
*/
const toTimestamp = (dateStr) => {
  try {
    if (dateStr.includes(":")) {
      return Date.parse(dateStr.replace(/\\/g, "-"))
    } else {
      return Date.parse(dateStr.replace(/-/g, "/"))
    }
  } catch (error) {
    return new Date().getTime()
  }
}