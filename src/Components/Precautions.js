import '../Style/Precautions.css'
import LoremIpsum from 'react-lorem-ipsum'
import img from '../Images/Index'

function Precautions() {
 let sroc=img.washhand
    return (
      <div className="covidInfo">
     <h1>Epidemiology</h1>
     <hr className="covidInfohorizontal"></hr>
       <div>
         <LoremIpsum p={5}/>
       </div>
       <h1>Precautions</h1>
     <hr className="covidInfohorizontal"></hr>
     <div className="precautionBox-div">
     <div className="precautionBox">
       <div><img className="washimage" src={img.washhand}></img> </div>
     <LoremIpsum avgSentencesPerParagraph={3}/>
     </div>
     <div className="precautionBox">
       <div><img className="washimage" src={img.tizer}></img> </div>
     <LoremIpsum avgSentencesPerParagraph={3}/>
     </div>
     <div className="precautionBox">
       <div><img className="washimage" src={img.facemask}></img> </div>
     <LoremIpsum avgSentencesPerParagraph={3}/>
     </div>
     <div className="precautionBox">
       <div><img className="washimage" src={img.distance}></img> </div>
     <LoremIpsum avgSentencesPerParagraph={3}/>
     </div>
     <div className="precautionBox">
       <div><img className="washimage" src={img.home}></img> </div>
     <LoremIpsum avgSentencesPerParagraph={3}/>
     </div>
     <div className="precautionBox">
       <div><img className="washimage" src={img.hospital}></img> </div>
     <LoremIpsum avgSentencesPerParagraph={3}/>
     </div>
     </div>
      </div>
    );
  }
  
  export default Precautions;