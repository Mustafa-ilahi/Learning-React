import logo from './logo.svg';
import './App.css';
import CustomButton from './components/CustomButton';
import Dashboard from './view/Dashboard';
import AboutUs from './view/AboutUs';
import Home from './view/Home';
import { useState } from 'react';
function App() {
  const [screen,setScreen] = useState('Home');

  const changeScreen = (currentScreen) =>{
    setScreen(currentScreen);
  }
  return (
    <div className="App">
      <CustomButton title="Dashboard" changeScreen={changeScreen}/>
      <br />
      <CustomButton title="Home" changeScreen={changeScreen}/>
      <br />      
      <CustomButton title="About Us" changeScreen={changeScreen}/>
      <br />
      {screen === 'Home' && <Home />}
      {screen === 'Dashboard' && <Dashboard />}
      {screen === 'About Us' && <AboutUs />}
    </div>
  );
}

export default App;
