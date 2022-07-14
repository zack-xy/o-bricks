// 每1000毫秒生成一个递增的整数
async function* ints() {
  for (let i = 0; i < 5; i++)
    yield await new Promise(resolve => setTimeout(resolve, 1000, i))
}

// 创建可读流的控制器，ReadableStream实例，定义start方法
const readableStream = new ReadableStream({
  async start(controller) {
    for await (const chunk of ints)
      controller.enqueue(chunk)

    controller.close()
  },
})

// 创建ReadableStreamDefaultReader实例
// 通过流的getReader()方法获得流的锁并读取流
console.log(readableStream.locked) // false
const readableStreamDefaultReader = readableStream.getReader()
console.log(readableStream.locked); // true

// 消费者使用读取器实例的read()方法读出值

// 消费者
(async function () {
  while (true) {
    const { done, value } = await readableStreamDefaultReader.read()
    if (done)
      break

    else
      console.log(value)
  }
})()
