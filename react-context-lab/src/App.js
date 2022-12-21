import './App.css';

import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'

import { useState } from 'react'
import { UserContext } from './UserContext';
//it's userContext this time because of the filename


function App() {

const [userInfo, setUserInfo] = useState({
  username: '',
  lastLogIn: ''
})

  return (
    <div className="App">
    
    <UserContext.Provider value={{userInfo, setUserInfo}}>
      <Header/>
      <Home/>
    </UserContext.Provider>

    </div>
  );
}

export default App;
