import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Profile from './components/Profile'
import Landing from './components/Landing';

function App() {
  return (
  <div className="App">
    <Navigation />
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
    </Switch>
  </div>
  )
}

export default App;