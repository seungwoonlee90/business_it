import React from "react";
import { Link } from "react-router-dom";
import firebase_ from "../fbBase";
import Profile from "./Profile";

function SignIn() {
  let user = firebase_.auth.currentUser;

  let LogIn = async (e) => {
    e.preventDefault();
    let email = document.querySelectorAll(".signin-inner")[0].value;
    let password = document.querySelectorAll(".signin-inner")[1].value;
    await firebase_.auth
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
    firebase_.auth.onAuthStateChanged(function (user) {
      window.location.hash = "/";
    });
  };

  return (
    <>
      {user ? (
        <Profile />
      ) : (
        <div className="signInForm">
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
          <p className="signUp">
            You are new?
            <Link to="/signup">&nbsp; Create new ✨</Link>
          </p>
        </div>
      )}
    </>
  );
}

export default SignIn;
