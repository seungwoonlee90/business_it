import React from "react";
import firebase from 'firebase/compat/app'
import profile from "../img/oww.png";
import "firebase/compat/auth"
import "firebase/compat/firestore";

function Profile() {
  let user = firebase.auth().currentUser.email
  let uid = firebase.auth().currentUser.uid
  firebase.firestore()
    .collection("user")
    .doc(uid)
    .get()
    .then((res) => {
      let username = res.data().userInfo.name;
      let dogname = res.data().userInfo.dogname;
      let dogdate = new Date(new Date() - new Date(res.data().userInfo.dongdate)).getDay();
      console.log(res.data().userInfo.dogdate)
      document.querySelector(".profile-username").innerText = username;
      document.querySelector(".profile-dogname").innerText = dogname;
      document.querySelector(".profile-dogdate").innerText = dogdate;
    });

  const Logout = async (e) => {
    e.preventDefault();
    await firebase.auth().signOut();
    window.location.hash = "/";
  };

  return (
    <div className="Profile">
      <img className="thumb" alt="thumbnail" src={profile} />
      <div className="profile-inner">
        <div className="profile-username"></div>
        <div className="profile-email">{user}</div>
        <div className="profile-family">
          <div>
            <p className="profile-dogname" style={{"display":"inline", "color":"black", "fontSize":"20px"}}></p>
            <p style={{"display":"inline", "fontSize":"20px"}}>&nbsp;를 만난지 &nbsp;</p>
            <p className="profile-dogdate" style={{"display":"inline", "color":"black", "fontSize":"20px"}}></p>
            <p style={{"display":"inline", "fontSize":"20px"}}>&nbsp;일째</p>
          </div>
        </div>
        <button onClick={Logout} className="logout">
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Profile;
