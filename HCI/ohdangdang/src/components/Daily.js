import React from "react";
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore";
import "firebase/compat/storage";
import icon_1 from "../img/lovely.png"

function daily() {
  try {
    let uid = firebase.auth().currentUser.uid
    firebase.firestore()
    .collection("user")
    .doc(uid)
    .get()
    .then((res) => {
      let name = res.data().userInfo.name;
      let dogname = res.data().userInfo.dogname;
      document.querySelector(".name").innerText = name;
      document.querySelector(".dogname").innerText = dogname;
    });
  } catch {
    window.location.hash="/signin"
  }
  return(
    <div className="daily-main">
      <div className="title"><p className="name" style={{"display":"inline", "color":"black"}}></p>님&nbsp;<p style={{"fontSize":"30px", "color":"black", "display":"inline"}}><p className="dogname" style={{"display":"inline", "color":"black"}}></p></p>&nbsp;의<br /> 오늘 하루는 어땠나요 ?</div>
      <div className="icon">
        <img src={icon_1} alt="icon_1" width="40%" />
      </div>
      <div className="daily-button">
        <button onClick={(e)=>{
            e.preventDefault();
            window.location.hash="/upload";
          }}>기록하기</button>
        <button onClick={(e)=>{
            e.preventDefault();
            alert('개발중입니다!, 조금만 기다려주세요...')
          }}>사진찍기</button>
      </div>
    </div>
  )
}

export default daily;