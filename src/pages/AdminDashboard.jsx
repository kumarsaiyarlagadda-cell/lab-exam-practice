import { useEffect, useState } from "react"

function AdminDashboard(){

  const [users,setUsers] = useState([])
  const [apiData,setApiData] = useState([])
  const [view,setView] = useState("users")

  useEffect(()=>{
    const storedUsers = JSON.parse(localStorage.getItem("users")) || []
    setUsers(storedUsers)

    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setApiData(data.products))
      .catch(err => console.log(err))
  },[])

  const handleLogout = ()=>{
    window.location.href="/login"
  }

  return(
    <div>

      {/* ADMIN NAVBAR */}
      <div style={{
        backgroundColor:"black",
        color:"white",
        padding:"15px",
        display:"flex",
        justifyContent:"space-around"
      }}>

        <div
        style={{cursor:"pointer"}}
        onClick={()=>setView("users")}
        >
        View Users
        </div>

        <div
        style={{cursor:"pointer"}}
        onClick={()=>setView("api")}
        >
        API Demo
        </div>

        <div
        style={{cursor:"pointer"}}
        onClick={handleLogout}
        >
        Logout
        </div>

      </div>


      {/* USERS TABLE */}
      {view==="users" && (
        <div style={{textAlign:"center",marginTop:"30px"}}>

          <h2>Registered Users</h2>

          <table border="1" style={{margin:"auto"}}>
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

        </div>
      )}


      {/* API DATA */}
      {view==="api" && (
        <div style={{textAlign:"center",marginTop:"30px"}}>

          <h2>Dummy API Data</h2>

          <ul>
            {apiData.map((item)=>(
              <li key={item.id}>
                {item.title} {item.price} {item.rating}
              </li>
            ))}
          </ul>

        </div>
      )}

    </div>
  )
}

export default AdminDashboard