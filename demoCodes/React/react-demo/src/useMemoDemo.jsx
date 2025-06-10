import React, { useState } from "react"

const Head = React.memo(() => {
  // React.memo组件，只有在props发生变化时，才会重新渲染
  // 如果不包裹的话，父组件state变化了，子组件就会重新渲染
  // 尽管变化的数据跟子组件没有关系

  // 浅比较变化：基本类型 -> 值相等 引用类型 -> 比较内存地址
  console.log("head render!!!!");
  return (
    <div>Head组件， {Math.random()}</div>
  )
})

const Head2 = () => {
  console.log("head2 render!!!!");
  return (
    <div>Head2组件， {Math.random()}</div>
  )
}

const UseMemoCom = () => {
  const [ count, setCount ] = useState(0)

  const handleClick = () => {
    // 如果更新 State Hook 后的 state 与当前的 state 相同时，React 将跳过子组件的渲染并且不会触发 effect 的执行
    // 这里是0，与初始值相同，所以不会打印【render!!】
    // setCount(0)

    // 注意：严格模式React.StrictMode会额外调用，为了帮助开发者发现潜在的问题

    // 这里是1，与初始值不同，所以会打印【render!!】
    // 点击2次，会打印2次
    // 注意，这里是会打印2次，但是并不是渲染了2次，因为Component rendered or re-rendered只渲染了1次
    // React的奇妙机制
    setCount(1)
  }

  React.useEffect(() => {
    console.log('Component rendered or re-rendered');
  });

  console.log('render!!');

  return (
    <div>
      <button onClick={handleClick}>点击</button>
      hello memo { Math.random() }
      <Head count={count} />
      <Head2 count={count} />
    </div>
  )
}


export default UseMemoCom
