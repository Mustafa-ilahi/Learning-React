import logo from './logo.svg';
import './App.css';
import SubmitAd from './components/SubmitAd'
import ShowAdd from './components/SubmitAd/Screen';
import { useState } from 'react';

function App() {
  const [submitAdStatus,setSubmitAdStatus] = useState(false);
  return (
    <div className="App">
        <h1>Olx App</h1>
        {/* <ShowAdd /> */}
        { 
        submitAdStatus ?  <SubmitAd />
        :
        <>
        <button onClick={()=> setSubmitAdStatus(true)}>+ Submit ad</button> 
        <ShowAdd />
        </>
      }
        
    </div>
  );
}

export default App;
