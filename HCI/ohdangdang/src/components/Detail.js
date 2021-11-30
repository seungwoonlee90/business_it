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
      let who = res.data().who
      let when = res.data().when
      let where = res.data().where
      let what = res.data().what
      let emotion = res.data().emotion
      let time = res.data().date.toDate().toDateString()
      document.querySelector("#title").innerText = title;
      document.querySelector("#desc").innerText = desc;
      document.querySelector("#name").innerText = name;
      document.querySelector("#time").innerText = time;
      document.querySelector("#detail-img").src = img;
      document.querySelector("#who").innerText = who;
      document.querySelector("#where").innerText = where;
      document.querySelector("#when").innerText = when;
      document.querySelector("#what").innerText = what;
      document.querySelector("#emotion").innerText = emotion;
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
          <div className="tag">
            <div id="who" className="tag-sub"></div>
            <div id="when" className="tag-sub"></div>
            <div id="where" className="tag-sub"></div>
            <div id="what" className="tag-sub"></div>
            <div id="emotion" className="tag-sub"></div>
          </div>
          <div className="comment">
            <p style={{"color":"dimgray"}}>comment</p>
            <p>ethan : 너무귀여워요! 😍</p>
            <p>HCI : 이정도면 A+ 아닌가요 ? 👀</p>
          </div>      
        </div>
      </div>
    </div>
  )
}

export default Detail