import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import About from './About.tsx'
import App from './App.tsx'
import Home from './dashboard/Home.tsx'
import Layout from './dashboard/Layout.tsx'
import Link from './dashboard/Link.tsx'
import Setting from './dashboard/Setting.tsx'
import Team from './dashboard/Team.tsx'
import File from './File.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        {/* 标*就是匹配所有路径 */}
        <Route path="files/*" element={<File />} />

        {/* 嵌套路由 */}
        <Route path="dashboard" element={<Layout />}>
          {/* 加index的是默认路由 */}
          <Route index element={<Home />} />
          <Route path="settings" element={<Setting />} />
          {/* 动态路由，这里有2段动态 */}
          <Route path="teams/:teamId/p/:productId" element={<Team />} />
          <Route path="link" element={<Link />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
