import React from 'react';
import main from '../img/rainbow.png';

function Mbti() {
  return (
    <div className="mbti">
      <img src={main} alt="main" width="45%"/>
      <div>123,456명이 인정한<br />우리 댕댕이를 위한<br />MBTI TEST</div>
      <div><button onClick={(e)=>{window.location.hash = "/mbti_info";}}>Get Started</button></div>
    </div>
  )
}

export default Mbti;