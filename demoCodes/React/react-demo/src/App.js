import UseStateCom from './useStateDemo';
import UseEffectCom from './useEffectDemo';
import UseRefCom from './useRefDemo';
import UseContextCom from './useContextDemo';
import UseMemoCom from './useMemoDemo';
import UseMemoCom2 from './useMemoDemo2';
import UseRecuderCom from './useReducerDemo';
import TransitionCom from './startTransitionDemo';

// 路由
import { Outlet, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      {/* useState示例 */}
      <UseStateCom />

     
      {/* useEffect示例 */}
      <UseEffectCom/>


      {/* useRef示例 */}
      <UseRefCom />


      {/* useContext示例 */}
      <UseContextCom />

      {/* useMemo示例 */}
      <UseMemoCom />

      {/* useMeme示例2 */}
      <UseMemoCom2 />

      {/* useReducer示例 */}
      <UseRecuderCom />

      {/* Transition示例 */}
      <TransitionCom />

      <div>
        <h2>路由示例：</h2>
        <Link to="/">首页</Link> ｜ 
        <Link to="/about">关于</Link>
        <Outlet />
        <br />
      </div>

    </div>
  );
}

export default App;
