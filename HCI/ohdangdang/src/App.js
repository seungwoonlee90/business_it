import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path="/">
        <Main />
      </Route>
    </div>
  );
}

export default App;
