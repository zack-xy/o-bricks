"use client"
import { useState } from 'react';

interface Item {
  name: string,
  readonly key: number
}

export default function Page() {

  const [list, setList] = useState<Array<Item>>([
    { name: "示例1", key: 1 },
    { name: "示例2", key: 2 },
    { name: "示例3", key: 3 },
    { name: "示例4", key: 4 },
    { name: "示例5", key: 5 },
    { name: "示例6", key: 6 },
    { name: "示例7", key: 7 },
    { name: "示例8", key: 8 },
    { name: "示例9", key: 9 },
    { name: "示例10", key: 10 },
    { name: "示例11", key: 11 },
  ])

  return (
    <div className="grid gap-[10px] grid-cols-[repeat(3,100px)] grid-rows-[repeat(2,100px)] auto-rows-[60px]">
      { list.map(item => 
        <div 
          className="border border-orange-600 nth-[3]:row-start-1 nth-[3]:row-end-4 nth-[3]:col-start-4 nth-[3]:col-end-5 nth-[4]:row-start-1 nth-[4]:row-end-4 nth-[4]:-col-start-5 nth-[4]:col-end-1" 
          key={item.key}>
            {item.name}
        </div>)
      }
    </div>
  )
}
