import React from "react";

function Intro() {
  return (
    <div>
      <img id="pic" src="http://surl.li/hdaof" alt="Muhammad Rehan Chaudhary" />
      <div className="intro">
        <p className="name">Muhammad Rehan Chaudhary</p>
        <p>Software Developer</p>
        <p>Student at University of Calgary</p>
      </div>

      <div className="buttons">
        <a
          href="mailto:muhammadrhn71@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <button id="email-btn">Email</button>
        </a>
        <a href="#">
          <button id="resume-btn">Resume</button>
        </a>
      </div>
    </div>
  );
}

export default Intro;