import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Profile from './components/Profile';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
    </div>
  );
}

export default App;
