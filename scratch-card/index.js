window.onload = function () {
 // 获取画布元素
  let canvas = document.getElementById('canvas')
  // 获得绘图对象
  let ctx = canvas.getContext('2d')
  ctx.lineWidth = 3

  // 绘制一个矩形框
  ctx.rect(0, 0, 300, 150)
  ctx.fillStyle = '#ccc'
  ctx.fill()

  // 鼠标按下事件
  canvas.onmousedown = function(e) {
    // 鼠标移入的时候绘制鼠标位置
    canvas.onmousemove = function(e) {
      // 清除矩形区域
      ctx.clearRect(e.clientX, e.clientY, 10, 10)
    }
  } 
  // 鼠标松开事件
  canvas.onmouseup = function(e) {
    canvas.onmousemove = null
  }

  // 中奖信息
  const arr = ['话费50元','话费100元','积分50','积分100','现金500元','现金1000元','谢谢惠顾 ']
  const prize = document.querySelector('.prize')
  // 随机数据
  const i = Math.floor(Math.random() * arr.length)
  prize.innerHTML = arr[i]

}
 