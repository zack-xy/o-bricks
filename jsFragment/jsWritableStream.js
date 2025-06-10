// 每1000毫秒生成一个递增的整数
async function* ints () {
  for (let i = 0; i < 5; ++i) {
    yield await new Promise((resolve) => {
      setTimeout(resolve, 1000, i)
    })
  }
}




// 实例ReadableStream，实现write方法
const writableStream = new WritableStream({
  write (value) {
    console.log(value)
  }
})




// getWriter()方法锁流获得写入器
console.log(writableStream.locked)  // false
const writableStreamDefaultWriter = writableStream.getWriter();
console.log(writableStream.locked)  // true


  // ready返回一个期约，能够向流内写数据时解决
  // write()方法写入，close方法关闭流
  // 生产者
  (async function () {
    for await (let chunk of ints()) {
      await writableStreamDefaultWriter.ready;
      writableStreamDefaultWriter.write(chunk)
    }
    writableStreamDefaultWriter.close()
  })()