import { useEffect, useState } from 'react'
import './App.css'

interface Iuser {
  name: string
  email: string
  username: string
  phone: number
  website: string
}

function App() {

  const [user, setUser] = useState<Iuser>({} as Iuser)
  const [loading, setLoading] = useState(true)
  const [userId, setUserId] = useState('1')


  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users/' + userId)
      .then((response) => response.json())
      .then((data) => {
        setUser(data)
        setLoading(false)
      })
  }, [userId])

  return (
    <>
      <div>
        <input value={userId} onChange={e => setUserId(e.target.value)} type="text" />
        <div>
          {
            loading
              ? <div>Loading......</div>
              : (
                <div>
                  <p>name: {user.name}</p>
                  <p>email: {user.email}</p>
                  <p>username: {user.username}</p>
                  <p>phone: {user.phone}</p>
                  <p>website: {user.website}</p>
                </div>
              )
          }
        </div>
      </div>
    </>
  )
}

export default App
