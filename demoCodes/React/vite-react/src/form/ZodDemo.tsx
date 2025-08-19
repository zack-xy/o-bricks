/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */

import { z } from 'zod'

const Player = z.object({
  username: z.string(),
  xp: z.number(),
})

type MyPlayer = z.infer<typeof Player>

let myPlayer: MyPlayer

// ##### parse校验
// 使用try...catch捕获异常
try {
  // parse校验数据
  myPlayer = Player.parse({ username: 1000, xp: 100 })
}
catch (error) {
  if (error instanceof z.ZodError) {
    console.log('try catch的错误：zod error >>>', error.issues)
  }
}
// ##### safeParse校验
// 使用safeParse返回一个纯对象
const result = Player.safeParse({ username: 'zack zheng', xp: '100' })
if (!result.success) {
  console.log('校验错误', result.error)
}
else { // 校验通过✅
  console.log('safeParse data>>>>', result.data)
}

// ##### 异步校验
async function test() {
  // 异步校验
  try {
    const asyncResult = await Player.parseAsync({ username: 'zack zheng', xp: '100' })
  }
  catch (error) {
    console.log('asyncResult>>>>>>', error)
  }
  const asyncPlainResult = await Player.safeParseAsync({ username: 'zack zheng', xp: '100' })
  if (!asyncPlainResult.success) {
    console.log('校验错误:safeParseAsync', result.error)
  }
  else { // 校验通过✅
    console.log('safeParse data>>>>', result.data)
  }
}

test()

export default async function ZodDemo() {
  return (
    <>

    </>
  )
}
