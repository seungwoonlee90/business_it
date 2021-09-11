import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import SignIn from './components/Signin'
import Home from './routes/Home';


function App() {
  return <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home}/>
    <Route path="/signin" component={SignIn}/>
  </HashRouter>
}

export default App;