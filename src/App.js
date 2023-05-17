import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextContainer from './Components/TextContainer';
import Alert from './Components/Alert';

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
    <Navbar ownerName="Mahesh"  mode ={mode} toggleMode={toggleMode}/>
    <Alert alert ={alert} />
    <div className="container my-3">
      <TextContainer  mode ={mode} showAlert = {showAlert}/>
    </div>
   </>
  );
}

export default App;
