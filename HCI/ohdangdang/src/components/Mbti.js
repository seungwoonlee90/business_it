import React, { useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

function Mbti(props) {
  let { id } = useParams();
  let [qId, qIdEdit] = useState(1);
  let history = useHistory();
  return (
    <div className="mbti">
      <header>
        오댕댕 MBTI
        <div>
          나와 어울리는 강아지는 <br /> 어떤 강아지일까 ?
        </div>
      </header>
      <div className="question">
        <Link to={`/mbti/${qId}`}></Link>
        <div>
          Q{props.props[id].id}
          {props.props[id].question}
        </div>
        <form>
          <button
            onClick={(e) => {
              e.preventDefault();
              qIdEdit(qId + 1);
              history.push(`/mbti/${qId}`);
            }}
          >
            그렇다
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              qIdEdit(qId + 1);
              history.push(`/mbti/${qId}`);
            }}
          >
            아니다
          </button>
        </form>
      </div>
    </div>
  );
}

export default Mbti;
