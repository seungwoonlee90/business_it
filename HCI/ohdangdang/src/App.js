import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./components/Main.css";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Detail from "./components/Detail";
import SignIn from "./components/SignIn";
import SignUp from "./components/Signup";
import Upload from "./components/Upload";
import Daily from "./components/Daily";
import Ai from "./components/Ai";
import Calander from "./components/Calander";
import About from "./components/About";
import Mbti from "./components/Mbti";
import MbtiInfo from "./components/Mbti_info";
import MbtiQuestion from "./components/Mbti_questions";
import Result from "./components/Result";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  console.log(setIsLoggedIn)
  return (
    <>
      {isLoggedIn ? (
        <div id="App">
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/detail">
            <Detail />
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
          <Route path="/daily">
            <Daily />
          </Route>
          <Route path="/ai">
            <Ai />
          </Route>
          <Route path="/calander">
            <Calander />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/mbti">
            <Mbti />
          </Route>
          <Route path="/mbti_info">
            <MbtiInfo />
          </Route>
          <Route path="/mbti_question">
            <MbtiQuestion />
          </Route>
          <Route path="/result">
            <Result />
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
