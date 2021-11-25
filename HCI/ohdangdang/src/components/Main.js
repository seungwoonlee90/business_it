import React from "react";
import initFirebase from "../fbBase"
import firebase from "firebase/compat/app"
import main from '../main.png'

initFirebase()

function Main() {
  return (
    <>
      <div className="mainForm">
        <div className="text-area">
          <img src={main} alt="main" width="15%" />
          <div>
          <h1>OH! DangDang</h1>
          {firebase.auth().currentUser? 
            <div className="desc">
              {firebase.auth().currentUser.email}
            </div>
          : ""}
          </div>
        </div>

        <ul className="list">
          <li className="item">
            <div>사용자 정보</div>
            <div></div>
            <div>오늘도 해피가 간식달라는 눈빛을 발사한다... +_+!</div>
          </li>
          <li className="item">
            <div>사용자 정보</div>
            <div></div>
            <div>오늘도 해피가 간식달라는 눈빛을 발사한다... +_+!</div>
          </li>
          <li className="item">
            <div>사용자 정보</div>
            <div></div>
            <div>오늘도 해피가 간식달라는 눈빛을 발사한다... +_+!</div>
          </li>
          <li className="item">
            <div>사용자 정보</div>
            <div></div>
            <div>오늘도 해피가 간식달라는 눈빛을 발사한다... +_+!</div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Main;
