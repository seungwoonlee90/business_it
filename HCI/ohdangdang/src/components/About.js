import React from "react";

function About() {
  return (
    <div className="mainForm">
      <div className="text-area">
        <h1>
          <div className="volume">ver 0.5</div>
          <div className="title">
            @HCI 2조 <br /> Team Project
          </div>
        </h1>
        <p>
          We'll make a platform <br /> for our pet friends.
          <br />
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default About;
