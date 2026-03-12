import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AdminLogin(){
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")

  const navigate=useNavigate()
  const handleLogin=(e)=>{
    e.preventDefault()
    if(username==="admin" && password==="admin"){
      navigate("/admin-dashboard")
    }else{
      alert("Invalid credentials")
    }
  }


  return(
    <div style={{display:"flex",justifyContent:"center",marginTop:"80px"}}>
      <form onSubmit={handleLogin} style={{border:"2px solid black",padding:"30px",width:"250px",textAlign:"center",borderRadius:"8px"}}>
        <h2>Admin Login</h2>
        <input type="text"placeholder="Username"onChange={(e)=>setUsername(e.target.value)}style={{width:"100%",marginTop:"15px",padding:"6px",border:"1px solid black"}}/>
        <input type="password"placeholder="Password"onChange={(e)=>setPassword(e.target.value)}style={{width:"100%",marginTop:"15px",padding:"6px",border:"1px solid black"}}/>
        <button type="submit"style={{marginTop:"20px",backgroundColor:"#2563eb",color:"white",padding:"6px 15px",border:"1px solid black",borderRadius:"3px"}}>Login</button>
      </form>
    </div>
  )
}

export default AdminLogin