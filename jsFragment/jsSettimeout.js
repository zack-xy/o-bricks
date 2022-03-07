var times = 0
function loop () {
  console.log('循环调用', new Date().toLocaleTimeString())
  if (times < 10) {
    times++
    setTimeout(loop, 3000)
  } else {
    console.log("循环结束");
  }
}

setTimeout(loop)