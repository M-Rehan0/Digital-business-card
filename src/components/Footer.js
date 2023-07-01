import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="socials">
      <a
        id="github-icon"
        href="https://github.com/M-Rehan0"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub className="github" />
      </a>
      <a
        id="linkedin-icon"
        href="https://www.linkedin.com/in/muhammad-rehan-chaudhary/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className="linkedIn" />
      </a>
    </div>
  );
}

export default Footer;
