import { Link } from "react-router-dom"
import { useState } from "react"
import "./Navbar.css"

function Navbar(){

  const [show,setShow] = useState(false)

  return(

    <div className="nav">

      <div className="links">

        <Link to="/">Home</Link>

        <Link to="/register">Registration</Link>

        <div className="login">

          <span onClick={()=>setShow(!show)}>
            Login
          </span>

          {show && (
            <ul className="menu" style={{display:"block", margin:"15px auto", textAlign:"center", width:"150px", padding:"10px", border:"2px solid black",fontSize:"18px"}}>

              <li>
                <Link to="/login">User Login</Link>
              </li>
              <hr/>

              <li>
                <Link to="/admin-login">Admin Login</Link>
              </li>

            </ul>
          )}

        </div>

      </div>

    </div>

  )
}

export default Navbar