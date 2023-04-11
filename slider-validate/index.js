window.onload = function() {
  const btn = document.querySelector('.btn') // 按钮
  const box = document.querySelector('.box')
  const text = document.querySelector('.text')
  const bg = document.querySelector('.bg')
  let flag = false

  // 鼠标按下
  btn.onmousedown = function(downEvent) {
      const downX = downEvent.clientX
      // 移动
      btn.onmousemove = function(moveEvent) {
        let moveX = moveEvent.clientX - downX
        // 移动范围
        if(moveX > 0) {
          this.style.left = moveX + 'px'
          bg.style.width = moveX + 'px'
          // 验证成功
          if(moveX >= (box.offsetWidth - this.offsetWidth)) {
            flag = true
            text.innerHTML = "验证成功"
            text.style.color = '#fff'
            btn.onmousemove = null
            btn.onmousedown = null
          }
        }
      }
  }

  btn.onmouseup = function(e) {
    btn.onmousemove = null
    if(flag) return
    this.style.left = 0 + 'px'
    bg.style.width = 0 + 'px'
  }
}
 