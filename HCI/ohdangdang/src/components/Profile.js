import React from "react";
import initFirebase from "../fbBase";
import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import "firebase/compat/firestore";


initFirebase()
function Profile() {
  let user = firebase.auth().currentUser.email
  let uid = firebase.auth().currentUser.uid
  firebase.firestore()
    .collection("user")
    .doc(uid)
    .get()
    .then((res) => {
      let username = res.data().userInfo.name;
      document.querySelector(".profile-username").innerText = username;
    });

  const Logout = async (e) => {
    e.preventDefault();
    await firebase.auth().signOut();
    window.location.hash = "/";
  };

  const Upload = (e) => {
    e.preventDefault();
    window.location.hash = "/upload";
  };

  return (
    <div className="Profile">
      <img className="thumb" alt="thumbnail" />
      <div className="profile-inner">
        <div className="profile-username"></div>
        <div className="profile-email">{user}</div>
        <button onClick={Upload} className="Upload">
          Upload
        </button>
        <button onClick={Logout} className="signIn">
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Profile;
