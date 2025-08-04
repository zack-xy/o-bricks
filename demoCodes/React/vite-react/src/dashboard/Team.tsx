import { useParams } from 'react-router'

interface TeamParams {
  teamId: string
  productId: string
  [key: string]: string | undefined
}

export default function Team() {
  const params = useParams<TeamParams>()
  return (
    <div>
      <p>我是Team页面</p>
      动态路由传递的值：
      {' '}
      {params.teamId}
      <div>
        productId的值：
        {params.productId}
      </div>
    </div>
  )
}
