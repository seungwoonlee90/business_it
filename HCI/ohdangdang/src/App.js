import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./components/Main.css";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import SignIn from "./components/SignIn";
import About from "./components/About";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  console.log(setIsLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        <div id="App">
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Navigation />
        </div>
      ) : (
        <p>log in</p>
      )}
    </>
  );
}

export default App;
