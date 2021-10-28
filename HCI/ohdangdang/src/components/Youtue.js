import React from "react";
import YouTube from "react-youtube";

function youtube() {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div>
      <YouTube videoId="2g811Eo7K8U" opts={opts} />;
    </div>
  );
}
export default youtube;
