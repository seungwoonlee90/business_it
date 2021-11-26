import React from 'react';
import main from '../img/rainbow.png';
import sad from '../img/sad.png'
import twe from '../img/twe.png'
import fire from '../img/fire.png'
import bing from '../img/bing.png'

function Question() {
  let pageNum = 0;
  let section = document.getElementsByTagName("section");
  let totalNum = section.length;
  

  function back(e) {
    e.preventDefault();
    if(pageNum > 0){
      pageNum --;
    }
    window.scrollTo({
      top: section[pageNum].offsetTop,
      behavior: 'smooth',
    })
  }

  function next(e) {
    e.preventDefault()
    if(pageNum < totalNum-1){
      pageNum ++;
    }
    window.scrollTo({
      top: section[pageNum].offsetTop,
      behavior: 'smooth',
    })
  }

  return (
    <>
    <section>
      <div className="mbti">
        <div className="back"><span className="material-icons" onClick={()=>{window.location.hash = "/mbti_info";}}>arrow_back</span></div>
        <img src={main} alt="main" width="35%"/>
        <div>Question 01</div>
        <div className="question">산책을 하다 처음 보는 <br /> 사람(동물)을 발견했다. <br />우리 반려동물은</div>
        <div>
          <button onClick={next}>도망가거나 뒤로 숨는다</button>
          <button onClick={next}>꼬리를 흔들며 다가간다</button>
          <button onClick={next}>경계를 하며 상대를 향해 짖는다</button>
        </div>
      </div>
    </section>
    <section>
      <div className="mbti">
        <div className="back"><span className="material-icons" onClick={back}>arrow_back</span></div>
        <img src={fire} alt="main" width="35%"/>
        <div>Question 02</div>
        <div className="question">주인이 없을 때, 우리 반려동물은</div>
        <div>
          <button onClick={next}>현관문을 바라보며 주인을 기다린다</button>
          <button onClick={next}>혼자 잘 놀거나 티비를 본다</button>
          <button onClick={next}>쿨쿨 잘 잔다</button>
        </div>
      </div>
    </section>
    <section>
      <div className="mbti">
        <div className="back"><span className="material-icons" onClick={back}>arrow_back</span></div>
        <img src={twe} alt="main" width="35%"/>
        <div>Question 03</div>
        <div className="question">식사시간! 사료를 주면, 우리 반려동물은</div>
        <div>
          <button onClick={next}>주위를 경계하며 먹는다</button>
          <button onClick={next}>주인이 만져도 모를정도로 집중해 먹는다</button>
          <button onClick={next}>한번 먹고 뛰어놀다 다시와서 한번 먹는다</button>
        </div>
      </div>
    </section>
    <section>
      <div className="mbti">
        <div className="back"><span className="material-icons" onClick={back}>arrow_back</span></div>
        <img src={sad} alt="main" width="35%"/>
        <div>Question 04</div>
        <div className="question">내가 울면, 우리 반려동물은</div>
        <div>
          <button onClick={next}>가까이 다가와 옆에 앉아있는다</button>
          <button onClick={next}>꼬리를 흔들며 재롱을 부린다</button>
          <button onClick={next}>관심이 없다</button>
        </div>
      </div>
    </section>
    <section>
      <div className="mbti">
        <div className="back"><span className="material-icons" onClick={back}>arrow_back</span></div>
        <img src={bing} alt="main" width="35%"/>
        <div>Question 05</div>
        <div className="question">우리 반려동물은 자율배식을 하고 있다.</div>
        <div>
          <button onClick={next}>그렇다</button>
          <button onClick={next}>아니다</button>
          <button onClick={next}>때에 따라 다르다</button>
        </div>
      </div>
    </section>
    </>
  )
}

export default Question;