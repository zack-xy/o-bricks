/**
 * 所有数字千分位（3位）分隔
 * @param {Number} 
 * @returns {String} 
 */
const percentagePoint = (num) => {
  return String(num).replace(/\B(?=(\d{3})+\b)/g, ",")
}
/**
* js方法，千分位分隔
* @param {Number} 
* @returns {String} 
*/
const percentagePoint2 = (num) => {
  return Number(num).toLocaleString()
}
