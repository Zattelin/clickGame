import React from "react";
import "./Card.css";

// creates the cards that will hold the images
const Card = props => (
  <div 
    className="card" 
    value={props.id} 
    onClick={() => props.handleClick(props.id)} >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Card;