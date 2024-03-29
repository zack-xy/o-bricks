import React from 'react'
import './App.css'

// 自定义hook
// import useTitle from './hooks/useTitle'
// import useMouse from './hooks/useMouse'
// import useGetInfo from './hooks/useGetInfo'

// hook闭包陷阱
// import ClosureTrap from './ClosureTrap'

// import StateDemo1 from './StateDemo1'
// import StateDemo2 from './StateDemo2'
// import Demo from './immerDemo'
// import UseRefDemo from './useRefDemo'
// import UseMemoDemo from './useMemoDemo'
// import UseCallbackDemo from './UseCallbackDemo'
// import StyledComponentDemo from './StyledComponentDemo'
// import StyledJSX from './StyledJSX'

// Context
import ContextDemo from './ContextDemo'

// Reducer
import CountReducer from './CountReducer'
import TodoReducer from './TodoReducer'

// Redux
import ReduxCountDemo from './ReduxCountDemo'
import TodoListRedux from './TodoListRedux'

// Mobx
import MobxBasicDemo from './MobxDemo/BasicDemo'
import MobxTodoList from './MobxDemo/TodoList/index'

// Form
import FormElesDemo from './FormElesDemo'

// import List1 from './List1'
import List2 from './List2'

function App() {
  // useTitle('ahook app page')
  // useTitle('App page')
  // const { x, y } = useMouse()
  // const { loading, info } = useGetInfo()
  return (
    <div className="App">

      {/* <div>
        {x}
        {y}
      </div> */}

      {/* <div>{loading ? '加载中...' : info}</div> */}

      {/* <ClosureTrap></ClosureTrap> */}

      {/* <StateDemo1></StateDemo1> */}
      {/* <StateDemo2></StateDemo2> */}
      {/* <Demo></Demo> */}
      {/* <UseRefDemo></UseRefDemo> */}
      {/* <UseMemoDemo></UseMemoDemo> */}
      {/* <UseCallbackDemo></UseCallbackDemo> */}

      {/* css in js */}
      {/* <StyledComponentDemo></StyledComponentDemo> */}
      {/* <StyledJSX></StyledJSX> */}

      {/* <FormElesDemo></FormElesDemo> */}

      {/* <List1 title="问卷调查列表"></List1> */}
      {/* <List2></List2> */}

      {/* <ContextDemo></ContextDemo> */}
      {/* <CountReducer></CountReducer> */}
      {/* <TodoReducer></TodoReducer> */}

      {/* <ReduxCountDemo></ReduxCountDemo> */}
      {/* <TodoListRedux></TodoListRedux> */}

      {/* <MobxBasicDemo></MobxBasicDemo> */}
      <MobxTodoList></MobxTodoList>

    </div>
  )
}

export default App
