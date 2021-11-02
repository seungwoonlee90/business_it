import React from "react";
import YouTube from "react-youtube";

function Main() {
  const opts = {
    playerVars: {
      autoplay: 0,
      playsinline: 1,
      origin: "https://seungwoonlee90.github.io/business_it/",
    },
  };
  return (
    <>
      <div className="mainForm">
        <div className="text-area">
          <h1>OH! DangDang</h1>
          <div className="desc">
            We'll make a mobile app <br />
            using react and firebase.
          </div>
        </div>

        <ul className="list">
          <li className="item">
            <YouTube className="youtube" videoId="kqEpePJmv4I" opts={opts} />;
          </li>
          <li className="item">
            <YouTube className="youtube" videoId="wGMwDY8lCaM" opts={opts} />;
          </li>
          <li className="item">
            <YouTube className="youtube" videoId="E541z2r1Oyg" opts={opts} />;
          </li>
          <li className="item">
            <YouTube className="youtube" videoId="2g811Eo7K8U" opts={opts} />;
          </li>
        </ul>
      </div>
    </>
  );
}

export default Main;
