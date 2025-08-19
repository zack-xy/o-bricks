/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */

import { z } from 'zod'

const Player = z.object({
  username: z.string(),
  xp: z.number(),
})

// ##### 类型推断
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

// ##### 推断出入类型和输出类型
// 这里用到.transform() API ，transform将“输入类型”转换为“输出类型”
// 也就是把一种类型转换为另一种类型
const mySchema = z.string().transform(val => val.length)

// => string
type MySchemaIn = z.input<typeof mySchema>

// => number
type MySchemaOut = z.output<typeof mySchema>

export default async function ZodDemo() {
  return (
    <>

    </>
  )
}
