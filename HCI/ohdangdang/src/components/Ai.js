import React from 'react';
import analysis from '../img/analysis.png'
import analysis2 from '../img/analysis2.png'
import rainbow from '../img/rainbow.png'

function Ai() {
  let pageNum = 0;

  function pageChange() {
    let section = document.getElementsByTagName("section");
    let totalNum = section.length;
    if(pageNum < totalNum-1){
      pageNum ++;
    }
    window.scrollTo({
      top: section[pageNum].offsetTop,
      behavior: 'auto',
    })
  }

  return (
    <>
    <section>
      <div className="ai">
        <div>오댕댕 AI 분석</div>
        <div className="load">
          <span className="square"></span>
          <span className="square"></span>
          <span className="square"></span>
          <span className="square"></span>
        </div>
        <img src={analysis} alt="analysis" width="80%" />
        <div>
          <button onClick={(e)=>{
            e.preventDefault();
            pageChange()
          }}>분석하기</button>
        </div>
      </div>
    </section>
    <section>
      <div className="ai">
        <div>
            <img src={rainbow} alt="analysis" width="30%" />
            <div style={{"fontSize" : "20px"}}>해피의 기분은 현재 <p style={{"color":"black", "display":"inline"}}>행복 89%</p></div>
        </div>
        <img src={analysis2} alt="analysis" width="50%" />
        <div>
          <button onClick={(e)=>{
            e.preventDefault();
            pageChange()
          }}>오늘의 캘린더에 추가하기!</button>
          <button onClick={(e)=>{
            e.preventDefault();
            pageChange()
          }}>다른 사진/영상으로 시도하기!</button>
        </div>
      </div>
    </section>
    <section>
      <div className="ai">
        <div>Ai 분석 결과 화면</div>
        <div style={{"fontSize" : "15px"}}>(2/5)</div>
        <div className="question">주인이 없을 때, <br /> 우리 반려동물은 ?</div>
        <div>
          <button onClick={(e)=>{
            e.preventDefault();
            pageChange()
          }}>다시 시도하기!</button>
          <button onClick={(e)=>{
            e.preventDefault();
            pageChange()
          }}>댕댕이의 기분을 공유해주세요</button>
        </div>
      </div>
    </section>
    <section>
      <div className="ai">
        <div>Ai 분석 exit 화면</div>
        <div style={{"fontSize" : "15px"}}>(2/5)</div>
        <div className="question">주인이 없을 때, <br /> 우리 반려동물은 ?</div>
        <div>
          <button onClick={(e)=>{
            e.preventDefault();
            pageChange()
          }}>EXIT</button>
        </div>
      </div>
    </section>
    </>
  )
}

export default Ai