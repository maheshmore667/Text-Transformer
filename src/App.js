import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextContainer from './Components/TextContainer';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState("dark");
  const[alert, setAlertState] = useState(null);
  const toggleMode = () =>{
    if(mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  }

  const showAlert = (message, type) =>{
    setAlertState({
      msg : message,
      type : type
    });

    setTimeout(()=>{
      setAlertState(null);
    }, 2500);
  }

  return (
    <>
    <Router>
    <Navbar ownerName="Mahesh"  mode ={mode} toggleMode={toggleMode}/>
    <Alert alert ={alert} />
   
    <Switch>
      <div className="container my-3">
      <Route exact path="/">
      <TextContainer  mode ={mode} showAlert = {showAlert}/>
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      </div>
    </Switch>
   
   </Router>
    </>
 
  );
}

export default App;
