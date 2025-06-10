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
