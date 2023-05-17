import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextContainer from './Components/TextContainer';

function App() {
  const[mode, setMode] = useState("dark");
  const toggleMode = () =>{
    if(mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  }

  return (
   <>
    <Navbar ownerName="Mahesh"  mode ={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
      <TextContainer  mode ={mode}/>
    </div>
   </>
  );
}

export default App;
