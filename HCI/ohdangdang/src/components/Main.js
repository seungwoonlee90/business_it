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
          <img src={main} alt="main" width="20%" />
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
            
          </li>
          <li className="item">
           
          </li>
          <li className="item">
            
          </li>
          <li className="item">
            
          </li>
        </ul>
      </div>
    </>
  );
}

export default Main;
