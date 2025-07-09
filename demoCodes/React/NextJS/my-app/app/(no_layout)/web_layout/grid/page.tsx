'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button";

export default function Page() {

  const [collaped, setCollapsed] = useState(false)

  return (
    <div className="grid grid-cols-[var(--sidebar-width)_1fr] transition-all duration-300 h-screen" style={{
      "--sidebar-width": collaped ? "50px" : "150px"
    } as React.CSSProperties}>
      <div className="bg-gray-800 text-white relative">
        <button onClick={() => setCollapsed(!collaped)} className="absolute top-2 right-2 bg-gray-600 px-2 py-1 text-sm rounded">
          {collaped ? "▶️" : "◀️"}
        </button>
        {!collaped && <div className="p-4">侧边栏内容</div>}
        <ul>
          <li>条目1</li>
          <li>条目2</li>
          <li>条目3</li>
          <li>条目4</li>
          <li>条目5</li>
          <li>条目6</li>
        </ul>
      </div>
      <div className="bg-white p-6">
        <Button>Click me</Button>
      </div>
    </div>
  )
}
