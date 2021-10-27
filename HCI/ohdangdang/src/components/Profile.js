import React from "react";
import firebase_ from "../fbBase";

function Profile() {
  let user = firebase_.auth.currentUser.email;
  let uid = firebase_.auth.currentUser.uid;
  firebase_.db
    .collection("user")
    .doc(uid)
    .get()
    .then((res) => {
      let username = res.data().userInfo.name;
      document.querySelector(".profile-username").innerText = username;
    });

  const Logout = async (e) => {
    e.preventDefault();
    await firebase_.auth.signOut();
    window.location.hash = "/";
  };

  const Upload = (e) => {
    e.preventDefault();
    window.location.hash = "/upload";
  };

  return (
    <div className="Profile">
      <img className="thumb" alt="profile" />
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
