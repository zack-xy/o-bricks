import babel from '@babel/core'
import presetEnv from '@babel/preset-env'
import fs from 'node:fs'

const code = fs.readFileSync('./test.js', 'utf-8')
const res = babel.transform(code, {
  presets: [presetEnv],
  plugins: []
})

// 命令行运行node index.js这个文件，可以看到babel已经转换了test.js的代码
console.log(res.code)
