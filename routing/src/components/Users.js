import { useEffect, useState } from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import axios from "axios"
import User from './User';


function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
    .then((res) => setUsers(res.data))
    .finally(() => setLoading(false))
  }, [])

 
  return (
    <div>
        <h1>Users</h1>
        {loading && <div>Loading...</div>}
        {/* <h1>Users</h1>
      <ul>
        <li>
           <Link to="/user/1">User 1</Link>
        </li>
        <li>
           <Link to="/user/2">User 2</Link>
        </li>
        <li>
           <Link to="/user/3">User 3</Link>
        </li>
      </ul> */}
      <ul>
         {users.map((user) => (
             <li key={`/users/${user.id}`}>
              <NavLink to={`/users/${user.id}`} className={({isActive}) => isActive ? "active" : undefined}>{user.name}</NavLink>
             </li>
         ))}
      </ul>

      <Routes>
         <Route path="/" element={<div><h3>Please select a user.</h3></div>} />
         <Route path=":id" element={<User/>}/>
      </Routes>
    </div>
  )
}

export default Users
