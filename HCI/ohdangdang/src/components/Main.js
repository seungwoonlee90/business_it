import React from "react";

function Main() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position.coords.longitude, position.coords.latitude);
    });
  }

  return (
    <>
      <div className="text-area">
        <h1>OH! DangDang</h1>
        <div className="desc">
          We'll make a mobile app <br />
          using react and firebase.
        </div>
      </div>

      <ul className="list">
        <li className="item"></li>
        <li className="item"></li>
        <li className="item"></li>
        <li className="item"></li>
        <li className="item"></li>
        <li className="item"></li>
      </ul>
    </>
  );
}

export default Main;
