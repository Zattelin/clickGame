import React from "react";
import "./Navbar.css";

// creates navbar
const Navbar = props => (
  <nav>
    <ul>
      <li className="brand animated jello">
        <a href="/click-game/">{props.title}</a>
      </li>
      <li id="cur-sco">Current Score: {props.score}</li>
      <li id="top-sco">High Score: {props.topScore}</li>
      <li id="rw">{props.rightWrong}</li>
    </ul>
  </nav>
);

export default Navbar;