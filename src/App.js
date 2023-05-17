import './App.css';
import Navbar from './Components/Navbar';
import TextContainer from './Components/TextContainer';

function App() {
  return (
   <>
    <Navbar ownerName="Mahesh" />
    <div className="container my-3">
      <TextContainer/>
    </div>
   </>
  );
}

export default App;
