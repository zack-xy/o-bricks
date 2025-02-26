import { useState } from 'react';
import { flushSync } from 'react-dom';

let UseStateCom = (props) => {
  // useState需要放在组件最前面调用，不要在函数或语句中进行调用
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  const handleClick = () => {
    /**
     * 在 handleClick 函数里连续调用 setCount 时，
     * 每次调用 setCount 传入的 count 值都是基于初始状态的，
     * 因为 React 还没来得及更新 count 的值。
     * 所以这四次调用相当于传入了 0 + 1、0 + 2、0 + 3、0 + 4，
     * 而 React 会将这些更新合并，最终只会保留最后一次更新，即 count 会被更新为 4
     */
    setCount(count + 1)
    setCount(count + 2)
    setCount(count + 3)
    setCount(count + 4)
  }

  const handleClick2 = () => {
    // count2会被更新为10 ： 0 + 1 + 2 + 3 + 4
    setCount2((count2) => count2 + 1)
    setCount2((count2) => count2 + 2)
    setCount2((count2) => count2 + 3)
    setCount2((count2) => count2 + 4)
  }

  const hanldeAutoClick = () => {
    // 所谓自动批处理，就是我更新2个state值，组件只会渲染一次
    /**
     * 可以使用flushSync取消自动批处理
     * 【组件被渲染！！】会打印2次
      flushSync(() => {
        setCount(count + 1)
      })
      flushSync(() => {
        setCount2(count2 + 1)
      })
     * 
     */

    setCount(count + 1)
    setCount2(count2 + 1)
  }

  console.log("组件被渲染！！");
  

  return (
    <div>
      <button onClick={handleClick}>点击1</button>
      <div>count1的值，{count}</div>
      <hr />
      <button onClick={handleClick2}>点击2</button>
      <div>函数式更新：count2的值，{count2}</div>
      <hr />
      <button onClick={hanldeAutoClick}>自动批处理</button>
    </div>
  )
}

export default UseStateCom
