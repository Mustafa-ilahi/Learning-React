import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { login, signUp } from './config/firebase'
import Dashboad from './components/Dashboard';
import loader from './loader.gif';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [errorMessage, setErrorMessage] = useState();
  const [fullName,setFullName] = useState();
  const [img, setImg] = useState();

  const signIn = async () =>{
    try{
      setImg(true);
      const user = await login(email,password);
      alert("logged in successfully")
      setUserLoggedIn(true)
      setImg(false)
    }catch(e) {
      setImg(false)
      setErrorMessage(e.message)
      // alert('error', e.message)
    }

  }

  return (
    <div className="App">
      <header className="App-header">
        {
          !userLoggedIn ?
          <>
          
          <h2>User Registration Form</h2>
          <input placeholder="Enter Email" onChange={(e)=> {setEmail(e.target.value)}}/>
          <input placeholder="Enter Password" onChange={(e)=> {setPassword(e.target.value)}}/>
          <input placeholder="Enter Fullname" onChange={(e)=> {setFullName(e.target.value)}}/>
          
          <button onClick={()=> signUp(email,password,fullName)}>Sign Up</button>
          <button onClick={signIn}>Sign In</button>
          <p style={{color:"red"}}>{errorMessage}</p>
          </>
          :
          <Dashboad />
        }
        {
          img && <img src={loader}/> 
        }
      </header>
    </div>
  );
}

export default App;
