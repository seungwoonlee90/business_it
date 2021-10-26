import React from "react";
import { Link } from "react-router-dom";
import auth from "../fbBase";
import Profile from "./Profile";

function SignIn() {
  let user = auth.currentUser;
  if (user !== null) {
    console.log(user.email);
  } else {
    console.log(user);
  }

  let LogIn = async (e) => {
    e.preventDefault();
    let email = document.querySelector(".email").value;
    let password = document.querySelector(".password").value;
    await auth
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
    auth.onAuthStateChanged(function (user) {
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
              className="email"
              type="email"
              placeholder="💌&nbsp; email"
              required
            />
            <input
              className="password"
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
