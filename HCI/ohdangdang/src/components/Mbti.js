import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

function Mbti(props) {
  let { id } = useParams();
  let [qId, qIdEdit] = useState(id);
  let history = useHistory();

  function handleClick(e) {
    e.preventDefault();
    if (qId < 3) {
      qIdEdit(parseInt(qId) + 1);
      history.push(`/mbti/${qId}`);
    } else {
      qIdEdit(0);
      history.push(`/mbti/${qId}`);
    }
  }

  return (
    <div className="mbti">
      <header>
        오댕댕 MBTI
        <div>
          나와 어울리는 강아지는 <br /> 어떤 강아지일까 ?
        </div>
      </header>
      {parseInt(qId) === 0 ? (
        <div className="question">설문시작!</div>
      ) : (
        <div className="question">
          <div>
            Q{props.props[id].id}
            {props.props[id].question}
          </div>
          <form>
            <button onClick={handleClick}>그렇다</button>
            <button onClick={handleClick}>아니다</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Mbti;
