// 跨组件通信
import React, { useState } from 'react';
import { useContext } from 'react';

const MyContext = React.createContext('默认值')

const Parent = () => {

  const [info] = useState({
    userName: 'zack',
    age: 3000
  })

  return (
    <div>
      <MyContext.Provider value={info}>
        <Child />
      </MyContext.Provider>
    </div>
  )
}

const Child = () => {
  return (
    <div>
      <h3>我是子组件</h3>
      <GrandChhild />
    </div>
  )
}

const GrandChhild = () => {
  let { userName, age } = useContext(MyContext)
  return (
    <div>
      <h3>我是孙子组件</h3>
      <p>我接收到祖先的信息如下：</p>
      <p>祖先的名字：{userName},祖先的年龄：{age} </p>
    </div>
  )
}

const UseContextCom = () => {
  return (
    <div>
      <Parent />
    </div>
  )
}

export default UseContextCom
