import React from "react";
import "./style.css";

function Header(props) {
  return  <div>
      <h1 className="header-title col-12">Puppy Click Game!</h1>
      <h5>Click a puppy to start. But don't click any puppy more than once!</h5>
  <p>Score: {props.score} High Score: {props.highScore}</p>
  </div>
}

export default Header;
