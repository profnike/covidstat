import About from './Pages/About/About'
import Checker from './Pages/Checker/Checker'
import Home from './Pages/Home/Home'
import Signup from './Pages/Signup/Signup'
import Precautions from './Pages/Precaution/Precautions'

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
