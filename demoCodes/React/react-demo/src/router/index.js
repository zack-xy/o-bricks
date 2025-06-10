import { createBrowserRouter, createHashRouter, Navigate, redirect } from 'react-router-dom'
import App from '../App';
import Home from '../pages/home';
import About from '../pages/about';
import Foo from '../pages/about/pages/foo';
import Bar from '../pages/about/pages/bar';
import Login from '../pages/login';

// 路由表
export const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <div>404啦</div>,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />,
        children: [
          {
            index: true, 
            // element: <div>默认路由，默认的内容</div> // about路由没有匹配到foo和bar的时候，显示默认内容
            element: <Navigate to="/about/foo/123"/>  // 重定向
          },
          { // 局部404页面
            path: '*',
            element: <div>404页面</div>
          },
          {
            path: 'foo/:id',
            element: <Foo />,
          },
          {
            path: 'bar',
            element: <Bar />,
            loader: async () => {
              let ret = await new Promise((resolve) => {
                setTimeout(() => {
                  resolve({errcode: Math.random() > 0.5 ? 0 : -1})
                }, 2000);
              })
              if(ret.errcode === 0) {
                return ret
              } else {
                return redirect('/login')
              }
            }
          },
        ]
      },
      {
        path: 'login',
        element: <Login />
      }
    ]
  }
]

// 路由对象
const router = createBrowserRouter(routes)

export default router
