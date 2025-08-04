import { Link, NavLink, useNavigate } from 'react-router'

export default function LinkPage() {
  const navigate = useNavigate()

  function goToTeams() {
    navigate('/dashboard/teams/zack/p/zheng')
  }

  return (
    <div>
      <NavLink to="/">Go Home</NavLink>
      {' '}
      |
      <Link to="/dashboard/settings">Go Settings</Link>
      |
      <button onClick={goToTeams}>跳转Teams页面</button>
    </div>
  )
}
