import logo from './logo.svg';
import './App.css';
import SubmitAd from './components/SubmitAd'
import { useState } from 'react';

function App() {
  const [submitAdStatus,setSubmitAdStatus] = useState(true);
  return (
    <div className="App">
        <h1>Olx App</h1>
        { 
        !submitAdStatus ?
        <button onClick={()=> setSubmitAdStatus(true)}>+ Submit ad</button>   
        :
        <SubmitAd />  
        }
    </div>
  );
}

export default App;
