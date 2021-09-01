import '../Style/Signup.css'
import react, {useState,useEffect}  from "react"
import { useHistory } from 'react-router-dom';

function Signup() {
  const[names, setNames]=useState("")
  const[email, setEmail]=useState("")
  const[existstyle, setExiststyle]=useState({display:"none"})
  const[complete, setComplete]=useState({display:"none"})

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
    if((names==="")||(email==="")){
      console.log("incomplete information")
    }
    else{

  
      const same = coviduser.filter(el=> el.username === names);
      if (same.length===0) {
        coviduser = [...coviduser, {"username": names, "email": email}]
          localStorage.setItem('coviduser', JSON.stringify(coviduser));
          localStorage.setItem('userloggedin', names);
          setNames(' ');
          setEmail('');
          
          afterSignup();
          
      } 
      else{setExiststyle({display:"inline"})}

  
}
  
}



    return (
      <div className="Signup">
        <div className="existdiv" style={existstyle}>
          <p>Account already exists!</p>
          <p className="okaydiv" onClick={(e)=>{ setExiststyle({display:"none"}) }}>Ok</p>
        </div>
        <div className="completediv" style={complete}>
          <p>Account created successfully.</p>
         
        </div>
      <div className="signup-body">
      
          <h3>Signup</h3>
          <p>To get  updates on Covid-19 information</p>
        <input type="text" placeholder="Name:" onChange={(e)=>{ setNames(e.target.value); }}/>
        <input type="email" name="email" placeholder="Email:" onChange={(e)=>{ setEmail(e.target.value); }}/>
        <button className="signup-butn" onClick={(e)=>{ signingup(); }}>Sign Up</button>
      </div>
       
      </div>
    );
  }
  
  export default Signup;