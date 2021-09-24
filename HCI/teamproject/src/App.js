import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import SignIn from './components/Signin'

function App() {
  return (
  <div className="App">
    <Navigation />
    <Switch>
      <Route exact path="/">
        <div>
          <h1>Hi</h1>
        </div>
        <footer>&copy; {new Date().getFullYear()} ohdangdang</footer>
      </Route>
      <Route exact path="/signin">
        <SignIn />
      </Route>
    </Switch>
  </div>
  )
}

export default App;