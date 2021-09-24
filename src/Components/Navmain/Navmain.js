import Dropdown from 'react-bootstrap/Dropdown'
import React from 'react'
import {Link} from "react-router-dom"
import '../Navmain/Navmain.css'

const Navmain=()=>{

return(
<div className="navarea">
          <h3 className="covidLogo">CovidStat</h3>
          <ul>
            <Link className="links" to="/"><li>Home</li></Link>
            <Link className="links" to="/About"><li>About</li></Link>
            <Link className="links" to="/Precautions"><li>Covid Information</li></Link>
          
          </ul>
          <Link className="links" to="/Signup"><button className="signup">Sign Up</button></Link>


          <Dropdown className="dropdown">
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Menu
  </Dropdown.Toggle>
  
  <Dropdown.Menu className="dropmobile">
  <Link className="links" to="/"><Dropdown.Item href="#/" className="itemName">Home</Dropdown.Item></Link>
    <Link className="links" to="/About"><Dropdown.Item href="#/" className="itemName">About</Dropdown.Item></Link>
    <Link className="links" to="/Precautions"><Dropdown.Item href="#/" className="itemName">Covid Information</Dropdown.Item></Link>
    <Link className="links" to="/Signup"><button className="menuButton">Sign Up</button></Link>
 </Dropdown.Menu>
</Dropdown>
          
        </div>
)}
export default Navmain