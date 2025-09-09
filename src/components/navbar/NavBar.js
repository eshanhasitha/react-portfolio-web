import React, { useState } from "react";
import "./NavBar.css";

const user = {
  name: "Eshan Hasitha",
  imagePath: require("../../assets/logo.png"),
  imageSize: 100,
};

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar" id="navbar">
      <div className="nav-logo">
        <a href="#profile">
          <img
            src={user.imagePath}
            alt={"Photo of " + user.name}
            style={{
              width: user.imageSize,
              height: user.imageSize,
              borderRadius: "50%",
              margin: "0",
              position: "relative",
            }}
          />
        </a>
      </div>


      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <div className={isOpen ? "bar rotate1" : "bar"}></div>
        <div className={isOpen ? "bar fade" : "bar"}></div>
        <div className={isOpen ? "bar rotate2" : "bar"}></div>
      </div>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li className="nav-li-co">
          <a className="nav-link" href="#navbar">Home<hr /></a>
        </li>
        <li className="nav-li-co">
          <a className="nav-link" href="#about">About<hr /></a>
        </li>
        <li className="nav-li-co">
          <a className="nav-link" href="#projects">Projects<hr /></a>
        </li>
        <li className="nav-li-co">
          <a className="nav-link" href="#resume">Resume<hr /></a>
        </li>
        <li className="nav-li-co">
          <a className="nav-link" href="#contact">Contact<hr /></a>
        </li>
      </ul>

      <div className="nav-github">
        <a href="https://github.com/eshanhasitha" className="github-link" target="_blank" rel="noreferrer">
          <img src="https://skillicons.dev/icons?i=github" alt="github-logo" />
        </a>
        <a href="https://github.com/eshanhasitha" className="github-link" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default NavBar;
