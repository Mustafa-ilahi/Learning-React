import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { signUp,login } from './config/firebase';
import { storeUser } from './store/actions';
import { useDispatch } from 'react-redux'
import Dashboad from './components/Dashboard';

function App() {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [fullName,setFullName] = useState();
  const [userLoggedIn,setUserLoggedIn] = useState(false)
  const dispatch = useDispatch();
  // console.log(email,password)

  const signIn = async() => {
    try{
      const user = await login(email,password)
      dispatch(storeUser(user))
      console.log("user from component***", user)
      setUserLoggedIn(true)
      alert("logged in successfully")
    }
    catch(e){
      alert(e.message)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        { !userLoggedIn ?
          <>
            <h2>User Registration</h2>
            <input placeholder="Enter Fullname" onChange={(e)=>setFullName(e.target.value)}/>
            <input placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
            <input placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={()=>signUp(email,password,fullName)}>SignUp</button>
            <button onClick={signIn}>Log In</button>
          </> 
          :
          <Dashboad />
        }

      </header>
    </div>
  );
}

export default App;
