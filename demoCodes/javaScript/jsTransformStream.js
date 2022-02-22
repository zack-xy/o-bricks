// 每1000毫秒生成一个递增的整数
async function* ints () {
  for (let i = 0; i < 5; ++i) {
    yield await new Promise((resolve) => {
      setTimeout(resolve, 1000, i)
    })
  }
}



// 通过transform方法将每个值翻倍
const { writable, readable } = new TransformStream({
  transform (chunk, controller) {
    controller.enqueue(chunk * 2)
  }
})


const readableStreamDefaultReader = readable.getReader();
const writableStreamDefaultWriter = writable.getWriter()


  // 消费者
  (async function () {
    while (true) {
      const { done, value } = await readableStreamDefaultReader.read();
      if (done) {
        break;
      } else {
        console.log(value)
      }
    }
  })()




  // 生产者
  (async function () {
    for await (let chunk of ints()) {
      await writableStreamDefaultWriter.ready;
      writableStreamDefaultWriter.write(chunk);
    }
    writableStreamDefaultWriter.close()
  })