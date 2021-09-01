import About from './Components/About'
import Checker from './Components/Checker'
import Home from './Components/Home'
import Signup from './Components/Signup'
import Precautions from './Components/Precautions'
import { Route,Switch} from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
    <Switch>
    
      <Route exact path="/" ><Home/></Route>
     <Route exact path="/About" ><About/></Route>
      <Route exact path="/Checker" ><Checker/></Route> 
      <Route exact path="/Precautions" ><Precautions/></Route> 
      <Route exact path="/Signup" ><Signup/></Route> 
      
      
      
      </Switch>
     
    </div>
  );
}

export default App;
