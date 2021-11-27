import React from "react";
import firebase from "firebase/compat/app"
import main from '../img/main.png'


function Main() {

  firebase.firestore()
    .collection("product")
    .get()
    .then((res) => {
      res.forEach((doc)=>{
        console.log(doc.data())
        let template = document.createElement("li");
        template.innerHTML = `<div>${doc.data().name}</div><div>${doc.data().date.toDate().toDateString()}</div><img src=${doc.data().img} alt="itemImg" /><div>${doc.data().desc}</div>`;
        template.className = "item"
        template.onclick = function (){window.location.hash=`/detail?id=${doc.id}`};
        document.querySelector(".list").appendChild(template)
      })
    });


  return (
    <>
      <div className="mainForm">
        <div className="text-area">
          <img src={main} alt="main" width="15%" onClick={()=>{window.location.hash="/mbti"}} />
          <div>
          <h1>OH! DangDang</h1>
          {firebase.auth().currentUser? 
            <div className="desc">
              {firebase.auth().currentUser.email}
            </div>
          : ""}
          </div>
          <span className="material-icons filter">filter_alt</span>
        </div>

        <ul className="list">
        </ul>
      </div>
    </>
  );
}

export default Main;
