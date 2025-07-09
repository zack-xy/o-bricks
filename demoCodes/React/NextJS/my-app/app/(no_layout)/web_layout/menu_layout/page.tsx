'use client';

import { useState } from "react"

export default function Page() {

  const [collapsed, setCollapsed] = useState(false)

  return (
      <div
      className="grid grid-cols-[var(--sidebar-width)_1fr] transition-all duration-300 h-screen"
      style={{
        "--sidebar-width": collapsed ? "50px" : "150px"
      } as React.CSSProperties}
    >
      <div className="bg-gray-800 text-white relative">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute top-2 right-2 bg-gray-600 px-2 py-1 text-sm rounded"
        >
          {collapsed ? "▶️" : "◀️"}
        </button>
        {!collapsed && <div className="p-4">侧边栏内容</div>}
      </div>
      <div className="bg-white p-6">主内容区域</div>
    </div>
  )
}
