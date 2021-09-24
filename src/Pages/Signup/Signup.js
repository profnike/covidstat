import '../Signup/Signup.css'
import react, {useState,useEffect}  from "react"
import { useHistory } from 'react-router-dom';

function Signup() {
  const[names, setNames]=useState("")
  const[email, setEmail]=useState("")
  const[existstyle, setExiststyle]=useState({display:"none"})
  const[complete, setComplete]=useState({display:"none"})
  const[incomplete, setIncomplete]=useState({display:"none"})
  const[existtotalstyle,  setExisttotalstyle]=useState({display:"none"})
  const[none,  setNone]=useState({display:"none"})

 

  const history = useHistory();

    const afterSignup = () => {
       
       setComplete({display:"flex"})
       setTimeout(function(){history.push("/")},1000);
    }


    let coviduser = JSON.parse(localStorage.getItem('coviduser'));
  
  function signingup(e){
    //e.preventDefault()

    if(coviduser === null){
      coviduser = [];
  }
  if((names==="")&&(email==="")){
    setNone({display:"inline"})
  }
    else if((names==="")||(email==="")){
      setIncomplete({display:"inline"})
    }
    else{

  
      const same = coviduser.filter(el=> el.username === names);
      const samemail = coviduser.filter(el=> el.email === email);
      if ((samemail.length!=0)&&(same.length!=0)) {
        setExisttotalstyle({display:"inline"})
          
      } 
      else if(same.length!=0){setExiststyle({display:"inline"})}
      else  {
        coviduser = [...coviduser, {"username": names, "email": email}]
          localStorage.setItem('coviduser', JSON.stringify(coviduser));
          localStorage.setItem('userloggedin', names);
          setNames(' ');
          setEmail('');
          
          afterSignup();
          
      } 
      //else{setExiststyle({display:"inline"})}
      //(same.length===0)
      
  
}
  
}



    return (
      <div className="Signup">
        <div className="existdiv" style={existstyle}>
          <p>Username already exists!</p>
          <p className="okaydiv" onClick={(e)=>{ setExiststyle({display:"none"}) }}>Ok</p>
        </div>
        <div className="existdiv" style={existtotalstyle}>
          <p>Account already exists!</p>
          <p className="okaydiv" onClick={(e)=>{ setExisttotalstyle({display:"none"}) }}>Ok</p>
        </div>
        <div className="completediv" style={complete}>
          <p>Account created successfully.</p>
         
        </div>
        <div className="completediv" style={incomplete}>
          <p>Incomplete Information.</p>
         
        </div>
        <div className="completediv" style={none}>
          <p>Kindly input your Information.</p>
         
        </div>
      <div className="signup-body">
      
          <h3>Signup</h3>
          <p>To get  updates on Covid-19 information</p>
        <input type="text" placeholder="Username:" onChange={(e)=>{ setNames(e.target.value);setIncomplete({display:"none"});setNone({display:"none"}) }}/>
        <input type="email" name="email" placeholder="Email:" onChange={(e)=>{ setEmail(e.target.value);setIncomplete({display:"none"});setNone({display:"none"})}}/>
        <button className="signup-butn" onClick={(e)=>{ signingup(); }}>Sign Up</button>
      </div>
       
      </div>
    );
  }
  
  export default Signup;