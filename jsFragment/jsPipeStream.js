/* eslint-disable no-unexpected-multiline */
/* eslint-disable no-undef */
/* eslint-disable no-console */
// 每1000毫秒生成一个递增的整数
async function* ints() {
  for (let i = 0; i < 5; ++i) {
    yield await new Promise((resolve) => {
      setTimeout(resolve, 1000, i)
    })
  }
}

const integerStream = new ReadableStream({
  async start(controller) {
    for await (const chunk of ints())
      controller.enqueue(chunk)

    controller.close()
  },
})

const doublingStream = new TransformStream({
  transform(chunk, controller) {
    controller.enqueue(chunk * 2)
  },
})

// 通过管道连接流
const pipedStream = integerStream.pipeThrough(doublingStream)

// 从连接流的输出获得读取器
const pipedStreamDefaultReader = pipedStream.getReader()

// 消费者
(async () => {
  while (true) {
    const { done, value } = await pipedStreamDefaultReader.read()

    if (done)
      break

    else
      console.log(value)
  }
})()
