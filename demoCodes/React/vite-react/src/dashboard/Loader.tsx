import { useLoaderData } from 'react-router-dom'

export default function LoaderPage() {
  const data = useLoaderData()
  return (
    <div>
      <h4>测试loader参数</h4>
      <p>
        数据：
        {data.message}
      </p>
    </div>
  )
}
