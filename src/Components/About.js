import '../Style/About.css'
import LoremIpsum from 'react-lorem-ipsum'


function About() {
    return (
      <div className="About">
      <h1>About</h1>
      <hr className="Abouthorizontal"></hr>
       <div>
         <LoremIpsum p={5}/>
       </div>
      </div>
    );
  }
  
  export default About;