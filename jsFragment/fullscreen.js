// 全屏
// 谷歌浏览器已测试，其他浏览器存疑
/**
 * 
 * @param {*} mode true显示全屏 false关闭全屏
 * @param {*} el 全屏的元素，默认body
 */
const fullscreen = (mode = true, el = 'body') => {
  let ele = document.querySelector(el)
  if (mode) {
    if (ele.requestFullscreen) ele.requestFullscreen()
    if (ele.mozRequestFullScreen) ele.mozRequestFullScreen()
    if (ele.webkitRequestFullScreen) ele.webkitRequestFullScreen()
    if (ele.msRequestFullScreen) ele.msRequestFullScreen()
  } else {
    ele = document
    if (ele.exitFullscreen) ele.exitFullscreen()
    if (ele.mozCancelFullScreen) ele.mozCancelFullScreen()
    if (ele.webkitExitFullScreen) ele.webkitCancelFullScreen()
    if (ele.msExitFullScreen) ele.msCancelFullScreen()
  }
}
// 判断是否是全屏模式
const isFullScreen = () => {
  return !!(
    document.fullscreen ||
    document.mozFullScreen ||
    document.webkitISFullScreen ||
    document.webkitFullScreen ||
    document.msFullScreen
  )
}