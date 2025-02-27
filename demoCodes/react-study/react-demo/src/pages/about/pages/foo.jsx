import { useParams } from 'react-router-dom';

const Foo = () => {
  const params = useParams()
  return (
    <div>
      foo页面, { params.id }
    </div>
  )
}

export default Foo
