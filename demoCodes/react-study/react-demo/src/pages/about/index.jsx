import { Outlet, Link, NavLink, useNavigate } from 'react-router-dom';
const About = () => {

  const navigate = useNavigate()
  const handleToPage = () => {
    navigate('/about/foo/123')
  }


  return (
    <div>
      <NavLink to="/about/foo/123" className={({isActive})=> isActive ? 'active-zack' : ''}>foo123</NavLink> | 
      <NavLink to="/about/foo/456">foo456</NavLink> |
      <Link to="/about/bar">bar</Link>
      <Outlet />
      <div>
        <h4>编程式路由</h4>
        <button onClick={handleToPage}>foo123</button>
      </div>
    </div>
  )
}

export default About
