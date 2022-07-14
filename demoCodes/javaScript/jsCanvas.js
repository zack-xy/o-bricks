//  <canvas id="drawing" width="200" height="200"></canvas>


let drawing = document.getElementById("drawing")


// 确保浏览器支持<canvas>
if (drawing.getContext) {
  let context = drawing.getContext("2d")

  // 获取图像的数据URI
  let imgURI = drawing.toDataURL("image/png");


  // 显示图片
  let image = document.createElement("img");
  image.src = imgURI;
  document.body.appendChild(image);


}
