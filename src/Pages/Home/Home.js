import '../Home/Home.css'
import img from '../../Images/Index'

import {Link} from "react-router-dom"
import MenuIcon from '@material-ui/icons/Menu'
import Dropdown from 'react-bootstrap/Dropdown'

import Navmain from '../../Components/Navmain/Navmain'



function Home() {
    return (
      <div className="home-body">
      <div className="home-div">
        
        <Navmain/>
        
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