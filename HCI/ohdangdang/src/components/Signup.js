import React from "react";
import firebase_ from "../fbBase";

function Signup() {
  let LogIn = async (e) => {
    e.preventDefault();
    let username = document.querySelector(".username").value;
    let email = document.querySelector(".email").value;
    let password = document.querySelector(".password").value;
    await firebase_.auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        let userInfo = {
          name: username,
          email: email,
        };
        firebase_.db.collection("user").doc(result.user.uid).set({ userInfo });
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
    <div className="signInForm">
      <h4>Sign Up</h4>
      <form>
        <input
          className="username"
          type="text"
          placeholder="👀&nbsp; username"
          required
        />
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
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
