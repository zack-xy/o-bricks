/* eslint-disable @typescript-eslint/no-unused-vars */
//  <canvas id="drawing" width="200" height="200"></canvas>

const drawing = document.getElementById('drawing')

// 确保浏览器支持<canvas>
if (drawing.getContext) {
  const context = drawing.getContext('2d')

  // 获取图像的数据URI
  const imgURI = drawing.toDataURL('image/png')

  // 显示图片
  const image = document.createElement('img')
  image.src = imgURI
  document.body.appendChild(image)
}
