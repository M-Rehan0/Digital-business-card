import React from "react";

function Info() {
  return (
    <div className="info">
      <p id="info-title-1">About Me</p>
      <p>
        Second year Software Engineer student 💻 Always learning new things ✨
        Project based experience in Fullstack programming 🤓 Let's get coding!
        🚀
      </p>
      <br />
      <p id="info-title-2">Interests</p>
      <div id="interest-list">
        <ul>
          <li>Reader</li>
          <li>Tech fanatic</li>
        </ul>
        <ul>
          <li>Business enthusiast</li>
          <li>Wanderlust</li>
        </ul>
      </div>
    </div>
  );
}

export default Info;