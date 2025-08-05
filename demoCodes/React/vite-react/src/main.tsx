import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, Navigate, redirect, Route, RouterProvider, Routes } from 'react-router-dom'
import About from './About.tsx'
import App from './App.tsx'
import Home from './dashboard/Home.tsx'
import Layout from './dashboard/Layout.tsx'
import Link from './dashboard/Link.tsx'
import Loader from './dashboard/Loader.tsx'
import Setting from './dashboard/Setting.tsx'
import Team from './dashboard/Team.tsx'
import File from './File.tsx'
import GoodsHome from './goods/Home.tsx'

import './index.css'

// Declarative mode

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="about" element={<About />} />
//         {/* 标*就是匹配所有路径 */}
//         <Route path="files/*" element={<File />} />

//         {/* 嵌套路由 */}
//         <Route path="dashboard" element={<Layout />}>
//           {/* 加index的是默认路由 */}
//           <Route index element={<Home />} />
//           <Route path="settings" element={<Setting />} />
//           {/* 动态路由，这里有2段动态 */}
//           <Route path="teams/:teamId/p/:productId" element={<Team />} />
//           <Route path="link" element={<Link />} />
//         </Route>

//       </Routes>
//     </BrowserRouter>
//   </StrictMode>,
// )

// Data mode
const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'files/*',
    element: <File />,
  },
  {
    path: 'dashboard',
    element: <Layout />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'settings',
        Component: Setting,
      },
      {
        path: 'link',
        Component: Link,
      },
      {
        path: 'teams/:teamId/p/:productId',
        Component: Team,
        loader: async ({ params }) => {
          // eslint-disable-next-line no-console
          console.log('params>>>>', params)
          return { name: 'zack zheng' }
        },
      },
    ],
  },
  {
    path: 'projects',
    children: [
      { index: true, Component: Home },
      {
        Component: Layout,
        children: [
          { path: 'link', Component: Link },
          { path: 'loader/:name', Component: Loader, loader: async ({ params }) => {
            return { message: `hello ${params.name}` }
          } },
        ],
      },
    ],
  },
  {
    path: 'goods',
    children: [
      // { index: true, element: <Navigate to="list" replace /> },  // 重定向写法1
      { index: true, loader: () => redirect('list') }, // 重定向写法2
      {
        Component: Layout,
        children: [
          {
            index: true,
            path: 'list',
            lazy: async () => {
              const { default: Component } = await import('./goods/List.tsx')
              return { Component }
            },
          },
        ],
      },
    ],
  },
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
