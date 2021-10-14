import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Profile from './components/Profile'
import SignUp from './components/SignUp';
import About from './components/About';

function App() {
  const [ isLoggedIn, setIsLoggedIn] = useState(true);
  return(
    <>
    {
      isLoggedIn ?
      (
        <div id="App">
          <Navigation />
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </div>
      )
      : (
        <p>log in</p>
      )
    }
    </>
    )
    
}

export default App;
