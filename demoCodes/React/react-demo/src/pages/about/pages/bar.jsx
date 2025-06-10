import { useLocation, useSearchParams, useLoaderData } from 'react-router-dom';

const Bar = () => {
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const data = useLoaderData()
  console.log('loaderData', data)
  console.log("路由信息", location)
  console.log("url参数", searchParams.get('age'))

  const handleClick = () => {
    setSearchParams({ age: 22 })
  }
  return (
    <div>
      bar页面
      <button onClick={handleClick}>设置参数</button>
    </div>
  )
}

export default Bar
