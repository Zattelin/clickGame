import React from "react";
import "./Title.css";

// display for game objectives
const Title = props => <h1 className="title brand animated pulse">{props.children}</h1>;

export default Title;