import React from 'react';
import main from '../img/rainbow.png';

function Mbti() {
  return (
    <div className="mbti">
      <img src={main} alt="main" width="45%"/>
      <input
        type="text"
        placeholder="🐶&nbsp; 반려동물의 이름을 입력해 주세요"
        required
      />
      <input
        type="number"
        placeholder="🐶&nbsp; 반려동물의 나이를 입력해 주세요"
        required
      />
      <div><button>Get Started</button></div>
    </div>
  )
}

export default Mbti;