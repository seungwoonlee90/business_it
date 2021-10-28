import React from "react";
import firebase_ from "../fbBase";

function Signup() {
  let LogIn = async (e) => {
    e.preventDefault();
    let username = document.querySelectorAll(".signin-inner")[0].value;
    let mbti = document.querySelectorAll(".signin-inner")[1].value;
    let email = document.querySelectorAll(".signin-inner")[2].value;
    let password = document.querySelectorAll(".signin-inner")[3].value;
    await firebase_.auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        let userInfo = {
          name: username,
          email: email,
          mbti: mbti,
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
          className="signin-inner"
          type="text"
          placeholder="👀&nbsp; username"
          required
        />
        <input
          className="signin-inner"
          type="text"
          placeholder="🌈&nbsp; mbti"
          style={{ textTransform: "uppercase" }}
          required
        />
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
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
