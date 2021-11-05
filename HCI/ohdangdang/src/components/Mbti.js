import React from "react";

function Mbti() {
  return (
    <div className="mbti">
      <header>
        오댕댕 MBTI
        <div>
          나와 어울리는 강아지는 <br /> 어떤 강아지일까 ?
        </div>
      </header>
      <div className="question">
        <div>Q1.나는 큰 강아지가 좋다</div>
        <form>
          <button>그렇다</button>
          <button>아니다</button>
        </form>
      </div>
    </div>
  );
}

export default Mbti;
