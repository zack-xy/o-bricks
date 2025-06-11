import UseStateCom from './useStateDemo';
import UseEffectCom from './useEffectDemo';
import UseRefCom from './useRefDemo';
import UseContextCom from './useContextDemo';
import UseMemoCom from './useMemoDemo';
import UseMemoCom2 from './useMemoDemo2';
import UseRecuderCom from './useReducerDemo';
import TransitionCom from './startTransitionDemo';
import Welcome from './Welcome';
import UseStateTest from "./useStateTest";

// 路由
import { Outlet, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <UseStateCom /> */}
      {/* <UseEffectCom/> */}
      {/* <UseRefCom /> */}
      {/* <UseContextCom /> */}
      {/* <UseMemoCom /> */}
      {/* <UseMemoCom2 /> */}
      {/* <UseRecuderCom /> */}
      {/* <TransitionCom /> */}
      {/* <Welcome /> */}
      <Link to="/">首页</Link> ｜ <Link to="/about">关于</Link>
      <Outlet />
      <br></br>

      <UseStateTest />
    </div>
  );
}

export default App;
