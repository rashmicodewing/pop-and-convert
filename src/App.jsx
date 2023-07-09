
import 'bootstrap/dist/css/bootstrap.css';
import Welcome from './pages/welcome';
import Navbar from './components/Navbar';
import Screen from './components/Screen';
import Notification from './pages/Notification/Notification';
import { useState } from 'react';

const changeScreen = { 
    notification: Notification,
    welcome: Welcome
  }

function App() {
  const [currentPage, setCurrentPage] = useState('welcome')

  return ( 
    <>
      <Navbar navSwitch={setCurrentPage} /> 
      <Screen 
      screen = {changeScreen[currentPage]} />
    </>

  );
}

export default App;
