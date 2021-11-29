import React from "react";
import { useLocation } from "react-router";
import firebase from "firebase/compat/app"
import "firebase/compat/auth"

function Signup() {

  let location = useLocation();
  let result = location.state.res;
  console.log(result);

  let LogIn = async (e) => {
    e.preventDefault();
    let username = document.querySelectorAll(".signup-inner")[0].value;
    let email = document.querySelectorAll(".signup-inner")[1].value;
    let password = document.querySelectorAll(".signup-inner")[2].value;
    let dogname = document.querySelectorAll(".signup-inner")[3].value;
    let dogdate = document.querySelectorAll(".signup-inner")[4].value;
    let mbti = document.querySelectorAll(".signup-inner")[5].value;
    
    await firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        let userInfo = {
          name: username,
          email: email,
          dogname: dogname,
          dongdate: dogdate,
          mbti: mbti,
        };
        firebase.firestore().collection("user").doc(result.user.uid).set({ userInfo });
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
    <div className="signUpForm">
      <h4>Sign Up</h4>
      <form className="signUp">
        <p>유저 정보 (필수사항)</p>
        <input
          className="signup-inner"
          type="text"
          placeholder="👀&nbsp; username"
          required
        />
        <input
          className="signup-inner"
          type="email"
          placeholder="💌&nbsp; email"
          required
        />
        <input
          className="signup-inner"
          type="password"
          placeholder="🔑&nbsp; password"
          required
        />
        <input
          className="signup-inner"
          type="text"
          placeholder="👀&nbsp; 반려동물의 이름은 ?"
          required
        />
        <input
          className="signup-inner"
          type="date"
          placeholder="👀&nbsp; 반려동물을 처음 만난날은 ?"
          required
        />
        <input
          className="signup-inner"
          type="text"
          value={result}
          placeholder={result}
          style={{ textTransform: "uppercase" }}
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
