import { useState, useEffect, useLayoutEffect } from 'react'

const UseEffectCom = () => {
  const [count, setCount] = useState(0)
  // eslint-disable-next-line
  const [name, setName] = useState('zack')
  // eslint-disable-next-line
  const [autoCount, setAutoCount] = useState(0)
  const [msg, setMsg] = useState('hello world')
  useEffect(() => {
    // 初始 和 更新 数据的时候会触发回调函数
    console.log(`count: ${count} 初始 或者 更新`)
    // 通过返回的回调函数，清理副作用
    return () => {
      console.log('在更新前 或者 将要卸载前')
    }
  }, [count]) // 依赖项，只有依赖项发生变化，才会触发回调函数
  // 特性：Effect 中使用了某个响应式数据，一定要进行数组的依赖处理

  const handleClick = () => {
    setCount(count + 1)
  }

  // 特性1: 使用多个Effect实现关注点分离
  // 所谓关注点分离，就是Effect可以同时写多个，互不影响
  useEffect(() => {
    console.log(`name: ${name} 初始 或者 更新`);
  }, [name]) // 依赖项，只有依赖项发生变化，才会触发回调函数

  useEffect(() => {
    console.log("");
  }, [])  // ✅ 有初始化的时候触发，模拟 初始的生命周期钩子


  // 特性2: 频繁的修改某个响应式数据，可通过回调函数进行改写

  /**
   * 
   * 
   * 
    useEffect(() => {
      setInterval(() => {
        setAutoCount(autoCount + 1)
      }, 1000)  
    }, [autoCount])

    ❌ 会导致页面卡死，因为每次修改autoCount，都会触发useEffect，导致setInterval不断的执行


    useEffect(() => {
      setInterval(() => {
        setAutoCount(autoCount + 1)
      }, 1000)  
    }, [])
    如果写成这样，虽然setInterval初始化的时候执行了，每次执行 setInterval 的回调函数时，autoCount + 1 实际上都是基于初始的 autoCount 值进行计算，这就导致 autoCount 看起来没有增加

    ❌ autoCount看起来不会更新


    useEffect(() => {
        const intervalId = setInterval(() => {
            // 使用函数式更新来避免闭包问题
            setAutoCount(prevCount => prevCount + 1);
        }, 1000);

        // 在组件卸载时清除定时器，避免内存泄漏
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    ✅ 使用函数式更新来避免闭包问题

   * 
   * 
   */


  // 特性4: useEffect异步与useLayoutEffect同步
  // useEffect()是在渲染被绘制到屏幕之后执行的，是异步的，不会卡住渲染
  // useLayoutEffect()是在渲染之后但在屏幕更新之前，是同步的，可能会卡住渲染

  // 当 count 状态更新时，useLayoutEffect 的回调函数会先执行，然后才会将更新后的 DOM 绘制到屏幕上，最后执行 useEffect 的回调函数。

  // 因为useLayoutEffect是在绘制之前执行的，所以页面不会闪烁


  // useEffect(() => {
  //   let i = 0
  //   while(i < 100000000) i++
  //   setMsg('hi react') 
  // }, [])

  // useEffect(() => {
  //   new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve()
  //     }, 3000);
  //   }).then(() => {
  //     setMsg('hi react') 
  //   })
  // }, [])

  useLayoutEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 3000);
    }).then(() => {
      setMsg('hi react') 
    })
  }, [])


  return (
    <div>
      <button onClick={handleClick}>点击</button>
      <div>useEffect页面，count的值是： { count }, name的值是: {name}</div>
      <hr />
      <div>autoCount的值是: {autoCount}</div>
      <hr />
      <div>{msg}</div>
    </div>
  )
}

export default UseEffectCom
