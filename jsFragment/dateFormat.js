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
