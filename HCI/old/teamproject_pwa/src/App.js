import React, {useState} from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Profile from './components/ProfileMain';
import SignUp from './components/SignUp';
import Upload from './components/Upload';
import About from './components/About';
import firebase from './Firebase';

function App() {
  let [init, initEdit] = useState(true);
  console.log(initEdit)
  let auth = firebase.auth;
  let user = auth.currentUser;
  console.log(user)

  return (
    <>
    { init
      ? 
        <div className="App">
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
          <Route path="/upload">
            <Upload />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </div>
      :
        "Loading..."
    }
    </>
  );
}

export default App;
