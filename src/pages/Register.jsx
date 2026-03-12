import { useState } from "react"

function Register(){

  const [user,setUser]=useState({
    name:"",
    gender:"",
    email:"",
    password:""
  })

  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()

    let users = JSON.parse(localStorage.getItem("users")) || []
    users.push(user)
    localStorage.setItem("users",JSON.stringify(users))

    alert("Registered Successfilly")
  }

  return(
    <div style={{display:"flex",justifyContent:"center",marginTop:"80px"}}>

      <form onSubmit={handleSubmit} style={{border:"2px solid black",padding:"30px",width:"250px",textAlign:"center",borderRadius:"8px"}}>
        <h2>Registration</h2>

        <input type="text" name="name" placeholder="Enter your Name" onChange={handleChange} style={{width:"100%",marginTop:"15px",padding:"6px",border:"1px solid black"}}/>
        <select name="gender" onChange={handleChange} style={{width:"100%",marginTop:"15px",padding:"6px",border:"1px solid black"}}>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <input type="email" name="email" placeholder="Email" onChange={handleChange} style={{width:"100%",marginTop:"15px",padding:"6px",border:"1px solid black"}}/>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} style={{width:"100%",marginTop:"15px",padding:"6px",border:"1px solid black"}}/>
        <button type="submit" style={{marginTop:"20px",backgroundColor:"#2563eb",color:"white",padding:"6px 15px",border:"1px solid black",borderRadius:"3px"}}> Register </button>

      </form>

    </div>
  )
}

export default Register