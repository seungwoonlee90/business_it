import React, {useState} from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Profile from './components/ProfileMain';
import SignUp from './components/SignUp';
import Upload from './components/Upload';

function App() {
  let [init, initEdit] = useState(true);
  console.log(initEdit);

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
        </div>
      :
        "Loading..."
    }
    </>
  );
}

export default App;
