import React from 'react';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore";
import "firebase/compat/storage";

function Calander() {
  // try {
  //   let uid = firebase.auth().currentUser.uid
  //   firebase.firestore()
  //   .collection("user")
  //   .doc(uid)
  //   .get()
  //   .then((res) => {
  //     let name = res.data().userInfo.name;
  //     document.querySelector(".name").innerText = name;
  //   });
  // } catch {
  //   window.location.hash="/signin"
  // }

  return (
    <div>Calander</div>
  )
}

export default Calander