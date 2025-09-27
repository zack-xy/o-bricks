import babel from '@babel/core'
import presetEnv from '@babel/preset-env'
import presetReact from "@babel/preset-react";
import fs from 'node:fs'

const code = fs.readFileSync('./app.jsx', 'utf-8')
const res = babel.transform(code, {
  presets: [[presetEnv, {
    // 按需加载 polyfill
    useBuiltIns: 'usage',
    // 指定 core-js 版本
    corejs: 3,
    // 指定兼容性到哪个版本的浏览器
  }], presetReact],
  plugins: []
})

// 命令行运行node index.js这个文件，可以看到babel已经转换了test.js的代码
console.log(res.code)
