import React from 'react';
import { useLocation } from "react-router";
import firebase from 'firebase/compat/app'
import "firebase/compat/firestore";

function Result () {
  let location = useLocation();
  let result = location.state.res;

  firebase.firestore()
    .collection("mbti")
    .doc(result)
    .get()
    .then((res) => {
      let count = res.data().count;
      let def = res.data().def;
      let desc = res.data().desc;
      document.querySelector("#def").innerText = def;
      document.querySelector("#count").innerText = count;
      document.querySelector("#desc").innerText = desc;

    });

  return (
    <div className="mbti">
        {/* <img src={main} alt="main" width="40%"/> */}
      <div> {result} </div>
      <div>우리 반려동물은! <br /> <p id="def" style={{"display" : "inline", "color":"black"}}></p> 성향입니다. <br /> 비슷한 성향을 가진 
        <br /> <p id="count" style={{"display" : "inline", "color":"black"}}></p>&nbsp; 마리의 <br /> 강아지가 기다리고 있어요!<br />
        <p id="desc" style={{"display" : "inline"}}></p>
      </div>
      <div>
        <button onClick={()=>{window.location.hash="/signup"}}>비슷한 친구들 만나러 가기!</button>
        <button onClick={()=>{window.location.hash="/mbti"}}>다시하기</button>
      </div>
    </div>
  )
}

export default Result