import React from "react";
import auth from "../fbBase";

function Signup() {
  let LogIn = async (e) => {
    e.preventDefault();
    let email = document.querySelector(".email").value;
    let password = document.querySelector(".password").value;
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then()
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
    <div className="signInForm">
      <h4>Sign Up</h4>
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
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
