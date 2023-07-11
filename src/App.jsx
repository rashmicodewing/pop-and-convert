
import 'bootstrap/dist/css/bootstrap.css';
import Welcome from './pages/welcome';
import Navbar from './components/Navbar';
import Screen from './components/Screen';
import Notifications from './pages/Notification';
import { useState } from 'react';

const changeScreen = { 
    notification: Notifications,
    welcome: Welcome
  }

function App() {
  const [currentPage, setCurrentPage] = useState('notification')

  return ( 
    <>
      <Navbar navSwitch={setCurrentPage} /> 
      <Screen 
      screen = {changeScreen[currentPage]} />
    </>

  );
}

export default App;
