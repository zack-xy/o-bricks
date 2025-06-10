import { useReducer, useState } from "react"

const MyLogin = () => {
  let loginState = {
    isLogin: true,
    isLogout: false
  }

  let loginReducer = (state, action) => {
    switch (action.type) {
      case 'login':
        return { isLogin: true, isLogout: false }
      case 'logout':
        return { isLogin: false, isLogout: true }
      default:
        throw new Error()
    }
  }

  const [ state, loginDispatch ] = useReducer(loginReducer, loginState)

  const handleLogin = () => {
    loginDispatch({ type: 'login' })
  }

  const handleLogout = () => {
    loginDispatch({ type: 'logout' })
  }

  return (
    <div>
      { state.isLogin ? <button onClick={handleLogout}>退出</button> : <button onClick={handleLogin}>登陆</button> }
    </div>
  )
}


// useState 的替代方案。它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法。
const UseRecuderCom = () => {
  const [isLogin, setLogin] = useState(true)
  const [isLogout, setLogout] = useState(false)

  const handleLogin = () => {
    setLogin(true)
    setLogout(false)
  }

  const handleLogout = () => {
    setLogin(false)
    setLogout(true)
  }

  return (
    <div>
      { isLogin ? <button onClick={handleLogout}>退出</button> : <button onClick={handleLogin}>登陆</button>}
      <hr />
      <div>使用useReducer改写</div>
      <MyLogin />
    </div>
  )
}

export default UseRecuderCom
