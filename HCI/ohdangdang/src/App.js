import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import auth from './fbBase';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Profile from './components/Profile'
import SignUp from './components/SignUp';

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
