import React from 'react';
import initFirebase from "../fbBase"
import firebase from "firebase/compat/app"
import { useLocation } from 'react-router-dom';

initFirebase()

function Detail() {
  let location = useLocation();
  let id = location.search.split("=")[1]

  firebase.firestore()
    .collection("product")
    .doc(id)
    .get()
    .then((res) => {
      let title = res.data().title
      let img = res.data().img
      let desc = res.data().desc
      let name = res.data().name
      let time = res.data().date.toDate().toDateString()
      document.querySelector("#title").innerText = title;
      document.querySelector("#desc").innerText = desc;
      document.querySelector("#name").innerText = name;
      document.querySelector("#time").innerText = time;
      document.querySelector("#detail-img").src = img;
    });

  return(
    <div className="detail">
      <img id="detail-img" alt="detail" width="100%" />
      <div className="detail-info">
        <div className="detail-sub">
          <div id="title" className="title"></div>
          <div className="user-info">
            <div id="time" className="time"></div>
            <p>,&nbsp;</p>        
            <div id="name" className="name"></div>        
          </div>
          <div></div>        
          <div id="desc" className="desc"></div>        
        </div>
      </div>
    </div>
  )
}

export default Detail