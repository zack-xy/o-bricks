/* eslint-disable no-unused-vars */
import React, { useCallback, useMemo, useState } from "react"

/**
 * useCallback是useMemo的一个特例
 * useCallback返回一个记忆函数（也就是这个函数内存地址不变）
 * useMemo返回一个记忆值（也就是这个值内存地址不变）
 * 
 * const fn = useCallback(()=> {}, [依赖项])  相当于 const fn = useMemo(() => () => {}, [依赖项])
 * 
 */

const Head = React.memo((props) => {
  const { info } = props
  const infos = info()
  React.useEffect(() => {
    console.log('Head渲染啦！！');
  })
  
  return (
    <div>
      我是Head组件，信息：{infos?.msg}
    </div>
  )
})

const Head2 = React.memo((props) => {
  const { infos } = props
  React.useEffect(() => {
    console.log('Head2渲染啦！！');
  })
  return (
    <div>
      我是head2组件，姓名：{infos.name}， 信息：{infos.msg}
    </div>
  )
})

const UseMemoCom2 = () => {
  const [count, setCount] = useState(0)
  const [msg, setMsg] = useState('haha')

  const handleClick = () => {
    setCount(count + 1)
  }

  // 每次点击，都会有一个新的infoFn生成，虽然infoFn函数没有变化，但是内存地址变了
  // 所以每次Head都会重新渲染，因为props是infoFn，内存地址变了
  const infoFn = () => ({name: 'zack'})

  // useCallback返回一个记忆函数，依赖msg的变化
  // 按钮点击，改变了count，没改变msg，所以infoFn2还是之前的infoFn2
  // 内存地址没变，Head不会重新渲染
  const infoFn2 = useCallback(() => ({name: 'zack', msg}), [msg])

  // 按钮count点击，改变了count，没改变msg,但是此处每次都会执行
  // 所以每次都有一个内存地址不同的head2Infos生成，所以head2每次都会重新渲染
  const head2Infos = { name:'zack', msg }

   // useMemo返回一个记忆值
  const head2Infos2 = useMemo(() => ({name:'zack', msg}), [msg])

  const modifyMsg = () => {
    setMsg((msg) => {
      return (new Date()).toString()
    })
  }

  return (
    <div>
      <button onClick={handleClick}>点击修改count</button>
      count is: {count}
      <button onClick={modifyMsg}>点击修改msg</button>
      msg is: {msg}
      <Head info={infoFn2} />
      <Head2 infos={head2Infos}/>
    </div>
  )
}

export default UseMemoCom2
