import '../About/About.css'
import LoremIpsum from 'react-lorem-ipsum'
import Dropdown from 'react-bootstrap/Dropdown'


import Navarea from '../../Components/Navarea/Navarea'


function About() {
    return (
      <div>
          <Navarea/>
      <div className="About">
      
      <h1>About</h1>
      <hr className="Abouthorizontal"></hr>
       <div>
         <LoremIpsum p={5}/>
       </div>
      </div>
      </div>
    );
  }
  
  export default About;