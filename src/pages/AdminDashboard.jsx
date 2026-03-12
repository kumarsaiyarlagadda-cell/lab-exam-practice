import { useEffect, useState } from "react"

function AdminDashboard(){

  const [users,setUsers] = useState([])
  const [apiData,setApiData] = useState([])

  useEffect(()=>{
    const storedUsers = JSON.parse(localStorage.getItem("users")) || []
    setUsers(storedUsers)

    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setApiData(data.products))
      .catch(err => console.log(err))
  },[])

  return(
    <div>

      <h2>Registered Users</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u,i)=>(
            <tr key={i}>
              <td>{u.name}</td>
              <td>{u.gender}</td>
              <td>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Dummy API Data</h2>

      <ul>
        {apiData?.map((item)=>(
          <li key={item.id}>
            {item.title}  {item.price}  {item.rating}
          </li>
        ))}
      </ul>

    </div>
  )
}

export default AdminDashboard