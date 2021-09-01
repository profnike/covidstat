
import img from '../Images/Index'
import {Link} from "react-router-dom"
import MenuIcon from '@material-ui/icons/Menu'
import Dropdown from 'react-bootstrap/Dropdown'
import '../Style/Home.css'



function Home() {
    return (
      <div className="home-body">
      <div className="home-div">
        
        
        <div className="navarea">
          <h3 className="covidLogo">CovidStat</h3>
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
          <ul>
            <Link className="links" to="/"><li>Home</li></Link>
            <Link className="links" to="/About"><li>About</li></Link>
            <Link className="links" to="/Precautions"><li>Covid Information</li></Link>
          
          </ul>
          <Link to="/Signup"><button className="signup">Sign Up</button></Link>
        </div>
        <div className="home-text">
     <p>According to WHO</p>
     <p>Coronavirus disease(COVID-19) is an infectious disease caused by a 
       newly discovered coronavirus</p>
       <p>To know more on the statistics of this disease in various countries</p>
       <Link to="/Checker"><button>Click Here</button></Link>
      </div>
      </div>
      </div>
    );
  }
  
  export default Home;