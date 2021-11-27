import React from "react";
function About() {
  return ( 
      <div className="about">
        <div className="volume">ver 0.8</div>
        <div className="title">
          @HCI 2조 <br /> Team Project
        </div>
        <p>
          We'll make a platform <br />
          for our pet friends.<br />
          <br />
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
  );
}

export default About;
