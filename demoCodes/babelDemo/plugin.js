import babel from '@babel/core'
// import presetEnv from '@babel/preset-env'
import fs from 'node:fs'

// 将箭头函数转换为普通函数的插件
// types 包含了ast节点的所有方法
const transformFunction = ({ types: t }) => {
  return {
    name: 'transform-arrow-function',
    visitor: {
      ArrowFunctionExpression(path) {
        const { node } = path

        const arrowFunction = t.FunctionExpression(
          null,
          node.params,
          t.blockStatement([t.returnStatement(node.body)]),
          node.async
        )

        path.replaceWith(arrowFunction)
      }
    }
  }
}

const code = fs.readFileSync('./test.js', 'utf-8')
const res = babel.transform(code, {
  plugins: [transformFunction]
})

// 命令行运行node index.js这个文件，可以看到babel已经转换了test.js的代码
console.log(res.code)
