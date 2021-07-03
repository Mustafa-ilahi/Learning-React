import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { login, signUp } from './config/firebase'
import Dashboad from './components/Dashboard';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [errorMessage, setErrorMessage] = useState();
  const [fullName,setFullName] = useState();

  const signIn = async () =>{
    try{
      const user = await login(email,password);
      alert("logged in successfully")
      setUserLoggedIn(true)
    }catch(e) {
      setErrorMessage(e.message)
      alert('error', e.message)
    }

  }

  return (
    <div className="App">
      <header className="App-header">
        {
          !userLoggedIn ?
          <>
          <input placeholder="Enter Email" onChange={(e)=> {setEmail(e.target.value)}}/>
          <input placeholder="Enter Password" onChange={(e)=> {setPassword(e.target.value)}}/>
          <input placeholder="Enter Fullname" onChange={(e)=> {setFullName(e.target.value)}}/>

          <button onClick={()=> signUp(email,password,fullName)}>Sign Up</button>
          <button onClick={signIn}>Sign In</button>
          </>
          :
          <Dashboad />
        }
      </header>
    </div>
  );
}

export default App;
