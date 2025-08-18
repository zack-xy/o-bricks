import type { LoaderFunctionArgs } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, Navigate, redirect, RouterProvider, Routes } from 'react-router-dom'
import About from './About.tsx'
import App from './App.tsx'
import Home from './dashboard/Home.tsx'
import Layout from './dashboard/Layout.tsx'
import Link from './dashboard/Link.tsx'
import Loader from './dashboard/Loader.tsx'
import Setting from './dashboard/Setting.tsx'
import Team from './dashboard/Team.tsx'
import File from './File.tsx'

import { action as editAction, loader as editLoader } from './goods/editMethods.ts'

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
        /**
         * 【loader干什么用的】
         *
         *  1、数据预加载
         *    + 在路由匹配时自动触发异步数据请求，无需等待组件渲染完成，从而减少页面白屏时间
         *    + 通过useLoaderData钩子直接获取预加载数据，避免组件内重复请求
         *    + 支持并行加载多个路由loader，优化嵌套路由的数据获取效率
         *
         *   示例：
         *   // 路由配置
         *   {
         *      path: "/user/:id",
         *      loader: async ({ params }) => {
         *        const res = await fetch(`/api/users/${params.id}`);
         *        return res.json();  // 数据直接注入组件
         *      },
         *      element: <UserProfile />
         *   }
         *
         *   组件内通过const userData = useLoaderData()直接使用数据
         *
         *
         *  2、权限验证与路由守卫
         *     + 在路由跳转前校验权限(如检查token)，未通过时重定向到登陆页
         *     + 替代传统路由守卫逻辑，实现更简洁的权限控制流
         *
         *  示例
         *
         *    loader: () => {
         *      if (!localStorage.getItem("token")) {
         *         throw redirect("/login");  // 自动跳转
         *      }
         *      return null;
         *    }
         *
         *
         *  3、性能优化特性
         *    + 减少瀑布流请求：提前加载所有依赖数据，避免组件层级请求的串行延迟
         *    + SSR支持：与服务端渲染深度集成，提升首屏加载速度
         *    + 数据共享：同一路由下的嵌套组件可复用loader数据，避免重复请求
         *
         */
        loader: async ({ params, context }: LoaderFunctionArgs<number>) => {
          // eslint-disable-next-line no-console
          console.log('params>>>>', params)
          // eslint-disable-next-line no-console
          console.log('context>>>>', context)
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
          {
            path: 'loader/:name',
            Component: Loader,
            loader: async ({ params }) => {
              return { message: `hello ${params.name}` }
            },
          },
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
            path: 'list',
            lazy: async () => {
              const { default: Component } = await import('./goods/List.tsx')
              return { Component }
            },
          },
          {
            path: 'edit/:id',
            lazy: async () => {
              const { default: Component } = await import('./goods/Edit.tsx')
              return { Component, loader: editLoader, action: editAction }
            },
          },
        ],
      },
    ],
  },
  {
    path: 'form',
    children: [
      { index: true, loader: () => redirect('demo1') },
      {
        Component: Layout,
        children: [
          {
            path: 'demo1',
            lazy: async () => {
              const { default: Component } = await import('./form/Demo1.tsx')
              return { Component }
            },
          },
          {
            path: 'demo2',
            lazy: async () => {
              const { default: Component } = await import('./form/Demo2.tsx')
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
