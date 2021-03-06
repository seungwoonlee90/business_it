import React from 'react';
import main from '../img/persona.png';

function Mbti() {
  return (
    <div className="mbti">
      <img src={main} alt="main" width="82%"/>
      <div><p style={{"textDecoration" : "underline", "display":"inline", "color":"black", "fontSize":"35px"}}>123,456</p>&nbsp; 명이 인정한<br />우리 댕댕이를 위한<br />MBTI TEST</div>
      <div><button onClick={(e)=>{window.location.hash = "/mbti_info";}}>Get Started</button></div>
    </div>
  )
}

export default Mbti;