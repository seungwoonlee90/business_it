import React from "react";
import main from "../img/main.png"
import initFirebase from "../fbBase";
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore";
import "firebase/compat/storage";


initFirebase()
function Upload() {
  try {
    let uid = firebase.auth().currentUser.uid
    firebase.firestore()
    .collection("user")
    .doc(uid)
    .get()
    .then((res) => {
      let name = res.data().userInfo.name;
      document.querySelector(".name").innerText = name;
    });
  } catch {
    window.location.hash="/signup"
  }
  function upload() {
    let imgFile = document.querySelector("#image").files[0];
    let storage = firebase.storage();
    let storageRef = storage.ref();
    let savePath = storageRef.child('img/' + imgFile.name);
    let saveImg = savePath.put(imgFile)
    saveImg.on( 'state_changed', 
          null,
          (error) => {
            console.error('실패사유는', error);
          }, 
          () => {
            saveImg.snapshot.ref.getDownloadURL().then((url) => {
              let item = {
                title : document.querySelector("#title").value,
                desc : document.querySelector("#content").value,
                date : new Date(),
                img : url,
                name : document.querySelector(".name").innerText
              }
              firebase.firestore().collection('product').add(item).then(()=>{
                window.location.hash ="/";
              }).catch((err) => {
                alert(err)
              })
            });
          }
      );
  }

  return (
    <div className="upload">
      <img src={main} alt="main" width="40%" style={{"marginLeft":"30%"}} />
      <h4>오늘의 댕댕이 자랑하기!</h4>
      <div className="name"></div>
      <input type="text" id="title" className="info" placeholder="title" />
      <input type="text" id="content" className="info content" placeholder="content" />
      <input type="file" id="image" className="info img" />
      <button id="send" onClick={upload}>올리기</button>
    </div>
  );
}

export default Upload;
