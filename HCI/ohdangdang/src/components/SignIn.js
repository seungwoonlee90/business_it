import React from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import Profile from "./Profile";
import dog from "../img/fire.png";

function SignIn() {
  let user = firebase.auth().currentUser;
  let LogIn = async (e) => {
    e.preventDefault();
    let email = document.querySelectorAll(".signin-inner")[0].value;
    let password = document.querySelectorAll(".signin-inner")[1].value;
    await firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("email", user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        alert(errorMessage);
      });
      firebase.auth().onAuthStateChanged(function (user) {
      window.location.hash = "/";
    });
  };

  return (
    <>
      {user ? (
        <Profile />
      ) : (
        <div className="signInForm">
          <img src={dog} alt="fire-dog" width="25%" onClick={()=>{window.location.hash="/about"}}/>
          <h4>Log In</h4>
          <form>
            <input
              className="signin-inner"
              type="email"
              placeholder="💌&nbsp; email"
              required
            />
            <input
              className="signin-inner"
              type="password"
              placeholder="🔑&nbsp; password"
              required
            />
            <button onClick={LogIn} className="signIn">
              Sign In
            </button>
          </form>
          <p>
            You are new?
            <Link to="/mbti" style={{"color":"red"}}>&nbsp; Create new ✨</Link><br />
          </p>
        </div>
      )}
    </>
  );
}

export default SignIn;
