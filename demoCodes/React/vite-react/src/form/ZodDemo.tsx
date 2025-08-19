/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */

import { z } from 'zod'

const Player = z.object({
  username: z.string(),
  xp: z.number(),
})

type MyPlayer = z.infer<typeof Player>

let myPlayer: MyPlayer

// 使用try...catch捕获异常
try {
  myPlayer = Player.parse({ username: 1000, xp: 100 })
}
catch (error) {
  if (error instanceof z.ZodError) {
    console.log('try catch的错误：zod error >>>', error.issues)
  }
}

// 使用safeParse返回一个结果对象
const result = Player.safeParse({ username: 'zack zheng', xp: '100' })
if (!result.success) {
  console.log('纯对象错误', result.error)
}
else {
  console.log('safeParse data>>>>', result.data)
}

export default function ZodDemo() {
  return (
    <>

    </>
  )
}
