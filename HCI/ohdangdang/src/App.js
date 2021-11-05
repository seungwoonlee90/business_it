import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./components/Main.css";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import SignIn from "./components/SignIn";
import SignUp from "./components/Signup";
import Upload from "./components/Upload";
import About from "./components/About";
import Mbti from "./components/Mbti";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
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
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/mbti/:id">
            <Mbti />
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
