import type { LaderData } from './editMethods'
import { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router-dom'

export default function GoodsEdit() {
  const { id, context, list } = useLoaderData<LaderData>()
  // eslint-disable-next-line no-console
  console.log('context>>>>', context)
  return (
    <Suspense fallback={(
      <div className="p-4 text-center">
        <p>正在加载数据...</p>
      </div>
    )}
    >
      <div>这里会先渲染出来么？</div>
      <Await
        resolve={list}
        errorElement={(
          <div className="p-4 text-red-500">
            数据加载失败
          </div>
        )}
      >
        <div>
          <h3>
            好物分享：
            {id}
          </h3>
          <ul>
            {list.map(i => (
              <li key={i.name}>
                商品：
                {i.name}
                ，价格：
                {i.price}
                , 数量：
                {i.count}
              </li>
            ))}
          </ul>
          Goods edit
        </div>
      </Await>
    </Suspense>
  )
}
